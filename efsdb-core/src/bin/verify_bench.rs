use std::alloc::{GlobalAlloc, Layout, System};
use std::env;
use std::fs::{self, File};
use std::hint::black_box;
use std::io::Cursor;
use std::mem::{size_of, MaybeUninit};
use std::path::{Path, PathBuf};
use std::process;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::time::{Instant, SystemTime, UNIX_EPOCH};

use chacha20poly1305::{
    aead::{AeadInPlace, KeyInit},
    ChaCha20Poly1305, Key, Nonce,
};
use efsdb_core::{
    verify_envelope, verify_envelope_reader, verify_envelope_reader_with_key_resolver,
    verify_envelope_with_key_resolver, CanonicalResult, ProtectionSuite, VerificationKeyRequest,
    VerificationKeyResolution,
};
use serde::Serialize;
#[cfg(target_os = "windows")]
use windows_sys::Win32::System::ProcessStatus::{GetProcessMemoryInfo, PROCESS_MEMORY_COUNTERS};
#[cfg(target_os = "windows")]
use windows_sys::Win32::System::Threading::GetCurrentProcess;

struct TrackingAllocator;

static CURRENT_ALLOCATED: AtomicUsize = AtomicUsize::new(0);
static PEAK_ALLOCATED: AtomicUsize = AtomicUsize::new(0);

#[global_allocator]
static GLOBAL_ALLOCATOR: TrackingAllocator = TrackingAllocator;

fn update_peak(next: usize) {
    let mut observed = PEAK_ALLOCATED.load(Ordering::SeqCst);
    while next > observed {
        match PEAK_ALLOCATED.compare_exchange_weak(
            observed,
            next,
            Ordering::SeqCst,
            Ordering::SeqCst,
        ) {
            Ok(_) => return,
            Err(actual) => observed = actual,
        }
    }
}

unsafe impl GlobalAlloc for TrackingAllocator {
    unsafe fn alloc(&self, layout: Layout) -> *mut u8 {
        let ptr = unsafe { System.alloc(layout) };
        if !ptr.is_null() {
            let next = CURRENT_ALLOCATED.fetch_add(layout.size(), Ordering::SeqCst) + layout.size();
            update_peak(next);
        }
        ptr
    }

    unsafe fn alloc_zeroed(&self, layout: Layout) -> *mut u8 {
        let ptr = unsafe { System.alloc_zeroed(layout) };
        if !ptr.is_null() {
            let next = CURRENT_ALLOCATED.fetch_add(layout.size(), Ordering::SeqCst) + layout.size();
            update_peak(next);
        }
        ptr
    }

    unsafe fn dealloc(&self, ptr: *mut u8, layout: Layout) {
        CURRENT_ALLOCATED.fetch_sub(layout.size(), Ordering::SeqCst);
        unsafe { System.dealloc(ptr, layout) };
    }

    unsafe fn realloc(&self, ptr: *mut u8, layout: Layout, new_size: usize) -> *mut u8 {
        let new_ptr = unsafe { System.realloc(ptr, layout, new_size) };
        if !new_ptr.is_null() {
            match new_size.cmp(&layout.size()) {
                std::cmp::Ordering::Greater => {
                    let delta = new_size - layout.size();
                    let next = CURRENT_ALLOCATED.fetch_add(delta, Ordering::SeqCst) + delta;
                    update_peak(next);
                }
                std::cmp::Ordering::Less => {
                    CURRENT_ALLOCATED.fetch_sub(layout.size() - new_size, Ordering::SeqCst);
                }
                std::cmp::Ordering::Equal => {}
            }
        }
        new_ptr
    }
}

#[derive(Clone, Copy)]
struct BenchConfig {
    small_warmup: usize,
    small_iterations: usize,
    large_warmup: usize,
    large_iterations: usize,
}

#[derive(Clone, Copy, Debug, Serialize)]
#[serde(rename_all = "snake_case")]
enum VerifyPath {
    InMemory,
    StreamingReader,
    SourceBackedReader,
}

#[derive(Clone, Copy)]
enum DatasetScale {
    Small,
    Large,
}

#[derive(Clone, Copy, Debug, Serialize)]
#[serde(rename_all = "snake_case")]
enum DatasetSuite {
    Blake3Plain,
    ChaCha20Poly1305,
}

#[derive(Clone)]
struct Dataset {
    name: &'static str,
    scale: DatasetScale,
    suite: DatasetSuite,
    payload_bytes: usize,
    envelope_bytes: Vec<u8>,
    source_path: PathBuf,
}

#[derive(Serialize)]
struct BenchmarkOutput {
    config: OutputConfig,
    datasets: Vec<DatasetRun>,
}

#[derive(Serialize)]
struct OutputConfig {
    mode: &'static str,
    small_warmup: usize,
    small_iterations: usize,
    large_warmup: usize,
    large_iterations: usize,
    source_backed_reader_kind: &'static str,
    process_memory_signal: &'static str,
}

#[derive(Serialize)]
struct DatasetRun {
    dataset: &'static str,
    suite: DatasetSuite,
    payload_bytes: usize,
    envelope_bytes: usize,
    in_memory: PathStats,
    streaming_reader: PathStats,
    source_backed_reader: PathStats,
    latency_ratio_stream_over_memory: f64,
    latency_ratio_source_backed_over_memory: f64,
    caller_buffer_saved_bytes: usize,
    source_backed_caller_buffer_saved_bytes: usize,
}

#[derive(Serialize)]
struct PathStats {
    path: VerifyPath,
    iterations: usize,
    warmup_iterations: usize,
    mean_ms: f64,
    min_ms: f64,
    median_ms: f64,
    p95_ms: f64,
    max_ms: f64,
    verifier_peak_heap_bytes: usize,
    caller_buffer_bytes: usize,
    process_peak_working_set_delta_bytes: Option<u64>,
    process_resident_set_delta_bytes: Option<i64>,
}

const KEY_ID: &[u8] = b"known";
const FIXTURE_KEY: [u8; 32] = [0x11; 32];

#[derive(Clone, Copy)]
struct ProcessMemorySnapshot {
    working_set_bytes: u64,
    peak_working_set_bytes: u64,
}

struct BenchmarkSourceDir {
    path: PathBuf,
}

impl Drop for BenchmarkSourceDir {
    fn drop(&mut self) {
        let _ = fs::remove_dir_all(&self.path);
    }
}

fn main() {
    let json = env::args().skip(1).any(|arg| arg == "--json");
    let config = BenchConfig {
        small_warmup: 2_000,
        small_iterations: 10_000,
        large_warmup: 8,
        large_iterations: 24,
    };

    let source_dir = create_benchmark_source_dir();
    let datasets = build_datasets(&source_dir.path);
    let runs = datasets
        .iter()
        .map(|dataset| run_dataset(dataset, config))
        .collect::<Vec<_>>();

    let output = BenchmarkOutput {
        config: OutputConfig {
            mode: "release",
            small_warmup: config.small_warmup,
            small_iterations: config.small_iterations,
            large_warmup: config.large_warmup,
            large_iterations: config.large_iterations,
            source_backed_reader_kind: "file",
            process_memory_signal: process_memory_signal_name(),
        },
        datasets: runs,
    };

    if json {
        println!(
            "{}",
            serde_json::to_string_pretty(&output).expect("benchmark output should serialize")
        );
        return;
    }

    print_human(&output);
}

fn build_datasets(source_root: &Path) -> Vec<Dataset> {
    vec![
        Dataset {
            name: "blake3_small",
            scale: DatasetScale::Small,
            suite: DatasetSuite::Blake3Plain,
            payload_bytes: 13,
            envelope_bytes: build_blake3_envelope(&deterministic_payload(13)),
            source_path: source_root.join("blake3_small.efs"),
        },
        Dataset {
            name: "blake3_large",
            scale: DatasetScale::Large,
            suite: DatasetSuite::Blake3Plain,
            payload_bytes: 8 * 1024 * 1024,
            envelope_bytes: build_blake3_envelope(&deterministic_payload(8 * 1024 * 1024)),
            source_path: source_root.join("blake3_large.efs"),
        },
        Dataset {
            name: "chacha_small",
            scale: DatasetScale::Small,
            suite: DatasetSuite::ChaCha20Poly1305,
            payload_bytes: 16,
            envelope_bytes: build_chacha_envelope(&deterministic_payload(16), KEY_ID, FIXTURE_KEY),
            source_path: source_root.join("chacha_small.efs"),
        },
        Dataset {
            name: "chacha_large",
            scale: DatasetScale::Large,
            suite: DatasetSuite::ChaCha20Poly1305,
            payload_bytes: 8 * 1024 * 1024,
            envelope_bytes: build_chacha_envelope(
                &deterministic_payload(8 * 1024 * 1024),
                KEY_ID,
                FIXTURE_KEY,
            ),
            source_path: source_root.join("chacha_large.efs"),
        },
    ]
    .into_iter()
    .map(write_dataset_source)
    .collect()
}

fn deterministic_payload(len: usize) -> Vec<u8> {
    (0..len)
        .map(|index| ((index.wrapping_mul(31).wrapping_add(17)) % 251) as u8)
        .collect()
}

fn build_blake3_envelope(payload: &[u8]) -> Vec<u8> {
    let mut envelope = vec![
        b'E', b'F', b'S', 0x00, 0x10, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00,
    ];
    envelope.extend_from_slice(&(payload.len() as u64).to_le_bytes());
    envelope.extend_from_slice(payload);
    let checksum = blake3::hash(&envelope);
    envelope.extend_from_slice(checksum.as_bytes());
    envelope
}

fn build_chacha_envelope(payload: &[u8], key_id: &[u8], key: [u8; 32]) -> Vec<u8> {
    let key_id_length = u16::try_from(key_id.len()).expect("key id length should fit");
    let mut header = vec![
        b'E', b'F', b'S', 0x00, 0x18, 0x00, 0x01, 0x01, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00,
    ];
    header.push(0x01);
    header.extend_from_slice(&key_id_length.to_le_bytes());
    header.extend_from_slice(key_id);

    let nonce = [0xBB; 12];
    let payload_length = (nonce.len() + payload.len()) as u64;
    let payload_length_bytes = payload_length.to_le_bytes();

    let mut aad = header;
    aad.extend_from_slice(&payload_length_bytes);

    let mut ciphertext = payload.to_vec();
    let cipher = ChaCha20Poly1305::new(Key::from_slice(&key));
    let tag = cipher
        .encrypt_in_place_detached(Nonce::from_slice(&nonce), &aad, &mut ciphertext)
        .expect("benchmark encryption should succeed");

    let mut envelope = aad;
    envelope.extend_from_slice(&nonce);
    envelope.extend_from_slice(&ciphertext);
    envelope.extend_from_slice(tag.as_slice());
    envelope
}

fn run_dataset(dataset: &Dataset, config: BenchConfig) -> DatasetRun {
    let (warmup_iterations, iterations) = match dataset.scale {
        DatasetScale::Small => (config.small_warmup, config.small_iterations),
        DatasetScale::Large => (config.large_warmup, config.large_iterations),
    };

    let in_memory = run_case(dataset, VerifyPath::InMemory, warmup_iterations, iterations);
    let streaming_reader = run_case(
        dataset,
        VerifyPath::StreamingReader,
        warmup_iterations,
        iterations,
    );
    let source_backed_reader = run_case(
        dataset,
        VerifyPath::SourceBackedReader,
        warmup_iterations,
        iterations,
    );

    DatasetRun {
        dataset: dataset.name,
        suite: dataset.suite,
        payload_bytes: dataset.payload_bytes,
        envelope_bytes: dataset.envelope_bytes.len(),
        latency_ratio_stream_over_memory: streaming_reader.mean_ms / in_memory.mean_ms,
        latency_ratio_source_backed_over_memory: source_backed_reader.mean_ms / in_memory.mean_ms,
        caller_buffer_saved_bytes: in_memory
            .caller_buffer_bytes
            .saturating_sub(streaming_reader.caller_buffer_bytes),
        source_backed_caller_buffer_saved_bytes: in_memory
            .caller_buffer_bytes
            .saturating_sub(source_backed_reader.caller_buffer_bytes),
        in_memory,
        streaming_reader,
        source_backed_reader,
    }
}

fn run_case(
    dataset: &Dataset,
    path: VerifyPath,
    warmup_iterations: usize,
    iterations: usize,
) -> PathStats {
    for _ in 0..warmup_iterations {
        let result = verify_once(dataset, path);
        assert!(matches!(result, CanonicalResult::Success(_)));
        black_box(result);
    }

    let mut durations_ns = Vec::with_capacity(iterations);
    let mut peak_heap_bytes = 0usize;
    let mut peak_working_set_delta_bytes = None::<u64>;
    let mut resident_set_delta_bytes = None::<i64>;

    for _ in 0..iterations {
        let baseline = CURRENT_ALLOCATED.load(Ordering::SeqCst);
        PEAK_ALLOCATED.store(baseline, Ordering::SeqCst);
        let process_before = process_memory_snapshot();

        let started = Instant::now();
        let result = verify_once(dataset, path);
        let elapsed = started.elapsed();
        let peak_delta = PEAK_ALLOCATED
            .load(Ordering::SeqCst)
            .saturating_sub(baseline);
        let process_after = process_memory_snapshot();

        assert!(matches!(result, CanonicalResult::Success(_)));
        black_box(result);

        peak_heap_bytes = peak_heap_bytes.max(peak_delta);
        if let (Some(before), Some(after)) = (process_before, process_after) {
            let peak_delta = after
                .peak_working_set_bytes
                .saturating_sub(before.peak_working_set_bytes);
            let resident_delta = after.working_set_bytes as i64 - before.working_set_bytes as i64;
            peak_working_set_delta_bytes = Some(
                peak_working_set_delta_bytes
                    .map_or(peak_delta, |current| current.max(peak_delta)),
            );
            resident_set_delta_bytes = Some(
                resident_set_delta_bytes
                    .map_or(resident_delta, |current| current.max(resident_delta)),
            );
        }
        durations_ns.push(elapsed.as_nanos());
    }

    durations_ns.sort_unstable();

    PathStats {
        path,
        iterations,
        warmup_iterations,
        mean_ms: nanos_to_ms(
            durations_ns.iter().copied().sum::<u128>() / u128::from(iterations as u64),
        ),
        min_ms: nanos_to_ms(*durations_ns.first().expect("durations should exist")),
        median_ms: percentile_ms(&durations_ns, 0.50),
        p95_ms: percentile_ms(&durations_ns, 0.95),
        max_ms: nanos_to_ms(*durations_ns.last().expect("durations should exist")),
        verifier_peak_heap_bytes: peak_heap_bytes,
        caller_buffer_bytes: match path {
            VerifyPath::InMemory => dataset.envelope_bytes.len(),
            VerifyPath::StreamingReader => 0,
            VerifyPath::SourceBackedReader => 0,
        },
        process_peak_working_set_delta_bytes: peak_working_set_delta_bytes,
        process_resident_set_delta_bytes: resident_set_delta_bytes,
    }
}

fn verify_once(dataset: &Dataset, path: VerifyPath) -> CanonicalResult {
    match (dataset.suite, path) {
        (DatasetSuite::Blake3Plain, VerifyPath::InMemory) => verify_envelope(&dataset.envelope_bytes),
        (DatasetSuite::Blake3Plain, VerifyPath::StreamingReader) => {
            let mut cursor = Cursor::new(dataset.envelope_bytes.as_slice());
            verify_envelope_reader(&mut cursor)
        }
        (DatasetSuite::Blake3Plain, VerifyPath::SourceBackedReader) => {
            let mut file = File::open(&dataset.source_path)
                .expect("source-backed benchmark file should open");
            verify_envelope_reader(&mut file)
        }
        (DatasetSuite::ChaCha20Poly1305, VerifyPath::InMemory) => {
            let resolver = fixture_key_resolver;
            verify_envelope_with_key_resolver(&dataset.envelope_bytes, Some(&resolver))
        }
        (DatasetSuite::ChaCha20Poly1305, VerifyPath::StreamingReader) => {
            let resolver = fixture_key_resolver;
            let mut cursor = Cursor::new(dataset.envelope_bytes.as_slice());
            verify_envelope_reader_with_key_resolver(&mut cursor, Some(&resolver))
        }
        (DatasetSuite::ChaCha20Poly1305, VerifyPath::SourceBackedReader) => {
            let resolver = fixture_key_resolver;
            let mut file = File::open(&dataset.source_path)
                .expect("source-backed benchmark file should open");
            verify_envelope_reader_with_key_resolver(&mut file, Some(&resolver))
        }
    }
}

fn fixture_key_resolver(request: VerificationKeyRequest<'_>) -> VerificationKeyResolution {
    if request.suite == ProtectionSuite::ChaCha20Poly1305Ietf && request.key_id == Some(KEY_ID) {
        VerificationKeyResolution::Found(FIXTURE_KEY)
    } else {
        VerificationKeyResolution::NotFound
    }
}

fn create_benchmark_source_dir() -> BenchmarkSourceDir {
    let timestamp = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("system time should be after unix epoch")
        .as_nanos();
    let path = env::temp_dir().join(format!(
        "efsdb-verify-bench-{}-{}",
        process::id(),
        timestamp
    ));
    fs::create_dir_all(&path).expect("benchmark source directory should be created");
    BenchmarkSourceDir { path }
}

fn write_dataset_source(dataset: Dataset) -> Dataset {
    fs::write(&dataset.source_path, &dataset.envelope_bytes)
        .expect("benchmark dataset source should be written");
    dataset
}

#[cfg(target_os = "windows")]
fn process_memory_snapshot() -> Option<ProcessMemorySnapshot> {
    let mut counters = MaybeUninit::<PROCESS_MEMORY_COUNTERS>::zeroed();
    unsafe {
        (*counters.as_mut_ptr()).cb = size_of::<PROCESS_MEMORY_COUNTERS>() as u32;
        let ok = GetProcessMemoryInfo(
            GetCurrentProcess(),
            counters.as_mut_ptr(),
            size_of::<PROCESS_MEMORY_COUNTERS>() as u32,
        );
        if ok == 0 {
            return None;
        }
        let counters = counters.assume_init();
        Some(ProcessMemorySnapshot {
            working_set_bytes: counters.WorkingSetSize as u64,
            peak_working_set_bytes: counters.PeakWorkingSetSize as u64,
        })
    }
}

#[cfg(not(target_os = "windows"))]
fn process_memory_snapshot() -> Option<ProcessMemorySnapshot> {
    None
}

#[cfg(target_os = "windows")]
fn process_memory_signal_name() -> &'static str {
    "peak_working_set_delta_bytes"
}

#[cfg(not(target_os = "windows"))]
fn process_memory_signal_name() -> &'static str {
    "unavailable"
}

fn percentile_ms(durations_ns: &[u128], percentile: f64) -> f64 {
    let index = ((durations_ns.len().saturating_sub(1)) as f64 * percentile).round() as usize;
    nanos_to_ms(durations_ns[index])
}

fn nanos_to_ms(value: u128) -> f64 {
    value as f64 / 1_000_000.0
}

fn print_human(output: &BenchmarkOutput) {
    println!(
        "verify-bench release small:{} warmup:{} large:{} warmup:{}",
        output.config.small_iterations,
        output.config.small_warmup,
        output.config.large_iterations,
        output.config.large_warmup
    );

    for dataset in &output.datasets {
        println!();
        println!(
            "{} suite={:?} payload={} envelope={}",
            dataset.dataset, dataset.suite, dataset.payload_bytes, dataset.envelope_bytes
        );
        print_case(&dataset.in_memory);
        print_case(&dataset.streaming_reader);
        print_case(&dataset.source_backed_reader);
        println!(
            "  ratio stream/memory mean={:.3}x caller_buffer_saved={}B",
            dataset.latency_ratio_stream_over_memory, dataset.caller_buffer_saved_bytes
        );
        println!(
            "  ratio source/memory mean={:.3}x caller_buffer_saved={}B",
            dataset.latency_ratio_source_backed_over_memory,
            dataset.source_backed_caller_buffer_saved_bytes
        );
    }
}

fn print_case(stats: &PathStats) {
    println!(
        "  {:?}: mean={:.4}ms median={:.4}ms p95={:.4}ms min={:.4}ms max={:.4}ms heap_peak={}B caller_buffer={}B process_peak_ws_delta={}B process_resident_delta={}B",
        stats.path,
        stats.mean_ms,
        stats.median_ms,
        stats.p95_ms,
        stats.min_ms,
        stats.max_ms,
        stats.verifier_peak_heap_bytes,
        stats.caller_buffer_bytes,
        stats.process_peak_working_set_delta_bytes.unwrap_or(0),
        stats.process_resident_set_delta_bytes.unwrap_or(0)
    );
}
