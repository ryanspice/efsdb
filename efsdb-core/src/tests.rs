#[cfg(test)]
mod tests {
    use base64::{engine::general_purpose::STANDARD, Engine as _};
    use chacha20poly1305::{
        aead::{AeadInPlace, KeyInit},
        ChaCha20Poly1305, Key, Nonce,
    };
    use crate::{
        inspect_envelope, prepare_chacha20_poly1305_layout, verify_envelope,
        verify_envelope_reader_with_key_resolver,
        verify_envelope_with_key_resolver, CanonicalResult, ProtectionSuite,
        VerificationKeyRequest, VerificationKeyResolution, CHACHA20_POLY1305_FIXTURE_KEY,
    };
    use std::fs;
    use std::io::Cursor;
    use std::path::Path;

    fn build_chacha_envelope_with_key_id(key_id: Option<&[u8]>, key: [u8; 32]) -> Vec<u8> {
        let mut header = vec![
            b'E', b'F', b'S', 0x00,
            0x10, 0x00,
            0x01,
            0x00,
            0x02,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        ];

        if let Some(key_id) = key_id {
            let key_id_length = u16::try_from(key_id.len()).expect("key id must fit u16");
            header[4] = 0x18;
            header[7] = 0x01;
            header.extend_from_slice(&[0x01]);
            header.extend_from_slice(&key_id_length.to_le_bytes());
            header.extend_from_slice(key_id);
        }

        let nonce = [0xBB; 12];
        let mut plaintext = b"resolver-fixture".to_vec();
        let payload_length = (nonce.len() + plaintext.len()) as u64;
        let payload_length_bytes = payload_length.to_le_bytes();
        let mut aad = header.clone();
        aad.extend_from_slice(&payload_length_bytes);

        let cipher = ChaCha20Poly1305::new(Key::from_slice(&key));
        let tag = cipher
            .encrypt_in_place_detached(Nonce::from_slice(&nonce), &aad, &mut plaintext)
            .expect("fixture encryption should succeed");

        let mut envelope = aad;
        envelope.extend_from_slice(&nonce);
        envelope.extend_from_slice(&plaintext);
        envelope.extend_from_slice(tag.as_slice());
        envelope
    }

    fn fixture_key_resolver(
        request: VerificationKeyRequest<'_>,
    ) -> VerificationKeyResolution {
        if request.suite == ProtectionSuite::ChaCha20Poly1305Ietf && request.key_id.is_none() {
            return VerificationKeyResolution::Found(CHACHA20_POLY1305_FIXTURE_KEY);
        }
        VerificationKeyResolution::NotFound
    }

    fn verify_envelope_fixture_mode(bytes: &[u8]) -> CanonicalResult {
        verify_envelope_with_key_resolver(bytes, Some(&fixture_key_resolver))
    }

    fn verify_envelope_reader_fixture_mode(reader: &mut Cursor<Vec<u8>>) -> CanonicalResult {
        verify_envelope_reader_with_key_resolver(reader, Some(&fixture_key_resolver))
    }

    #[test]
    fn test_fixture_parity() {
        let json_path = Path::new("../tests/fixtures/expected_results.json");
        let json_data = fs::read_to_string(json_path).expect("Failed to read expected_results.json");
        
        let expected_results: std::collections::HashMap<String, serde_json::Value> = 
            serde_json::from_str(&json_data).expect("Failed to parse expected_results.json");

        let mut all_passed = true;

        for (filename, expected_json) in expected_results {
            let fixture_path = Path::new("../tests/fixtures").join(&filename);
            let bytes = fs::read(&fixture_path).unwrap_or_else(|_| panic!("Failed to read fixture: {}", filename));

            let rust_result = verify_envelope_fixture_mode(&bytes);
            let rust_json = serde_json::to_value(&rust_result).expect("Failed to serialize Rust result");

            if rust_json != expected_json {
                println!("Mismatch in {}:", filename);
                println!("  Expected (Canonical): {}", expected_json);
                println!("  Actual (Rust):  {}", rust_json);
                all_passed = false;
            } else {
                println!("PASS: {}", filename);
            }
        }

        assert!(all_passed, "Rust parser did not achieve exact parity with the canonical JSON baseline.");
    }

    #[test]
    fn inspect_serializes_advisory_extensions_as_base64() {
        let bytes = [
            b'E', b'F', b'S', 0x00,
            0x18, 0x00,
            0x01,
            0x01,
            0x01,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x01, 0x05, 0x00, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
        ];

        let result = inspect_envelope(&bytes);

        match result {
            CanonicalResult::Success(success) => {
                assert_eq!(success.extensions.len(), 1);
                assert_eq!(success.extensions[0].id, 0x01);
                assert!(!success.extensions[0].critical);
                assert_eq!(success.extensions[0].length, 5);
                assert_eq!(success.extensions[0].value, STANDARD.encode([0x2A, 0x2B, 0x2C, 0x2D, 0x2E]));
            }
            other => panic!("expected success, got {:?}", other),
        }
    }

    #[test]
    fn inspect_rejects_unsupported_critical_extensions() {
        let bytes = [
            b'E', b'F', b'S', 0x00,
            0x18, 0x00,
            0x01,
            0x03,
            0x01,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x81, 0x05, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05,
            0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00,
        ];

        let result = inspect_envelope(&bytes);

        assert_eq!(
            result,
            CanonicalResult::Error(crate::EnvelopeError {
                ok: false,
                error: "ERR_UNSUPPORTED_CRITICAL_EXTENSION".to_string(),
            })
        );
    }

    #[test]
    fn prepare_chacha20_poly1305_layout_preserves_h_plus_8_plus_n_plus_c() {
        let bytes = [
            b'E', b'F', b'S', 0x00,
            0x10, 0x00,
            0x01,
            0x00,
            0x02,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB,
            0x10, 0x11, 0x12, 0x13,
            0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC,
            0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC,
        ];

        let layout = prepare_chacha20_poly1305_layout(&bytes).expect("expected valid layout");

        assert_eq!(layout.aad.len(), 24);
        assert_eq!(layout.payload.len(), 16);
        assert_eq!(layout.nonce, &[0xBB; 12]);
        assert_eq!(layout.ciphertext, &[0x10, 0x11, 0x12, 0x13]);
        assert_eq!(layout.tag, &[0xCC; 16]);
    }

    #[test]
    fn verify_chacha20_poly1305_fixture_returns_canonical_success() {
        let bytes = [
            0x45, 0x46, 0x53, 0x00,
            0x10, 0x00,
            0x01,
            0x00,
            0x02,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x23, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB, 0xBB,
            0x18, 0x72, 0x97, 0xAB, 0xA9, 0x22, 0x8B, 0x8F, 0xB7, 0x66, 0x76, 0xAF,
            0x9E, 0x6B, 0x74, 0x91, 0x0E, 0x9F, 0x94, 0x3D, 0x2E, 0x68, 0x07,
            0xCB, 0x96, 0xF6, 0xA2, 0xDE, 0xA3, 0xDD, 0xC7, 0xFC, 0xBF, 0x3A, 0x4F,
            0xA0, 0xA1, 0xDE, 0xDC,
        ];

        let result = verify_envelope_fixture_mode(&bytes);

        assert_eq!(
            result,
            CanonicalResult::Success(crate::InspectSuccess {
                ok: true,
                r#type: 1,
                flags: 0,
                suite: 2,
                header_length: 16,
                payload_length: 35,
                extensions: vec![],
            })
        );
    }

    #[test]
    fn verify_reader_matches_fixture_parity() {
        let json_path = Path::new("../tests/fixtures/expected_results.json");
        let json_data = fs::read_to_string(json_path).expect("Failed to read expected_results.json");
        let expected_results: std::collections::HashMap<String, serde_json::Value> =
            serde_json::from_str(&json_data).expect("Failed to parse expected_results.json");

        let mut all_passed = true;

        for (filename, expected_json) in expected_results {
            let fixture_path = Path::new("../tests/fixtures").join(&filename);
            let bytes = fs::read(&fixture_path).unwrap_or_else(|_| panic!("Failed to read fixture: {}", filename));
            let mut cursor = Cursor::new(bytes);
            let rust_result = verify_envelope_reader_fixture_mode(&mut cursor);
            let rust_json = serde_json::to_value(&rust_result).expect("Failed to serialize Rust result");

            if rust_json != expected_json {
                println!("Reader mismatch in {}:", filename);
                println!("  Expected (Canonical): {}", expected_json);
                println!("  Actual (Rust Reader): {}", rust_json);
                all_passed = false;
            } else {
                println!("PASS READER: {}", filename);
            }
        }

        assert!(all_passed, "Rust streaming verifier did not achieve exact parity with the canonical JSON baseline.");
    }

    #[test]
    fn verify_reader_rejects_trailing_garbage() {
        let mut bytes = vec![
            b'E', b'F', b'S', 0x00,
            0x10, 0x00,
            0x01,
            0x00,
            0x01,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            0xAF, 0x13, 0x49, 0xB9, 0xF5, 0xF9, 0xA1, 0xA6,
            0xA0, 0x40, 0x4D, 0xEA, 0x36, 0xDC, 0xC9, 0x49,
            0x9B, 0xCB, 0x25, 0xC9, 0xAD, 0xC1, 0x12, 0xB7,
            0xCC, 0x9A, 0x93, 0xCA, 0xE4, 0x1F, 0x32, 0x62,
        ];
        bytes.push(0xFF);

        let mut cursor = Cursor::new(bytes);
        let result = verify_envelope_reader_fixture_mode(&mut cursor);

        assert_eq!(
            result,
            CanonicalResult::Error(crate::EnvelopeError {
                ok: false,
                error: "ERR_TRAILING_GARBAGE".to_string(),
            })
        );
    }

    #[test]
    fn verify_with_resolver_succeeds_for_known_key_id() {
        let bytes = build_chacha_envelope_with_key_id(Some(b"known"), CHACHA20_POLY1305_FIXTURE_KEY);
        let resolver = |request: VerificationKeyRequest<'_>| {
            assert_eq!(request.suite, ProtectionSuite::ChaCha20Poly1305Ietf);
            assert_eq!(request.key_id, Some(&b"known"[..]));
            VerificationKeyResolution::Found(CHACHA20_POLY1305_FIXTURE_KEY)
        };

        let result = verify_envelope_with_key_resolver(&bytes, Some(&resolver));

        assert_eq!(
            result,
            CanonicalResult::Success(crate::InspectSuccess {
                ok: true,
                r#type: 1,
                flags: 1,
                suite: 2,
                header_length: 24,
                payload_length: 28,
                extensions: vec![crate::Extension {
                    id: 1,
                    critical: false,
                    length: 5,
                    value: STANDARD.encode(b"known"),
                }],
            })
        );
    }

    #[test]
    fn verify_reader_with_resolver_succeeds_for_known_key_id() {
        let bytes = build_chacha_envelope_with_key_id(Some(b"known"), CHACHA20_POLY1305_FIXTURE_KEY);
        let resolver = |request: VerificationKeyRequest<'_>| {
            assert_eq!(request.key_id, Some(&b"known"[..]));
            VerificationKeyResolution::Found(CHACHA20_POLY1305_FIXTURE_KEY)
        };

        let mut cursor = Cursor::new(bytes);
        let result = verify_envelope_reader_with_key_resolver(&mut cursor, Some(&resolver));

        assert_eq!(
            result,
            CanonicalResult::Success(crate::InspectSuccess {
                ok: true,
                r#type: 1,
                flags: 1,
                suite: 2,
                header_length: 24,
                payload_length: 28,
                extensions: vec![crate::Extension {
                    id: 1,
                    critical: false,
                    length: 5,
                    value: STANDARD.encode(b"known"),
                }],
            })
        );
    }

    #[test]
    fn verify_with_resolver_returns_unknown_key_for_unresolved_key_id() {
        let bytes = build_chacha_envelope_with_key_id(Some(b"known"), CHACHA20_POLY1305_FIXTURE_KEY);
        let resolver = |_request: VerificationKeyRequest<'_>| VerificationKeyResolution::NotFound;

        let result = verify_envelope_with_key_resolver(&bytes, Some(&resolver));

        assert_eq!(
            result,
            CanonicalResult::Error(crate::EnvelopeError {
                ok: false,
                error: "ERR_UNKNOWN_KEY".to_string(),
            })
        );
    }

    #[test]
    fn verify_with_resolver_returns_checksum_mismatch_for_wrong_key() {
        let bytes = build_chacha_envelope_with_key_id(Some(b"known"), CHACHA20_POLY1305_FIXTURE_KEY);
        let resolver = |_request: VerificationKeyRequest<'_>| VerificationKeyResolution::Found([0xAB; 32]);

        let result = verify_envelope_with_key_resolver(&bytes, Some(&resolver));

        assert_eq!(
            result,
            CanonicalResult::Error(crate::EnvelopeError {
                ok: false,
                error: "ERR_CHECKSUM_MISMATCH".to_string(),
            })
        );
    }

    #[test]
    fn verify_with_resolver_returns_missing_runtime_key_without_resolver() {
        let bytes = build_chacha_envelope_with_key_id(Some(b"known"), CHACHA20_POLY1305_FIXTURE_KEY);

        let result = verify_envelope_with_key_resolver(&bytes, None);

        assert_eq!(
            result,
            CanonicalResult::Error(crate::EnvelopeError {
                ok: false,
                error: "ERR_MISSING_RUNTIME_KEY".to_string(),
            })
        );
    }

    #[test]
    fn runtime_verifier_requires_explicit_key_resolution() {
        let bytes = build_chacha_envelope_with_key_id(None, CHACHA20_POLY1305_FIXTURE_KEY);

        assert_eq!(
            verify_envelope(&bytes),
            CanonicalResult::Error(crate::EnvelopeError {
                ok: false,
                error: "ERR_MISSING_RUNTIME_KEY".to_string(),
            })
        );
        assert!(matches!(verify_envelope_fixture_mode(&bytes), CanonicalResult::Success(_)));
        assert_eq!(
            verify_envelope_with_key_resolver(&bytes, None),
            CanonicalResult::Error(crate::EnvelopeError {
                ok: false,
                error: "ERR_MISSING_RUNTIME_KEY".to_string(),
            })
        );
    }
}
