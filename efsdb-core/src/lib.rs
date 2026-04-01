pub mod tests;
use serde::Serialize;
use wasm_bindgen::prelude::*;

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

#[derive(Serialize, Debug, PartialEq)]
pub struct EnvelopeError {
    pub ok: bool,
    pub error: String,
}

impl EnvelopeError {
    fn new(code: &str) -> Self {
        Self {
            ok: false,
            error: code.to_string(),
        }
    }
}

pub fn inspect_envelope(bytes: &[u8]) -> CanonicalResult {
    let len = bytes.len();
    if len < 16 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRUNCATED_HEADER"));
    }

    if &bytes[0..3] != b"EFS" {
        return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_MAGIC"));
    }

    if bytes[3] > 0 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_UNSUPPORTED_VERSION"));
    }

    let mut h_bytes = [0u8; 2];
    h_bytes.copy_from_slice(&bytes[4..6]);
    let header_length = u16::from_le_bytes(h_bytes);

    if header_length < 16 || header_length % 8 != 0 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if len < header_length as usize {
        return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    let r#type = bytes[6];
    let flags = bytes[7];
    let suite = bytes[8];

    let has_extensions = (flags & 0x01) == 0x01;
    let has_critical_ext = (flags & 0x02) == 0x02;

    if has_extensions && header_length > 16 {
        let mut ext_offset = 16;
        while ext_offset < header_length as usize {
            if ext_offset + 3 > header_length as usize {
                return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_HEADER"));
            }
            
            let ext_len_bytes = [bytes[ext_offset + 1], bytes[ext_offset + 2]];
            let ext_len = u16::from_le_bytes(ext_len_bytes) as usize;

            if ext_offset + 3 + ext_len > header_length as usize {
                return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_HEADER"));
            }

            if has_critical_ext {
                return CanonicalResult::Error(EnvelopeError::new("ERR_UNSUPPORTED_CRITICAL_EXTENSION"));
            }

            ext_offset += 3 + ext_len;
        }
    } else if has_extensions && header_length <= 16 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_INVALID_HEADER"));
    }

    if len < (header_length as usize) + 8 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"));
    }

    let mut payload_len_bytes = [0u8; 8];
    payload_len_bytes.copy_from_slice(&bytes[header_length as usize..header_length as usize + 8]);
    let payload_length = u64::from_le_bytes(payload_len_bytes);

    CanonicalResult::Success(InspectSuccess {
        ok: true,
        r#type,
        flags,
        suite,
        header_length,
        payload_length,
        extensions: vec![],
    })
}

pub fn verify_envelope(bytes: &[u8]) -> CanonicalResult {
    let inspect_result = inspect_envelope(bytes);
    let success = match inspect_result {
        CanonicalResult::Success(s) => s,
        err => return err,
    };

    let header_length = success.header_length;
    let payload_length = success.payload_length;
    let suite = success.suite;

    if suite != 1 {
        return CanonicalResult::Error(EnvelopeError::new("ERR_UNSUPPORTED_SUITE"));
    }

    let expected_len = (header_length as usize) + 8 + (payload_length as usize) + 32;
    let len = bytes.len();

    if len < expected_len {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRUNCATED_PAYLOAD"));
    }

    if len > expected_len {
        return CanonicalResult::Error(EnvelopeError::new("ERR_TRAILING_GARBAGE"));
    }

    let header_and_payload = &bytes[0..((header_length as usize) + 8 + (payload_length as usize))];
    let expected_checksum = &bytes[((header_length as usize) + 8 + (payload_length as usize))..expected_len];

    let actual_checksum = blake3::hash(header_and_payload);
    
    if expected_checksum != actual_checksum.as_bytes() {
        return CanonicalResult::Error(EnvelopeError::new("ERR_CHECKSUM_MISMATCH"));
    }

    CanonicalResult::Success(success)
}

#[wasm_bindgen]
pub fn wasm_inspect_envelope(bytes: &[u8]) -> String {
    let result = inspect_envelope(bytes);
    serde_json::to_string(&result).unwrap_or_else(|_| "{\"ok\":false,\"error\":\"ERR_JSON_SERIALIZATION\"}".to_string())
}
