#[cfg(test)]
mod tests {
    use crate::verify_envelope;
    use std::fs;
    use std::path::Path;

    #[test]
    fn test_php_parity() {
        // Read the canonical JSON results generated beside the fixture set
        let json_path = Path::new("../tests/fixtures/expected_results.json");
        let json_data = fs::read_to_string(json_path).expect("Failed to read expected_results.json");
        
        let expected_results: std::collections::HashMap<String, serde_json::Value> = 
            serde_json::from_str(&json_data).expect("Failed to parse expected_results.json");

        let mut all_passed = true;

        for (filename, expected_json) in expected_results {
            let fixture_path = Path::new("../tests/fixtures").join(&filename);
            let bytes = fs::read(&fixture_path).unwrap_or_else(|_| panic!("Failed to read fixture: {}", filename));

            let rust_result = verify_envelope(&bytes);
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
}
