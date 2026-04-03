pub mod tests;

use base64::{engine::general_purpose::STANDARD, Engine as _};
use chacha20::{
    cipher::{KeyIvInit, StreamCipher},
    ChaCha20, Key as ChaCha20Key, Nonce as ChaCha20Nonce,
};
use chacha20poly1305::{
    aead::{AeadInPlace, KeyInit},
    ChaCha20Poly1305, Key, Nonce, Tag,
};
use poly1305::{
    universal_hash::UniversalHash,
    Key as Poly1305Key, Poly1305,
};
use serde::Serialize;
use std::io::{self, Read};
use wasm_bindgen::prelude::*;

const FIXED_HEADER_LENGTH: usize = 16;
const PAYLOAD_LENGTH_BYTES: usize = 8;
const FLAG_HAS_EXTENSIONS: u8 = 0x01;
const FLAG_HAS_CRITICAL_EXTENSIONS: u8 = 0x02;
const SUITE_BLAKE3_PLAIN: u8 = 0x01;
const SUITE_CHACHA20_POLY1305_IETF: u8 = 0x02;
const EXTENSION_KEY_ID: u8 = 0x01;
const BLAKE3_TAG_LENGTH: usize = 32;
const CHACHA20_POLY1305_NONCE_LENGTH: usize = 12;
const CHACHA20_POLY1305_TAG_LENGTH: usize = 16;
#[cfg(test)]
const CHACHA20_POLY1305_FIXTURE_KEY: [u8; 32] = [0xAA; 32];

#[derive(Serialize, Debug, PartialEq)]
#[serde(untagged)]
pub enum CanonicalResult {
    Success(InspectSuccess),
    Error(EnvelopeError),
}

#[derive(Serialize, Debug, PartialEq, Clone)]
pub struct InspectSuccess {
    pub ok: bool,
    pub r#type: u8,
    pub flags: u8,
    pub suite: u8,
    pub header_length: u16,
    pub payload_length: u64,
    pub extensions: Vec<Extension>,
}

#[derive(Serialize, Debug, PartialEq, Clone)]
pub struct Extension {
    pub id: u8,
    pub critical: bool,
    pub length: u16,
    pub value: String,
}

#[derive(Serialize, Debug, PartialEq, Clone)]
pub struct EnvelopeError {
    pub ok: bool,
    pub error: String,
}

#[derive(Debug, PartialEq, Clone, Copy)]
pub enum ProtectionSuite {
    Blake3Plain,
    ChaCha20Poly1305Ietf,
}

#[derive(Debug, PartialEq, Clone, Copy)]
pub struct VerificationKeyRequest<'a> {
    pub suite: ProtectionSuite,
    pub key_id: Option<&'a [u8]>,
}

#[derive(Debug, PartialEq, Clone)]
pub enum VerificationKeyResolution {
    Found([u8; 32]),
    NotFound,
}

pub trait VerificationKeyResolver {
    fn resolve_verification_key(
        &self,
        request: VerificationKeyRequest<'_>,
    ) -> VerificationKeyResolution;
}

impl<F> VerificationKeyResolver for F
where
    F: for<'a> Fn(VerificationKeyRequest<'a>) -> VerificationKeyResolution,
{
    fn resolve_verification_key(
        &self,
        request: VerificationKeyRequest<'_>,
    ) -> VerificationKeyResolution {
        self(request)
    }
}

#[derive(Debug, PartialEq, Clone)]
pub struct ParsedExtensionRef<'a> {
    pub id: u8,
    pub critical: bool,
    pub value: &'a [u8],
}

#[derive(Debug, PartialEq, Clone)]
pub struct ParsedEnvelopeRef<'a> {
    pub r#type: u8,
    pub flags: u8,
    pub suite: u8,
    pub header_length: u16,
    pub payload_length: u64,
    pub aad: &'a [u8],
    pub body: &'a [u8],
    pub extensions: Vec<ParsedExtensionRef<'a>>,
}

#[derive(Debug, PartialEq, Clone)]
pub struct AeadPayloadLayout<'a> {
    pub aad: &'a [u8],
    pub payload: &'a [u8],
    pub nonce: &'a [u8],
    pub ciphertext: &'a [u8],
    pub tag: &'a [u8],
}

impl EnvelopeError {
    fn new(code: &str) -> Self {
        Self {
            ok: false,
            error: code.to_string(),
        }
    }
}

impl ProtectionSuite {
    pub fn from_wire_id(value: u8) -> Option<Self> {
        match value {
            SUITE_BLAKE3_PLAIN => Some(Self::Blake3Plain),
            SUITE_CHACHA20_POLY1305_IETF => Some(Self::ChaCha20Poly1305Ietf),
            _ => None,
        }
    }
}

fn payload_length_as_usize(payload_length: u64) -> Result<usize, EnvelopeError> {
    usize::try_from(payload_length).map_err(|_| EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"))
}

fn is_supported_critical_extension(_id: u8) -> bool {
    false
}

fn parse_extensions<'a>(
    bytes: &'a [u8],
    header_length: u16,
    flags: u8,
) -> Result<Vec<ParsedExtensionRef<'a>>, EnvelopeError> {
    let header_length = header_length as usize;
    let has_extensions = (flags & FLAG_HAS_EXTENSIONS) != 0;
    let has_critical_extensions = (flags & FLAG_HAS_CRITICAL_EXTENSIONS) != 0;

    if has_critical_extensions && !has_extensions {
        return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if has_extensions && header_length <= FIXED_HEADER_LENGTH {
        return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if !has_extensions && header_length != FIXED_HEADER_LENGTH {
        return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if !has_extensions {
        return Ok(vec![]);
    }

    let mut ext_offset = FIXED_HEADER_LENGTH;
    let mut extensions = Vec::new();
    let mut saw_critical = false;
    let mut saw_unsupported_critical = false;

    while ext_offset < header_length {
        if ext_offset + 3 > header_length {
            return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
        }

        let id = bytes[ext_offset];
        let critical = (id & 0x80) != 0;
        let ext_len = u16::from_le_bytes([bytes[ext_offset + 1], bytes[ext_offset + 2]]) as usize;
        let value_start = ext_offset + 3;
        let value_end = value_start + ext_len;

        if value_end > header_length {
            return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
        }

        if critical {
            saw_critical = true;
            if !is_supported_critical_extension(id) {
                saw_unsupported_critical = true;
            }
        }

        extensions.push(ParsedExtensionRef {
            id,
            critical,
            value: &bytes[value_start..value_end],
        });

        ext_offset = value_end;
    }

    if ext_offset != header_length {
        return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if saw_critical != has_critical_extensions {
        return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if saw_unsupported_critical {
        return Err(EnvelopeError::new("ERR_UNSUPPORTED_CRITICAL_EXTENSION"));
    }

    Ok(extensions)
}

pub fn inspect_envelope_layout(bytes: &[u8]) -> Result<ParsedEnvelopeRef<'_>, EnvelopeError> {
    let len = bytes.len();
    if len < FIXED_HEADER_LENGTH {
        return Err(EnvelopeError::new("ERR_TRUNCATED_HEADER"));
    }

    if &bytes[0..3] != b"EFS" {
        return Err(EnvelopeError::new("ERR_INVALID_MAGIC"));
    }

    if bytes[3] > 0 {
        return Err(EnvelopeError::new("ERR_UNSUPPORTED_VERSION"));
    }

    let header_length = u16::from_le_bytes([bytes[4], bytes[5]]);
    let header_length_usize = header_length as usize;

    if header_length_usize < FIXED_HEADER_LENGTH || header_length_usize % 8 != 0 {
        return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if len < header_length_usize {
        return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    let r#type = bytes[6];
    let flags = bytes[7];
    let suite = bytes[8];
    let extensions = parse_extensions(bytes, header_length, flags)?;
    let payload_length_offset = header_length_usize;

    if len < payload_length_offset + PAYLOAD_LENGTH_BYTES {
        return Err(EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"));
    }

    let payload_length = u64::from_le_bytes(
        bytes[payload_length_offset..payload_length_offset + PAYLOAD_LENGTH_BYTES]
            .try_into()
            .unwrap(),
    );
    let body_offset = payload_length_offset + PAYLOAD_LENGTH_BYTES;

    Ok(ParsedEnvelopeRef {
        r#type,
        flags,
        suite,
        header_length,
        payload_length,
        aad: &bytes[..body_offset],
        body: &bytes[body_offset..],
        extensions,
    })
}

pub fn inspect_envelope(bytes: &[u8]) -> CanonicalResult {
    match inspect_envelope_layout(bytes) {
        Ok(parsed) => CanonicalResult::Success(inspect_success_from_parsed(&parsed)),
        Err(error) => CanonicalResult::Error(error),
    }
}

fn inspect_success_from_parsed(parsed: &ParsedEnvelopeRef<'_>) -> InspectSuccess {
    InspectSuccess {
        ok: true,
        r#type: parsed.r#type,
        flags: parsed.flags,
        suite: parsed.suite,
        header_length: parsed.header_length,
        payload_length: parsed.payload_length,
        extensions: parsed
            .extensions
            .iter()
            .map(|extension| Extension {
                id: extension.id,
                critical: extension.critical,
                length: extension.value.len() as u16,
                value: STANDARD.encode(extension.value),
            })
            .collect(),
    }
}

fn prepare_chacha20_poly1305_layout_from_parsed<'a>(
    bytes: &'a [u8],
    parsed: &ParsedEnvelopeRef<'a>,
) -> Result<AeadPayloadLayout<'a>, EnvelopeError> {
    if parsed.suite != SUITE_CHACHA20_POLY1305_IETF {
        return Err(EnvelopeError::new("ERR_UNSUPPORTED_SUITE"));
    }

    let payload_length = payload_length_as_usize(parsed.payload_length)?;
    let expected_len = parsed.aad.len() + payload_length + CHACHA20_POLY1305_TAG_LENGTH;
    let actual_len = bytes.len();

    if actual_len < expected_len {
        return Err(EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"));
    }

    if actual_len > expected_len {
        return Err(EnvelopeError::new("ERR_TRAILING_GARBAGE"));
    }

    if payload_length < CHACHA20_POLY1305_NONCE_LENGTH {
        return Err(EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"));
    }

    let payload_start = parsed.aad.len();
    let payload_end = payload_start + payload_length;
    let nonce_end = payload_start + CHACHA20_POLY1305_NONCE_LENGTH;

    Ok(AeadPayloadLayout {
        aad: parsed.aad,
        payload: &bytes[payload_start..payload_end],
        nonce: &bytes[payload_start..nonce_end],
        ciphertext: &bytes[nonce_end..payload_end],
        tag: &bytes[payload_end..expected_len],
    })
}

pub fn prepare_chacha20_poly1305_layout(bytes: &[u8]) -> Result<AeadPayloadLayout<'_>, EnvelopeError> {
    let parsed = inspect_envelope_layout(bytes)?;
    prepare_chacha20_poly1305_layout_from_parsed(bytes, &parsed)
}

pub fn verify_envelope(bytes: &[u8]) -> CanonicalResult {
    verify_envelope_internal(bytes, None)
}

pub fn verify_envelope_with_key_resolver(
    bytes: &[u8],
    resolver: Option<&dyn VerificationKeyResolver>,
) -> CanonicalResult {
    verify_envelope_internal(bytes, resolver)
}

fn verify_envelope_internal(
    bytes: &[u8],
    resolver: Option<&dyn VerificationKeyResolver>,
) -> CanonicalResult {
    let parsed = match inspect_envelope_layout(bytes) {
        Ok(parsed) => parsed,
        Err(error) => return CanonicalResult::Error(error),
    };

    match ProtectionSuite::from_wire_id(parsed.suite) {
        Some(ProtectionSuite::Blake3Plain) => verify_blake3_plain(bytes, parsed),
        Some(ProtectionSuite::ChaCha20Poly1305Ietf) => verify_chacha20_poly1305(bytes, parsed, resolver),
        None => {
            CanonicalResult::Error(EnvelopeError::new("ERR_UNSUPPORTED_SUITE"))
        }
    }
}

pub fn verify_envelope_reader<R: Read>(reader: &mut R) -> CanonicalResult {
    verify_envelope_reader_internal(reader, None)
}

pub fn verify_envelope_reader_with_key_resolver<R: Read>(
    reader: &mut R,
    resolver: Option<&dyn VerificationKeyResolver>,
) -> CanonicalResult {
    verify_envelope_reader_internal(reader, resolver)
}

fn verify_envelope_reader_internal<R: Read>(
    reader: &mut R,
    resolver: Option<&dyn VerificationKeyResolver>,
) -> CanonicalResult {
    let mut fixed_header = [0u8; FIXED_HEADER_LENGTH];
    if let Err(error) = read_exact_or_error(reader, &mut fixed_header, "ERR_TRUNCATED_HEADER") {
        return CanonicalResult::Error(error);
    }

    if &fixed_header[0..3] != b"EFS" {
        return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_MAGIC"));
    }

    if fixed_header[3] > 0 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_UNSUPPORTED_VERSION"));
    }

    let header_length = u16::from_le_bytes([fixed_header[4], fixed_header[5]]) as usize;
    if header_length < FIXED_HEADER_LENGTH || header_length % 8 != 0 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    let mut header_and_length = Vec::with_capacity(header_length + PAYLOAD_LENGTH_BYTES);
    header_and_length.extend_from_slice(&fixed_header);

    if header_length > FIXED_HEADER_LENGTH {
        let mut extension_bytes = vec![0u8; header_length - FIXED_HEADER_LENGTH];
        if let Err(error) = read_exact_or_error(reader, &mut extension_bytes, "ERR_INVALID_HEADER") {
            return CanonicalResult::Error(error);
        }
        header_and_length.extend_from_slice(&extension_bytes);
    }

    let mut payload_length_bytes = [0u8; PAYLOAD_LENGTH_BYTES];
    if let Err(error) = read_exact_or_error(reader, &mut payload_length_bytes, "ERR_TRUNCATED_PAYLOAD") {
        return CanonicalResult::Error(error);
    }
    header_and_length.extend_from_slice(&payload_length_bytes);

    let parsed = match inspect_envelope_layout(&header_and_length) {
        Ok(parsed) => parsed,
        Err(error) => return CanonicalResult::Error(error),
    };

    match ProtectionSuite::from_wire_id(parsed.suite) {
        Some(ProtectionSuite::Blake3Plain) => verify_blake3_plain_reader(reader, parsed),
        Some(ProtectionSuite::ChaCha20Poly1305Ietf) => {
            verify_chacha20_poly1305_reader(reader, header_and_length, resolver)
        }
        None => CanonicalResult::Error(EnvelopeError::new("ERR_UNSUPPORTED_SUITE")),
    }
}

fn verify_blake3_plain(bytes: &[u8], parsed: ParsedEnvelopeRef<'_>) -> CanonicalResult {
    let payload_length = match payload_length_as_usize(parsed.payload_length) {
        Ok(payload_length) => payload_length,
        Err(error) => return CanonicalResult::Error(error),
    };

    let expected_len = parsed.aad.len() + payload_length + BLAKE3_TAG_LENGTH;
    let actual_len = bytes.len();

    if actual_len < expected_len {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"));
    }

    if actual_len > expected_len {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRAILING_GARBAGE"));
    }

    let header_and_payload = &bytes[..parsed.aad.len() + payload_length];
    let expected_checksum = &bytes[parsed.aad.len() + payload_length..expected_len];
    let actual_checksum = blake3::hash(header_and_payload);

    if expected_checksum != actual_checksum.as_bytes() {
        return CanonicalResult::Error(EnvelopeError::new("ERR_CHECKSUM_MISMATCH"));
    }

    CanonicalResult::Success(inspect_success_from_parsed(&parsed))
}

fn verify_blake3_plain_reader<R: Read>(reader: &mut R, parsed: ParsedEnvelopeRef<'_>) -> CanonicalResult {
    let payload_length = match payload_length_as_usize(parsed.payload_length) {
        Ok(payload_length) => payload_length,
        Err(error) => return CanonicalResult::Error(error),
    };

    let mut hasher = blake3::Hasher::new();
    hasher.update(parsed.aad);

    let mut remaining = payload_length;
    let mut chunk = [0u8; 8192];
    while remaining > 0 {
        let next = remaining.min(chunk.len());
        if let Err(error) = read_exact_or_error(reader, &mut chunk[..next], "ERR_TRUNCATED_PAYLOAD") {
            return CanonicalResult::Error(error);
        }
        hasher.update(&chunk[..next]);
        remaining -= next;
    }

    let mut expected_checksum = [0u8; BLAKE3_TAG_LENGTH];
    if let Err(error) = read_exact_or_error(reader, &mut expected_checksum, "ERR_TRUNCATED_PAYLOAD") {
        return CanonicalResult::Error(error);
    }

    if reader_has_trailing_bytes(reader) {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRAILING_GARBAGE"));
    }

    let actual_checksum = hasher.finalize();
    if expected_checksum != *actual_checksum.as_bytes() {
        return CanonicalResult::Error(EnvelopeError::new("ERR_CHECKSUM_MISMATCH"));
    }

    CanonicalResult::Success(inspect_success_from_parsed(&parsed))
}

fn verify_chacha20_poly1305(
    bytes: &[u8],
    parsed: ParsedEnvelopeRef<'_>,
    resolver: Option<&dyn VerificationKeyResolver>,
) -> CanonicalResult {
    let layout = match prepare_chacha20_poly1305_layout_from_parsed(bytes, &parsed) {
        Ok(layout) => layout,
        Err(error) => return CanonicalResult::Error(error),
    };

    let key = match resolve_chacha20_poly1305_key(&parsed, resolver) {
        Ok(key) => key,
        Err(error) => return CanonicalResult::Error(error),
    };
    let cipher = ChaCha20Poly1305::new(Key::from_slice(&key));
    let mut ciphertext = layout.ciphertext.to_vec();

    if cipher
        .decrypt_in_place_detached(
            Nonce::from_slice(layout.nonce),
            layout.aad,
            &mut ciphertext,
            Tag::from_slice(layout.tag),
        )
        .is_err()
    {
        return CanonicalResult::Error(EnvelopeError::new("ERR_CHECKSUM_MISMATCH"));
    }

    CanonicalResult::Success(inspect_success_from_parsed(&parsed))
}

fn verify_chacha20_poly1305_reader<R: Read>(
    reader: &mut R,
    header_and_length: Vec<u8>,
    resolver: Option<&dyn VerificationKeyResolver>,
) -> CanonicalResult {
    let parsed = match inspect_envelope_layout(&header_and_length) {
        Ok(parsed) => parsed,
        Err(error) => return CanonicalResult::Error(error),
    };
    let payload_length = match payload_length_as_usize(parsed.payload_length) {
        Ok(payload_length) => payload_length,
        Err(error) => return CanonicalResult::Error(error),
    };
    if payload_length < CHACHA20_POLY1305_NONCE_LENGTH {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"));
    }
    let key = match resolve_chacha20_poly1305_key(&parsed, resolver) {
        Ok(key) => key,
        Err(error) => return CanonicalResult::Error(error),
    };
    let mut nonce = [0u8; CHACHA20_POLY1305_NONCE_LENGTH];
    if let Err(error) = read_exact_or_error(reader, &mut nonce, "ERR_TRUNCATED_PAYLOAD") {
        return CanonicalResult::Error(error);
    }
    let ciphertext_length = payload_length - CHACHA20_POLY1305_NONCE_LENGTH;
    let mut authenticator = Poly1305::new(Poly1305Key::from_slice(
        &derive_chacha20_poly1305_poly1305_key(&key, &nonce),
    ));
    authenticator.update_padded(parsed.aad);
    let mut remaining = ciphertext_length;
    let mut chunk = [0u8; 8192];
    while remaining > 0 {
        let next = remaining.min(chunk.len());
        if let Err(error) = read_exact_or_error(reader, &mut chunk[..next], "ERR_TRUNCATED_PAYLOAD") {
            return CanonicalResult::Error(error);
        }
        authenticator.update_padded(&chunk[..next]);
        remaining -= next;
    }
    let mut expected_tag = [0u8; CHACHA20_POLY1305_TAG_LENGTH];
    if let Err(error) = read_exact_or_error(reader, &mut expected_tag, "ERR_TRUNCATED_PAYLOAD") {
        return CanonicalResult::Error(error);
    }
    if reader_has_trailing_bytes(reader) {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRAILING_GARBAGE"));
    }
    let mut lengths = [0u8; 16];
    lengths[..8].copy_from_slice(&(parsed.aad.len() as u64).to_le_bytes());
    lengths[8..].copy_from_slice(&(ciphertext_length as u64).to_le_bytes());
    authenticator.update_padded(&lengths);
    if expected_tag != *authenticator.finalize().as_slice() {
        return CanonicalResult::Error(EnvelopeError::new("ERR_CHECKSUM_MISMATCH"));
    }
    CanonicalResult::Success(inspect_success_from_parsed(&parsed))
}

fn resolve_chacha20_poly1305_key(
    parsed: &ParsedEnvelopeRef<'_>,
    resolver: Option<&dyn VerificationKeyResolver>,
) -> Result<[u8; 32], EnvelopeError> {
    let key_id = extract_key_id_extension_value(parsed)?;
    if let Some(resolver) = resolver {
        return match resolver.resolve_verification_key(VerificationKeyRequest {
            suite: ProtectionSuite::ChaCha20Poly1305Ietf,
            key_id,
        }) {
            VerificationKeyResolution::Found(key) => Ok(key),
            VerificationKeyResolution::NotFound => Err(EnvelopeError::new("ERR_UNKNOWN_KEY")),
        };
    }
    Err(EnvelopeError::new("ERR_MISSING_RUNTIME_KEY"))
}

fn derive_chacha20_poly1305_poly1305_key(key: &[u8; 32], nonce: &[u8; 12]) -> [u8; 32] {
    let mut poly1305_key = [0u8; 32];
    let mut cipher = ChaCha20::new(
        ChaCha20Key::from_slice(key),
        ChaCha20Nonce::from_slice(nonce),
    );
    cipher.apply_keystream(&mut poly1305_key);
    poly1305_key
}

fn extract_key_id_extension_value<'a>(
    parsed: &'a ParsedEnvelopeRef<'a>,
) -> Result<Option<&'a [u8]>, EnvelopeError> {
    let mut key_id = None;
    for extension in &parsed.extensions {
        if extension.id != EXTENSION_KEY_ID {
            continue;
        }

        if extension.value.is_empty() || key_id.is_some() {
            return Err(EnvelopeError::new("ERR_INVALID_HEADER"));
        }

        key_id = Some(extension.value);
    }

    Ok(key_id)
}

fn read_exact_or_error<R: Read>(
    reader: &mut R,
    buffer: &mut [u8],
    error_code: &str,
) -> Result<(), EnvelopeError> {
    reader
        .read_exact(buffer)
        .map_err(|error| match error.kind() {
            io::ErrorKind::UnexpectedEof => EnvelopeError::new(error_code),
            _ => EnvelopeError::new("ERR_IO"),
        })
}

fn reader_has_trailing_bytes<R: Read>(reader: &mut R) -> bool {
    let mut trailing = [0u8; 1];
    match reader.read(&mut trailing) {
        Ok(0) => false,
        Ok(_) => true,
        Err(_) => true,
    }
}

#[wasm_bindgen]
pub fn wasm_inspect_envelope(bytes: &[u8]) -> String {
    let result = inspect_envelope(bytes);
    serde_json::to_string(&result)
        .unwrap_or_else(|_| "{\"ok\":false,\"error\":\"ERR_JSON_SERIALIZATION\"}".to_string())
}
