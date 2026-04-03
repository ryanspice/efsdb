<?php
declare(strict_types=1);

require_once __DIR__ . '/../core/src/Crypto.php';
require_once __DIR__ . '/../core/src/Config.php';

Config::assertRepoPhpIniLoaded('conformance/run.php');

$fixturesDir = __DIR__ . '/../../../spec/fixtures';
$configFile = $fixturesDir . '/expected.json';

if (!is_file($configFile)) {
    fwrite(STDERR, "Error: Fixtures not found. Run generate.php first.\n");
    exit(1);
}

$config = json_decode((string)file_get_contents($configFile), true, 512, JSON_THROW_ON_ERROR);
$masterKey32 = Crypto::keyFromB64((string)$config['test_master_key_b64']);

function deriveKey(string $masterKey, string $type, int $id): string
{
    return Crypto::kdf($masterKey, str_pad($type, 8, "\0"), $id);
}

$errors = 0;

echo "Running EFSDB Conformance Checks...\n";

$validBlobManifest = (string)file_get_contents($fixturesDir . '/' . $config['blob']['file']);
$blobManifestAad = (string)$config['blob']['manifest_aad'];

echo "[Test] Negative: Tampered Ciphertext... ";
$tamperedBlob = $validBlobManifest;
$lastIndex = strlen($tamperedBlob) - 1;
$tamperedBlob[$lastIndex] = chr(ord($tamperedBlob[$lastIndex]) ^ 1);
try {
    Crypto::aeadDecrypt($tamperedBlob, deriveKey($masterKey32, 'manifest', 2), $blobManifestAad);
    echo "FAIL (Should have thrown)\n";
    $errors++;
} catch (Throwable) {
    echo "PASS (Caught)\n";
}

echo "[Test] Negative: Wrong AAD... ";
try {
    Crypto::aeadDecrypt($validBlobManifest, deriveKey($masterKey32, 'manifest', 2), 'manifest:wrong-storage-id');
    echo "FAIL (Should have thrown)\n";
    $errors++;
} catch (Throwable) {
    echo "PASS (Caught)\n";
}

echo "[Test] Negative: Wrong Key Context... ";
try {
    Crypto::aeadDecrypt($validBlobManifest, deriveKey($masterKey32, 'chunk', 3), $blobManifestAad);
    echo "FAIL (Should have thrown)\n";
    $errors++;
} catch (Throwable) {
    echo "PASS (Caught)\n";
}

echo "[Test] Blob Manifest Decryption... ";
try {
    $plain = Crypto::aeadDecrypt($validBlobManifest, deriveKey($masterKey32, 'manifest', 2), $blobManifestAad);
    $data = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);

    if (
        ($data['storageId'] ?? null) === $config['blob']['storage_id']
        && ($data['bucketId'] ?? null) === $config['blob']['bucket_id']
        && ($data['mime'] ?? null) === $config['blob']['mime']
        && (($data['chunks'][0]['hash'] ?? null) === $config['blob']['chunk_hash'])
    ) {
        echo "PASS\n";
    } else {
        echo "FAIL (Content Mismatch)\n";
        $errors++;
    }
} catch (Throwable $e) {
    echo "FAIL (" . $e->getMessage() . ")\n";
    $errors++;
}

echo "[Test] Blob Chunk Decryption... ";
try {
    $chunkCiphertext = (string)file_get_contents($fixturesDir . '/' . $config['blob']['chunk_file']);
    $plain = Crypto::aeadDecrypt(
        $chunkCiphertext,
        deriveKey($masterKey32, 'chunk', 3),
        (string)$config['blob']['chunk_aad']
    );

    if ($plain === $config['blob']['plaintext_content']) {
        echo "PASS\n";
    } else {
        echo "FAIL (Content Mismatch)\n";
        $errors++;
    }
} catch (Throwable $e) {
    echo "FAIL (" . $e->getMessage() . ")\n";
    $errors++;
}

echo "[Test] Doc Manifest Decryption... ";
try {
    $docCiphertext = (string)file_get_contents($fixturesDir . '/' . $config['doc']['file']);
    $plain = Crypto::aeadDecrypt(
        $docCiphertext,
        deriveKey($masterKey32, 'manifest', 2),
        (string)$config['doc']['manifest_aad']
    );
    $data = json_decode($plain, true, 512, JSON_THROW_ON_ERROR);

    if (
        ($data['storageId'] ?? null) !== $config['doc']['storage_id']
        || ($data['bucketId'] ?? null) !== $config['doc']['bucket_id']
        || (($data['chunks'][0]['hash'] ?? null) !== $config['doc']['chunk_hash'])
    ) {
        echo "FAIL (Manifest Mismatch)\n";
        $errors++;
    } else {
        $docChunkCiphertext = (string)file_get_contents($fixturesDir . '/' . $config['doc']['chunk_file']);
        $docPlain = Crypto::aeadDecrypt(
            $docChunkCiphertext,
            deriveKey($masterKey32, 'chunk', 3),
            (string)$config['doc']['chunk_aad']
        );
        $reconstructed = json_decode($docPlain, true, 512, JSON_THROW_ON_ERROR);

        if ($reconstructed === $config['doc']['data']) {
            echo "PASS (Reconstructed)\n";
        } else {
            echo "FAIL (Reconstruction Mismatch)\n";
            $errors++;
        }
    }
} catch (Throwable $e) {
    echo "FAIL (" . $e->getMessage() . ")\n";
    $errors++;
}

echo "[Test] Index Segment Read... ";
try {
    $indexCiphertext = (string)file_get_contents($fixturesDir . '/' . $config['index']['file']);
    $indexPlain = Crypto::aeadDecrypt(
        $indexCiphertext,
        deriveKey($masterKey32, 'index', 4),
        (string)$config['index']['aad']
    );
    $data = json_decode($indexPlain, true, 512, JSON_THROW_ON_ERROR);

    if ($data === $config['index']['content']) {
        echo "PASS (Decrypted & Verified)\n";
    } else {
        echo "FAIL (Content Mismatch)\n";
        $errors++;
    }
} catch (Throwable $e) {
    echo "FAIL (" . $e->getMessage() . ")\n";
    $errors++;
}

echo "\nSummary: " . ($errors === 0 ? 'All Tests Passed' : "$errors Failures") . "\n";
exit($errors);
