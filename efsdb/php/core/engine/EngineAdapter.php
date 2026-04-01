<?php

namespace EFSDB\Engine;

/**
 * The EngineAdapter interface defines the boundary between the EFSDB runtime
 * and the underlying storage/crypto implementation (Pure PHP, Rust FFI, or future Daemon).
 * 
 * All implementations MUST return the canonical JSON-equivalent array schemas 
 * for parity testing and deterministic fallback behavior.
 */
interface EngineAdapter {
    /**
     * Inspects an envelope header without verifying the payload.
     * Useful for metadata extraction and routing.
     * 
     * @param string $envelopeBytes
     * @return array Canonical Result Schema (e.g. ['ok' => true, 'type' => 1, ...])
     */
    public function inspectEnvelope(string $envelopeBytes): array;

    /**
     * Verifies the envelope's authenticity and integrity.
     * 
     * @param string $envelopeBytes
     * @return array Canonical Result Schema
     */
    public function verifyEnvelope(string $envelopeBytes): array;

    // Future Daemon Method Scaffolding (Track E)
    // public function chunkFile(string $filePath): array;
    // public function packTree(array $manifest): array;
}
