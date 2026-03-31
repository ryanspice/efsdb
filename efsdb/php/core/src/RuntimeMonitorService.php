<?php
declare(strict_types=1);

require_once __DIR__ . '/Config.php';
require_once __DIR__ . '/NodeEnvironmentService.php';
require_once __DIR__ . '/Store.php';

final class RuntimeMonitorService
{
    private const CACHE_TTL_SECONDS = 5;
    private const MAX_SLOW_LOGS = 25;
    private const MAX_DOCROOT_FINDINGS = 60;
    private const MAX_DOCROOT_DEPTH = 2;
    private const HISTORY_RETENTION_HOURS = 24;
    private const HISTORY_BASELINE_INTERVAL_SECONDS = 15;
    private const HISTORY_CHANGE_INTERVAL_SECONDS = 5;
    private const MAX_HISTORY_POINTS = 240;
    private const MAX_HISTORY_COMMAND_LENGTH = 240;
    private const MAX_HISTORY_SLOW_LOGS = 5;

    public function __construct(private readonly Store $store) {}

    /**
     * @return array<string,mixed>
     */
    public function snapshot(bool $force = false): array
    {
        $cached = $force ? null : $this->readCache();
        if (is_array($cached)) {
            $cached['meta']['source'] = 'cache';
            $cached['meta']['cacheAgeSeconds'] = $this->cacheAgeSeconds();
            return $cached;
        }

        $raw = $this->collectRuntimeSnapshot($force);
        $docroot = $this->scanDocroot();
        $slowLogs = $this->readSlowLogs();
        $siteBuilds = $this->readSiteBuildStatuses();
        $trackedServers = $this->readTrackedServers();

        $processes = $this->decorateProcesses(
            is_array($raw['processes'] ?? null) ? $raw['processes'] : [],
            is_array($raw['tcp'] ?? null) ? $raw['tcp'] : [],
            is_array($raw['udp'] ?? null) ? $raw['udp'] : [],
            $trackedServers,
            $docroot['path'] ?? Config::getWebRoot(),
        );

        $trackedServers = $this->decorateTrackedServers($trackedServers, $processes);
        $listeners = $this->buildListeners($processes);
        $summary = $this->buildSummary($processes, $listeners, $trackedServers, $docroot, $siteBuilds);
        $assessment = $this->buildAssessment($processes, $summary, $trackedServers, $siteBuilds);

        $payload = [
            'generatedAt' => is_string($raw['generatedAt'] ?? null) ? $raw['generatedAt'] : gmdate('c'),
            'host' => [
                'phpVersion' => PHP_VERSION,
                'phpSapi' => PHP_SAPI,
                'os' => php_uname('s') . ' ' . php_uname('r'),
                'machine' => php_uname('n'),
                'serverSoftware' => $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown',
                'environment' => Config::getEnv(),
                'debug' => Config::isDebugEnabled(),
                'memoryLimit' => ini_get('memory_limit'),
                'maxExecutionTime' => ini_get('max_execution_time'),
                'monitoredRoots' => $this->rootDescriptors(),
                'historyWindowHours' => self::HISTORY_RETENTION_HOURS,
                'historySamplingSeconds' => self::HISTORY_BASELINE_INTERVAL_SECONDS,
                'currentPid' => getmypid() ?: 0,
            ],
            'meta' => [
                'source' => 'live',
                'cacheAgeSeconds' => 0,
                'supportsKill' => PHP_OS_FAMILY === 'Windows',
                'collector' => is_array($raw['collector'] ?? null) ? $raw['collector'] : null,
                'errors' => array_values(array_filter(array_map('strval', is_array($raw['errors'] ?? null) ? $raw['errors'] : []))),
            ],
            'summary' => $summary,
            'assessment' => $assessment,
            'trackedServers' => $trackedServers,
            'processes' => $processes,
            'listeners' => $listeners,
            'docroot' => $docroot,
            'siteBuilds' => $siteBuilds,
            'slowLogs' => $slowLogs,
        ];

        $historyEntries = $this->recordHistoricalSample($payload);
        $payload['historyWindow'] = $this->buildHistoryWindow($historyEntries, self::HISTORY_RETENTION_HOURS);
        $this->writeCache($payload);
        return $payload;
    }

    /**
     * @return array<string,mixed>
     */
    public function exportHistory(int $hours = self::HISTORY_RETENTION_HOURS): array
    {
        $hours = max(1, min(168, $hours));
        $snapshot = $this->snapshot(false);
        $historyEntries = $this->readHistoryWindow($hours);
        $latestEntry = $this->buildHistoricalEntry($snapshot);
        $historyEntries = $this->mergeLatestHistoryEntry($historyEntries, $latestEntry, $hours);

        return [
            'generatedAt' => gmdate('c'),
            'windowHours' => $hours,
            'roots' => $this->rootDescriptors(),
            'historyWindow' => $this->buildHistoryWindow($historyEntries, $hours),
            'latestSnapshot' => $snapshot,
            'history' => $historyEntries,
        ];
    }

    /**
     * @return array<string,mixed>
     */
    public function killProcess(int $pid): array
    {
        if ($pid <= 0) {
            throw new InvalidArgumentException('A positive process id is required.');
        }

        $snapshot = $this->snapshot(true);
        $target = null;

        foreach ($snapshot['processes'] ?? [] as $process) {
            if ((int)($process['pid'] ?? 0) === $pid) {
                $target = $process;
                break;
            }
        }

        if (!is_array($target)) {
            throw new InvalidArgumentException('Process was not found in the current runtime snapshot.');
        }

        if (!($target['killable'] ?? false)) {
            $reason = is_string($target['killGuard'] ?? null) ? $target['killGuard'] : 'Kill switch is disabled for this process.';
            throw new RuntimeException($reason);
        }

        $output = [];
        $exitCode = 0;

        if (PHP_OS_FAMILY === 'Windows') {
            exec('taskkill /F /T /PID ' . $pid . ' 2>&1', $output, $exitCode);
        } else {
            exec('kill -9 ' . $pid . ' 2>&1', $output, $exitCode);
        }

        $this->clearCache();

        if ($exitCode !== 0) {
            throw new RuntimeException(
                trim(implode("\n", $output)) !== ''
                    ? trim(implode("\n", $output))
                    : 'The target process could not be terminated.'
            );
        }

        return [
            'status' => 'terminated',
            'pid' => $pid,
            'name' => (string)($target['name'] ?? 'process'),
            'output' => array_slice($output, -6),
            'terminatedAt' => gmdate('c'),
        ];
    }

    /**
     * @return array<string,mixed>
     */
    private function collectRuntimeSnapshot(bool $force = false): array
    {
        if (PHP_OS_FAMILY !== 'Windows') {
            return [
                'generatedAt' => gmdate('c'),
                'processes' => [],
                'tcp' => [],
                'udp' => [],
                'errors' => ['This analyze build currently uses a Windows runtime collector.'],
            ];
        }

        return $this->collectWindowsRuntimeSnapshot($force);
    }

    /**
     * @return array<string,mixed>
     */
    private function collectWindowsRuntimeSnapshot(bool $force = false): array
    {
        $started = microtime(true);
        $processStarted = microtime(true);
        $processPayload = $this->queryWindowsProcesses();
        $processDurationMs = (microtime(true) - $processStarted) * 1000;

        $networkStarted = microtime(true);
        $networkPayload = $this->queryWindowsListeners();
        $networkDurationMs = (microtime(true) - $networkStarted) * 1000;

        $errors = array_values(array_filter(array_merge(
            array_values(array_map('strval', $processPayload['errors'] ?? [])),
            array_values(array_map('strval', $networkPayload['errors'] ?? []))
        )));

        return [
            'generatedAt' => gmdate('c'),
            'processes' => $processPayload['processes'] ?? [],
            'tcp' => $networkPayload['tcp'] ?? [],
            'udp' => $networkPayload['udp'] ?? [],
            'collector' => [
                'mode' => 'wmic-netstat',
                'durationMs' => round((microtime(true) - $started) * 1000, 2),
                'processDurationMs' => round($processDurationMs, 2),
                'networkDurationMs' => round($networkDurationMs, 2),
                'totalProcessCount' => count($processPayload['processes'] ?? []),
                'listenerCount' => count($networkPayload['tcp'] ?? []) + count($networkPayload['udp'] ?? []),
            ],
            'errors' => $errors,
        ];
    }

    /**
     * @return array<string,mixed>
     */
    private function queryWindowsProcesses(): array
    {
        $command = 'wmic.exe process get CommandLine,CreationDate,ExecutablePath,HandleCount,KernelModeTime,Name,ProcessId,ThreadCount,UserModeTime,WorkingSetSize /format:list';
        $result = $this->runWindowsCommand($command);
        $stdout = $this->normalizeWindowsCommandOutput((string)($result['stdout'] ?? ''));
        if (($result['exitCode'] ?? 1) !== 0 || trim($stdout) === '') {
            return [
                'processes' => [],
                'errors' => [
                    trim((string)($result['stderr'] ?? '')) !== ''
                        ? trim((string)($result['stderr'] ?? ''))
                        : 'WMIC process inventory did not return any data.',
                ],
            ];
        }

        $processes = [];
        $current = [];
        $flushCurrent = function (array $entry) use (&$processes): void {
            $pid = (int)($entry['ProcessId'] ?? 0);
            if ($pid <= 0) {
                return;
            }

            $cpuTicks = (float)($entry['KernelModeTime'] ?? 0) + (float)($entry['UserModeTime'] ?? 0);
            $processes[] = [
                'pid' => $pid,
                'parentPid' => 0,
                'name' => (string)($entry['Name'] ?? 'process'),
                'commandLine' => (string)($entry['CommandLine'] ?? ''),
                'executablePath' => (string)($entry['ExecutablePath'] ?? ''),
                'workingSetMb' => round(((float)($entry['WorkingSetSize'] ?? 0)) / 1048576, 2),
                'cpuSeconds' => $cpuTicks > 0 ? round($cpuTicks / 10000000, 2) : null,
                'handles' => (int)($entry['HandleCount'] ?? 0),
                'threads' => (int)($entry['ThreadCount'] ?? 0),
                'startedAt' => $this->formatWindowsManagementDate((string)($entry['CreationDate'] ?? '')),
            ];
        };

        $lines = preg_split('/\n+/', $stdout) ?: [];
        foreach ($lines as $line) {
            $line = trim((string)$line);
            if ($line === '') {
                if ($current !== []) {
                    $flushCurrent($current);
                    $current = [];
                }
                continue;
            }

            $separator = strpos($line, '=');
            if ($separator === false) {
                continue;
            }

            $key = trim(substr($line, 0, $separator));
            $value = trim(substr($line, $separator + 1));
            $current[$key] = $value;
        }

        if ($current !== []) {
            $flushCurrent($current);
        }

        return [
            'processes' => $processes,
            'errors' => [],
        ];
    }

    /**
     * @return array<string,mixed>
     */
    private function queryWindowsListeners(): array
    {
        $tcpResult = $this->runWindowsCommand(['netstat.exe', '-ano', '-p', 'tcp']);
        $udpResult = $this->runWindowsCommand(['netstat.exe', '-ano', '-p', 'udp']);

        return [
            'tcp' => $this->parseNetstatOutput((string)($tcpResult['stdout'] ?? ''), 'tcp'),
            'udp' => $this->parseNetstatOutput((string)($udpResult['stdout'] ?? ''), 'udp'),
            'errors' => array_values(array_filter([
                (($tcpResult['exitCode'] ?? 1) !== 0 && trim((string)($tcpResult['stderr'] ?? '')) !== '')
                    ? trim((string)$tcpResult['stderr'])
                    : null,
                (($udpResult['exitCode'] ?? 1) !== 0 && trim((string)($udpResult['stderr'] ?? '')) !== '')
                    ? trim((string)$udpResult['stderr'])
                    : null,
            ])),
        ];
    }

    /**
     * @param array<int,array<string,mixed>> $rawProcesses
     * @param array<int,array<string,mixed>> $tcp
     * @param array<int,array<string,mixed>> $udp
     * @param array<int,array<string,mixed>> $trackedServers
     * @return array<int,array<string,mixed>>
     */
    private function decorateProcesses(array $rawProcesses, array $tcp, array $udp, array $trackedServers, string $docrootPath): array
    {
        $connectionsByPid = $this->connectionsByPid($tcp, $udp);
        $trackedByPid = [];
        foreach ($trackedServers as $server) {
            $trackedByPid[(int)($server['pid'] ?? 0)] = $server;
        }

        $decorated = [];
        $currentPid = getmypid() ?: 0;

        foreach ($rawProcesses as $process) {
            $pid = (int)($process['pid'] ?? 0);
            if ($pid <= 0) {
                continue;
            }

            $name = (string)($process['name'] ?? 'process');
            $commandLine = trim((string)($process['commandLine'] ?? ''));
            $executablePath = $this->stringOrNull($process['executablePath'] ?? null);
            $startedAt = $this->stringOrNull($process['startedAt'] ?? null);
            $tracked = $trackedByPid[$pid] ?? null;
            $connections = $connectionsByPid[$pid] ?? ['listen' => [], 'all' => []];
            $listenPorts = $connections['listen'];
            $allConnections = $connections['all'];
            $nameToken = $this->processToken($name);
            $exeToken = $this->processToken($executablePath ?? $name);

            $search = $this->normalizePathString(implode(' ', array_filter([
                $name,
                $commandLine,
                $executablePath,
            ])));

            $isNode = $this->processMatchesFamily($nameToken, $exeToken, ['node', 'bun', 'bunx', 'npm', 'pnpm', 'yarn', 'vite'])
                || $this->containsAny($search, ['/node.exe', '\\node.exe', '/bun', '\\bun', 'npm/bin/npx-cli.js', 'vite']);
            $isPhp = $this->processMatchesFamily($nameToken, $exeToken, ['php'])
                || $this->containsAny($search, ['/php.exe', '\\php.exe', 'php.ini']);
            $isApache = $this->processMatchesFamily($nameToken, $exeToken, ['apache', 'apache2', 'httpd'])
                || $this->containsAny($search, ['apache', 'httpd']);
            $isPowerShell = $this->processMatchesFamily($nameToken, $exeToken, ['powershell', 'pwsh']);
            $isDevServer = $isNode && (
                $listenPorts !== []
                || $this->containsAny($search, ['vite', 'webpack', 'rollup', 'svelte-kit', 'next dev'])
            );
            $matchedRoots = $this->matchSharedRoots($search);
            $appScoped = $tracked !== null || $this->isWorkspaceScoped($search);
            
            $explicitProcessId = null;
            if (preg_match('/(?:--efsdb-process-id=|-d\s+efsdb\.process_id=)([^\s]+)/', $commandLine, $matches)) {
                $explicitProcessId = $matches[1];
                $appScoped = true;
            } elseif (str_contains($commandLine, 'bin/gc.php') || str_contains($commandLine, 'bin\\gc.php')) {
                $explicitProcessId = 'manual-gc';
                $appScoped = true;
            } elseif (str_contains($commandLine, 'bin/efsdb.php') || str_contains($commandLine, 'bin\\efsdb.php')) {
                $explicitProcessId = 'efsdb-cli';
                $appScoped = true;
            } elseif (str_contains($commandLine, 'bin/apicheck.php') || str_contains($commandLine, 'bin\\apicheck.php')) {
                $explicitProcessId = 'check-api';
                $appScoped = true;
            } elseif (str_contains($commandLine, 'bin/authcheck.php') || str_contains($commandLine, 'bin\\authcheck.php')) {
                $explicitProcessId = 'check-auth';
                $appScoped = true;
            } elseif (str_contains($commandLine, 'conformance/generate.php') || str_contains($commandLine, 'conformance\\generate.php')) {
                $explicitProcessId = 'conformance-gen';
                $appScoped = true;
            } elseif (str_contains($commandLine, 'conformance/run.php') || str_contains($commandLine, 'conformance\\run.php')) {
                $explicitProcessId = 'conformance-run';
                $appScoped = true;
            } elseif (str_contains($commandLine, 'bin/smoke.ps1') || str_contains($commandLine, 'bin\\smoke.ps1')) {
                $explicitProcessId = 'smoke-test';
                $appScoped = true;
            }

            $scope = $appScoped ? 'workspace' : ($isNode ? 'external-node' : 'external');

            if ($tracked !== null) {
                $scope = 'tracked';
            }

            $kind = 'runtime-process';
            if ($explicitProcessId !== null) {
                $kind = 'efsdb-service';
            } elseif ($tracked !== null) {
                $kind = 'tracked-server';
            } elseif ($isDevServer) {
                $kind = 'dev-server';
            } elseif ($isApache) {
                $kind = 'apache-runtime';
            } elseif ($isPhp && $listenPorts !== []) {
                $kind = 'php-server';
            } elseif ($isPhp) {
                $kind = 'php-worker';
            } elseif ($isNode) {
                $kind = 'node-runtime';
            }

            if ($isPowerShell) {
                continue;
            }

            if (!$appScoped && !$isNode && !$isPhp && !$isApache && $listenPorts === []) {
                continue;
            }

            if ($kind === 'runtime-process' && !$appScoped && $tracked === null) {
                continue;
            }

            $riskReasons = [];
            $mentionsDocroot = $this->mentionsDocroot($search, $docrootPath);

            if ($isDevServer && !Config::isDevelopment()) {
                $riskReasons[] = 'A development server is listening while the runtime is not in development mode.';
            }

            if ($mentionsDocroot && $isNode) {
                $riskReasons[] = 'A Node or Bun process appears to execute from the served web root.';
            }

            if (!$appScoped && $isNode && $listenPorts !== []) {
                $riskReasons[] = 'A Node listener is active outside the tracked workspace roots.';
            }

            $risk = 'low';
            if ($this->containsRiskPhrase($riskReasons, 'served web root') || $this->containsRiskPhrase($riskReasons, 'not in development mode')) {
                $risk = 'high';
            } elseif ($riskReasons !== []) {
                $risk = 'medium';
            }

            $portLabels = array_map(
                static function (array $port): string {
                    $address = (string)($port['localAddress'] ?? '0.0.0.0');
                    $localPort = (int)($port['localPort'] ?? 0);
                    $protocol = strtoupper((string)($port['protocol'] ?? 'tcp'));
                    return $protocol . ' ' . $address . ':' . $localPort;
                },
                $listenPorts
            );

            $killable = $pid !== $currentPid && (
                $tracked !== null
                || $appScoped
                || $isDevServer
                || ($isNode && $listenPorts !== [])
                || ($isPhp && $listenPorts !== [])
                || $isApache
            );

            $killGuard = null;
            if (!$killable) {
                $killGuard = $pid === $currentPid
                    ? 'The current request process cannot terminate itself.'
                    : 'Only tracked, workspace-related, or server-style processes expose kill switches.';
            }

            $displayName = $name;
            if ($explicitProcessId !== null) {
                $displayName = $explicitProcessId . ' (' . $name . ')';
            } elseif ($tracked !== null) {
                $displayName = ((string)($tracked['id'] ?? $name) . ' (' . $name . ')');
            }

            $decorated[] = [
                'pid' => $pid,
                'parentPid' => (int)($process['parentPid'] ?? 0),
                'name' => $name,
                'displayName' => $displayName,
                'commandLine' => $this->sanitizeCommandLine($commandLine),
                'executablePath' => $this->sanitizePath($executablePath),
                'startedAt' => $startedAt,
                'workingSetMb' => (float)($process['workingSetMb'] ?? 0.0),
                'cpuSeconds' => $process['cpuSeconds'] ?? null,
                'handles' => (int)($process['handles'] ?? 0),
                'threads' => (int)($process['threads'] ?? 0),
                'kind' => $kind,
                'scope' => $scope,
                'trackedServer' => $tracked,
                'ports' => [
                    'listen' => $listenPorts,
                    'count' => count($allConnections),
                    'summary' => $portLabels,
                ],
                'matchedRoots' => $matchedRoots,
                'risk' => $risk,
                'riskReasons' => $riskReasons,
                'killable' => $killable,
                'killGuard' => $killGuard,
            ];
        }

        usort($decorated, fn(array $a, array $b): int => $this->compareProcesses($a, $b));
        return $decorated;
    }

    /**
     * @param array<int,array<string,mixed>> $trackedServers
     * @param array<int,array<string,mixed>> $processes
     * @return array<int,array<string,mixed>>
     */
    private function decorateTrackedServers(array $trackedServers, array $processes): array
    {
        $processIds = [];
        foreach ($processes as $process) {
            $processIds[(int)($process['pid'] ?? 0)] = true;
        }

        foreach ($trackedServers as &$server) {
            $pid = (int)($server['pid'] ?? 0);
            $server['alive'] = isset($processIds[$pid]);
            $lastAccessedAt = (int)($server['lastAccessedAtUnix'] ?? 0);
            $server['stale'] = $lastAccessedAt > 0 && (time() - $lastAccessedAt) > 300;
        }
        unset($server);

        usort(
            $trackedServers,
            static fn(array $a, array $b): int => ((int)($b['alive'] ?? 0) <=> (int)($a['alive'] ?? 0))
                ?: strcmp((string)($a['id'] ?? ''), (string)($b['id'] ?? ''))
        );

        return $trackedServers;
    }

    /**
     * @param array<int,array<string,mixed>> $processes
     * @return array<int,array<string,mixed>>
     */
    private function buildListeners(array $processes): array
    {
        $listeners = [];

        foreach ($processes as $process) {
            foreach ($process['ports']['listen'] ?? [] as $listen) {
                if (!is_array($listen)) {
                    continue;
                }

                $listeners[] = [
                    'pid' => (int)($process['pid'] ?? 0),
                    'name' => (string)($process['name'] ?? 'process'),
                    'kind' => (string)($process['kind'] ?? 'runtime-process'),
                    'scope' => (string)($process['scope'] ?? 'external'),
                    'risk' => (string)($process['risk'] ?? 'low'),
                    'protocol' => (string)($listen['protocol'] ?? 'tcp'),
                    'localAddress' => (string)($listen['localAddress'] ?? '0.0.0.0'),
                    'localPort' => (int)($listen['localPort'] ?? 0),
                    'state' => (string)($listen['state'] ?? 'Listen'),
                ];
            }
        }

        usort(
            $listeners,
            static fn(array $a, array $b): int => ((int)($a['localPort'] ?? 0) <=> (int)($b['localPort'] ?? 0))
                ?: strcmp((string)($a['name'] ?? ''), (string)($b['name'] ?? ''))
        );

        return $listeners;
    }
    /**
     * @param array<int,array<string,mixed>> $processes
     * @param array<int,array<string,mixed>> $listeners
     * @param array<int,array<string,mixed>> $trackedServers
     * @param array<string,mixed> $docroot
     * @param array<int,array<string,mixed>> $siteBuilds
     * @return array<string,mixed>
     */
    private function buildSummary(array $processes, array $listeners, array $trackedServers, array $docroot, array $siteBuilds): array
    {
        $memoryMb = 0.0;
        $appProcessCount = 0;
        $nodeCount = 0;
        $devServerCount = 0;
        $suspiciousProcessCount = 0;

        foreach ($processes as $process) {
            $memoryMb += (float)($process['workingSetMb'] ?? 0.0);
            if (($process['scope'] ?? 'external') !== 'external' || ($process['scope'] ?? 'external') === 'external-node') {
                $appProcessCount++;
            }
            if (str_contains((string)($process['kind'] ?? ''), 'node') || str_contains((string)($process['kind'] ?? ''), 'dev-server')) {
                $nodeCount++;
            }
            if (($process['kind'] ?? '') === 'dev-server' || ($process['kind'] ?? '') === 'tracked-server') {
                $devServerCount++;
            }
            if (($process['risk'] ?? 'low') !== 'low') {
                $suspiciousProcessCount++;
            }
        }

        $suspiciousFiles = is_array($docroot['suspiciousFiles'] ?? null) ? $docroot['suspiciousFiles'] : [];
        $activeBuilds = array_values(array_filter(
            $siteBuilds,
            static fn(array $build): bool => in_array((string)($build['status'] ?? ''), ['building', 'failed'], true)
        ));

        return [
            'processCount' => count($processes),
            'appProcessCount' => $appProcessCount,
            'nodeProcessCount' => $nodeCount,
            'devServerCount' => $devServerCount,
            'listenerCount' => count($listeners),
            'trackedServerCount' => count($trackedServers),
            'liveTrackedServerCount' => count(array_filter($trackedServers, static fn(array $server): bool => (bool)($server['alive'] ?? false))),
            'suspiciousProcessCount' => $suspiciousProcessCount,
            'suspiciousFileCount' => count($suspiciousFiles),
            'totalWorkingSetMb' => round($memoryMb, 2),
            'siteBuildIssueCount' => count($activeBuilds),
        ];
    }

    /**
     * @param array<int,array<string,mixed>> $processes
     * @param array<string,mixed> $summary
     * @param array<int,array<string,mixed>> $trackedServers
     * @param array<int,array<string,mixed>> $siteBuilds
     * @return array<string,mixed>
     */
    private function buildAssessment(array $processes, array $summary, array $trackedServers, array $siteBuilds): array
    {
        $activeBuilds = array_values(array_filter(
            $siteBuilds,
            static fn(array $build): bool => (string)($build['status'] ?? '') === 'building'
        ));
        $liveTrackedServers = array_values(array_filter(
            $trackedServers,
            static fn(array $server): bool => (bool)($server['alive'] ?? false)
        ));
        $untrackedNodeRuntimes = array_values(array_filter(
            $processes,
            static fn(array $process): bool => in_array((string)($process['kind'] ?? ''), ['node-runtime', 'dev-server'], true)
                && (string)($process['scope'] ?? '') !== 'tracked'
        ));

        $notes = [];
        if ($untrackedNodeRuntimes !== [] && $activeBuilds === [] && $liveTrackedServers === []) {
            $notes[] = [
                'level' => 'medium',
                'message' => 'Node or Bun runtimes are present without a tracked build or dev server record.',
                'examples' => array_values(array_slice(array_map(
                    static fn(array $process): string => (string)($process['displayName'] ?? $process['name'] ?? 'node-runtime'),
                    $untrackedNodeRuntimes
                ), 0, 5)),
            ];
        }

        if ((int)($summary['suspiciousProcessCount'] ?? 0) > 0 || (int)($summary['suspiciousFileCount'] ?? 0) > 0) {
            $notes[] = [
                'level' => 'high',
                'message' => 'The current sample includes suspicious runtime or served-root findings.',
            ];
        }

        if ((int)($summary['nodeProcessCount'] ?? 0) <= 0 && $activeBuilds === [] && $liveTrackedServers === []) {
            $notes[] = [
                'level' => 'low',
                'message' => 'Idle posture matches the expected baseline: PHP only, with no active Node or Bun tooling.',
            ];
        }

        $status = 'low';
        foreach ($notes as $note) {
            $level = (string)($note['level'] ?? 'low');
            if ($this->riskRank($level) > $this->riskRank($status)) {
                $status = $level;
            }
        }

        return [
            'status' => $status,
            'idleExpectation' => [
                'always' => ['php'],
                'optionalWhenBuilding' => ['node', 'bun'],
            ],
            'builderState' => $activeBuilds !== [] || $liveTrackedServers !== [] || (int)($summary['devServerCount'] ?? 0) > 0
                ? 'active'
                : 'idle',
            'untrackedNodeRuntimeCount' => count($untrackedNodeRuntimes),
            'liveTrackedServerCount' => count($liveTrackedServers),
            'activeBuildCount' => count($activeBuilds),
            'notes' => $notes,
        ];
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function readTrackedServers(): array
    {
        $nodeEnv = new NodeEnvironmentService($this->store);
        $tracked = [];

        foreach ($nodeEnv->getServers() as $server) {
            if (!is_array($server)) {
                continue;
            }

            $tracked[] = [
                'id' => (string)($server['id'] ?? ''),
                'pid' => (int)($server['pid'] ?? 0),
                'url' => (string)($server['url'] ?? ''),
                'workspaceDir' => $this->sanitizePath($this->stringOrNull($server['workspaceDir'] ?? null), 'outside /public and /data'),
                'startedAt' => $this->formatUnixTime($server['startedAt'] ?? null),
                'startedAtUnix' => (int)($server['startedAt'] ?? 0),
                'lastAccessedAt' => $this->formatUnixTime($server['lastAccessedAt'] ?? null),
                'lastAccessedAtUnix' => (int)($server['lastAccessedAt'] ?? 0),
            ];
        }

        return $tracked;
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function readSiteBuildStatuses(): array
    {
        $root = $this->store->getDataDir() . '/runtime/site-builds';
        if (!is_dir($root)) {
            return [];
        }

        $files = glob($root . '/*.json') ?: [];
        $builds = [];

        foreach ($files as $file) {
            if (!is_string($file) || !is_file($file)) {
                continue;
            }

            $decoded = json_decode((string)file_get_contents($file), true);
            if (!is_array($decoded)) {
                continue;
            }

            $builds[] = [
                'environment' => (string)($decoded['environment'] ?? basename($file, '.json')),
                'status' => (string)($decoded['status'] ?? 'idle'),
                'tool' => (string)($decoded['tool'] ?? 'unknown'),
                'updatedAt' => $decoded['updatedAt'] ?? null,
                'startedAt' => $decoded['startedAt'] ?? null,
                'finishedAt' => $decoded['finishedAt'] ?? null,
                'componentCount' => (int)($decoded['componentCount'] ?? 0),
                'error' => is_array($decoded['error'] ?? null) ? $decoded['error'] : null,
            ];
        }

        usort($builds, static fn(array $a, array $b): int => strcmp((string)($a['environment'] ?? ''), (string)($b['environment'] ?? '')));
        return $builds;
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function readSlowLogs(): array
    {
        $path = Config::getDataDir() . '/.ghost/slow_logs/slow_requests.log';
        if (!is_file($path)) {
            return [];
        }

        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        if ($lines === false) {
            return [];
        }

        $lines = array_reverse($lines);
        $logs = [];

        foreach (array_slice($lines, 0, self::MAX_SLOW_LOGS) as $line) {
            $decoded = json_decode((string)$line, true);
            if (!is_array($decoded)) {
                continue;
            }

            $durations = is_array($decoded['durations'] ?? null) ? $decoded['durations'] : [];
            unset($durations['total']);

            $logs[] = [
                'time' => (string)($decoded['time'] ?? ''),
                'uri' => (string)($decoded['uri'] ?? '/'),
                'method' => (string)($decoded['method'] ?? 'GET'),
                'totalMs' => (float)($decoded['totalMs'] ?? 0.0),
                'durations' => $durations,
            ];
        }

        return $logs;
    }

    /**
     * @return array<string,mixed>
     */
    private function scanDocroot(): array
    {
        $root = Config::getWebRoot();
        $payload = [
            'path' => '/public',
            'exists' => is_dir($root),
            'suspiciousFiles' => [],
            'counts' => [
                'high' => 0,
                'medium' => 0,
                'low' => 0,
            ],
        ];

        if (!is_dir($root)) {
            return $payload;
        }

        $payload['suspiciousFiles'] = $this->scanDocrootPath($root, $root, 0);
        foreach ($payload['suspiciousFiles'] as $entry) {
            $risk = (string)($entry['risk'] ?? 'low');
            $payload['counts'][$risk] = (int)($payload['counts'][$risk] ?? 0) + 1;
        }

        return $payload;
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function scanDocrootPath(string $currentPath, string $rootPath, int $depth): array
    {
        if ($depth > self::MAX_DOCROOT_DEPTH) {
            return [];
        }

        $entries = @scandir($currentPath);
        if (!is_array($entries)) {
            return [];
        }

        $findings = [];

        foreach ($entries as $entry) {
            if ($entry === '.' || $entry === '..') {
                continue;
            }

            $absolute = $currentPath . '/' . $entry;
            $relative = ltrim(substr(str_replace('\\', '/', $absolute), strlen(str_replace('\\', '/', $rootPath))), '/');
            $classification = $this->classifyDocrootEntry($absolute, $relative, $rootPath);

            if ($classification !== null) {
                $findings[] = $classification;
            }

            if (count($findings) >= self::MAX_DOCROOT_FINDINGS) {
                break;
            }

            if (is_dir($absolute) && $depth < self::MAX_DOCROOT_DEPTH && !in_array($entry, ['node_modules', '.git', '.svn'], true)) {
                $nested = $this->scanDocrootPath($absolute, $rootPath, $depth + 1);
                foreach ($nested as $nestedEntry) {
                    $findings[] = $nestedEntry;
                    if (count($findings) >= self::MAX_DOCROOT_FINDINGS) {
                        break 2;
                    }
                }
            }
        }

        usort($findings, fn(array $a, array $b): int => $this->compareDocrootEntries($a, $b));
        return $findings;
    }

    /**
     * @return array<string,mixed>|null
     */
    private function classifyDocrootEntry(string $absolutePath, string $relativePath, string $rootPath): ?array
    {
        $name = basename($absolutePath);
        $extension = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        $normalizedRelative = $this->normalizePathString($relativePath);
        $isDir = is_dir($absolutePath);
        $risk = null;
        $reasons = [];
        $type = $isDir ? 'directory' : 'file';

        $highRiskNames = ['.env', '.env.local', '.git', '.svn', 'node_modules', 'master.key'];
        $mediumRiskNames = ['package.json', 'bun.lock', 'bun.lockb', 'package-lock.json', 'pnpm-lock.yaml', 'tsconfig.json', 'vite.config.js', 'vite.config.ts', 'svelte.config.js'];
        $highRiskExtensions = ['key', 'pem', 'ps1', 'bat', 'cmd', 'exe', 'dll', 'jar', 'msi', 'sh', 'py', 'pl'];
        $mediumRiskExtensions = ['ts', 'tsx', 'jsx', 'svelte', 'map', 'sql', 'log', 'bak'];

        if (in_array(strtolower($name), $highRiskNames, true)) {
            $risk = 'high';
            $reasons[] = 'Sensitive or executable development assets are exposed under the served root.';
        } elseif (in_array(strtolower($name), $mediumRiskNames, true)) {
            $risk = 'medium';
            $reasons[] = 'Development configuration is visible from the served root.';
        } elseif (in_array($extension, $highRiskExtensions, true)) {
            $risk = 'high';
            $reasons[] = 'Executable or secret-style file extension is present under the served root.';
        } elseif (in_array($extension, $mediumRiskExtensions, true)) {
            $risk = 'medium';
            $reasons[] = 'Source or debug-oriented file extension is present under the served root.';
        }

        if (str_starts_with($normalizedRelative, 'examples/')) {
            $risk ??= 'medium';
            $reasons[] = 'Example assets are exposed below the live document root.';
        }

        if ($risk === null) {
            return null;
        }

        return [
            'path' => $relativePath === '' ? '/public' : '/public/' . ltrim(str_replace('\\', '/', $relativePath), '/'),
            'relativePath' => $relativePath,
            'name' => $name,
            'type' => $type,
            'risk' => $risk,
            'reasons' => array_values(array_unique($reasons)),
            'sizeKb' => $isDir ? null : round(((float)(@filesize($absolutePath) ?: 0)) / 1024, 2),
            'modifiedAt' => $this->formatUnixTime(@filemtime($absolutePath) ?: null),
            'root' => '/public',
        ];
    }

    /**
     * @param array<int,array<string,mixed>> $tcp
     * @param array<int,array<string,mixed>> $udp
     * @return array<int,array{listen: array<int,array<string,mixed>>, all: array<int,array<string,mixed>>}>
     */
    private function connectionsByPid(array $tcp, array $udp): array
    {
        $grouped = [];

        foreach ($tcp as $entry) {
            if (!is_array($entry)) {
                continue;
            }
            $pid = (int)($entry['pid'] ?? 0);
            if ($pid <= 0) {
                continue;
            }

            $connection = [
                'protocol' => 'tcp',
                'localAddress' => (string)($entry['localAddress'] ?? '0.0.0.0'),
                'localPort' => (int)($entry['localPort'] ?? 0),
                'remoteAddress' => (string)($entry['remoteAddress'] ?? ''),
                'remotePort' => (int)($entry['remotePort'] ?? 0),
                'state' => (string)($entry['state'] ?? ''),
            ];

            $grouped[$pid]['all'][] = $connection;
            if (strcasecmp((string)$connection['state'], 'Listen') === 0) {
                $grouped[$pid]['listen'][] = $connection;
            }
        }

        foreach ($udp as $entry) {
            if (!is_array($entry)) {
                continue;
            }
            $pid = (int)($entry['pid'] ?? 0);
            if ($pid <= 0) {
                continue;
            }

            $connection = [
                'protocol' => 'udp',
                'localAddress' => (string)($entry['localAddress'] ?? '0.0.0.0'),
                'localPort' => (int)($entry['localPort'] ?? 0),
                'remoteAddress' => '',
                'remotePort' => 0,
                'state' => 'Listen',
            ];

            $grouped[$pid]['all'][] = $connection;
            $grouped[$pid]['listen'][] = $connection;
        }

        foreach ($grouped as &$entry) {
            $entry['listen'] = array_values($entry['listen'] ?? []);
            $entry['all'] = array_values($entry['all'] ?? []);
        }
        unset($entry);

        return $grouped;
    }

    /**
     * @param list<string>|string $command
     * @return array{stdout:string,stderr:string,exitCode:int}
     */
    private function runWindowsCommand(array|string $command): array
    {
        $pipes = [];
        $process = proc_open(
            $command,
            [
                0 => ['pipe', 'r'],
                1 => ['pipe', 'w'],
                2 => ['pipe', 'w'],
            ],
            $pipes,
            str_replace('/', '\\', $this->repoRoot())
        );

        if (!is_resource($process)) {
            return ['stdout' => '', 'stderr' => 'Unable to start the Windows collector command.', 'exitCode' => 1];
        }

        fclose($pipes[0]);
        $stdout = stream_get_contents($pipes[1]);
        $stderr = stream_get_contents($pipes[2]);
        fclose($pipes[1]);
        fclose($pipes[2]);
        $exitCode = proc_close($process);

        return [
            'stdout' => is_string($stdout) ? $stdout : '',
            'stderr' => is_string($stderr) ? $stderr : '',
            'exitCode' => is_int($exitCode) ? $exitCode : 1,
        ];
    }

    private function formatWindowsManagementDate(string $value): ?string
    {
        $value = trim($value);
        if ($value === '' || strlen($value) < 14) {
            return null;
        }

        $dateTime = DateTimeImmutable::createFromFormat('YmdHis', substr($value, 0, 14), new DateTimeZone('UTC'));
        return $dateTime?->format('c');
    }

    private function normalizeWindowsCommandOutput(string $value): string
    {
        if ($value === '') {
            return '';
        }

        if (str_contains($value, "\0")) {
            $converted = @iconv('UTF-16LE', 'UTF-8//IGNORE', $value);
            if (is_string($converted) && $converted !== '') {
                return $converted;
            }
        }

        return $value;
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function parseNetstatOutput(string $output, string $protocol): array
    {
        $entries = [];
        $lines = preg_split('/\r\n|\n|\r/', $output) ?: [];

        foreach ($lines as $line) {
            $line = trim((string)$line);
            if ($line === '' || !str_starts_with(strtoupper($line), strtoupper($protocol))) {
                continue;
            }

            $parts = preg_split('/\s+/', $line) ?: [];
            if ($protocol === 'tcp') {
                if (count($parts) < 5 || strtoupper((string)$parts[3]) !== 'LISTENING') {
                    continue;
                }

                $local = $this->parseNetstatEndpoint((string)$parts[1]);
                $remote = $this->parseNetstatEndpoint((string)$parts[2]);
                $entries[] = [
                    'pid' => (int)($parts[4] ?? 0),
                    'protocol' => 'tcp',
                    'localAddress' => $local['address'],
                    'localPort' => $local['port'],
                    'remoteAddress' => $remote['address'],
                    'remotePort' => $remote['port'],
                    'state' => 'Listen',
                ];
                continue;
            }

            if (count($parts) < 4) {
                continue;
            }

            $local = $this->parseNetstatEndpoint((string)$parts[1]);
            $entries[] = [
                'pid' => (int)($parts[3] ?? 0),
                'protocol' => 'udp',
                'localAddress' => $local['address'],
                'localPort' => $local['port'],
                'remoteAddress' => '',
                'remotePort' => 0,
                'state' => 'Listen',
            ];
        }

        return array_values(array_filter($entries, static fn(array $entry): bool => (int)($entry['pid'] ?? 0) > 0));
    }

    /**
     * @return array{address:string,port:int}
     */
    private function parseNetstatEndpoint(string $value): array
    {
        $value = trim($value);
        if ($value === '') {
            return ['address' => '', 'port' => 0];
        }

        if (preg_match('/^\[(.+)\]:(\d+)$/', $value, $matches) === 1) {
            return ['address' => (string)$matches[1], 'port' => (int)$matches[2]];
        }

        $position = strrpos($value, ':');
        if ($position === false) {
            return ['address' => $value, 'port' => 0];
        }

        return [
            'address' => substr($value, 0, $position),
            'port' => (int)substr($value, $position + 1),
        ];
    }

    /**
     * @return array<string,mixed>|null
     */
    private function readCache(): ?array
    {
        $path = $this->cachePath();
        if (!is_file($path) || $this->cacheAgeSeconds() > self::CACHE_TTL_SECONDS) {
            return null;
        }

        $decoded = json_decode((string)file_get_contents($path), true);
        return is_array($decoded) ? $decoded : null;
    }

    /**
     * @param array<string,mixed> $payload
     */
    private function writeCache(array $payload): void
    {
        $path = $this->cachePath();
        $dir = dirname($path);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        file_put_contents($path, json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
    }

    private function clearCache(): void
    {
        $path = $this->cachePath();
        if (is_file($path)) {
            @unlink($path);
        }
    }

    private function cachePath(): string
    {
        return $this->store->getDataDir() . '/runtime/analyze/snapshot.json';
    }

    private function cacheAgeSeconds(): int
    {
        $path = $this->cachePath();
        if (!is_file($path)) {
            return PHP_INT_MAX;
        }

        $mtime = @filemtime($path);
        if ($mtime === false) {
            return PHP_INT_MAX;
        }

        return max(0, time() - $mtime);
    }

    /**
     * @param array<string,mixed> $payload
     * @return array<int,array<string,mixed>>
     */
    private function recordHistoricalSample(array $payload): array
    {
        $entries = $this->readHistoryEntries();
        $entry = $this->buildHistoricalEntry($payload);
        $lastEntry = $entries === [] ? null : $entries[array_key_last($entries)];

        if ($this->shouldRecordHistoricalEntry($lastEntry, $entry)) {
            $entries[] = $entry;
            $entries = $this->pruneHistoryEntries($entries, self::HISTORY_RETENTION_HOURS);
            $this->writeHistoryEntries($entries);
            return $entries;
        }

        return $this->pruneHistoryEntries($entries, self::HISTORY_RETENTION_HOURS);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function readHistoryWindow(int $hours): array
    {
        return $this->pruneHistoryEntries($this->readHistoryEntries(), $hours);
    }

    /**
     * @return array<int,array<string,mixed>>
     */
    private function readHistoryEntries(): array
    {
        $path = $this->historyPath();
        if (!is_file($path)) {
            return [];
        }

        $decoded = json_decode((string)file_get_contents($path), true);
        if (!is_array($decoded)) {
            return [];
        }

        return array_values(array_filter($decoded, static fn(mixed $entry): bool => is_array($entry)));
    }

    /**
     * @param array<int,array<string,mixed>> $entries
     */
    private function writeHistoryEntries(array $entries): void
    {
        $path = $this->historyPath();
        $dir = dirname($path);
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        file_put_contents($path, json_encode(array_values($entries), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES), LOCK_EX);
    }

    private function historyPath(): string
    {
        return $this->store->getDataDir() . '/runtime/analyze/history.json';
    }

    /**
     * @param array<string,mixed>|null $lastEntry
     * @param array<string,mixed> $entry
     */
    private function shouldRecordHistoricalEntry(?array $lastEntry, array $entry): bool
    {
        if ($lastEntry === null) {
            return true;
        }

        $lastTs = strtotime((string)($lastEntry['capturedAt'] ?? '')) ?: 0;
        $entryTs = strtotime((string)($entry['capturedAt'] ?? '')) ?: time();
        if ($lastTs <= 0) {
            return true;
        }

        $ageSeconds = max(0, $entryTs - $lastTs);
        if ($ageSeconds >= self::HISTORY_BASELINE_INTERVAL_SECONDS) {
            return true;
        }

        if ($ageSeconds < self::HISTORY_CHANGE_INTERVAL_SECONDS) {
            return false;
        }

        return (($lastEntry['fingerprint'] ?? null) !== ($entry['fingerprint'] ?? null));
    }

    /**
     * @param array<int,array<string,mixed>> $entries
     * @return array<int,array<string,mixed>>
     */
    private function pruneHistoryEntries(array $entries, int $hours): array
    {
        $cutoff = time() - max(1, $hours) * 3600;
        $pruned = array_values(array_filter($entries, static function (mixed $entry) use ($cutoff): bool {
            if (!is_array($entry)) {
                return false;
            }

            $capturedAt = strtotime((string)($entry['capturedAt'] ?? '')) ?: 0;
            return $capturedAt >= $cutoff;
        }));

        usort($pruned, static fn(array $left, array $right): int => strcmp((string)($left['capturedAt'] ?? ''), (string)($right['capturedAt'] ?? '')));
        return $pruned;
    }

    /**
     * @param array<string,mixed> $payload
     * @return array<string,mixed>
     */
    private function buildHistoricalEntry(array $payload): array
    {
        $capturedAt = (string)($payload['generatedAt'] ?? gmdate('c'));
        $summary = is_array($payload['summary'] ?? null) ? $payload['summary'] : [];
        $processes = is_array($payload['processes'] ?? null) ? $payload['processes'] : [];
        $docroot = is_array($payload['docroot']['suspiciousFiles'] ?? null) ? $payload['docroot']['suspiciousFiles'] : [];
        $trackedServers = is_array($payload['trackedServers'] ?? null) ? $payload['trackedServers'] : [];
        $siteBuilds = is_array($payload['siteBuilds'] ?? null) ? $payload['siteBuilds'] : [];
        $slowLogs = is_array($payload['slowLogs'] ?? null) ? $payload['slowLogs'] : [];
        $assessment = is_array($payload['assessment'] ?? null) ? $payload['assessment'] : [];

        $compactProcesses = array_map(function (array $process): array {
            return [
                'pid' => (int)($process['pid'] ?? 0),
                'displayName' => (string)($process['displayName'] ?? $process['name'] ?? 'process'),
                'kind' => (string)($process['kind'] ?? 'runtime-process'),
                'scope' => (string)($process['scope'] ?? 'external'),
                'risk' => (string)($process['risk'] ?? 'low'),
                'workingSetMb' => round((float)($process['workingSetMb'] ?? 0.0), 2),
                'cpuSeconds' => $process['cpuSeconds'] ?? null,
                'ports' => array_values(array_map('strval', is_array($process['ports']['summary'] ?? null) ? $process['ports']['summary'] : [])),
                'roots' => array_values(array_map('strval', is_array($process['matchedRoots'] ?? null) ? $process['matchedRoots'] : [])),
                'commandLine' => $this->truncateText((string)($process['commandLine'] ?? ''), self::MAX_HISTORY_COMMAND_LENGTH),
                'executablePath' => (string)($process['executablePath'] ?? ''),
                'riskReasons' => array_values(array_map('strval', is_array($process['riskReasons'] ?? null) ? $process['riskReasons'] : [])),
            ];
        }, $processes);

        $compactDocroot = array_map(static function (array $entry): array {
            return [
                'path' => (string)($entry['path'] ?? ''),
                'relativePath' => (string)($entry['relativePath'] ?? ''),
                'risk' => (string)($entry['risk'] ?? 'low'),
                'modifiedAt' => (string)($entry['modifiedAt'] ?? ''),
                'reasons' => array_values(array_map('strval', is_array($entry['reasons'] ?? null) ? $entry['reasons'] : [])),
            ];
        }, $docroot);

        $compactTrackedServers = array_map(static function (array $server): array {
            return [
                'id' => (string)($server['id'] ?? ''),
                'pid' => (int)($server['pid'] ?? 0),
                'url' => (string)($server['url'] ?? ''),
                'workspaceDir' => (string)($server['workspaceDir'] ?? ''),
                'alive' => (bool)($server['alive'] ?? false),
                'stale' => (bool)($server['stale'] ?? false),
            ];
        }, $trackedServers);

        $compactBuilds = array_map(static function (array $build): array {
            return [
                'environment' => (string)($build['environment'] ?? ''),
                'status' => (string)($build['status'] ?? 'idle'),
                'tool' => (string)($build['tool'] ?? 'unknown'),
                'updatedAt' => (string)($build['updatedAt'] ?? ''),
            ];
        }, $siteBuilds);

        $compactSlowLogs = array_map(static function (array $log): array {
            return [
                'time' => (string)($log['time'] ?? ''),
                'method' => (string)($log['method'] ?? 'GET'),
                'uri' => (string)($log['uri'] ?? '/'),
                'totalMs' => round((float)($log['totalMs'] ?? 0.0), 1),
            ];
        }, array_slice($slowLogs, 0, self::MAX_HISTORY_SLOW_LOGS));

        $fingerprint = hash(
            'sha256',
            json_encode([
                'summary' => $summary,
                'processes' => array_map(static fn(array $process): array => [
                    'pid' => (int)($process['pid'] ?? 0),
                    'kind' => (string)($process['kind'] ?? ''),
                    'scope' => (string)($process['scope'] ?? ''),
                    'risk' => (string)($process['risk'] ?? ''),
                    'ports' => array_values(array_map('strval', is_array($process['ports'] ?? null) ? $process['ports'] : [])),
                ], $compactProcesses),
                'docroot' => array_map(static fn(array $entry): array => [
                    'path' => (string)($entry['path'] ?? ''),
                    'risk' => (string)($entry['risk'] ?? ''),
                ], $compactDocroot),
            ], JSON_UNESCAPED_SLASHES) ?: $capturedAt
        );

        return [
            'capturedAt' => $capturedAt,
            'summary' => $summary,
            'assessment' => $assessment,
            'processes' => $compactProcesses,
            'trackedServers' => $compactTrackedServers,
            'siteBuilds' => $compactBuilds,
            'docroot' => $compactDocroot,
            'slowLogs' => $compactSlowLogs,
            'fingerprint' => $fingerprint,
        ];
    }

    /**
     * @param array<int,array<string,mixed>> $entries
     * @return array<string,mixed>
     */
    private function buildHistoryWindow(array $entries, int $hours): array
    {
        $entries = $this->pruneHistoryEntries($entries, $hours);
        $rangeEndTs = time();
        $rangeStartTs = $rangeEndTs - (max(1, $hours) * 3600);
        if ($entries === []) {
            return [
                'windowHours' => $hours,
                'sampleCount' => 0,
                'rangeStart' => gmdate('c', $rangeStartTs),
                'rangeEnd' => gmdate('c', $rangeEndTs),
                'capturedFrom' => null,
                'capturedTo' => null,
                'firstSampleAt' => null,
                'sampling' => [
                    'baselineSeconds' => self::HISTORY_BASELINE_INTERVAL_SECONDS,
                    'changeFloorSeconds' => self::HISTORY_CHANGE_INTERVAL_SECONDS,
                ],
                'peaks' => [
                    'processCount' => 0,
                    'listenerCount' => 0,
                    'suspiciousCount' => 0,
                ],
                'points' => [],
                'latestAssessment' => null,
            ];
        }

        $peaks = [
            'processCount' => 0,
            'listenerCount' => 0,
            'suspiciousCount' => 0,
        ];

        foreach ($entries as $entry) {
            $summary = is_array($entry['summary'] ?? null) ? $entry['summary'] : [];
            $peaks['processCount'] = max($peaks['processCount'], (int)($summary['processCount'] ?? 0));
            $peaks['listenerCount'] = max($peaks['listenerCount'], (int)($summary['listenerCount'] ?? 0));
            $peaks['suspiciousCount'] = max(
                $peaks['suspiciousCount'],
                (int)($summary['suspiciousProcessCount'] ?? 0) + (int)($summary['suspiciousFileCount'] ?? 0)
            );
        }

        $points = $this->downsampleHistoryEntries($entries, self::MAX_HISTORY_POINTS);
        $latestEntry = $entries[array_key_last($entries)];

        return [
            'windowHours' => $hours,
            'sampleCount' => count($entries),
            'rangeStart' => gmdate('c', $rangeStartTs),
            'rangeEnd' => gmdate('c', $rangeEndTs),
            'capturedFrom' => (string)($entries[0]['capturedAt'] ?? ''),
            'capturedTo' => (string)($latestEntry['capturedAt'] ?? ''),
            'firstSampleAt' => (string)($entries[0]['capturedAt'] ?? ''),
            'sampling' => [
                'baselineSeconds' => self::HISTORY_BASELINE_INTERVAL_SECONDS,
                'changeFloorSeconds' => self::HISTORY_CHANGE_INTERVAL_SECONDS,
            ],
            'peaks' => $peaks,
            'points' => $points,
            'latestAssessment' => is_array($latestEntry['assessment'] ?? null) ? $latestEntry['assessment'] : null,
        ];
    }

    /**
     * @param array<int,array<string,mixed>> $entries
     * @return array<int,array<string,mixed>>
     */
    private function downsampleHistoryEntries(array $entries, int $maxPoints): array
    {
        if (count($entries) <= $maxPoints) {
            return array_map([$this, 'historyChartPoint'], $entries);
        }

        $chunkSize = (int)ceil(count($entries) / $maxPoints);
        $points = [];
        for ($offset = 0; $offset < count($entries); $offset += $chunkSize) {
            $chunk = array_slice($entries, $offset, $chunkSize);
            if ($chunk === []) {
                continue;
            }

            $candidate = $chunk[array_key_last($chunk)];
            foreach ($chunk as $entry) {
                if ($this->historyEntrySuspiciousCount($entry) > $this->historyEntrySuspiciousCount($candidate)) {
                    $candidate = $entry;
                }
            }
            $points[] = $this->historyChartPoint($candidate);
        }

        return $points;
    }

    /**
     * @param array<string,mixed> $entry
     * @return array<string,mixed>
     */
    private function historyChartPoint(array $entry): array
    {
        $summary = is_array($entry['summary'] ?? null) ? $entry['summary'] : [];
        return [
            'capturedAt' => (string)($entry['capturedAt'] ?? ''),
            'processCount' => (int)($summary['processCount'] ?? 0),
            'listenerCount' => (int)($summary['listenerCount'] ?? 0),
            'suspiciousCount' => $this->historyEntrySuspiciousCount($entry),
        ];
    }

    /**
     * @param array<string,mixed> $entry
     */
    private function historyEntrySuspiciousCount(array $entry): int
    {
        $summary = is_array($entry['summary'] ?? null) ? $entry['summary'] : [];
        return (int)($summary['suspiciousProcessCount'] ?? 0) + (int)($summary['suspiciousFileCount'] ?? 0);
    }

    /**
     * @param array<int,array<string,mixed>> $entries
     * @param array<string,mixed> $latestEntry
     * @return array<int,array<string,mixed>>
     */
    private function mergeLatestHistoryEntry(array $entries, array $latestEntry, int $hours): array
    {
        if ($entries === []) {
            return [$latestEntry];
        }

        $lastIndex = array_key_last($entries);
        if ($lastIndex === null) {
            return [$latestEntry];
        }

        $lastEntry = $entries[$lastIndex];
        if (($lastEntry['capturedAt'] ?? null) === ($latestEntry['capturedAt'] ?? null)) {
            $entries[$lastIndex] = $latestEntry;
            return $entries;
        }

        if (($lastEntry['fingerprint'] ?? null) !== ($latestEntry['fingerprint'] ?? null)) {
            $entries[] = $latestEntry;
        }

        return $this->pruneHistoryEntries($entries, $hours);
    }

    private function repoRoot(): string
    {
        return rtrim(str_replace('\\', '/', dirname(__DIR__, 4)), '/');
    }

    /**
     * @return array<string,string>
     */
    private function sharedRoots(): array
    {
        return [
            'public' => Config::getWebRoot(),
            'data' => $this->store->getDataDir(),
        ];
    }

    /**
     * @return array<int,array<string,string>>
     */
    private function rootDescriptors(): array
    {
        return [
            ['label' => '/public', 'role' => 'served web root'],
            ['label' => '/data', 'role' => 'runtime state and exported history'],
        ];
    }

    private function normalizePathString(string $value): string
    {
        return strtolower(str_replace('\\', '/', trim($value)));
    }

    /**
     * @return array<int,string>
     */
    private function matchSharedRoots(string $haystack): array
    {
        $matched = [];
        foreach ($this->sharedRoots() as $label => $root) {
            $relative = $this->relativeTo($this->repoRoot(), $root);
            if ($this->containsNormalized($haystack, $root) || ($relative !== null && $relative !== '' && str_contains($haystack, $relative))) {
                $matched[] = $label;
            }
        }

        return array_values(array_unique($matched));
    }

    private function isWorkspaceScoped(string $haystack): bool
    {
        if ($this->containsNormalized($haystack, $this->repoRoot())) {
            return true;
        }

        foreach ($this->sharedRoots() as $root) {
            if ($this->containsNormalized($haystack, $root)) {
                return true;
            }
        }

        foreach ($this->workspaceTokens() as $token) {
            if ($token !== '' && str_contains($haystack, $token)) {
                return true;
            }
        }

        return false;
    }

    /**
     * @return array<int,string>
     */
    private function workspaceTokens(): array
    {
        $repoRoot = $this->repoRoot();
        $tokens = [
            strtolower(basename($repoRoot)),
            $this->normalizePathString((string)$this->relativeTo($repoRoot, Config::getWebRoot())),
            $this->normalizePathString((string)$this->relativeTo($repoRoot, $this->store->getDataDir())),
            'efsdb/php/core',
            'web/apps',
        ];

        return array_values(array_unique(array_filter($tokens, static fn(string $token): bool => trim($token) !== '')));
    }

    private function mentionsDocroot(string $haystack, string $docrootPath): bool
    {
        if ($this->containsNormalized($haystack, $docrootPath)) {
            return true;
        }

        $relativeDocroot = $this->relativeTo($this->repoRoot(), $docrootPath);
        return is_string($relativeDocroot) && $relativeDocroot !== ''
            ? str_contains($haystack, $this->normalizePathString($relativeDocroot))
            : false;
    }

    private function containsNormalized(string $haystack, string $needle): bool
    {
        $needle = $this->normalizePathString($needle);
        return $needle !== '' && str_contains($haystack, $needle);
    }

    private function sanitizePath(?string $path, string $externalFallback = '[external-path]'): ?string
    {
        if ($path === null || trim($path) === '') {
            return null;
        }

        $normalized = str_replace('\\', '/', trim($path));
        foreach ($this->sharedRoots() as $label => $root) {
            $relative = $this->relativeTo($root, $normalized);
            if ($relative !== null || $this->normalizePathString($normalized) === $this->normalizePathString($root)) {
                $prefix = '/' . $label;
                return $relative === null || $relative === ''
                    ? $prefix
                    : $prefix . '/' . ltrim($relative, '/');
            }
        }

        $basename = basename($normalized);
        return $basename !== '' && $basename !== '.' && $basename !== '/'
            ? $externalFallback . ' (' . $basename . ')'
            : $externalFallback;
    }

    private function sanitizeCommandLine(?string $commandLine): ?string
    {
        if ($commandLine === null || trim($commandLine) === '') {
            return null;
        }

        $sanitized = str_replace('\\', '/', trim($commandLine));
        foreach ($this->sharedRoots() as $label => $root) {
            $normalizedRoot = str_replace('\\', '/', $root);
            $sanitized = str_ireplace($normalizedRoot, '/' . $label, $sanitized);
            $relativeRoot = $this->relativeTo($this->repoRoot(), $normalizedRoot);
            if ($relativeRoot !== null && $relativeRoot !== '') {
                $sanitized = str_ireplace($relativeRoot, '/' . $label, $sanitized);
            }
        }

        $sanitized = preg_replace_callback(
            '/"([A-Za-z]:\/[^"]+)"/',
            static fn(array $matches): string => '"[external-path]"',
            $sanitized
        ) ?? $sanitized;
        $sanitized = preg_replace_callback(
            "/'([A-Za-z]:\\/[^']+)'/",
            static fn(array $matches): string => "'[external-path]'",
            $sanitized
        ) ?? $sanitized;
        $sanitized = preg_replace('/(?:efsdb\/php\/core|web\/apps)\/[^\s"\']+/i', '[workspace-path]', $sanitized) ?? $sanitized;
        $sanitized = preg_replace('/[A-Za-z]:\/[^\s]+/', '[external-path]', $sanitized) ?? $sanitized;

        return $this->truncateText($sanitized, self::MAX_HISTORY_COMMAND_LENGTH * 2);
    }

    /**
     * @param array<int,string> $needles
     */
    private function containsAny(string $haystack, array $needles): bool
    {
        foreach ($needles as $needle) {
            if ($needle !== '' && str_contains($haystack, strtolower($needle))) {
                return true;
            }
        }
        return false;
    }

    /**
     * @return string|null
     */
    private function relativeTo(string $root, string $path): ?string
    {
        $root = rtrim($this->normalizePathString($root), '/');
        $path = $this->normalizePathString($path);
        if ($root === '' || $path === '' || !str_starts_with($path . '/', $root . '/')) {
            return null;
        }

        return ltrim(substr($path, strlen($root)), '/');
    }

    private function containsRiskPhrase(array $riskReasons, string $needle): bool
    {
        foreach ($riskReasons as $reason) {
            if (is_string($reason) && str_contains(strtolower($reason), strtolower($needle))) {
                return true;
            }
        }
        return false;
    }

    private function processToken(string $value): string
    {
        $value = trim(str_replace('\\', '/', $value));
        if ($value === '') {
            return '';
        }

        return strtolower(pathinfo($value, PATHINFO_FILENAME));
    }

    /**
     * @param array<int,string> $family
     */
    private function processMatchesFamily(string $nameToken, string $exeToken, array $family): bool
    {
        return in_array($nameToken, $family, true) || in_array($exeToken, $family, true);
    }

    private function compareProcesses(array $left, array $right): int
    {
        return $this->riskRank((string)($right['risk'] ?? 'low')) <=> $this->riskRank((string)($left['risk'] ?? 'low'))
            ?: count($right['ports']['listen'] ?? []) <=> count($left['ports']['listen'] ?? [])
            ?: ((float)($right['workingSetMb'] ?? 0.0) <=> (float)($left['workingSetMb'] ?? 0.0))
            ?: ((int)($right['pid'] ?? 0) <=> (int)($left['pid'] ?? 0));
    }

    private function compareDocrootEntries(array $left, array $right): int
    {
        return $this->riskRank((string)($right['risk'] ?? 'low')) <=> $this->riskRank((string)($left['risk'] ?? 'low'))
            ?: strcmp((string)($left['relativePath'] ?? ''), (string)($right['relativePath'] ?? ''));
    }

    private function riskRank(string $risk): int
    {
        return match ($risk) {
            'high' => 3,
            'medium' => 2,
            default => 1,
        };
    }

    private function truncateText(string $value, int $maxLength): string
    {
        if ($maxLength <= 0 || strlen($value) <= $maxLength) {
            return $value;
        }

        return rtrim(substr($value, 0, max(1, $maxLength - 3))) . '...';
    }

    private function stringOrNull(mixed $value): ?string
    {
        if (!is_scalar($value)) {
            return null;
        }

        $value = trim((string)$value);
        return $value === '' ? null : $value;
    }

    private function formatUnixTime(mixed $value): ?string
    {
        if (!is_numeric($value) || (int)$value <= 0) {
            return null;
        }

        return gmdate('c', (int)$value);
    }
}
