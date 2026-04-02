<?php

declare(strict_types=1);

require_once __DIR__ . '/../../src/ShowcaseDemo.php';

$pageTitle = 'EFSDB Showcase';
$footerText = 'Representative synthetic showcase · Sensitive operational details intentionally omitted';
$hideFooterEnvironmentStamp = true;

if (!function_exists('showcase_control_plane_path')) {
    function showcase_control_plane_path(string $page = 'hub'): string
    {
        return $page === 'hub'
            ? '/_efsdb/showcase'
            : '/_efsdb/showcase/' . rawurlencode($page);
    }
}

$showcase = ShowcaseDemo::build();
$showcasePage = (string)($GLOBALS['efsdb_showcase_page'] ?? 'hub');
$showcasePages = [
    'hub' => [
        'label' => 'Overview',
        'title' => $showcase['hero']['title'],
        'copy' => 'Open one representative walkthrough at a time. Each page stays read-only, synthetic, and scoped to a specific part of the platform.',
        'summary' => 'Compact landing page with links into focused showcase topics',
        'href' => showcase_control_plane_path(),
    ],
    'storage' => [
        'label' => 'Storage',
        'title' => 'Representative storage profile and compression',
        'copy' => 'Start with the top-level storage picture, platform strengths, and compression behavior before diving into precise edit traces or operational flows.',
        'summary' => 'Storage profile, strengths, and compression behavior',
        'href' => showcase_control_plane_path('storage'),
    ],
    'precision' => [
        'label' => 'Precision edits',
        'title' => 'Representative precision edit walkthrough',
        'copy' => 'Focused before/after examples for tiny edits, route-level changes, and article-sized updates using only synthetic fixtures.',
        'summary' => 'Localized rewrite examples with line-level synthetic diffs',
        'href' => showcase_control_plane_path('precision'),
    ],
    'security' => [
        'label' => 'Security story',
        'title' => 'High-level security story',
        'copy' => 'A smaller, safer page for the crypto-aware lifecycle and the explicit omissions that preserve the platform security posture.',
        'summary' => 'Crypto-aware flow and safety boundaries',
        'href' => showcase_control_plane_path('security'),
    ],
    'runtime' => [
        'label' => 'SvelteKit',
        'title' => 'Runtime and SvelteKit packaging',
        'copy' => 'A short page for the in-repo PHP adapter and how grouped output fits the rest of the EFSDB runtime and delivery model.',
        'summary' => 'PHP adapter fit and runtime grouping story',
        'href' => showcase_control_plane_path('runtime'),
    ],
    'operations' => [
        'label' => 'Operations',
        'title' => 'Practical workflows, history, and rollback',
        'copy' => 'Operational lanes, synthetic branch history, audit trail, and rollback behavior without mixing them into the storage or security explanations.',
        'summary' => 'Workflows, branch graph, audit trail, and next actions',
        'href' => showcase_control_plane_path('operations'),
    ],
    'inspector' => [
        'label' => 'WASM Inspector',
        'title' => 'Browser-side WASM verification',
        'copy' => 'Proves Rust parity, exact JSON serialization, and isolated Web Worker range-fetching for zero-download envelope inspection.',
        'summary' => 'Browser-side envelope inspection and range fetch validation',
        'href' => showcase_control_plane_path('inspector'),
    ],
];

if (!isset($showcasePages[$showcasePage])) {
    $showcasePage = 'hub';
}

$currentShowcasePage = $showcasePages[$showcasePage];
$showcasePageNav = array_values($showcasePages);
$showcaseTopicCards = [
    [
        'page' => 'storage',
        'eyebrow' => 'Storage and compression',
        'title' => 'Start with the storage profile',
        'summary' => 'See how stored size, compression, and platform structure fit together in one clear walkthrough.',
        'statLabel' => 'saved before envelope',
        'statValue' => ShowcaseDemo::formatPercent(((float)$showcase['chart']['savedBytes']) / max(1, (int)$showcase['chart']['rawBytes'])),
        'points' => [
            'Storage shape at a glance',
            'Compression explained plainly',
            'Why structure matters',
        ],
    ],
    [
        'page' => 'precision',
        'eyebrow' => 'Precision edits',
        'title' => 'Review representative edit locality',
        'summary' => 'See how small edits stay localized, with before-and-after examples only when you open them.',
        'statLabel' => 'representative files',
        'statValue' => (string)count($showcase['precision']['files']),
        'points' => [
            'Small edits stay localized',
            'Before-and-after examples',
            'Larger content case included',
        ],
    ],
    [
        'page' => 'security',
        'eyebrow' => 'Security story',
        'title' => 'Understand what is protected',
        'summary' => 'A plain-language view of the safety model, the protected layers, and what stays intentionally undisclosed.',
        'statLabel' => 'representative stages',
        'statValue' => (string)count($showcase['crypto']['flow']),
        'points' => [
            'What is shown',
            'What stays omitted',
            'Why the boundary matters',
        ],
    ],
    [
        'page' => 'runtime',
        'eyebrow' => 'Runtime and packaging',
        'title' => 'See how app output fits EFSDB',
        'summary' => 'Follow how SvelteKit assets and prerendered pages fit the runtime without mixing build detail into other topics.',
        'statLabel' => 'runtime notes',
        'statValue' => (string)count($showcase['sveltekit']['flow']),
        'points' => [
            'App assets and pages',
            'Grouped runtime output',
            'Clear import boundary',
        ],
    ],
    [
        'page' => 'operations',
        'eyebrow' => 'Workflows and history',
        'title' => 'Follow review, promotion, and rollback',
        'summary' => 'A practical view of how work moves through staging, history, approval, and controlled recovery.',
        'statLabel' => 'workflow lanes',
        'statValue' => (string)count($showcase['workflows']),
        'points' => [
            'Who changes what',
            'Promotion stays explicit',
            'Rollback stays traceable',
        ],
    ],
    [
        'page' => 'inspector',
        'eyebrow' => 'Browser verification',
        'title' => 'Inspect without downloading',
        'summary' => 'Demonstrates the WASM-based inspector isolating parsing logic in a Web Worker, powered by a deterministic Rust crate.',
        'statLabel' => 'range fetches',
        'statValue' => '2',
        'points' => [
            'Rust WASM parity',
            'Partial range requests',
            'Svelte Worker integration',
        ],
    ],
];

$showcaseLaunchCards = [
    [
        'page' => 'storage',
        'index' => '01',
        'title' => 'Storage profile',
        'summary' => 'Storage shape, strengths, and compression.',
    ],
    [
        'page' => 'precision',
        'index' => '02',
        'title' => 'Precision edits',
        'summary' => 'Localized rewrite examples and diffs.',
    ],
    [
        'page' => 'security',
        'index' => '03',
        'title' => 'Security story',
        'summary' => 'Safety model and deliberate omissions.',
    ],
    [
        'page' => 'runtime',
        'index' => '04',
        'title' => 'SvelteKit fit',
        'summary' => 'Adapter usage and grouped output.',
    ],
    [
        'page' => 'operations',
        'index' => '05',
        'title' => 'Operations',
        'summary' => 'Workflows, history, rollback, and handoff.',
    ],
    [
        'page' => 'inspector',
        'index' => '06',
        'title' => 'WASM Inspector',
        'summary' => 'Rust parser parity and UI isolation via Web Worker.',
    ],
];

if (!function_exists('showcase_split_lines')) {
    /**
     * @return list<string>
     */
    function showcase_split_lines(string $code): array
    {
        $normalized = str_replace(["\r\n", "\r"], "\n", $code);
        $normalized = rtrim($normalized, "\n");
        return $normalized === '' ? [''] : explode("\n", $normalized);
    }
}

if (!function_exists('showcase_diff_map')) {
    /**
     * @return array{before:array<int,bool>,after:array<int,bool>}
     */
    function showcase_diff_map(string $before, string $after): array
    {
        $beforeLines = showcase_split_lines($before);
        $afterLines = showcase_split_lines($after);
        $max = max(count($beforeLines), count($afterLines));
        $beforeChanged = [];
        $afterChanged = [];

        for ($index = 0; $index < $max; $index++) {
            $beforeLine = $beforeLines[$index] ?? null;
            $afterLine = $afterLines[$index] ?? null;
            if ($beforeLine !== $afterLine) {
                if ($beforeLine !== null) {
                    $beforeChanged[$index + 1] = true;
                }
                if ($afterLine !== null) {
                    $afterChanged[$index + 1] = true;
                }
            }
        }

        return [
            'before' => $beforeChanged,
            'after' => $afterChanged,
        ];
    }
}

if (!function_exists('showcase_highlight_line')) {
    function showcase_highlight_line(string $line, string $language): string
    {
        $escaped = htmlspecialchars($line, ENT_QUOTES, 'UTF-8');

        return match ($language) {
            'json' => showcase_highlight_json_line($escaped),
            'html' => showcase_highlight_html_line($escaped),
            'php' => showcase_highlight_php_line($escaped),
            'js' => showcase_highlight_js_line($escaped),
            'pseudo' => showcase_highlight_pseudo_line($escaped),
            default => $escaped,
        };
    }
}

if (!function_exists('showcase_highlight_json_line')) {
    function showcase_highlight_json_line(string $line): string
    {
        $line = preg_replace('/(&quot;[^&]+&quot;)(\s*:)/', '<span class="syntax-key">$1</span>$2', $line) ?? $line;
        $line = preg_replace('/:\s*(&quot;.*?&quot;)/', ': <span class="syntax-string">$1</span>', $line) ?? $line;
        $line = preg_replace('/\b(-?\d+(?:\.\d+)?)\b/', '<span class="syntax-number">$1</span>', $line) ?? $line;
        $line = preg_replace('/\b(true|false|null)\b/', '<span class="syntax-literal">$1</span>', $line) ?? $line;
        return $line;
    }
}

if (!function_exists('showcase_highlight_html_line')) {
    function showcase_highlight_html_line(string $line): string
    {
        $line = preg_replace_callback(
            '/(&lt;\/?)([a-zA-Z0-9:-]+)/',
            static fn(array $matches): string => '<span class="syntax-punctuation">' . $matches[1] . '</span><span class="syntax-tag">' . $matches[2] . '</span>',
            $line
        ) ?? $line;
        $line = preg_replace('/([a-zA-Z:-]+)=(&quot;[^&]*?&quot;)/', '<span class="syntax-attr">$1</span>=<span class="syntax-string">$2</span>', $line) ?? $line;
        $line = str_replace('&gt;', '<span class="syntax-punctuation">&gt;</span>', $line);
        return $line;
    }
}

if (!function_exists('showcase_highlight_php_line')) {
    function showcase_highlight_php_line(string $line): string
    {
        $line = preg_replace('/(&lt;\?(?:php|=)|\?&gt;)/', '<span class="syntax-keyword">$1</span>', $line) ?? $line;
        $line = preg_replace_callback(
            '/\$[a-zA-Z_][a-zA-Z0-9_]*/',
            static fn(array $matches): string => '<span class="syntax-variable">' . $matches[0] . '</span>',
            $line
        ) ?? $line;
        $line = preg_replace('/\b(?:return|if|else|null|true|false)\b/', '<span class="syntax-keyword">$0</span>', $line) ?? $line;
        $line = preg_replace('/(&quot;.*?&quot;|&#039;.*?&#039;)/', '<span class="syntax-string">$1</span>', $line) ?? $line;
        $line = preg_replace('/\b([a-zA-Z_][a-zA-Z0-9_]*)\(/', '<span class="syntax-function">$1</span>(', $line) ?? $line;
        return $line;
    }
}

if (!function_exists('showcase_highlight_pseudo_line')) {
    function showcase_highlight_pseudo_line(string $line): string
    {
        $line = preg_replace('/(^\s*|&gt;\s*)(compress|wrap|persist)\b/', '$1<span class="syntax-keyword">$2</span>', $line) ?? $line;
        $line = preg_replace('/(&lt;[^&]+&gt;)/', '<span class="syntax-string">$1</span>', $line) ?? $line;
        $line = preg_replace('/(synthetic-[a-z0-9-]+)/i', '<span class="syntax-variable">$1</span>', $line) ?? $line;
        return $line;
    }
}

if (!function_exists('showcase_highlight_js_line')) {
    function showcase_highlight_js_line(string $line): string
    {
        $line = preg_replace('/\b(?:import|from|export|default|return|const|let|var|true|false|null)\b/', '<span class="syntax-keyword">$0</span>', $line) ?? $line;
        $line = preg_replace('/(&quot;.*?&quot;|&#039;.*?&#039;)/', '<span class="syntax-string">$1</span>', $line) ?? $line;
        $line = preg_replace('/\b(-?\d+(?:\.\d+)?)\b/', '<span class="syntax-number">$1</span>', $line) ?? $line;
        $line = preg_replace('/([a-zA-Z_$][a-zA-Z0-9_$]*)(\s*:)/', '<span class="syntax-key">$1</span>$2', $line) ?? $line;
        $line = preg_replace('/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\(/', '<span class="syntax-function">$1</span>(', $line) ?? $line;
        return $line;
    }
}

if (!function_exists('showcase_render_codeblock')) {
    /**
     * @param array<int,bool> $changedLines
     */
    function showcase_render_codeblock(string $code, string $language, array $changedLines): string
    {
        $lines = showcase_split_lines($code);
        $html = '<div class="showcase-codeblock" data-language="' . htmlspecialchars($language, ENT_QUOTES, 'UTF-8') . '">';

        foreach ($lines as $index => $line) {
            $lineNumber = $index + 1;
            $changed = isset($changedLines[$lineNumber]);
            $html .= '<div class="showcase-codeblock__line' . ($changed ? ' is-changed' : '') . '">';
            $html .= '<span class="showcase-codeblock__number">' . $lineNumber . '</span>';
            $html .= '<span class="showcase-codeblock__marker">' . ($changed ? 'Edit' : '') . '</span>';
            $html .= '<span class="showcase-codeblock__text">' . showcase_highlight_line($line, $language) . '</span>';
            $html .= '</div>';
        }

        return $html . '</div>';
    }
}

if (!function_exists('showcase_humanize_label')) {
    function showcase_humanize_label(string $label): string
    {
        return ucfirst(str_replace('-', ' ', $label));
    }
}

if (!function_exists('showcase_slugify_label')) {
    function showcase_slugify_label(string $label): string
    {
        $normalized = strtolower(trim($label));
        $normalized = preg_replace('/[^a-z0-9]+/', '-', $normalized) ?? $normalized;
        return trim($normalized, '-');
    }
}

if (!function_exists('showcase_render_segment_footprint')) {
    function showcase_render_segment_footprint(
        int $touchedSegments,
        int $totalSegments,
        float $rewriteRatio,
        string $label = 'Representative change footprint'
    ): string {
        $safeTouched = max(0, $touchedSegments);
        $safeTotal = max(1, $totalSegments);
        $untouchedSegments = max(0, $safeTotal - $safeTouched);
        $changedWidth = $safeTouched > 0 ? max(($safeTouched / $safeTotal) * 100, 10.0) : 0.0;

        $html = '<div class="showcase-footprint">';
        $html .= '<div class="showcase-footprint__label">' . htmlspecialchars($label, ENT_QUOTES, 'UTF-8') . '</div>';
        $html .= '<div class="showcase-footprint__bar" aria-hidden="true">';
        if ($safeTouched > 0) {
            $html .= '<span class="showcase-footprint__changed" style="width: ' . number_format(min(100.0, $changedWidth), 1, '.', '') . '%;"></span>';
        }
        $html .= '</div>';
        $html .= '<div class="showcase-footprint__meta">';
        $html .= '<span class="showcase-footprint__pill is-changed">Changed: ' . $safeTouched . ' ' . ($safeTouched === 1 ? 'segment' : 'segments') . '</span>';
        $html .= '<span class="showcase-footprint__pill">Untouched: ' . $untouchedSegments . ' ' . ($untouchedSegments === 1 ? 'segment' : 'segments') . '</span>';
        $html .= '<span class="showcase-footprint__pill">Rewrite share: ' . htmlspecialchars(ShowcaseDemo::formatPercent($rewriteRatio), ENT_QUOTES, 'UTF-8') . ' of file</span>';
        $html .= '</div>';
        $html .= '</div>';

        return $html;
    }
}

if (!function_exists('showcase_render_history_graph')) {
    /**
     * @param array<string,mixed> $history
     */
    function showcase_render_history_graph(array $history): string
    {
        $branches = $history['branches'] ?? [];
        $events = $history['events'] ?? [];
        $links = $history['links'] ?? [];
        if (!is_array($branches) || !is_array($events) || $branches === [] || $events === []) {
            return '';
        }

        $branchX = [];
        $graphTop = 68;
        $graphLeft = 92;
        $branchSpacing = 170;
        $rowSpacing = 76;
        $graphHeight = $graphTop + max(0, (count($events) - 1) * $rowSpacing) + 52;
        $graphWidth = $graphLeft + max(0, count($branches) - 1) * $branchSpacing + 110;

        foreach ($branches as $index => $branch) {
            if (is_array($branch) && isset($branch['id'])) {
                $branchX[(string)$branch['id']] = $graphLeft + ($index * $branchSpacing);
            }
        }

        $eventPositions = [];
        foreach ($events as $index => $event) {
            if (!is_array($event) || !isset($event['id'], $event['branch'])) {
                continue;
            }

            $eventPositions[(string)$event['id']] = [
                'x' => $branchX[(string)$event['branch']] ?? $graphLeft,
                'y' => $graphTop + ($index * $rowSpacing),
                'event' => $event,
            ];
        }

        $html = '<svg class="showcase-history-graph" viewBox="0 0 ' . $graphWidth . ' ' . $graphHeight . '" role="img" aria-labelledby="showcase-history-graph-title showcase-history-graph-desc">';
        $html .= '<title id="showcase-history-graph-title">Representative synthetic branch history graph</title>';
        $html .= '<desc id="showcase-history-graph-desc">' . htmlspecialchars((string)($history['legend'] ?? ''), ENT_QUOTES, 'UTF-8') . '</desc>';

        foreach ($branches as $branch) {
            if (!is_array($branch) || !isset($branch['id'], $branch['label'])) {
                continue;
            }

            $x = $branchX[(string)$branch['id']] ?? $graphLeft;
            $html .= '<text class="showcase-history-graph__branch-label" x="' . $x . '" y="26" text-anchor="middle">' . htmlspecialchars((string)$branch['label'], ENT_QUOTES, 'UTF-8') . '</text>';
            $html .= '<line class="showcase-history-graph__branch-line" x1="' . $x . '" y1="42" x2="' . $x . '" y2="' . ($graphHeight - 22) . '"></line>';
        }

        foreach ($links as $link) {
            if (!is_array($link) || !isset($link['from'], $link['to'])) {
                continue;
            }

            $from = $eventPositions[(string)$link['from']] ?? null;
            $to = $eventPositions[(string)$link['to']] ?? null;
            if (!is_array($from) || !is_array($to)) {
                continue;
            }

            $x1 = (int)$from['x'];
            $y1 = (int)$from['y'];
            $x2 = (int)$to['x'];
            $y2 = (int)$to['y'];
            $midY = (int)round(($y1 + $y2) / 2);
            $path = 'M ' . $x1 . ' ' . $y1 . ' C ' . $x1 . ' ' . $midY . ', ' . $x2 . ' ' . $midY . ', ' . $x2 . ' ' . $y2;
            $html .= '<path class="showcase-history-graph__link is-' . htmlspecialchars((string)($link['type'] ?? 'flow'), ENT_QUOTES, 'UTF-8') . '" d="' . $path . '"></path>';
        }

        foreach ($events as $index => $event) {
            if (!is_array($event) || !isset($event['id'], $event['kind'], $event['time'], $event['label'])) {
                continue;
            }

            $position = $eventPositions[(string)$event['id']] ?? null;
            if (!is_array($position)) {
                continue;
            }

            $x = (int)$position['x'];
            $y = (int)$position['y'];
            $timeX = 12;
            $labelX = $x + 18;
            $kind = htmlspecialchars((string)$event['kind'], ENT_QUOTES, 'UTF-8');

            $html .= '<text class="showcase-history-graph__time" x="' . $timeX . '" y="' . ($y + 4) . '">' . htmlspecialchars((string)$event['time'], ENT_QUOTES, 'UTF-8') . '</text>';
            $html .= '<circle class="showcase-history-graph__node is-' . $kind . '" cx="' . $x . '" cy="' . $y . '" r="10"></circle>';
            $html .= '<text class="showcase-history-graph__node-label" x="' . $labelX . '" y="' . ($y - 3) . '">' . htmlspecialchars((string)$event['label'], ENT_QUOTES, 'UTF-8') . '</text>';
            $html .= '<text class="showcase-history-graph__node-meta" x="' . $labelX . '" y="' . ($y + 15) . '">' . htmlspecialchars((string)$event['actor'], ENT_QUOTES, 'UTF-8') . '</text>';
        }

        return $html . '</svg>';
    }
}
?>
<style>
    .showcase-stack {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color-scheme: light dark;
        --showcase-focus-ring: #0d9488;
        --showcase-focus-shadow: color-mix(in srgb, #0d9488, transparent 72%);
        --showcase-surface-soft: color-mix(in srgb, var(--shell-soft-bg), transparent 4%);
        --showcase-edit: #0f766e;
        --showcase-review: #2563eb;
        --showcase-merge: #16a34a;
        --showcase-revert: #d97706;
    }

    .showcase-stack>section[id] {
        scroll-margin-top: 1.25rem;
    }

    .showcase-stack .section-label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .showcase-stack :is(a, button, summary):focus-visible {
        outline: 3px solid var(--showcase-focus-ring);
        outline-offset: 3px;
        box-shadow: 0 0 0 0.2rem var(--showcase-focus-shadow);
    }

    .showcase-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .showcase-hero {
        position: relative;
        overflow: hidden;
        isolation: isolate;
    }

    .showcase-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
            radial-gradient(circle at top right, color-mix(in srgb, var(--accent), transparent 84%), transparent 48%),
            linear-gradient(135deg, color-mix(in srgb, var(--shell-panel-bg), transparent 4%), transparent 65%);
        pointer-events: none;
    }

    .showcase-hero__content,
    .showcase-hero__aside {
        position: relative;
        z-index: 1;
    }

    .showcase-hero__layout {
        display: grid;
        gap: 1.25rem;
    }

    .showcase-hero__content {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        min-width: 0;
        align-self: stretch;
    }

    .showcase-hero__lead {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 0;
        min-height: 100%;
    }

    .showcase-hero__title {
        margin: 0;
        max-width: 16ch;
        font-size: clamp(2.35rem, 3.3vw, 3.45rem);
        line-height: 1.06;
        letter-spacing: -0.045em;
        text-wrap: balance;
    }

    .showcase-hero__copy {
        max-width: 46ch;
        font-size: clamp(1rem, 1.04vw, 1.08rem);
        line-height: 1.68;
        color: color-mix(in srgb, var(--shell-text), var(--shell-muted) 42%);
    }

    .showcase-chip-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
        margin-top: 1rem;
    }

    .showcase-chip-row .tag,
    .showcase-chip-list .tag {
        padding: 0.38rem 0.68rem;
        border-radius: 999px;
        font-size: 0.72rem;
        font-weight: 650;
        line-height: 1.2;
    }

    .showcase-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
        margin-top: 1.25rem;
    }

    .showcase-hero__fact-grid {
        display: grid;
        gap: 0.7rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-top: auto;
        align-self: stretch;
    }

    .showcase-hero__fact {
        display: grid;
        gap: 0.38rem;
        border-radius: 0.95rem;
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 6%);
        background: color-mix(in srgb, var(--shell-soft-bg), transparent 8%);
        padding: 0.8rem 0.88rem;
    }

    .showcase-hero__fact strong {
        font-size: 0.74rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--shell-text-strong);
    }

    .showcase-hero__fact p {
        margin: 0;
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--shell-muted);
    }

    .showcase-kicker {
        display: grid;
        gap: 0.8rem;
    }

    .showcase-kicker>* {
        min-width: 0;
    }

    .showcase-kicker .surface-panel {
        min-height: 100%;
    }

    .showcase-anchor-list {
        display: grid;
        gap: 0.6rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .showcase-anchor-list a {
        display: grid;
        gap: 0.18rem;
        border-radius: 0.85rem;
        border: 1px solid var(--shell-border);
        background: var(--showcase-surface-soft);
        padding: 0.7rem 0.8rem;
        color: inherit;
        text-decoration: none;
        transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
    }

    .showcase-anchor-list a:hover,
    .showcase-anchor-list a:focus-visible {
        border-color: color-mix(in srgb, var(--accent), transparent 45%);
        background: color-mix(in srgb, var(--accent), transparent 92%);
        outline: none;
        transform: translateY(-1px);
    }

    .showcase-anchor-list a:active {
        transform: translateY(0);
    }

    .showcase-anchor-list__title {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--shell-text-strong);
    }

    .showcase-anchor-list__summary {
        font-size: 0.78rem;
        line-height: 1.45;
        color: var(--shell-muted);
    }

    .showcase-page-nav {
        display: grid;
        gap: 0.6rem;
    }

    .showcase-page-nav__link {
        display: grid;
        gap: 0.14rem;
        border-radius: 0.9rem;
        border: 1px solid var(--shell-border);
        background: var(--showcase-surface-soft);
        padding: 0.72rem 0.82rem;
        color: inherit;
        text-decoration: none;
        transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
    }

    .showcase-page-nav__link:hover,
    .showcase-page-nav__link:focus-visible {
        border-color: color-mix(in srgb, var(--accent), transparent 42%);
        background: color-mix(in srgb, var(--accent), transparent 93%);
        transform: translateY(-1px);
    }

    .showcase-page-nav__link.is-active {
        border-color: color-mix(in srgb, var(--accent), transparent 35%);
        background: color-mix(in srgb, var(--accent), transparent 89%);
    }

    .showcase-page-nav__label {
        font-size: 0.84rem;
        font-weight: 700;
        color: var(--shell-text-strong);
    }

    .showcase-page-nav__summary {
        font-size: 0.75rem;
        line-height: 1.45;
        color: var(--shell-muted);
    }

    .showcase-hero__launcher {
        display: grid;
        gap: 0.9rem;
    }

    .showcase-hero__launcher-grid {
        display: grid;
        gap: 0.65rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .showcase-hero__launcher-link {
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
        gap: 0.75rem;
        align-items: start;
        border-radius: 0.95rem;
        border: 1px solid var(--shell-border);
        background: var(--showcase-surface-soft);
        padding: 0.78rem 0.86rem;
        color: inherit;
        text-decoration: none;
        transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
    }

    .showcase-hero__launcher-link:hover,
    .showcase-hero__launcher-link:focus-visible {
        border-color: color-mix(in srgb, var(--accent), transparent 42%);
        background: color-mix(in srgb, var(--accent), transparent 94%);
        transform: translateY(-1px);
    }

    .showcase-hero__launcher-link.is-primary {
        border-color: color-mix(in srgb, var(--accent), transparent 32%);
        background: color-mix(in srgb, var(--accent), transparent 90%);
    }

    .showcase-hero__launcher-index {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent), transparent 86%);
        color: var(--accent);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0.04em;
    }

    .showcase-hero__launcher-copy {
        display: grid;
        gap: 0.16rem;
        min-width: 0;
    }

    .showcase-hero__launcher-copy strong {
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--shell-text-strong);
    }

    .showcase-hero__launcher-copy span {
        font-size: 0.76rem;
        line-height: 1.42;
        color: var(--shell-muted);
    }

    .showcase-hero__tool-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
        align-items: center;
    }

    .showcase-hero-analytics {
        display: grid;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .showcase-chart-card {
        display: grid;
        gap: 1rem;
    }

    .showcase-chart-caption {
        font-size: 0.78rem;
        line-height: 1.45;
        color: var(--shell-muted);
    }

    .showcase-profile-strengths {
        margin-top: 1.75rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--shell-border);
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .showcase-chart-visual {
        display: grid;
        gap: 1rem;
        align-items: center;
    }

    .showcase-donut {
        width: clamp(152px, 34vw, 180px);
        height: clamp(152px, 34vw, 180px);
        border-radius: 999px;
        position: relative;
        background: var(--chart-fill);
        margin: 0 auto;
    }

    .showcase-donut::after {
        content: "";
        position: absolute;
        inset: 22%;
        border-radius: 999px;
        background: var(--shell-panel-bg);
        border: 1px solid var(--shell-border);
    }

    .showcase-donut__center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
        text-align: center;
        padding: 2.5rem;
    }

    .showcase-donut__value {
        font-size: 1.2rem;
        font-weight: 800;
        color: var(--shell-text-strong);
    }

    .showcase-donut__label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .showcase-chart-legend {
        display: grid;
        gap: 0.75rem;
    }

    .showcase-chart-legend li {
        display: grid;
        grid-template-columns: 0.85rem minmax(0, 1fr) auto;
        gap: 0.75rem;
        align-items: center;
        color: var(--shell-muted);
    }

    .showcase-chart-swatch {
        width: 0.85rem;
        height: 0.85rem;
        border-radius: 999px;
    }

    .showcase-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }

    .showcase-grid--wide {
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }

    .showcase-topic-grid {
        display: grid;
        gap: 0.95rem;
        grid-auto-rows: 1fr;
    }

    .showcase-topic-card {
        --showcase-topic-tone: var(--accent);
        position: relative;
        overflow: hidden;
        display: grid;
        gap: 0.78rem;
        min-height: 100%;
        align-content: start;
        text-decoration: none;
        color: inherit;
        border-color: color-mix(in srgb, var(--showcase-topic-tone), transparent 78%);
        background: linear-gradient(180deg,
                color-mix(in srgb, var(--showcase-topic-tone), transparent 96%),
                var(--shell-panel-bg) 34%);
        transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
    }

    .showcase-topic-card[data-topic="storage"] {
        --showcase-topic-tone: #16a34a;
    }

    .showcase-topic-card[data-topic="precision"] {
        --showcase-topic-tone: #0f766e;
    }

    .showcase-topic-card[data-topic="security"] {
        --showcase-topic-tone: #d97706;
    }

    .showcase-topic-card[data-topic="runtime"] {
        --showcase-topic-tone: #2563eb;
    }

    .showcase-topic-card[data-topic="operations"] {
        --showcase-topic-tone: #dc2626;
    }

    .showcase-topic-card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 0.24rem;
        background: linear-gradient(90deg, var(--showcase-topic-tone), color-mix(in srgb, var(--showcase-topic-tone), white 26%));
        opacity: 0.88;
    }

    .showcase-topic-card:hover,
    .showcase-topic-card:focus-visible {
        border-color: color-mix(in srgb, var(--showcase-topic-tone), transparent 42%);
        background: linear-gradient(180deg,
                color-mix(in srgb, var(--showcase-topic-tone), transparent 93%),
                color-mix(in srgb, var(--shell-panel-bg), transparent 1%) 42%);
        transform: translateY(-1px);
    }

    .showcase-topic-card__topline {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
    }

    .showcase-topic-card__index {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2rem;
        height: 2rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--showcase-topic-tone), transparent 86%);
        color: var(--showcase-topic-tone);
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.05em;
    }

    .showcase-topic-card__eyebrow {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: color-mix(in srgb, var(--showcase-topic-tone), var(--shell-text-strong) 28%);
    }

    .showcase-topic-card__head {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.9rem;
        flex-wrap: wrap;
    }

    .showcase-topic-card .metric-heading {
        max-width: 18ch;
        font-size: clamp(1.08rem, 1.18vw, 1.34rem);
        line-height: 1.2;
        letter-spacing: -0.02em;
    }

    .showcase-topic-card__stat {
        display: grid;
        gap: 0.12rem;
        min-width: 7.4rem;
        text-align: right;
        padding: 0.55rem 0.65rem;
        border-radius: 0.85rem;
        border: 1px solid color-mix(in srgb, var(--showcase-topic-tone), transparent 82%);
        background: color-mix(in srgb, var(--showcase-topic-tone), transparent 94%);
    }

    .showcase-topic-card__stat strong {
        font-size: clamp(1.1rem, 2.1vw, 1.35rem);
        font-weight: 800;
        color: var(--shell-text-strong);
    }

    .showcase-topic-card__stat span {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .showcase-topic-card__points {
        display: grid;
        gap: 0.35rem;
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 0.88rem;
        color: var(--shell-muted);
    }

    .showcase-topic-card__points li {
        display: flex;
        align-items: flex-start;
        gap: 0.55rem;
        line-height: 1.55;
    }

    .showcase-topic-card__points li::before {
        content: "";
        width: 0.45rem;
        height: 0.45rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent), transparent 18%);
        margin-top: 0.42rem;
        flex: 0 0 auto;
    }

    .showcase-topic-card .shell-copy {
        font-size: 0.96rem;
        line-height: 1.62;
        color: color-mix(in srgb, var(--shell-text), var(--shell-muted) 48%);
    }

    .showcase-topic-card__footer {
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;
        padding-top: 0.35rem;
        border-top: 1px solid color-mix(in srgb, var(--showcase-topic-tone), transparent 84%);
        font-size: 0.79rem;
        font-weight: 700;
        color: color-mix(in srgb, var(--showcase-topic-tone), var(--shell-text-strong) 36%);
    }

    .showcase-summary-grid {
        display: grid;
        gap: 1rem;
    }

    .showcase-summary-card {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
        min-height: 100%;
    }

    .showcase-summary-split {
        display: grid;
        gap: 1rem;
        align-items: start;
    }

    .showcase-summary-copy {
        display: grid;
        gap: 0.9rem;
        align-content: start;
        min-width: 0;
    }

    .showcase-summary-card .showcase-actions,
    .showcase-summary-card .ghost-button {
        margin-top: auto;
    }

    .showcase-chip-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .showcase-card {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        min-height: 100%;
    }

    .showcase-card__marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent), transparent 86%);
        color: var(--accent);
        font-size: 0.82rem;
        font-weight: 700;
    }

    .showcase-section-head {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        margin-bottom: 1.05rem;
    }

    .showcase-topic-overview .showcase-section-head {
        max-width: 56rem;
        margin-bottom: 0;
    }

    .showcase-topic-overview .page-title {
        max-width: 15ch;
        font-size: clamp(2rem, 3vw, 2.8rem);
        line-height: 1.08;
        letter-spacing: -0.04em;
    }

    .showcase-topic-overview .shell-copy {
        max-width: 58ch;
    }

    .showcase-topic-overview__intro {
        display: grid;
        gap: 1rem;
        align-items: end;
        margin-bottom: 1.2rem;
    }

    .showcase-topic-overview__stats {
        display: grid;
        gap: 0.75rem;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .showcase-topic-overview__stat {
        display: grid;
        gap: 0.25rem;
        border-radius: 1rem;
        border: 1px solid var(--shell-border);
        background: color-mix(in srgb, var(--shell-soft-bg), transparent 7%);
        padding: 0.85rem 0.95rem;
    }

    .showcase-topic-overview__stat strong {
        font-size: 1.35rem;
        font-weight: 800;
        line-height: 1;
        color: var(--shell-text-strong);
    }

    .showcase-topic-overview__stat p {
        margin: 0;
        font-size: 0.82rem;
        line-height: 1.45;
        color: var(--shell-muted);
    }

    .showcase-metrics {
        display: grid;
        gap: 0.75rem;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    }

    .showcase-metric {
        border-radius: 1rem;
        border: 1px solid var(--shell-border);
        background: var(--shell-soft-bg);
        padding: 0.78rem 0.9rem;
    }

    .showcase-metric__label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .showcase-metric__value {
        margin-top: 0.28rem;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--shell-text-strong);
    }

    .showcase-code-grid {
        display: grid;
        gap: 1rem;
    }

    .showcase-code-card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .showcase-code-card[data-tone] {
        position: relative;
        overflow: hidden;
        border-color: color-mix(in srgb, var(--showcase-tone, var(--accent)), transparent 72%);
        background: linear-gradient(180deg,
                color-mix(in srgb, var(--showcase-tone, var(--accent)), transparent 95%),
                var(--shell-panel-bg) 42%);
    }

    .showcase-code-card[data-tone]::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 0.24rem;
        background: var(--showcase-tone, var(--accent));
    }

    .showcase-code-card pre {
        min-height: 100%;
    }

    .showcase-code-label {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.75rem;
        flex-wrap: wrap;
    }

    .showcase-code-card[data-tone] .section-label {
        color: color-mix(in srgb, var(--showcase-tone, var(--accent)), var(--shell-text-strong) 30%);
    }

    .showcase-file-path {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.82rem;
        color: var(--shell-text-strong);
    }

    .showcase-demo-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .showcase-demo-card__footer {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
        font-size: 0.84rem;
        color: var(--shell-muted);
    }

    .showcase-flow {
        display: grid;
        gap: 0.9rem;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    .showcase-flow-step {
        position: relative;
        overflow: hidden;
        border-radius: 1rem;
        border: 1px solid var(--shell-border);
        background: var(--shell-soft-bg);
        padding: 1rem;
        color: var(--shell-text-strong);
        font-weight: 600;
        min-height: 100%;
    }

    .showcase-flow-step::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 0.24rem;
        background: var(--showcase-tone, var(--accent));
    }

    .showcase-flow-step__eyebrow {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .showcase-flow-step__title {
        display: block;
        color: var(--shell-text-strong);
    }

    .showcase-flow-step[data-tone="blue"],
    .showcase-code-card[data-tone="blue"],
    .showcase-callout[data-tone="blue"] {
        --showcase-tone: #2563eb;
    }

    .showcase-flow-step[data-tone="green"],
    .showcase-code-card[data-tone="green"],
    .showcase-callout[data-tone="green"] {
        --showcase-tone: #16a34a;
    }

    .showcase-flow-step[data-tone="amber"],
    .showcase-code-card[data-tone="amber"],
    .showcase-callout[data-tone="amber"] {
        --showcase-tone: #d97706;
    }

    .showcase-flow-step[data-tone="red"],
    .showcase-code-card[data-tone="red"],
    .showcase-callout[data-tone="red"] {
        --showcase-tone: #dc2626;
    }

    .showcase-flow-step[data-tone] {
        border-color: color-mix(in srgb, var(--showcase-tone), transparent 70%);
        background: linear-gradient(180deg,
                color-mix(in srgb, var(--showcase-tone), transparent 92%),
                var(--shell-soft-bg) 45%);
    }

    .showcase-trust {
        border: 1px solid color-mix(in srgb, var(--accent), transparent 80%);
        background: color-mix(in srgb, var(--accent), transparent 94%);
    }

    .showcase-list {
        display: grid;
        gap: 0.85rem;
    }

    .showcase-list li {
        position: relative;
        padding-left: 1.1rem;
        color: var(--shell-muted);
        line-height: 1.6;
    }

    .showcase-list li::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0.62rem;
        width: 0.42rem;
        height: 0.42rem;
        border-radius: 999px;
        background: var(--accent);
    }

    .showcase-callout {
        border-radius: 1rem;
        border: 1px dashed color-mix(in srgb, var(--accent), transparent 72%);
        background: color-mix(in srgb, var(--accent), transparent 94%);
        padding: 0.95rem 1rem;
    }

    .showcase-callout[data-tone] {
        border-color: color-mix(in srgb, var(--showcase-tone, var(--accent)), transparent 70%);
        background: color-mix(in srgb, var(--showcase-tone, var(--accent)), transparent 94%);
    }

    .showcase-precision-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.9rem;
        margin-bottom: 1.25rem;
    }

    .showcase-precision-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .showcase-coverage-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        margin-bottom: 1.25rem;
    }

    .showcase-coverage-card {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        position: relative;
        overflow: hidden;
    }

    .showcase-coverage-card::before,
    .showcase-accordion::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 0.24rem;
        background: var(--showcase-kind-tone, var(--accent));
    }

    .showcase-coverage-card[data-kind="tiny-edit"],
    .showcase-accordion[data-kind="tiny-edit"] {
        --showcase-kind-tone: #0f766e;
    }

    .showcase-coverage-card[data-kind="unique-case"],
    .showcase-accordion[data-kind="unique-case"] {
        --showcase-kind-tone: #2563eb;
    }

    .showcase-coverage-card[data-kind="article-sized-example"],
    .showcase-accordion[data-kind="article-sized-example"] {
        --showcase-kind-tone: #d97706;
    }

    .showcase-coverage-title {
        font-size: 1rem;
        font-weight: 700;
        color: var(--shell-text-strong);
    }

    .showcase-footprint {
        display: grid;
        gap: 0.65rem;
    }

    .showcase-footprint__label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .showcase-footprint__bar {
        position: relative;
        width: 100%;
        height: 0.8rem;
        border-radius: 999px;
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--shell-border), transparent 10%);
        background:
            linear-gradient(90deg, color-mix(in srgb, var(--shell-soft-bg), white 8%), var(--shell-soft-bg));
    }

    .showcase-footprint__changed {
        display: block;
        height: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, color-mix(in srgb, var(--accent), #ffffff 12%), var(--accent));
    }

    .showcase-footprint__meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
    }

    .showcase-footprint__pill {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        border-radius: 999px;
        border: 1px solid var(--shell-border);
        background: var(--shell-soft-bg);
        padding: 0.32rem 0.65rem;
        font-size: 0.76rem;
        color: var(--shell-muted);
    }

    .showcase-footprint__pill.is-changed {
        border-color: color-mix(in srgb, var(--accent), transparent 44%);
        background: color-mix(in srgb, var(--accent), transparent 89%);
        color: var(--accent);
    }

    .showcase-accordion {
        padding: 0;
        overflow: hidden;
        position: relative;
    }

    .showcase-accordion summary {
        list-style: none;
        cursor: pointer;
        padding: 1.25rem;
    }

    .showcase-accordion summary::-webkit-details-marker {
        display: none;
    }

    .showcase-accordion__summary {
        display: grid;
        gap: 1rem;
    }

    .showcase-accordion__main {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .showcase-accordion__aside {
        display: grid;
        gap: 0.75rem;
    }

    .showcase-accordion__body {
        border-top: 1px solid var(--shell-border);
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: color-mix(in srgb, var(--shell-panel-bg), var(--shell-soft-bg) 18%);
    }

    .showcase-accordion__affordance {
        display: inline-flex;
        align-items: center;
        gap: 0.55rem;
        margin-top: 0.2rem;
        color: var(--accent);
        font-size: 0.82rem;
        font-weight: 700;
    }

    .showcase-accordion__chevron {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 999px;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 55%);
        transition: transform 0.15s ease;
    }

    .showcase-accordion[open] .showcase-accordion__chevron {
        transform: rotate(90deg);
    }

    .showcase-detail-grid {
        display: grid;
        gap: 1rem;
    }

    .showcase-precision-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .showcase-precision-group+.showcase-precision-group {
        padding-top: 1.25rem;
        border-top: 1px solid var(--shell-border);
    }

    .showcase-detail-list {
        display: grid;
        gap: 0.75rem;
        margin-top: 0.9rem;
    }

    .showcase-detail-list li {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: flex-start;
        color: var(--shell-muted);
    }

    .showcase-workflow-card {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.35rem;
        min-height: 100%;
        border-color: color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 78%);
        background: linear-gradient(180deg,
                color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 95%),
                var(--shell-panel-bg) 38%);
    }

    .showcase-workflow-card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 0.24rem;
        background: var(--workflow-tone, var(--accent));
    }

    .showcase-workflow-card[data-tone="teal"] {
        --workflow-tone: #0f766e;
    }

    .showcase-workflow-card[data-tone="blue"] {
        --workflow-tone: #2563eb;
    }

    .showcase-workflow-card[data-tone="amber"] {
        --workflow-tone: #d97706;
    }

    .showcase-workflow-card[data-tone="green"] {
        --workflow-tone: #15803d;
    }

    .showcase-workflow-card[data-tone="rose"] {
        --workflow-tone: #be123c;
    }

    .showcase-workflow-list {
        display: grid;
        gap: 1.25rem;
    }

    .showcase-workflow-layout {
        display: grid;
        gap: 1.25rem;
    }

    .showcase-workflow-overview {
        display: flex;
        flex-direction: column;
        gap: 0.95rem;
    }

    .showcase-workflow-kicker-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.6rem;
    }

    .showcase-workflow-kicker {
        display: inline-flex;
        align-items: center;
        min-height: 2rem;
        border-radius: 999px;
        border: 1px solid color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 68%);
        background: color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 88%);
        padding: 0.2rem 0.78rem;
        font-size: 0.76rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--workflow-tone, var(--accent));
    }

    .showcase-workflow-detail {
        display: flex;
        flex-direction: column;
        gap: 0.9rem;
    }

    .showcase-workflow-summary {
        color: var(--shell-text-strong);
        font-size: clamp(0.98rem, 1.6vw, 1.05rem);
        line-height: 1.72;
    }

    .showcase-workflow-facts {
        display: grid;
        gap: 0.75rem;
        margin: 0;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }

    .showcase-workflow-fact {
        display: grid;
        gap: 0.3rem;
        min-height: 100%;
        border-radius: 1rem;
        border: 1px solid color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 80%);
        background: color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 95%);
        padding: 0.9rem 0.95rem;
    }

    .showcase-workflow-fact dt {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--shell-muted);
    }

    .showcase-workflow-fact dd {
        margin: 0;
        color: var(--shell-text-strong);
        line-height: 1.6;
    }

    .showcase-workflow-steps {
        display: grid;
        gap: 0.9rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .showcase-workflow-step {
        position: relative;
        display: grid;
        grid-template-columns: 2.35rem minmax(0, 1fr);
        gap: 0.9rem;
        align-items: start;
        border-radius: 1rem;
        border: 1px solid var(--shell-border);
        background: var(--showcase-surface-soft);
        padding: 1rem;
        color: var(--shell-muted);
    }

    .showcase-workflow-step::after {
        content: "";
        position: absolute;
        inset: 0 auto 0 0;
        width: 0.22rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 28%);
    }

    .showcase-workflow-step__index {
        position: relative;
        z-index: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.35rem;
        height: 2.35rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--workflow-tone, var(--accent)), transparent 84%);
        color: var(--workflow-tone, var(--accent));
        font-size: 0.82rem;
        font-weight: 800;
    }

    .showcase-workflow-step__body {
        display: grid;
        gap: 0.35rem;
        min-width: 0;
    }

    .showcase-workflow-step__label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--workflow-tone, var(--accent));
    }

    .showcase-workflow-step__copy {
        margin: 0;
        color: var(--shell-text-strong);
        line-height: 1.65;
    }

    .showcase-workflow-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .showcase-step-list {
        display: grid;
        gap: 0.8rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .showcase-step-list li {
        display: grid;
        grid-template-columns: 1.9rem minmax(0, 1fr);
        gap: 0.8rem;
        align-items: start;
        color: var(--shell-muted);
    }

    .showcase-step-list__number {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.9rem;
        height: 1.9rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--accent), transparent 86%);
        color: var(--accent);
        font-size: 0.8rem;
        font-weight: 700;
    }

    .showcase-workflow-value {
        border-radius: 0.9rem;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 74%);
        background: color-mix(in srgb, var(--accent), transparent 94%);
        padding: 0.9rem 1rem;
    }

    .showcase-compression-spotlight {
        display: grid;
        gap: 1rem;
        margin-bottom: 1.25rem;
    }

    .showcase-compression-card {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        position: relative;
        overflow: hidden;
        min-height: 100%;
    }

    .showcase-compression-card::before {
        content: "";
        position: absolute;
        inset: 0 0 auto 0;
        height: 0.24rem;
        background: linear-gradient(90deg, #2563eb, #16a34a 72%, #d97706);
    }

    .showcase-compression-card__stat {
        font-size: clamp(1.7rem, 3.8vw, 2.3rem);
        font-weight: 800;
        line-height: 1;
        color: var(--shell-text-strong);
    }

    .showcase-compression-bars {
        display: grid;
        gap: 0.55rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .showcase-compression-bars li {
        display: grid;
        grid-template-columns: 7.5rem minmax(0, 1fr) auto;
        gap: 0.7rem;
        align-items: center;
        font-size: 0.8rem;
        color: var(--shell-muted);
    }

    .showcase-compression-bar {
        height: 0.68rem;
        border-radius: 999px;
        overflow: hidden;
        background: color-mix(in srgb, var(--shell-soft-bg), var(--shell-panel-bg) 16%);
    }

    .showcase-compression-bar>span {
        display: block;
        height: 100%;
        border-radius: 999px;
    }

    .showcase-compression-bar>span.is-raw {
        background: color-mix(in srgb, var(--shell-text-strong), transparent 72%);
    }

    .showcase-compression-bar>span.is-compressed {
        background: #2563eb;
    }

    .showcase-compression-bar>span.is-envelope {
        background: #d97706;
    }

    .showcase-history-layout {
        display: grid;
        gap: 1rem;
    }

    .showcase-history-layout>* {
        min-width: 0;
    }

    .showcase-history-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 0;
    }

    .showcase-history-graph-wrap {
        overflow-x: auto;
        max-width: 100%;
        min-width: 0;
        overscroll-behavior-x: contain;
        -webkit-overflow-scrolling: touch;
        border-radius: 1rem;
        border: 1px solid var(--shell-border);
        background: linear-gradient(180deg, color-mix(in srgb, var(--shell-panel-bg), transparent 3%), var(--shell-soft-bg));
        padding: 1rem;
    }

    .showcase-history-graph {
        display: block;
        min-width: 0;
        width: max(100%, 680px);
        height: auto;
    }

    .showcase-history-graph__branch-line {
        stroke: color-mix(in srgb, var(--shell-text-strong), transparent 78%);
        stroke-width: 2;
    }

    .showcase-history-graph__branch-label {
        fill: var(--shell-text-strong);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }

    .showcase-history-graph__link {
        fill: none;
        stroke-width: 4;
        stroke-linecap: round;
        opacity: 0.9;
    }

    .showcase-history-graph__link.is-sync,
    .showcase-history-graph__link.is-branch {
        stroke: color-mix(in srgb, var(--showcase-review), transparent 20%);
    }

    .showcase-history-graph__link.is-review,
    .showcase-history-graph__link.is-merge,
    .showcase-history-graph__link.is-promote {
        stroke: color-mix(in srgb, var(--showcase-merge), transparent 18%);
    }

    .showcase-history-graph__link.is-revert {
        stroke: color-mix(in srgb, var(--showcase-revert), transparent 10%);
        stroke-dasharray: 7 6;
    }

    .showcase-history-graph__node {
        stroke: var(--shell-panel-bg);
        stroke-width: 3;
    }

    .showcase-history-graph__node.is-publish,
    .showcase-history-graph__node.is-sync {
        fill: var(--showcase-review);
    }

    .showcase-history-graph__node.is-edit {
        fill: var(--showcase-edit);
    }

    .showcase-history-graph__node.is-review,
    .showcase-history-graph__node.is-merge,
    .showcase-history-graph__node.is-promote {
        fill: var(--showcase-merge);
    }

    .showcase-history-graph__node.is-revert,
    .showcase-history-graph__node.is-revert-merge {
        fill: var(--showcase-revert);
    }

    .showcase-history-graph__node-label {
        fill: var(--shell-text-strong);
        font-size: 13px;
        font-weight: 700;
    }

    .showcase-history-graph__node-meta,
    .showcase-history-graph__time {
        fill: var(--shell-muted);
        font-size: 11px;
    }

    .showcase-history-event-list {
        display: grid;
        gap: 0.85rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .showcase-history-event {
        display: grid;
        gap: 0.45rem;
        border-radius: 0.95rem;
        border: 1px solid var(--shell-border);
        background: var(--showcase-surface-soft);
        padding: 0.85rem 0.95rem;
    }

    .showcase-history-event__head {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
        align-items: center;
        justify-content: space-between;
    }

    .showcase-history-event__title {
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--shell-text-strong);
    }

    .showcase-history-pill-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.45rem;
    }

    .showcase-history-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 0.55rem;
    }

    .showcase-history-legend__item {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        border-radius: 999px;
        border: 1px solid var(--shell-border);
        background: var(--showcase-surface-soft);
        padding: 0.35rem 0.7rem;
        font-size: 0.78rem;
        color: var(--shell-muted);
    }

    .showcase-history-legend__dot {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 999px;
        flex: 0 0 auto;
    }

    .showcase-history-legend__dot.is-edit {
        background: var(--showcase-edit);
    }

    .showcase-history-legend__dot.is-review {
        background: var(--showcase-review);
    }

    .showcase-history-legend__dot.is-merge {
        background: var(--showcase-merge);
    }

    .showcase-history-legend__dot.is-revert {
        background: var(--showcase-revert);
    }

    .showcase-sveltekit-grid {
        display: grid;
        gap: 1rem;
    }

    .showcase-sveltekit-card {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        min-height: 100%;
    }

    .showcase-finish {
        position: relative;
        overflow: hidden;
        border: 1px solid color-mix(in srgb, var(--accent), transparent 72%);
        background:
            linear-gradient(135deg, color-mix(in srgb, var(--accent), transparent 93%), transparent 68%),
            var(--shell-panel-bg);
    }

    .showcase-finish::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
            radial-gradient(circle at top left, color-mix(in srgb, var(--accent), transparent 86%), transparent 44%),
            radial-gradient(circle at bottom right, color-mix(in srgb, #2563eb, transparent 90%), transparent 36%);
        pointer-events: none;
    }

    .showcase-finish>* {
        position: relative;
        z-index: 1;
    }

    .showcase-finish-grid {
        display: grid;
        gap: 1rem;
    }

    .showcase-finish-card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-height: 100%;
        text-decoration: none;
        color: inherit;
        transition: border-color 0.15s ease, background 0.15s ease, transform 0.15s ease;
    }

    .showcase-finish-card:hover,
    .showcase-finish-card:focus-visible {
        border-color: color-mix(in srgb, var(--accent), transparent 48%);
        background: color-mix(in srgb, var(--accent), transparent 94%);
        transform: translateY(-1px);
    }

    .showcase-code-grid--precision {
        grid-template-columns: 1fr;
    }

    .showcase-codeblock {
        border-radius: 1rem;
        border: 1px solid var(--shell-border);
        background: color-mix(in srgb, var(--shell-pre-bg), transparent 4%);
        overflow: hidden;
    }

    .showcase-codeblock__line {
        display: grid;
        grid-template-columns: 3rem 3rem minmax(0, 1fr);
        gap: 0.75rem;
        align-items: start;
        padding: 0.34rem 0.9rem;
        border-top: 1px solid color-mix(in srgb, var(--shell-border), transparent 55%);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.84rem;
        line-height: 1.7;
    }

    .showcase-codeblock__line:first-child {
        border-top: 0;
    }

    .showcase-codeblock__line.is-changed {
        background: color-mix(in srgb, var(--accent), transparent 92%);
    }

    .showcase-codeblock__number {
        color: var(--shell-muted);
        text-align: right;
        user-select: none;
    }

    .showcase-codeblock__marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 1.4rem;
        border-radius: 999px;
        color: transparent;
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        line-height: 1;
        text-transform: uppercase;
        user-select: none;
    }

    .showcase-codeblock__line.is-changed .showcase-codeblock__marker {
        background: color-mix(in srgb, var(--accent), transparent 88%);
        color: var(--accent);
    }

    .showcase-codeblock__text {
        white-space: pre;
        overflow-x: auto;
        color: var(--shell-code-text);
    }

    .syntax-key {
        color: #7c3aed;
    }

    .syntax-string {
        color: #047857;
    }

    .syntax-number {
        color: #b45309;
    }

    .syntax-literal,
    .syntax-keyword {
        color: #1d4ed8;
        font-weight: 600;
    }

    .syntax-tag,
    .syntax-function {
        color: #b91c1c;
    }

    .syntax-attr,
    .syntax-variable {
        color: #9333ea;
    }

    .syntax-punctuation {
        color: color-mix(in srgb, var(--shell-text-strong), transparent 24%);
    }

    @media (prefers-color-scheme: light) {
        .showcase-hero {
            border-color: color-mix(in srgb, var(--accent), transparent 78%);
            background:
                linear-gradient(135deg, color-mix(in srgb, white, var(--shell-panel-bg) 18%), color-mix(in srgb, #eef6e9, white 74%));
            box-shadow: 0 18px 40px color-mix(in srgb, #0f172a, transparent 92%);
        }

        .showcase-hero::before {
            background:
                radial-gradient(circle at top right, color-mix(in srgb, #84cc16, transparent 90%), transparent 48%),
                radial-gradient(circle at bottom left, color-mix(in srgb, #2563eb, transparent 95%), transparent 42%),
                linear-gradient(135deg, color-mix(in srgb, white, var(--shell-panel-bg) 28%), transparent 70%);
        }

        .showcase-hero__copy,
        .showcase-topic-card .shell-copy,
        .showcase-chart-caption,
        .showcase-hero__fact p,
        .showcase-hero__launcher-copy span,
        .showcase-topic-overview__stat p {
            color: color-mix(in srgb, var(--shell-text), var(--shell-muted) 34%);
        }

        .showcase-chip-row .tag,
        .showcase-chip-list .tag,
        .showcase-history-legend__item {
            border-color: color-mix(in srgb, var(--shell-border), transparent 4%);
            background: color-mix(in srgb, white, var(--shell-soft-bg) 30%);
        }

        .showcase-hero__fact,
        .showcase-topic-overview__stat,
        .showcase-history-event,
        .showcase-history-graph-wrap {
            border-color: color-mix(in srgb, var(--shell-border), transparent 2%);
            background: color-mix(in srgb, white, var(--shell-soft-bg) 26%);
            box-shadow: 0 10px 24px color-mix(in srgb, #0f172a, transparent 96%);
        }

        .showcase-chart-card,
        .showcase-hero__launcher {
            border-color: color-mix(in srgb, var(--accent), transparent 80%);
            background: linear-gradient(180deg,
                    color-mix(in srgb, white, var(--shell-panel-bg) 24%),
                    color-mix(in srgb, #f3f9ec, white 72%));
        }

        .showcase-donut::after {
            background: color-mix(in srgb, white, var(--shell-panel-bg) 14%);
            border-color: color-mix(in srgb, var(--shell-border), transparent 6%);
        }

        .showcase-chart-legend li {
            color: color-mix(in srgb, var(--shell-text), var(--shell-muted) 32%);
        }

        .showcase-hero__launcher-link {
            border-color: color-mix(in srgb, var(--shell-border), transparent 8%);
            background: color-mix(in srgb, white, var(--shell-soft-bg) 26%);
        }

        .showcase-hero__launcher-link:hover,
        .showcase-hero__launcher-link:focus-visible,
        .showcase-anchor-list a:hover,
        .showcase-anchor-list a:focus-visible {
            border-color: color-mix(in srgb, var(--accent), transparent 46%);
            background: color-mix(in srgb, var(--accent), white 92%);
        }

        .showcase-hero__launcher-link.is-primary {
            border-color: color-mix(in srgb, var(--accent), transparent 38%);
            background: linear-gradient(180deg,
                    color-mix(in srgb, var(--accent), white 92%),
                    color-mix(in srgb, white, var(--shell-soft-bg) 22%));
        }

        .showcase-topic-card {
            background: linear-gradient(180deg,
                    color-mix(in srgb, var(--showcase-topic-tone), white 95%),
                    color-mix(in srgb, white, var(--shell-panel-bg) 12%) 42%);
            box-shadow: 0 12px 28px color-mix(in srgb, #0f172a, transparent 96%);
        }

        .showcase-topic-card:hover,
        .showcase-topic-card:focus-visible {
            background: linear-gradient(180deg,
                    color-mix(in srgb, var(--showcase-topic-tone), white 92%),
                    color-mix(in srgb, white, var(--shell-panel-bg) 10%) 44%);
        }

        .showcase-topic-card__stat {
            border-color: color-mix(in srgb, var(--showcase-topic-tone), transparent 74%);
            background: color-mix(in srgb, var(--showcase-topic-tone), white 93%);
        }

        .showcase-topic-card__footer {
            border-top-color: color-mix(in srgb, var(--showcase-topic-tone), transparent 74%);
            color: color-mix(in srgb, var(--showcase-topic-tone), #0f172a 38%);
        }

        .showcase-topic-card__points li::before {
            background: color-mix(in srgb, var(--showcase-topic-tone), transparent 26%);
        }

        .showcase-codeblock {
            background: color-mix(in srgb, white, var(--shell-pre-bg) 16%);
        }
    }

    @media (prefers-contrast: more) {

        .showcase-anchor-list a,
        .showcase-history-event,
        .showcase-footprint__pill,
        .showcase-workflow-value {
            border-width: 2px;
        }

        .showcase-codeblock__line.is-changed {
            box-shadow: inset 4px 0 0 var(--showcase-edit);
        }
    }

    @media (prefers-reduced-motion: reduce) {

        .showcase-stack *,
        .showcase-stack *::before,
        .showcase-stack *::after {
            transition: none !important;
            animation: none !important;
            scroll-behavior: auto !important;
        }
    }

    @media (min-width: 760px) {
        .showcase-hero__layout {
            grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
            align-items: start;
        }

        .showcase-hero-analytics {
            grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
        }

        .showcase-chart-visual {
            grid-template-columns: 200px minmax(0, 1fr);
        }

        .showcase-workflow-layout {
            grid-template-columns: minmax(250px, 0.78fr) minmax(0, 1.22fr);
            align-items: start;
        }

        .showcase-compression-spotlight {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-topic-grid,
        .showcase-summary-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }

    @media (min-width: 960px) {
        .showcase-hero__layout {
            align-items: stretch;
        }

        .showcase-topic-overview__intro {
            grid-template-columns: minmax(0, 1.18fr) minmax(320px, 0.82fr);
        }

        .showcase-code-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-kicker {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            align-items: start;
        }

        .showcase-kicker> :first-child {
            grid-column: 1 / -1;
        }

        .showcase-kicker>.showcase-hero__launcher {
            grid-column: 1 / -1;
        }

        .showcase-hero__launcher-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .showcase-accordion__summary {
            grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
        }

        .showcase-detail-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-code-grid--precision {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-history-layout {
            grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
            align-items: start;
        }

        .showcase-sveltekit-grid {
            grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr);
            align-items: start;
        }

        .showcase-summary-grid {
            grid-template-columns: minmax(0, 1.45fr) minmax(340px, 0.75fr);
            align-items: start;
        }

        .showcase-summary-split {
            grid-template-columns: minmax(280px, 0.88fr) minmax(0, 1.12fr);
        }

        .showcase-compression-spotlight {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .showcase-finish-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .showcase-topic-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }

        .showcase-topic-grid>* {
            grid-column: span 4;
        }

        .showcase-topic-grid> :nth-child(-n+2) {
            grid-column: span 6;
        }
    }

    @media (min-width: 1600px) {
        .showcase-hero__layout {
            grid-template-columns: minmax(0, 1.18fr) minmax(520px, 0.82fr);
        }

        .showcase-summary-grid {
            grid-template-columns: minmax(0, 1.58fr) minmax(420px, 0.62fr);
        }

        .showcase-summary-split {
            grid-template-columns: minmax(360px, 0.82fr) minmax(0, 1.18fr);
        }

        .showcase-topic-grid {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }

        .showcase-topic-grid>* {
            grid-column: span 4;
        }

        .showcase-topic-grid> :nth-child(-n+2) {
            grid-column: span 6;
        }
    }

    @media (max-width: 879px) {
        main.page-shell {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
        }

        .showcase-hero__layout,
        .showcase-hero-analytics,
        .showcase-chart-visual,
        .showcase-workflow-layout,
        .showcase-summary-grid {
            grid-template-columns: 1fr;
        }

        .showcase-topic-card__stat {
            min-width: 0;
            text-align: left;
        }

        .showcase-page-nav,
        .showcase-anchor-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-topic-overview__stats {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .showcase-hero__launcher-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-hero__launcher-link {
            padding: 0.68rem 0.75rem;
            gap: 0.65rem;
        }

        .showcase-hero__launcher-index {
            width: 1.7rem;
            height: 1.7rem;
            min-width: 1.7rem;
            font-size: 0.73rem;
        }

        .showcase-hero__launcher-copy strong {
            font-size: 0.84rem;
        }

        .showcase-hero__launcher-copy span {
            font-size: 0.72rem;
        }

        .showcase-hero__fact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-hero__fact-grid> :last-child {
            grid-column: 1 / -1;
        }

        .showcase-stack>.table-card,
        .showcase-stack>.shell-panel {
            padding: 1.15rem;
            border-radius: 1.2rem;
        }

        .showcase-section-head {
            margin-bottom: 1rem;
        }
    }

    @media (max-width: 639px) {
        main.page-shell {
            padding-left: 0.4rem;
            padding-right: 0.4rem;
        }

        .showcase-stack {
            gap: 1rem;
        }

        .showcase-stack>.table-card,
        .showcase-stack>.shell-panel {
            padding: 0.95rem;
            border-radius: 1rem;
        }

        .showcase-stack .surface-panel {
            padding: 0.9rem;
            border-radius: 1rem;
        }

        .showcase-hero__title {
            max-width: 13ch;
            font-size: clamp(2.05rem, 9vw, 2.85rem);
        }

        .showcase-hero__copy {
            font-size: 0.96rem;
            line-height: 1.62;
        }

        .showcase-hero__content {
            grid-template-columns: 1fr;
        }

        .showcase-page-nav,
        .showcase-anchor-list {
            grid-template-columns: 1fr;
        }

        .showcase-chart-legend li {
            grid-template-columns: 0.85rem minmax(0, 1fr);
            gap: 0.5rem;
            align-items: start;
        }

        .showcase-chart-legend li span:last-child {
            grid-column: 2;
            font-size: 0.78rem;
            font-weight: 700;
        }

        .showcase-codeblock__line {
            grid-template-columns: 2.2rem 2.6rem minmax(0, 1fr);
            gap: 0.45rem;
            padding: 0.3rem 0.55rem;
            font-size: 0.76rem;
        }

        .showcase-codeblock__marker {
            min-height: 1.25rem;
            font-size: 0.55rem;
        }

        .showcase-codeblock__text,
        .showcase-file-path {
            white-space: pre-wrap;
            word-break: break-word;
            overflow-wrap: anywhere;
        }

        .showcase-metrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .showcase-metric {
            padding: 0.75rem 0.8rem;
        }

        .showcase-precision-toolbar {
            align-items: stretch;
        }

        .showcase-precision-actions {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.65rem;
        }

        .showcase-precision-actions .ghost-button {
            width: 100%;
        }

        .showcase-history-graph-wrap {
            padding: 0.75rem;
        }

        .showcase-history-graph {
            width: max(100%, 560px);
        }
    }

    @media (max-width: 479px) {

        .showcase-metrics,
        .showcase-page-nav,
        .showcase-anchor-list {
            grid-template-columns: 1fr;
        }

        .showcase-hero__fact-grid,
        .showcase-hero__launcher-grid,
        .showcase-topic-overview__stats {
            grid-template-columns: 1fr;
        }

        .showcase-topic-card__head {
            flex-direction: column;
        }

        .showcase-topic-card__stat {
            min-width: 0;
            width: 100%;
            text-align: left;
        }

        .showcase-chart-caption {
            font-size: 0.78rem;
        }
    }
</style>

<?php
$hubChartFill = '';
if ($showcasePage === 'hub') {
    $hubChartStops = [];
    $hubChartOffset = 0.0;
    foreach ($showcase['chart']['segments'] as $segment) {
        $hubNextOffset = $hubChartOffset + ((float)$segment['ratio'] * 100);
        $hubChartStops[] = $segment['color'] . ' ' . number_format($hubChartOffset, 2, '.', '') . '% ' . number_format($hubNextOffset, 2, '.', '') . '%';
        $hubChartOffset = $hubNextOffset;
    }
    $hubChartFill = 'conic-gradient(' . implode(', ', $hubChartStops) . ')';
}
?>

<section class="showcase-stack">
    <section class="shell-panel p-5 sm:p-7 showcase-hero">
        <div class="showcase-hero__layout">
            <div class="showcase-hero__content">
                <div class="showcase-hero__lead">
                    <div class="section-label"><?php echo htmlspecialchars($showcasePage === 'hub' ? $showcase['hero']['eyebrow'] : ('Showcase · ' . $currentShowcasePage['label'])); ?></div>
                    <h1 class="shell-strong showcase-hero__title">
                        <?php echo htmlspecialchars((string)$currentShowcasePage['title']); ?>
                    </h1>
                    <p class="shell-copy showcase-hero__copy">
                        <?php echo htmlspecialchars((string)$currentShowcasePage['copy']); ?>
                    </p>
                    <div class="showcase-chip-row">
                        <span class="tag"><?php echo htmlspecialchars($showcasePage === 'hub' ? 'Read-only route' : 'Focused topic page'); ?></span>
                        <span class="tag">Representative synthetic fixtures only</span>
                        <span class="tag">Not a production trace</span>
                        <span class="tag">No live API or storage inspection</span>
                    </div>
                    <div class="showcase-actions">
                        <?php if ($showcasePage === 'hub'): ?>
                            <a class="pill-button" href="<?php echo htmlspecialchars(showcase_control_plane_path('storage')); ?>">
                                Storage profile
                            </a>
                            <a class="ghost-button" href="<?php echo htmlspecialchars(showcase_control_plane_path('precision')); ?>">
                                Precision edits
                            </a>
                            <a class="ghost-button" href="<?php echo htmlspecialchars(showcase_control_plane_path('operations')); ?>">
                                Operations
                            </a>
                        <?php else: ?>
                            <a class="pill-button" href="<?php echo htmlspecialchars(efsdb_control_plane_path('builder')); ?>">
                                Open Builder
                            </a>
                            <a class="ghost-button" href="<?php echo htmlspecialchars(efsdb_control_plane_path('explorer')); ?>">
                                Open Explorer
                            </a>
                            <a class="ghost-button" href="<?php echo htmlspecialchars(efsdb_control_plane_path('environments')); ?>">
                                Review Environments
                            </a>
                        <?php endif; ?>
                    </div>

                    <?php if ($showcasePage === 'hub'): ?>
                        <div class="showcase-hero__fact-grid" aria-label="Hub facts">
                            <article class="showcase-hero__fact">
                                <strong>Public website</strong>
                                <p><code>/</code> stays the public entry point while the showcase remains in the control plane.</p>
                            </article>
                            <article class="showcase-hero__fact">
                                <strong>Editing model</strong>
                                <p>Builder handles live editing. Explorer stays separate for inspection and tracing.</p>
                            </article>
                            <article class="showcase-hero__fact">
                                <strong>Safety model</strong>
                                <p>Every example on this page is synthetic, representative, and deliberately read-only.</p>
                            </article>
                        </div>
                    <?php endif; ?>
                </div>

            </div>

            <aside class="showcase-hero__aside showcase-kicker">
                <?php if ($showcasePage === 'hub'): ?>
                    <article class="surface-panel showcase-chart-card">
                        <div class="section-label">Representative storage profile</div>
                        <div class="showcase-chart-visual mt-4">
                            <div class="showcase-donut" style="--chart-fill: <?php echo htmlspecialchars($hubChartFill, ENT_QUOTES, 'UTF-8'); ?>;" role="img" aria-labelledby="showcase-hub-chart-title showcase-hub-chart-desc">
                                <span class="showcase-sr-only" id="showcase-hub-chart-title">Representative storage profile chart</span>
                                <span class="showcase-sr-only" id="showcase-hub-chart-desc">Synthetic chart showing representative compressed payload, savings before the envelope step, and synthetic envelope overhead.</span>
                                <div class="showcase-donut__center">
                                    <div class="showcase-donut__value"><?php echo htmlspecialchars(ShowcaseDemo::formatPercent(((float)$showcase['chart']['savedBytes']) / max(1, (int)$showcase['chart']['rawBytes']))); ?></div>
                                    <div class="showcase-donut__label">saved before envelope</div>
                                </div>
                            </div>
                            <ul class="showcase-chart-legend">
                                <?php foreach ($showcase['chart']['segments'] as $segment): ?>
                                    <li>
                                        <span class="showcase-chart-swatch" style="background: <?php echo htmlspecialchars($segment['color']); ?>;"></span>
                                        <span><?php echo htmlspecialchars($segment['label']); ?></span>
                                        <span><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$segment['bytes'])); ?></span>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                        <p class="showcase-chart-caption">
                            Synthetic chart only. It keeps the storage picture visible on the landing page without exposing live traces or real storage metrics.
                        </p>
                    </article>
                <?php endif; ?>

                <?php if ($showcasePage === 'hub'): ?>
                    <div class="surface-panel showcase-hero__launcher">
                        <div class="section-label">Choose a starting point</div>
                        <p class="shell-copy mt-3">
                            Start with the part of EFSDB you want to understand first. Each walkthrough stays synthetic, read-only, and scoped to one concern.
                        </p>
                        <div class="showcase-hero__launcher-grid" role="list" aria-label="Showcase starting points">
                            <?php foreach ($showcaseLaunchCards as $index => $card): ?>
                                <?php $launchHref = $showcasePages[$card['page']]['href']; ?>
                                <a class="showcase-hero__launcher-link<?php echo $index === 0 ? ' is-primary' : ''; ?>" href="<?php echo htmlspecialchars((string)$launchHref); ?>">
                                    <span class="showcase-hero__launcher-index"><?php echo htmlspecialchars((string)$card['index']); ?></span>
                                    <span class="showcase-hero__launcher-copy">
                                        <strong><?php echo htmlspecialchars((string)$card['title']); ?></strong>
                                        <span><?php echo htmlspecialchars((string)$card['summary']); ?></span>
                                    </span>
                                </a>
                            <?php endforeach; ?>
                        </div>
                        <p class="showcase-chart-caption">
                            Live tools stay separate from this showcase. Builder edits, Explorer inspects, and Environments handles staged promotion.
                        </p>
                        <div class="showcase-hero__tool-row">
                            <a class="pill-button" href="<?php echo htmlspecialchars(efsdb_control_plane_path('builder')); ?>">Open Builder</a>
                            <a class="ghost-button" href="<?php echo htmlspecialchars(efsdb_control_plane_path('explorer')); ?>">Open Explorer</a>
                            <a class="ghost-button" href="<?php echo htmlspecialchars(efsdb_control_plane_path('environments')); ?>">Review Environments</a>
                        </div>
                    </div>
                <?php else: ?>
                    <div class="surface-panel">
                        <div class="section-label">Showcase pages</div>
                        <p class="shell-copy mt-3">
                            Move between the overview and the smaller showcase pages without leaving the native control-plane shell.
                        </p>
                        <nav class="showcase-page-nav mt-4" aria-label="Showcase pages">
                            <?php foreach ($showcasePageNav as $page): ?>
                                <?php $isActivePage = $page['href'] === $currentShowcasePage['href']; ?>
                                <a class="showcase-page-nav__link<?php echo $isActivePage ? ' is-active' : ''; ?>" href="<?php echo htmlspecialchars((string)$page['href']); ?>">
                                    <span class="showcase-page-nav__label"><?php echo htmlspecialchars((string)$page['label']); ?></span>
                                    <span class="showcase-page-nav__summary"><?php echo htmlspecialchars((string)$page['summary']); ?></span>
                                </a>
                            <?php endforeach; ?>
                        </nav>
                    </div>
                    <div class="surface-panel">
                        <div class="section-label">This page focuses on</div>
                        <p class="shell-copy mt-3">
                            <?php echo htmlspecialchars((string)$currentShowcasePage['summary']); ?>. The detail page is still representative, synthetic, and read-only.
                        </p>
                    </div>
                <?php endif; ?>
            </aside>
        </div>
    </section>

    <?php if ($showcasePage === 'hub'): ?>
        <section class="table-card showcase-topic-overview">
            <div class="showcase-topic-overview__intro">
                <div class="showcase-section-head">
                    <div class="section-label">Focused walkthroughs</div>
                    <h2 class="page-title">Explore the platform by concern</h2>
                    <p class="shell-copy">
                        Each destination isolates one part of the platform story, so you can jump straight to storage, editing behavior, security, runtime fit, or operational flow.
                    </p>
                </div>
                <div class="showcase-topic-overview__stats" aria-label="Walkthrough section summary">
                    <article class="showcase-topic-overview__stat">
                        <div class="section-label">Walkthroughs</div>
                        <strong><?php echo htmlspecialchars((string)count($showcaseTopicCards)); ?></strong>
                        <p>Focused topic pages inside the same control-plane shell.</p>
                    </article>
                    <article class="showcase-topic-overview__stat">
                        <div class="section-label">Shell</div>
                        <strong>1</strong>
                        <p>Shared navigation and routing model across the whole showcase.</p>
                    </article>
                    <article class="showcase-topic-overview__stat">
                        <div class="section-label">Live traces</div>
                        <strong>0</strong>
                        <p>Synthetic examples only, with no live storage inspection or customer data.</p>
                    </article>
                </div>
            </div>
            <div class="showcase-topic-grid">
                <?php foreach ($showcaseTopicCards as $cardIndex => $card): ?>
                    <?php $cardHref = $showcasePages[$card['page']]['href']; ?>
                    <?php $cardNumber = str_pad((string)($cardIndex + 1), 2, '0', STR_PAD_LEFT); ?>
                    <a class="surface-panel showcase-topic-card" data-topic="<?php echo htmlspecialchars((string)$card['page']); ?>" href="<?php echo htmlspecialchars((string)$cardHref); ?>">
                        <div class="showcase-topic-card__topline">
                            <span class="showcase-topic-card__index"><?php echo htmlspecialchars($cardNumber); ?></span>
                            <span class="showcase-topic-card__eyebrow"><?php echo htmlspecialchars((string)$card['eyebrow']); ?></span>
                        </div>
                        <div class="showcase-topic-card__head">
                            <div>
                                <h3 class="metric-heading mt-0"><?php echo htmlspecialchars((string)$card['title']); ?></h3>
                            </div>
                            <div class="showcase-topic-card__stat">
                                <strong><?php echo htmlspecialchars((string)$card['statValue']); ?></strong>
                                <span><?php echo htmlspecialchars((string)$card['statLabel']); ?></span>
                            </div>
                        </div>
                        <p class="shell-copy"><?php echo htmlspecialchars((string)$card['summary']); ?></p>
                        <ul class="showcase-topic-card__points">
                            <?php foreach ($card['points'] as $point): ?>
                                <li><?php echo htmlspecialchars((string)$point); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <div class="showcase-topic-card__footer">
                            <span>Open walkthrough</span>
                            <span aria-hidden="true">&rarr;</span>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </section>
    <?php endif; ?>

    <?php if ($showcasePage === 'storage'): ?>
        <section class="table-card" id="showcase-profile">
            <?php
            $chartStops = [];
            $chartOffset = 0.0;
            foreach ($showcase['chart']['segments'] as $segment) {
                $nextOffset = $chartOffset + ((float)$segment['ratio'] * 100);
                $chartStops[] = $segment['color'] . ' ' . number_format($chartOffset, 2, '.', '') . '% ' . number_format($nextOffset, 2, '.', '') . '%';
                $chartOffset = $nextOffset;
            }
            $chartFill = 'conic-gradient(' . implode(', ', $chartStops) . ')';
            ?>
            <div class="showcase-section-head">
                <div class="section-label"><?php echo htmlspecialchars($showcase['chart']['title']); ?></div>
                <h2 class="page-title">Stored bytes, saved bytes, and overhead at a glance</h2>
                <p class="shell-copy"><?php echo htmlspecialchars($showcase['chart']['copy']); ?></p>
            </div>

            <div class="showcase-hero-analytics">
                <article class="surface-panel showcase-chart-card">
                    <div class="showcase-chart-visual">
                        <div class="showcase-donut" style="--chart-fill: <?php echo htmlspecialchars($chartFill, ENT_QUOTES, 'UTF-8'); ?>;" role="img" aria-labelledby="showcase-profile-chart-title showcase-profile-chart-desc">
                            <span class="showcase-sr-only" id="showcase-profile-chart-title">Representative storage profile chart</span>
                            <span class="showcase-sr-only" id="showcase-profile-chart-desc">
                                Synthetic chart showing representative compressed payload, compression savings before the envelope step, and synthetic envelope overhead.
                            </span>
                            <div class="showcase-donut__center">
                                <div class="showcase-donut__value"><?php echo htmlspecialchars(ShowcaseDemo::formatPercent(((float)$showcase['chart']['savedBytes']) / max(1, (int)$showcase['chart']['rawBytes']))); ?></div>
                                <div class="showcase-donut__label">saved before envelope</div>
                            </div>
                        </div>

                        <ul class="showcase-chart-legend">
                            <?php foreach ($showcase['chart']['segments'] as $segment): ?>
                                <li>
                                    <span class="showcase-chart-swatch" style="background: <?php echo htmlspecialchars($segment['color']); ?>;"></span>
                                    <span><?php echo htmlspecialchars($segment['label']); ?></span>
                                    <span><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$segment['bytes'])); ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </article>

                <article class="surface-panel">
                    <div class="showcase-metrics">
                        <div class="showcase-metric">
                            <div class="showcase-metric__label">Raw plaintext</div>
                            <div class="showcase-metric__value"><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$showcase['chart']['rawBytes'])); ?></div>
                        </div>
                        <div class="showcase-metric">
                            <div class="showcase-metric__label">Stored form</div>
                            <div class="showcase-metric__value"><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$showcase['chart']['storedBytes'])); ?></div>
                        </div>
                        <div class="showcase-metric">
                            <div class="showcase-metric__label">Compression savings</div>
                            <div class="showcase-metric__value"><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$showcase['chart']['savedBytes'])); ?></div>
                        </div>
                    </div>
                    <div class="showcase-callout mt-6">
                        <div class="section-label">What the pie means</div>
                        <p class="shell-copy mt-2">
                            Blue shows the representative compressed payload that still needs to be stored. Green shows representative bytes avoided by compression. Amber shows the small synthetic envelope overhead added afterward.
                        </p>
                        <p class="showcase-chart-caption mt-3">
                            The chart is illustrative only. It summarizes one representative synthetic fixture and does not expose live storage metrics.
                        </p>
                    </div>
                </article>
            </div>

            <div class="showcase-profile-strengths">
                <div class="showcase-section-head" style="margin-bottom: 0;">
                    <div class="section-label">Platform strengths</div>
                    <h2 class="page-title">What this walkthrough demonstrates</h2>
                    <p class="shell-copy">
                        The same representative storage profile also anchors the main strengths: secure storage handling, precise mutation, structured delivery, and role-aware operational clarity.
                    </p>
                </div>

                <div class="showcase-grid showcase-grid--wide">
                    <?php foreach ($showcase['strengths'] as $index => $strength): ?>
                        <article class="surface-panel showcase-card">
                            <span class="showcase-card__marker"><?php echo $index + 1; ?></span>
                            <h3 class="metric-heading mt-0"><?php echo htmlspecialchars($strength['title']); ?></h3>
                            <p class="shell-copy"><?php echo htmlspecialchars($strength['copy']); ?></p>
                        </article>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>

    <?php endif; ?>

    <?php if ($showcasePage === 'precision'): ?>
        <script>
            window.addEventListener('DOMContentLoaded', function() {
                const root = document.getElementById('showcase-precision-list');
                if (!root) {
                    return;
                }

                const accordions = Array.from(root.querySelectorAll('[data-showcase-accordion]'));
                const openAll = document.querySelector('[data-showcase-expand-all]');
                const collapseAll = document.querySelector('[data-showcase-collapse-all]');

                if (openAll) {
                    openAll.addEventListener('click', function() {
                        accordions.forEach(function(panel) {
                            panel.open = true;
                        });
                    });
                }

                if (collapseAll) {
                    collapseAll.addEventListener('click', function() {
                        accordions.forEach(function(panel) {
                            panel.open = false;
                        });
                    });
                }
            });
        </script>

        <section class="table-card" id="showcase-precision">
            <?php
            $precisionGroups = [
                [
                    'title' => 'Tiny edit examples',
                    'copy' => 'Single-line or single-sentence changes that stay tightly localized in the representative model.',
                    'files' => array_values(array_filter(
                        $showcase['precision']['files'],
                        static fn(array $file): bool => ($file['kind'] ?? '') === 'Tiny edit'
                    )),
                ],
                [
                    'title' => 'Broader representative cases',
                    'copy' => 'Larger route-level and article-sized updates, still shown with explicit rewrite scope instead of a single blended wall of examples.',
                    'files' => array_values(array_filter(
                        $showcase['precision']['files'],
                        static fn(array $file): bool => ($file['kind'] ?? '') !== 'Tiny edit'
                    )),
                ],
            ];
            ?>
            <div class="showcase-section-head">
                <div class="section-label">Precision File Manipulation Demo</div>
                <h2 class="page-title">Representative edit locality</h2>
                <p class="shell-copy">
                    <?php echo htmlspecialchars($showcase['precision']['notice']); ?>
                </p>
                <div class="showcase-callout">
                    <div class="section-label">Representative model</div>
                    <p class="shell-copy mt-2">
                        <?php echo htmlspecialchars($showcase['precision']['segmentModel']); ?>
                    </p>
                </div>
            </div>

            <div class="showcase-precision-toolbar">
                <div class="showcase-chip-row" style="margin-top: 0;">
                    <span class="tag"><?php echo htmlspecialchars((string)count($showcase['precision']['files'])); ?> representative examples</span>
                    <span class="tag">2 tiny edits + 1 route case + 1 article case</span>
                    <span class="tag">JSON, HTML, PHP, article-sized content</span>
                    <span class="tag">Collapsed by default</span>
                </div>
                <div class="showcase-precision-actions">
                    <button type="button" class="ghost-button" data-showcase-expand-all>Open all examples</button>
                    <button type="button" class="ghost-button" data-showcase-collapse-all>Collapse all</button>
                </div>
            </div>

            <div class="showcase-detail-grid" style="margin-bottom: 1.25rem;">
                <article class="surface-panel">
                    <div class="section-label">Representative footprint legend</div>
                    <p class="shell-copy mt-3"><?php echo htmlspecialchars($showcase['precision']['segmentLegend']); ?></p>
                </article>
                <article class="surface-panel">
                    <div class="section-label">Code highlight legend</div>
                    <p class="shell-copy mt-3"><?php echo htmlspecialchars($showcase['precision']['highlightLegend']); ?></p>
                </article>
            </div>

            <div class="showcase-section-head" style="margin-bottom: 1rem;">
                <div class="section-label">Quick compare</div>
                <p class="shell-copy">
                    The four representative files below give a fast side-by-side read before opening the detailed before/after views.
                </p>
            </div>

            <div class="showcase-coverage-grid">
                <?php foreach ($showcase['precision']['files'] as $file): ?>
                    <?php $kindSlug = showcase_slugify_label((string)$file['kind']); ?>
                    <article class="surface-panel showcase-coverage-card" data-kind="<?php echo htmlspecialchars($kindSlug); ?>">
                        <span class="tag" style="width: fit-content;"><?php echo htmlspecialchars($file['kind']); ?></span>
                        <div class="showcase-file-path"><?php echo htmlspecialchars($file['path']); ?></div>
                        <div class="showcase-coverage-title"><?php echo htmlspecialchars($file['title']); ?></div>
                        <p class="shell-copy"><?php echo htmlspecialchars($file['summary']); ?></p>
                        <?php echo showcase_render_segment_footprint((int)$file['touchedSegments'], (int)$file['totalSegments'], (float)$file['rewriteRatio'], 'Change footprint'); ?>
                    </article>
                <?php endforeach; ?>
            </div>

            <div class="showcase-stack" id="showcase-precision-list">
                <?php foreach ($precisionGroups as $group): ?>
                    <div class="showcase-precision-group">
                        <div class="showcase-section-head" style="margin-bottom: 0;">
                            <div class="section-label"><?php echo htmlspecialchars($group['title']); ?></div>
                            <p class="shell-copy"><?php echo htmlspecialchars($group['copy']); ?></p>
                        </div>

                        <div class="showcase-stack">
                            <?php foreach ($group['files'] as $file): ?>
                                <?php
                                $diffMap = showcase_diff_map($file['before'], $file['after']);
                                $kindSlug = showcase_slugify_label((string)$file['kind']);
                                ?>
                                <details class="surface-panel showcase-accordion" data-showcase-accordion data-kind="<?php echo htmlspecialchars($kindSlug); ?>">
                                    <summary class="showcase-accordion__summary">
                                        <div class="showcase-accordion__main">
                                            <div class="showcase-file-path"><?php echo htmlspecialchars($file['path']); ?></div>
                                            <div class="showcase-chip-row" style="margin-top: 0;">
                                                <span class="tag">Representative synthetic file</span>
                                                <span class="tag"><?php echo htmlspecialchars(strtoupper((string)$file['language'])); ?></span>
                                                <span class="tag"><?php echo htmlspecialchars($file['kind']); ?></span>
                                            </div>
                                            <h3 class="metric-heading mt-0"><?php echo htmlspecialchars($file['title']); ?></h3>
                                            <p class="shell-copy"><?php echo htmlspecialchars($file['edit']); ?></p>
                                            <div class="showcase-accordion__affordance">
                                                <span class="showcase-accordion__chevron">›</span>
                                                <span>Click to expand diff details and code examples</span>
                                            </div>
                                        </div>

                                        <div class="showcase-accordion__aside">
                                            <div class="showcase-metrics">
                                                <div class="showcase-metric">
                                                    <div class="showcase-metric__label">Original size</div>
                                                    <div class="showcase-metric__value"><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$file['originalBytes'])); ?></div>
                                                </div>
                                                <div class="showcase-metric">
                                                    <div class="showcase-metric__label">Representative segments</div>
                                                    <div class="showcase-metric__value"><?php echo htmlspecialchars((string)$file['totalSegments']); ?></div>
                                                </div>
                                                <div class="showcase-metric">
                                                    <div class="showcase-metric__label">Touched segments</div>
                                                    <div class="showcase-metric__value"><?php echo htmlspecialchars((string)$file['touchedSegments']); ?></div>
                                                </div>
                                                <div class="showcase-metric">
                                                    <div class="showcase-metric__label">Approx. rewritten</div>
                                                    <div class="showcase-metric__value"><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$file['approximateRewrittenBytes'])); ?></div>
                                                </div>
                                            </div>
                                            <?php echo showcase_render_segment_footprint((int)$file['touchedSegments'], (int)$file['totalSegments'], (float)$file['rewriteRatio']); ?>
                                        </div>
                                    </summary>

                                    <div class="showcase-accordion__body">
                                        <div class="showcase-detail-grid">
                                            <article class="surface-panel">
                                                <div class="section-label">Edit details</div>
                                                <p class="shell-copy mt-3"><?php echo htmlspecialchars($file['summary']); ?></p>
                                                <ul class="showcase-list" style="margin-top: 0.9rem;">
                                                    <?php foreach ($file['notes'] as $note): ?>
                                                        <li><?php echo htmlspecialchars($note); ?></li>
                                                    <?php endforeach; ?>
                                                </ul>
                                            </article>

                                            <article class="surface-panel">
                                                <div class="section-label">Line-by-line diff</div>
                                                <ul class="showcase-detail-list">
                                                    <?php foreach ($file['diffDetails'] as $detail): ?>
                                                        <li>
                                                            <span class="tag">Line <?php echo htmlspecialchars((string)$detail['line']); ?></span>
                                                            <span><?php echo htmlspecialchars($detail['detail']); ?></span>
                                                        </li>
                                                    <?php endforeach; ?>
                                                </ul>
                                            </article>
                                        </div>

                                        <div class="showcase-code-grid showcase-code-grid--precision">
                                            <article class="showcase-code-card">
                                                <div class="showcase-code-label">
                                                    <div class="section-label">Before representative edit</div>
                                                    <span class="tag">Representative synthetic fixture</span>
                                                </div>
                                                <?php echo showcase_render_codeblock($file['before'], (string)$file['language'], $diffMap['before']); ?>
                                            </article>
                                            <article class="showcase-code-card">
                                                <div class="showcase-code-label">
                                                    <div class="section-label">After representative edit</div>
                                                    <span class="tag">Representative synthetic fixture</span>
                                                </div>
                                                <?php echo showcase_render_codeblock($file['after'], (string)$file['language'], $diffMap['after']); ?>
                                            </article>
                                        </div>

                                        <div class="showcase-demo-card__footer">
                                            <span><?php echo htmlspecialchars($showcase['precision']['notice']); ?></span>
                                            <span class="opacity-50">|</span>
                                            <span>Representative touched sections: <?php echo htmlspecialchars(implode(', ', array_map('showcase_humanize_label', $file['segmentLabels']))); ?></span>
                                        </div>
                                    </div>
                                </details>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>

    <?php endif; ?>

    <?php if ($showcasePage === 'security'): ?>
        <section class="table-card" id="showcase-crypto">
            <div class="showcase-section-head">
                <div class="section-label">Crypto Example</div>
                <h2 class="page-title">High-level security story</h2>
                <p class="shell-copy">
                    <?php echo htmlspecialchars($showcase['crypto']['notice']); ?>
                </p>
            </div>

            <div class="showcase-flow">
                <?php foreach ($showcase['crypto']['flow'] as $step): ?>
                    <div class="showcase-flow-step" data-tone="<?php echo htmlspecialchars($step['tone']); ?>">
                        <span class="showcase-flow-step__eyebrow">Representative flow</span>
                        <span class="showcase-flow-step__title"><?php echo htmlspecialchars($step['title']); ?></span>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="showcase-code-grid mt-6">
                <?php foreach (['plaintext', 'compressed', 'encrypted', 'stored'] as $key): ?>
                    <?php $panel = $showcase['crypto'][$key]; ?>
                    <article class="surface-panel showcase-code-card" data-tone="<?php echo htmlspecialchars((string)$panel['tone']); ?>">
                        <div class="showcase-code-label">
                            <div class="section-label"><?php echo htmlspecialchars($panel['label']); ?></div>
                            <?php if (isset($panel['bytes']) && is_int($panel['bytes'])): ?>
                                <span class="tag">Synthetic size · <?php echo htmlspecialchars(ShowcaseDemo::formatBytes($panel['bytes'])); ?></span>
                            <?php elseif ($key === 'stored'): ?>
                                <span class="tag"><?php echo htmlspecialchars((string)count($panel['units'])); ?> synthetic demo units</span>
                            <?php endif; ?>
                        </div>
                        <?php echo showcase_render_codeblock((string)$panel['content'], (string)$panel['language'], []); ?>
                    </article>
                <?php endforeach; ?>
            </div>

            <div class="showcase-callout mt-6" data-tone="amber">
                <div class="section-label">Representative pseudocode only</div>
                <div class="mt-3">
                    <?php echo showcase_render_codeblock((string)$showcase['crypto']['pseudocode'], 'pseudo', []); ?>
                </div>
            </div>
        </section>

    <?php endif; ?>

    <?php if ($showcasePage === 'storage'): ?>
        <section class="table-card" id="showcase-compression">
            <div class="showcase-section-head">
                <div class="section-label">Compression Wins</div>
                <h2 class="page-title">Why structure and repetition matter</h2>
                <p class="shell-copy">
                    <?php echo htmlspecialchars($showcase['compression']['notice']); ?>
                </p>
            </div>

            <div class="showcase-section-head" style="margin-bottom: 1rem;">
                <div class="section-label">Quick visual comparison</div>
                <p class="shell-copy">
                    These representative cards make the savings easier to read before dropping into the full comparison table.
                </p>
            </div>

            <div class="showcase-compression-spotlight">
                <?php foreach ($showcase['compression']['rows'] as $row): ?>
                    <?php
                    $rawBytes = max(1, (int)$row['rawBytes']);
                    $compressedWidth = min(100, round(((int)$row['compressedBytes'] / $rawBytes) * 100, 1));
                    $envelopeWidth = min(100, round(((int)$row['encryptedEnvelopeBytes'] / $rawBytes) * 100, 1));
                    ?>
                    <article class="surface-panel showcase-compression-card">
                        <div class="section-label"><?php echo htmlspecialchars($row['label']); ?></div>
                        <div class="showcase-compression-card__stat"><?php echo htmlspecialchars(ShowcaseDemo::formatPercent((float)$row['savedRatio'])); ?></div>
                        <p class="shell-copy">Representative plaintext reduction before the synthetic envelope step.</p>

                        <ul class="showcase-compression-bars" aria-label="<?php echo htmlspecialchars($row['label']); ?> representative byte comparison">
                            <li>
                                <span>Raw</span>
                                <div class="showcase-compression-bar"><span class="is-raw" style="width: 100%;"></span></div>
                                <span><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$row['rawBytes'])); ?></span>
                            </li>
                            <li>
                                <span>Compressed</span>
                                <div class="showcase-compression-bar"><span class="is-compressed" style="width: <?php echo htmlspecialchars((string)$compressedWidth); ?>%;"></span></div>
                                <span><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$row['compressedBytes'])); ?></span>
                            </li>
                            <li>
                                <span>Envelope</span>
                                <div class="showcase-compression-bar"><span class="is-envelope" style="width: <?php echo htmlspecialchars((string)$envelopeWidth); ?>%;"></span></div>
                                <span><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$row['encryptedEnvelopeBytes'])); ?></span>
                            </li>
                        </ul>

                        <p class="shell-copy"><?php echo htmlspecialchars($row['observation']); ?></p>
                    </article>
                <?php endforeach; ?>
            </div>

            <div class="overflow-x-auto">
                <table>
                    <caption class="showcase-sr-only">Representative synthetic compression comparison showing raw bytes, compressed bytes, synthetic envelope bytes, and observations for each demo fixture.</caption>
                    <thead>
                        <tr>
                            <th scope="col">Synthetic fixture</th>
                            <th scope="col">Raw bytes</th>
                            <th scope="col">Compressed bytes</th>
                            <th scope="col">Synthetic envelope bytes</th>
                            <th scope="col">Observation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($showcase['compression']['rows'] as $row): ?>
                            <tr>
                                <td>
                                    <div class="font-semibold text-[var(--shell-text-strong)]"><?php echo htmlspecialchars($row['label']); ?></div>
                                    <div class="text-xs text-[var(--shell-muted)] mt-1">
                                        Plaintext savings: <?php echo htmlspecialchars(ShowcaseDemo::formatPercent((float)$row['savedRatio'])); ?>
                                    </div>
                                </td>
                                <td><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$row['rawBytes'])); ?></td>
                                <td><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$row['compressedBytes'])); ?></td>
                                <td><?php echo htmlspecialchars(ShowcaseDemo::formatBytes((int)$row['encryptedEnvelopeBytes'])); ?></td>
                                <td class="shell-copy"><?php echo htmlspecialchars($row['observation']); ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>

            <div class="showcase-callout mt-6">
                <div class="section-label">Accuracy note</div>
                <p class="shell-copy mt-2">
                    Compression helps repetitive plaintext such as structured JSON and repeated HTML fragments. In this representative synthetic explanation, encrypted output is treated as effectively high entropy, so meaningful savings come before the envelope step, not after it.
                </p>
            </div>
        </section>

    <?php endif; ?>

    <?php if ($showcasePage === 'runtime'): ?>
        <section class="table-card" id="showcase-sveltekit">
            <div class="showcase-section-head">
                <div class="section-label">SvelteKit on EFSDB</div>
                <h2 class="page-title">How the in-repo PHP adapter fits the platform</h2>
                <p class="shell-copy">
                    <?php echo htmlspecialchars($showcase['sveltekit']['notice']); ?>
                </p>
            </div>

            <div class="showcase-sveltekit-grid">
                <article class="surface-panel showcase-sveltekit-card">
                    <div class="showcase-code-label">
                        <div class="section-label"><?php echo htmlspecialchars($showcase['sveltekit']['configLabel']); ?></div>
                        <span class="tag">Repository-backed example</span>
                    </div>
                    <?php echo showcase_render_codeblock((string)$showcase['sveltekit']['configCode'], 'js', []); ?>

                    <div class="showcase-code-label">
                        <div class="section-label"><?php echo htmlspecialchars($showcase['sveltekit']['treeLabel']); ?></div>
                        <span class="tag">Representative packaging view</span>
                    </div>
                    <?php echo showcase_render_codeblock((string)$showcase['sveltekit']['treeCode'], 'pseudo', []); ?>
                </article>

                <div class="showcase-stack">
                    <?php foreach ($showcase['sveltekit']['flow'] as $item): ?>
                        <article class="surface-panel showcase-sveltekit-card">
                            <h3 class="metric-heading mt-0"><?php echo htmlspecialchars($item['title']); ?></h3>
                            <p class="shell-copy"><?php echo htmlspecialchars($item['copy']); ?></p>
                        </article>
                    <?php endforeach; ?>

                    <article class="surface-panel showcase-sveltekit-card">
                        <div class="section-label">Why that matters on EFSDB</div>
                        <ul class="showcase-list">
                            <?php foreach ($showcase['sveltekit']['benefits'] as $item): ?>
                                <li><?php echo htmlspecialchars($item); ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

    <?php endif; ?>

    <?php if ($showcasePage === 'operations'): ?>
        <section class="table-card" id="showcase-workflows">
            <div class="showcase-section-head">
                <div class="section-label">Practical Workflows</div>
                <h2 class="page-title">Practical EFSDB workflows</h2>
                <p class="shell-copy">
                    Representative operating lanes for editorial updates, staged promotion, inspection, compression-heavy content, and tenant boundary management.
                </p>
            </div>

            <div class="showcase-workflow-list">
                <?php foreach ($showcase['workflows'] as $case): ?>
                    <article class="surface-panel showcase-workflow-card" data-tone="<?php echo htmlspecialchars((string)($case['tone'] ?? 'blue')); ?>">
                        <div class="showcase-workflow-layout">
                            <div class="showcase-workflow-overview">
                                <div class="showcase-workflow-kicker-row">
                                    <span class="showcase-workflow-kicker"><?php echo htmlspecialchars((string)$case['eyebrow']); ?></span>
                                    <span class="tag">Representative workflow</span>
                                </div>
                                <h3 class="metric-heading mt-0"><?php echo htmlspecialchars($case['title']); ?></h3>
                                <p class="showcase-workflow-summary"><?php echo htmlspecialchars((string)$case['summary']); ?></p>
                                <dl class="showcase-workflow-facts">
                                    <div class="showcase-workflow-fact">
                                        <dt>Who owns it</dt>
                                        <dd><?php echo htmlspecialchars($case['actor']); ?></dd>
                                    </div>
                                    <div class="showcase-workflow-fact">
                                        <dt>Primary surfaces</dt>
                                        <dd><?php echo htmlspecialchars($case['surfaces']); ?></dd>
                                    </div>
                                    <div class="showcase-workflow-fact">
                                        <dt>Best when</dt>
                                        <dd><?php echo htmlspecialchars((string)$case['bestWhen']); ?></dd>
                                    </div>
                                    <div class="showcase-workflow-fact">
                                        <dt>Operational result</dt>
                                        <dd><?php echo htmlspecialchars((string)$case['result']); ?></dd>
                                    </div>
                                </dl>
                            </div>

                            <div class="showcase-workflow-detail">
                                <div class="section-label">Flow at a glance</div>
                                <ol class="showcase-workflow-steps">
                                    <?php foreach ($case['steps'] as $index => $step): ?>
                                        <li class="showcase-workflow-step">
                                            <span class="showcase-workflow-step__index"><?php echo htmlspecialchars(str_pad((string)($index + 1), 2, '0', STR_PAD_LEFT)); ?></span>
                                            <div class="showcase-workflow-step__body">
                                                <div class="showcase-workflow-step__label"><?php echo htmlspecialchars((string)$step['stage']); ?></div>
                                                <p class="showcase-workflow-step__copy"><?php echo htmlspecialchars((string)$step['copy']); ?></p>
                                            </div>
                                        </li>
                                    <?php endforeach; ?>
                                </ol>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </div>
        </section>

        <section class="table-card" id="showcase-history">
            <div class="showcase-section-head">
                <div class="section-label">Branch History</div>
                <h2 class="page-title">Representative trace, promotion, and rollback flow</h2>
                <p class="shell-copy">
                    <?php echo htmlspecialchars($showcase['history']['notice']); ?>
                </p>
            </div>

            <div class="showcase-history-layout">
                <article class="surface-panel showcase-history-card">
                    <div class="showcase-code-label">
                        <div class="section-label">Representative git-like graph</div>
                        <span class="tag">Synthetic branch names and times</span>
                    </div>
                    <p class="shell-copy"><?php echo htmlspecialchars($showcase['history']['legend']); ?></p>
                    <div class="showcase-history-graph-wrap">
                        <?php echo showcase_render_history_graph($showcase['history']); ?>
                    </div>
                    <div class="showcase-history-legend" aria-label="Representative graph legend">
                        <span class="showcase-history-legend__item"><span class="showcase-history-legend__dot is-edit"></span>Author edit</span>
                        <span class="showcase-history-legend__item"><span class="showcase-history-legend__dot is-review"></span>Sync or review checkpoint</span>
                        <span class="showcase-history-legend__item"><span class="showcase-history-legend__dot is-merge"></span>Merge or promotion</span>
                        <span class="showcase-history-legend__item"><span class="showcase-history-legend__dot is-revert"></span>Rollback path</span>
                    </div>
                </article>

                <article class="surface-panel showcase-history-card">
                    <div class="section-label">Tracked along the way</div>
                    <ul class="showcase-list">
                        <?php foreach ($showcase['history']['tracked'] as $item): ?>
                            <li><?php echo htmlspecialchars($item); ?></li>
                        <?php endforeach; ?>
                    </ul>

                    <div class="section-label">Representative audit trail</div>
                    <ol class="showcase-history-event-list" aria-label="Representative synthetic audit events">
                        <?php foreach ($showcase['history']['events'] as $event): ?>
                            <li class="showcase-history-event">
                                <div class="showcase-history-event__head">
                                    <div class="showcase-history-event__title"><?php echo htmlspecialchars($event['label']); ?></div>
                                    <span class="tag"><?php echo htmlspecialchars($event['time']); ?></span>
                                </div>
                                <div class="showcase-history-pill-row">
                                    <span class="tag"><?php echo htmlspecialchars($event['actor']); ?></span>
                                    <span class="tag">Branch · <?php echo htmlspecialchars($event['branch']); ?></span>
                                    <span class="tag">Action · <?php echo htmlspecialchars(str_replace('-', ' ', $event['kind'])); ?></span>
                                </div>
                                <p class="shell-copy"><?php echo htmlspecialchars($event['detail']); ?></p>
                            </li>
                        <?php endforeach; ?>
                    </ol>

                    <div class="showcase-callout">
                        <div class="section-label">Rollback stays explicit</div>
                        <p class="shell-copy mt-2"><?php echo htmlspecialchars($showcase['history']['revertNotice']); ?></p>
                    </div>
                </article>
            </div>
        </section>

    <?php endif; ?>

    <?php if ($showcasePage === 'security'): ?>
        <section class="shell-panel p-5 sm:p-7 showcase-trust" id="showcase-safety">
            <div class="showcase-section-head">
                <div class="section-label"><?php echo htmlspecialchars($showcase['safety']['title']); ?></div>
                <h2 class="page-title">Why the omissions are intentional</h2>
                <p class="shell-copy">
                    <?php echo htmlspecialchars($showcase['safety']['copy']); ?>
                </p>
            </div>

            <ul class="showcase-list">
                <?php foreach ($showcase['safety']['excluded'] as $item): ?>
                    <li><?php echo htmlspecialchars($item); ?></li>
                <?php endforeach; ?>
            </ul>
        </section>

    <?php endif; ?>

    <?php if ($showcasePage === 'operations'): ?>
        <section class="shell-panel p-5 sm:p-7 showcase-finish">
            <div class="showcase-section-head">
                <div class="section-label">Continue in the control plane</div>
                <h2 class="page-title">This walkthrough stays read-only by design</h2>
                <p class="shell-copy">
                    The showcase ends with representative explanations only. Use the live control-plane surfaces below for actual authoring, inspection, and promotion work, while the public website remains separate at <code>/</code>.
                </p>
            </div>

            <div class="showcase-finish-grid">
                <a class="surface-panel showcase-finish-card" href="<?php echo htmlspecialchars(efsdb_control_plane_path('builder')); ?>">
                    <div class="section-label">Builder</div>
                    <h3 class="metric-heading mt-0">Author and revise content</h3>
                    <p class="shell-copy">Use Builder when a representative edit turns into real authoring work.</p>
                </a>
                <a class="surface-panel showcase-finish-card" href="<?php echo htmlspecialchars(efsdb_control_plane_path('explorer')); ?>">
                    <div class="section-label">Explorer</div>
                    <h3 class="metric-heading mt-0">Inspect without editing</h3>
                    <p class="shell-copy">Keep inspection and storage review separate from editing when technical checks are needed.</p>
                </a>
                <a class="surface-panel showcase-finish-card" href="<?php echo htmlspecialchars(efsdb_control_plane_path('environments')); ?>">
                    <div class="section-label">Environments</div>
                    <h3 class="metric-heading mt-0">Review promotion boundaries</h3>
                    <p class="shell-copy">Use the environment view to keep staging, production, and promotion decisions explicit.</p>
                </a>
            </div>
        </section>
    <?php endif; ?>

    <?php if ($showcasePage === 'inspector'): ?>
        <section class="shell-panel p-6 sm:p-8 showcase-finish" style="gap: 2rem; display: flex; flex-direction: column;">

            <!-- A. Hero / Milestone -->
            <div class="showcase-section-head">
                <div class="section-label" style="color: var(--shell-primary); font-weight: bold;">Browser-side envelope verification</div>
                <h2 class="page-title" style="font-size: 2rem; margin-top: 0.5rem; margin-bottom: 1rem;">Live Inspector Demo</h2>
                <p class="shell-copy" style="font-size: 1.1rem; line-height: 1.6; max-width: 600px;">
                    We proved browser-side envelope inspection with PHP/Rust parity, range-based partial fetches, and worker-isolated WASM parsing.
                    This ensures the UI can read envelope metadata instantly without downloading gigabytes of payload data.
                </p>

                <div class="mt-4 flex gap-3 flex-wrap">
                    <span class="tag" style="background: color-mix(in srgb, #22c55e, transparent 85%); color: #15803d; padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid color-mix(in srgb, #22c55e, transparent 50%); font-weight: 500;">Parity Verified</span>
                    <span class="tag" style="background: color-mix(in srgb, #3b82f6, transparent 85%); color: #1d4ed8; padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid color-mix(in srgb, #3b82f6, transparent 50%); font-weight: 500;">Worker Active</span>
                    <span class="tag" style="background: color-mix(in srgb, #8b5cf6, transparent 85%); color: #6d28d9; padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid color-mix(in srgb, #8b5cf6, transparent 50%); font-weight: 500;">Header-Only Fetch</span>
                    <span class="tag" style="background: color-mix(in srgb, var(--shell-primary), transparent 85%); color: var(--shell-text); padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid color-mix(in srgb, var(--shell-primary), transparent 50%); font-weight: 500;">Ready for Merge</span>
                </div>
            </div>

            <!-- Architecture Strip -->
            <div class="surface-panel" style="padding: 2.5rem; background: var(--shell-surface); border-radius: 12px; border: 1px solid var(--shell-border); text-align: center; overflow: hidden;">
                <div class="section-label" style="margin-bottom: 2rem;">Zero-Download Architecture Flow</div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240" style="width: 100%; max-width: 800px; height: auto; margin: 0 auto; display: block; font-family: ui-sans-serif, system-ui, sans-serif;">
                    <defs>
                        <!-- Gradients -->
                        <linearGradient id="gradSource" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.8" />
                            <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.9" />
                        </linearGradient>
                        <linearGradient id="gradExtract" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.6" />
                            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.9" />
                        </linearGradient>
                        <linearGradient id="gradProcess" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.8" />
                            <stop offset="100%" stop-color="#6d28d9" stop-opacity="0.9" />
                        </linearGradient>
                        <linearGradient id="gradRender" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#22c55e" stop-opacity="0.8" />
                            <stop offset="100%" stop-color="#15803d" stop-opacity="0.9" />
                        </linearGradient>

                        <!-- Filters -->
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <!-- Background subtle lines -->
                    <path d="M 120 180 Q 250 180 300 120 T 400 60 T 550 60 T 680 120" fill="none" stroke="var(--shell-border)" stroke-width="2" stroke-dasharray="4,4" />

                    <!-- 1. The Source (Ocean) -->
                    <g transform="translate(120, 180)">
                        <circle cx="0" cy="0" r="40" fill="url(#gradSource)" />
                        <path d="M -25 10 Q 0 20 25 10" fill="none" stroke="white" stroke-width="2" opacity="0.5" />
                        <path d="M -20 0 Q 0 10 20 0" fill="none" stroke="white" stroke-width="2" opacity="0.5" />
                        <text x="0" y="65" text-anchor="middle" fill="var(--shell-text)" font-weight="bold" font-size="14">Storage Rest</text>
                        <text x="0" y="85" text-anchor="middle" fill="var(--shell-muted)" font-size="12">PHP Baseline / Binaries</text>
                    </g>

                    <!-- Arrow 1 to 2 -->
                    <path d="M 155 160 L 265 95" fill="none" stroke="#0ea5e9" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4">
                        <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite" />
                    </path>

                    <!-- 2. Extraction (Evaporation) -->
                    <g transform="translate(290, 80)">
                        <rect x="-45" y="-30" width="90" height="60" rx="12" fill="url(#gradExtract)" />
                        <path d="M -15 -10 L -15 -25 M 0 -5 L 0 -25 M 15 -10 L 15 -25" stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.8" />
                        <polygon points="-15,-25 -18,-20 -12,-20" fill="white" />
                        <polygon points="0,-25 -3,-20 3,-20" fill="white" />
                        <polygon points="15,-25 12,-20 18,-20" fill="white" />
                        <text x="0" y="55" text-anchor="middle" fill="var(--shell-text)" font-weight="bold" font-size="14">Range Fetch</text>
                        <text x="0" y="75" text-anchor="middle" fill="var(--shell-muted)" font-size="12">Targeted Headers Only</text>
                    </g>

                    <!-- Arrow 2 to 3 -->
                    <path d="M 345 80 L 465 80" fill="none" stroke="#8b5cf6" stroke-width="3" marker-end="url(#arrow)" />

                    <!-- 3. Processing (Clouds) -->
                    <g transform="translate(520, 80)">
                        <path d="M -20 10 A 20 20 0 0 1 -10 -20 A 25 25 0 0 1 30 -15 A 20 20 0 0 1 20 20 Z" fill="url(#gradProcess)" filter="url(#glow)" />
                        <text x="0" y="-2" text-anchor="middle" fill="white" font-weight="bold" font-size="14">WASM</text>
                        <text x="0" y="55" text-anchor="middle" fill="var(--shell-text)" font-weight="bold" font-size="14">Isolated Parse</text>
                        <text x="0" y="75" text-anchor="middle" fill="var(--shell-muted)" font-size="12">Rust Worker Engine</text>
                    </g>

                    <!-- Arrow 3 to 4 -->
                    <path d="M 555 100 L 645 160" fill="none" stroke="#22c55e" stroke-width="3" marker-end="url(#arrow)" stroke-dasharray="6,4">
                        <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite" />
                    </path>

                    <!-- 4. Presentation (Rain / Drops) -->
                    <g transform="translate(680, 180)">
                        <rect x="-40" y="-30" width="80" height="60" rx="8" fill="url(#gradRender)" />
                        <text x="0" y="-5" text-anchor="middle" fill="white" font-weight="bold" font-size="14">{ }</text>
                        <text x="0" y="15" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10">JSON</text>
                        <text x="0" y="65" text-anchor="middle" fill="var(--shell-text)" font-weight="bold" font-size="14">Svelte UI</text>
                        <text x="0" y="85" text-anchor="middle" fill="var(--shell-muted)" font-size="12">Instant Render</text>
                    </g>

                    <!-- Arrow Head Definition -->
                    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" opacity="0.6" />
                    </marker>
                </svg>
            </div>

            <!-- B. Live Inspector -->
            <div class="surface-panel" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--shell-border); background: color-mix(in srgb, var(--shell-surface), transparent 50%);">
                <div class="section-label" style="margin-bottom: 1rem;">Interactive WASM Inspector</div>
                <p class="shell-copy mb-4 text-sm text-[var(--shell-muted)]">
                    Select a fixture below to test the isolated WASM parser. The default is a known-good Blake3 envelope. You can also intentionally trigger failure modes.
                </p>

                <div class="flex gap-2 mb-6 flex-wrap">
                    <button class="btn" style="background: var(--shell-primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;" onclick="document.querySelector('efsdb-envelope-inspector').setAttribute('url', '/fixtures/01_valid_blake3.bin')">Valid Envelope</button>
                    <button class="btn" style="background: transparent; color: var(--shell-text); border: 1px solid var(--shell-border); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;" onclick="document.querySelector('efsdb-envelope-inspector').setAttribute('url', '/fixtures/02_err_invalid_magic.bin')">Invalid Magic</button>
                    <button class="btn" style="background: transparent; color: var(--shell-text); border: 1px solid var(--shell-border); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;" onclick="document.querySelector('efsdb-envelope-inspector').setAttribute('url', '/fixtures/04_err_truncated_header.bin')">Truncated Header</button>
                    <button class="btn" style="background: transparent; color: var(--shell-text); border: 1px solid var(--shell-border); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;" onclick="document.querySelector('efsdb-envelope-inspector').setAttribute('url', '/fixtures/not_found.bin')">404 Network Error</button>
                </div>

                <div style="background: var(--shell-bg); border-radius: 8px; border: 1px solid color-mix(in srgb, var(--shell-border), transparent 50%); overflow: hidden;">
                    <efsdb-envelope-inspector url="/fixtures/01_valid_blake3.bin"></efsdb-envelope-inspector>
                </div>

                <div class="mt-4 text-right">
                    <a href="/_efsdb/explorer?mode=raw" class="shell-link text-sm" style="color: var(--shell-primary); text-decoration: none;">Open in Explorer Raw Mode →</a>
                </div>
            </div>

            <!-- C. Request Timeline -->
            <div class="surface-panel" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--shell-border);">
                <div class="section-label" style="margin-bottom: 1.5rem;">Fetch & Parse Timeline</div>

                <div class="showcase-waterfall" style="display: flex; flex-direction: column; gap: 0.5rem; position: relative;">
                    <!-- Track line -->
                    <div style="position: absolute; left: 120px; top: 0; bottom: 0; width: 2px; background: color-mix(in srgb, var(--shell-border), transparent 50%); z-index: 0;"></div>

                    <!-- Probe -->
                    <div style="display: grid; grid-template-columns: 100px 1fr; gap: 2rem; align-items: center; position: relative; z-index: 1;">
                        <div class="text-sm font-bold text-right" style="color: var(--shell-text);">Probe 0-15</div>
                        <div style="display: flex; align-items: center; gap: 1rem;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #3b82f6; border: 2px solid var(--shell-panel-bg); margin-left: -7px;"></div>
                            <div style="background: color-mix(in srgb, #3b82f6, transparent 85%); border: 1px solid color-mix(in srgb, #3b82f6, transparent 50%); padding: 0.5rem 1rem; border-radius: 6px; flex: 1; display: flex; justify-content: space-between;">
                                <span class="text-sm" style="color: var(--shell-muted);">First 16 bytes</span>
                                <span id="metric-probe-fetch" class="font-mono font-bold" style="color: #1d4ed8;">-- ms</span>
                            </div>
                        </div>
                    </div>

                    <!-- Header -->
                    <div style="display: grid; grid-template-columns: 100px 1fr; gap: 2rem; align-items: center; position: relative; z-index: 1;">
                        <div class="text-sm font-bold text-right" style="color: var(--shell-text);">Header 0-(H+7)</div>
                        <div style="display: flex; align-items: center; gap: 1rem; margin-left: 20px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #0ea5e9; border: 2px solid var(--shell-panel-bg); margin-left: -27px;"></div>
                            <div style="background: color-mix(in srgb, #0ea5e9, transparent 85%); border: 1px solid color-mix(in srgb, #0ea5e9, transparent 50%); padding: 0.5rem 1rem; border-radius: 6px; flex: 1; display: flex; justify-content: space-between;">
                                <span class="text-sm" style="color: var(--shell-muted);">Variable header & extensions <span id="metric-bytes-fetched" style="opacity: 0.7; margin-left: 0.5rem;">(-- bytes)</span></span>
                                <span id="metric-header-fetch" class="font-mono font-bold" style="color: #0369a1;">-- ms</span>
                            </div>
                        </div>
                    </div>

                    <!-- Worker -->
                    <div style="display: grid; grid-template-columns: 100px 1fr; gap: 2rem; align-items: center; position: relative; z-index: 1;">
                        <div class="text-sm font-bold text-right" style="color: var(--shell-text);">Worker parse</div>
                        <div style="display: flex; align-items: center; gap: 1rem; margin-left: 40px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #8b5cf6; border: 2px solid var(--shell-panel-bg); margin-left: -47px;"></div>
                            <div style="background: color-mix(in srgb, #8b5cf6, transparent 85%); border: 1px solid color-mix(in srgb, #8b5cf6, transparent 50%); padding: 0.5rem 1rem; border-radius: 6px; flex: 1; display: flex; justify-content: space-between;">
                                <span class="text-sm" style="color: var(--shell-muted);">WASM isolated execution</span>
                                <span id="metric-worker-parse" class="font-mono font-bold" style="color: #6d28d9;">-- ms</span>
                            </div>
                        </div>
                    </div>

                    <!-- Render -->
                    <div style="display: grid; grid-template-columns: 100px 1fr; gap: 2rem; align-items: center; position: relative; z-index: 1;">
                        <div class="text-sm font-bold text-right" style="color: var(--shell-text);">Render</div>
                        <div style="display: flex; align-items: center; gap: 1rem; margin-left: 60px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #22c55e; border: 2px solid var(--shell-panel-bg); margin-left: -67px;"></div>
                            <div style="background: color-mix(in srgb, #22c55e, transparent 85%); border: 1px solid color-mix(in srgb, #22c55e, transparent 50%); padding: 0.5rem 1rem; border-radius: 6px; flex: 1; display: flex; justify-content: space-between;">
                                <span class="text-sm" style="color: var(--shell-muted);">UI painted</span>
                                <span id="metric-inspect-path" class="font-mono font-bold" style="color: #15803d;">-- ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- D. Contract Status -->
            <div class="surface-panel" style="padding: 2rem; border-radius: 12px; border: 1px solid var(--shell-border);">
                <div class="section-label" style="margin-bottom: 1rem;">Parity & Contract Status</div>
                <ul class="showcase-list mt-2" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li style="display: flex; justify-content: space-between; border-bottom: 1px solid color-mix(in srgb, var(--shell-border), transparent 50%); padding-bottom: 0.5rem;">
                        <span style="color: var(--shell-text);">Envelope inspect/parity</span>
                        <strong style="color: #16a34a;">Done</strong>
                    </li>
                    <li style="display: flex; justify-content: space-between; border-bottom: 1px solid color-mix(in srgb, var(--shell-border), transparent 50%); padding-bottom: 0.5rem;">
                        <span style="color: var(--shell-text);">WASM inspector</span>
                        <strong style="color: #16a34a;">Done</strong>
                    </li>
                    <li style="display: flex; justify-content: space-between; border-bottom: 1px solid color-mix(in srgb, var(--shell-border), transparent 50%); padding-bottom: 0.5rem;">
                        <span style="color: var(--shell-text);">Two-step range fetch</span>
                        <strong style="color: #16a34a;">Done</strong>
                    </li>
                    <li style="display: flex; justify-content: space-between; padding-bottom: 0.5rem;">
                        <span style="color: var(--shell-text);">Web Worker isolation</span>
                        <strong style="color: #16a34a;">Done</strong>
                    </li>
                </ul>
            </div>

            <!-- E. Next Heavy Lift (Paused Lane) -->
            <div class="surface-panel" style="padding: 2rem; border-radius: 12px; border: 1px dashed color-mix(in srgb, #f59e0b, transparent 30%); background: color-mix(in srgb, #f59e0b, transparent 95%); margin-top: -0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <div class="section-label" style="color: #d97706; margin: 0;">Next Heavy Lift</div>
                </div>
                <p class="shell-copy text-sm" style="margin-bottom: 1.5rem; line-height: 1.5; color: color-mix(in srgb, var(--shell-text), #d97706 20%); max-width: 600px;">
                    Implementation of AEAD and extension parsing is strictly paused. Recent sub-specs drifted from the frozen envelope contract.
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                    <div style="background: var(--shell-bg); border: 1px solid color-mix(in srgb, #f59e0b, transparent 50%); padding: 1rem; border-radius: 8px;">
                        <div style="font-weight: bold; color: var(--shell-text); margin-bottom: 0.25rem;">AEAD sub-spec</div>
                        <div style="font-size: 0.85rem; color: #d97706; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Blocked on spec reconciliation</div>
                    </div>
                    <div style="background: var(--shell-bg); border: 1px solid color-mix(in srgb, #f59e0b, transparent 50%); padding: 1rem; border-radius: 8px;">
                        <div style="font-weight: bold; color: var(--shell-text); margin-bottom: 0.25rem;">Extension sub-spec</div>
                        <div style="font-size: 0.85rem; color: #d97706; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em;">Blocked on spec reconciliation</div>
                    </div>
                </div>
            </div>

        </section>

        <script type="module" src="/js/efsdb-explorer.js"></script>
        <script>
            window.addEventListener('efsdb:inspector-metrics', (e) => {
                const m = e.detail;
                if (!m) return;
                const el = (id) => document.getElementById(id);
                if (el('metric-inspect-path')) el('metric-inspect-path').textContent = m.envelopeInspectMs + ' ms';
                if (el('metric-probe-fetch')) el('metric-probe-fetch').textContent = m.probeFetchMs + ' ms';
                if (el('metric-header-fetch')) el('metric-header-fetch').textContent = m.headerFetchMs + ' ms';
                if (el('metric-worker-parse')) el('metric-worker-parse').textContent = m.wasmParseMs + ' ms';
                if (el('metric-bytes-fetched')) el('metric-bytes-fetched').textContent = m.totalBytesFetched + ' bytes';
            });
        </script>
    <?php endif; ?>
</section>
