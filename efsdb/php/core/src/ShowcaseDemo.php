<?php
declare(strict_types=1);

final class ShowcaseDemo
{
    private const REPRESENTATIVE_TRACE_LABEL = 'Representative demo using synthetic data, not a live storage trace.';
    private const REPRESENTATIVE_SEGMENT_MODEL = 'Representative logical segment model with synthetic sections, not production chunking.';
    private const ENVELOPE_OVERHEAD_BYTES = 48;

    /**
     * @return array{
     *   hero:array<string,string>,
     *   strengths:list<array<string,string>>,
     *   precision:array{
     *     notice:string,
     *     segmentModel:string,
     *     segmentLegend:string,
     *     highlightLegend:string,
     *     files:list<array<string,mixed>>
     *   },
     *   crypto:array<string,mixed>,
     *   compression:array<string,mixed>,
     *   chart:array<string,mixed>,
     *   workflows:list<array<string,mixed>>,
     *   history:array<string,mixed>,
     *   sveltekit:array<string,mixed>,
     *   safety:array<string,mixed>
     * }
     */
    public static function build(): array
    {
        $hero = [
            'eyebrow' => 'Read-only representative platform walkthrough',
            'title' => 'EFSDB combines secure storage, precise mutation, and controlled delivery.',
            'copy' => 'This page explains the platform using deterministic synthetic fixtures only. It demonstrates representative edit locality, storage layering, compression behavior, and control-plane workflows without exposing live customer data, runtime environment labels, or sensitive operational details.',
        ];

        $strengths = [
            [
                'title' => 'Precision file updates',
                'copy' => 'Small content changes can be represented as limited rewrites in a structured segment model instead of forcing whole-file replacement.',
            ],
            [
                'title' => 'Encrypted-at-rest design',
                'copy' => 'Stored artifacts can remain opaque outside trusted runtime boundaries while the control plane still describes the lifecycle in safe terms.',
            ],
            [
                'title' => 'Chunk and manifest orientation',
                'copy' => 'Files can be reasoned about as structured stored units and manifests, which helps with traceability and targeted mutation.',
            ],
            [
                'title' => 'Role-aware admin tooling',
                'copy' => 'Builder, Explorer, and admin controls stay separated so inspection, editing, and tenant governance remain explicit.',
            ],
            [
                'title' => 'Staging versus production clarity',
                'copy' => 'Authoring and promotion flows stay understandable because environments are separate surfaces with different operational intent.',
            ],
            [
                'title' => 'Structured delivery flexibility',
                'copy' => 'JSON content, HTML fragments, routes, assets, and control-plane metadata can be managed under one filesystem-backed platform model.',
            ],
        ];

        $precisionFiles = [
            self::buildPrecisionDemo(
                'Tiny edit',
                'Homepage hero copy tweak',
                'content/homepage.json',
                'Representative synthetic edit: changed the hero title from "Synthetic spring release preview" to "Synthetic spring launch preview".',
                [
                    [
                        'label' => 'synthetic-document-header',
                        'before' => "{\n  \"slug\": \"synthetic-homepage\",\n  \"status\": \"staging\",\n",
                        'after' => "{\n  \"slug\": \"synthetic-homepage\",\n  \"status\": \"staging\",\n",
                    ],
                    [
                        'label' => 'synthetic-hero-block',
                        'before' => "  \"hero\": {\n    \"title\": \"Synthetic spring release preview\",\n    \"eyebrow\": \"Filesystem-backed synthetic content\",\n    \"cta\": \"Review synthetic staging\"\n  },\n",
                        'after' => "  \"hero\": {\n    \"title\": \"Synthetic spring launch preview\",\n    \"eyebrow\": \"Filesystem-backed synthetic content\",\n    \"cta\": \"Review synthetic staging\"\n  },\n",
                    ],
                    [
                        'label' => 'synthetic-highlights-block',
                        'before' => "  \"highlights\": [\n    \"Representative precise mutations\",\n    \"Synthetic crypto-aware storage\",\n    \"Safe promotion workflow\"\n  ],\n",
                        'after' => "  \"highlights\": [\n    \"Representative precise mutations\",\n    \"Synthetic crypto-aware storage\",\n    \"Safe promotion workflow\"\n  ],\n",
                    ],
                    [
                        'label' => 'synthetic-footer-cta',
                        'before' => "  \"footerCta\": {\n    \"label\": \"Request synthetic review\",\n    \"path\": \"/synthetic-review\"\n  }\n}\n",
                        'after' => "  \"footerCta\": {\n    \"label\": \"Request synthetic review\",\n    \"path\": \"/synthetic-review\"\n  }\n}\n",
                    ],
                ],
                '1 text line changed inside 1 representative segment.',
                [
                    'Field focus: `hero.title` only.',
                    'Representative scope: 1 of 4 synthetic segments touched.',
                    'Why it matters: hero copy can change without implying a whole-file rewrite.',
                ],
                [
                    ['line' => 5, 'detail' => 'Updated `hero.title` wording only.'],
                ]
            ),
            self::buildPrecisionDemo(
                'Tiny edit',
                'About-page sentence update',
                'pages/about.html',
                'Representative synthetic edit: updated one sentence in the operations summary to reflect staged content reviews.',
                [
                    [
                        'label' => 'synthetic-page-shell',
                        'before' => "<section class=\"synthetic-about-shell\">\n  <header>\n    <h1>About Synthetic EFSDB</h1>\n    <p>Structured storage for representative sites, content, and admin workflows.</p>\n  </header>\n",
                        'after' => "<section class=\"synthetic-about-shell\">\n  <header>\n    <h1>About Synthetic EFSDB</h1>\n    <p>Structured storage for representative sites, content, and admin workflows.</p>\n  </header>\n",
                    ],
                    [
                        'label' => 'synthetic-operations-summary',
                        'before' => "  <article>\n    <h2>Representative operations</h2>\n    <p>Synthetic editors review content in staging before promotion.</p>\n  </article>\n",
                        'after' => "  <article>\n    <h2>Representative operations</h2>\n    <p>Synthetic editors review staged content before controlled promotion.</p>\n  </article>\n",
                    ],
                    [
                        'label' => 'synthetic-team-list',
                        'before' => "  <ul>\n    <li>Builder authors representative new pages.</li>\n    <li>Explorer inspects synthetic stored artifacts separately.</li>\n  </ul>\n",
                        'after' => "  <ul>\n    <li>Builder authors representative new pages.</li>\n    <li>Explorer inspects synthetic stored artifacts separately.</li>\n  </ul>\n",
                    ],
                    [
                        'label' => 'synthetic-closing',
                        'before' => "</section>\n",
                        'after' => "</section>\n",
                    ],
                ],
                '1 sentence changed in a representative HTML section.',
                [
                    'Selector focus: operations summary paragraph.',
                    'Representative scope: one sentence within one content block.',
                    'Why it matters: editorial copy changes can stay localized.',
                ],
                [
                    ['line' => 8, 'detail' => 'Refined the staged-review sentence without altering surrounding structure.'],
                ]
            ),
            self::buildPrecisionDemo(
                'Unique case',
                'Route fallback copy swap',
                'routes/blog/[slug].php',
                'Representative synthetic edit: changed the fallback CTA label from "Review synthetic staging" to "Open synthetic preview".',
                [
                    [
                        'label' => 'synthetic-route-bootstrap',
                        'before' => "<?php\n\$entry = \$page['entry'] ?? [];\n\$title = \$entry['title'] ?? 'Synthetic article';\n\$cta = \$entry['cta']['label'] ?? 'Review synthetic staging';\n?>\n",
                        'after' => "<?php\n\$entry = \$page['entry'] ?? [];\n\$title = \$entry['title'] ?? 'Synthetic article';\n\$cta = \$entry['cta']['label'] ?? 'Open synthetic preview';\n?>\n",
                    ],
                    [
                        'label' => 'synthetic-route-template',
                        'before' => "<article class=\"synthetic-article\">\n  <h1><?= htmlspecialchars(\$title, ENT_QUOTES, 'UTF-8') ?></h1>\n  <a href=\"/synthetic-preview\"><?= htmlspecialchars(\$cta, ENT_QUOTES, 'UTF-8') ?></a>\n</article>\n",
                        'after' => "<article class=\"synthetic-article\">\n  <h1><?= htmlspecialchars(\$title, ENT_QUOTES, 'UTF-8') ?></h1>\n  <a href=\"/synthetic-preview\"><?= htmlspecialchars(\$cta, ENT_QUOTES, 'UTF-8') ?></a>\n</article>\n",
                    ],
                ],
                '1 fallback line changed in a representative route file.',
                [
                    'File type: isolated synthetic PHP route fixture.',
                    'Representative scope: one bootstrap line changed, template stayed stable.',
                    'Why it matters: route copy can shift without implying deep runtime rewiring.',
                ],
                [
                    ['line' => 4, 'detail' => 'Updated the fallback CTA text only.'],
                ]
            ),
            self::buildPrecisionDemo(
                'Article-sized example',
                'Article body refresh',
                'content/articles/synthetic-launch-brief.json',
                'Representative synthetic edit: refreshed a summary paragraph and one metrics callout inside an article-sized content document.',
                [
                    [
                        'label' => 'synthetic-article-header',
                        'before' => "{\n  \"slug\": \"synthetic-launch-brief\",\n  \"title\": \"Synthetic launch brief\",\n  \"author\": \"Synthetic editorial desk\",\n",
                        'after' => "{\n  \"slug\": \"synthetic-launch-brief\",\n  \"title\": \"Synthetic launch brief\",\n  \"author\": \"Synthetic editorial desk\",\n",
                    ],
                    [
                        'label' => 'synthetic-article-intro',
                        'before' => "  \"intro\": \"Synthetic teams use the platform to coordinate launch copy, delivery metadata, and review checkpoints across one storage model.\",\n",
                        'after' => "  \"intro\": \"Synthetic teams use the platform to coordinate launch copy, delivery metadata, and review checkpoints across one storage model with cleaner release handoff.\",\n",
                    ],
                    [
                        'label' => 'synthetic-article-body',
                        'before' => "  \"sections\": [\n    {\n      \"heading\": \"Overview\",\n      \"body\": \"The article-sized synthetic example demonstrates a longer content file with multiple sections, pull quotes, and repeated layout metadata.\"\n    },\n    {\n      \"heading\": \"Operations\",\n      \"body\": \"Reviewers can stage updates, validate copy, and promote changes without mixing environment responsibilities.\"\n    },\n",
                        'after' => "  \"sections\": [\n    {\n      \"heading\": \"Overview\",\n      \"body\": \"The article-sized synthetic example demonstrates a longer content file with multiple sections, pull quotes, and repeated layout metadata.\"\n    },\n    {\n      \"heading\": \"Operations\",\n      \"body\": \"Reviewers can stage updates, validate copy, and promote changes with clearer release handoff and explicit environment boundaries.\"\n    },\n",
                    ],
                    [
                        'label' => 'synthetic-article-metrics',
                        'before' => "    {\n      \"heading\": \"Metrics\",\n      \"callout\": \"Synthetic median review cycle: 2 passes\"\n    }\n  ],\n",
                        'after' => "    {\n      \"heading\": \"Metrics\",\n      \"callout\": \"Synthetic median review cycle: 1 coordinated pass\"\n    }\n  ],\n",
                    ],
                    [
                        'label' => 'synthetic-article-footer',
                        'before' => "  \"footer\": {\n    \"cta\": \"Share synthetic summary\",\n    \"slug\": \"/synthetic-launch-brief\"\n  }\n}\n",
                        'after' => "  \"footer\": {\n    \"cta\": \"Share synthetic summary\",\n    \"slug\": \"/synthetic-launch-brief\"\n  }\n}\n",
                    ],
                ],
                '2 content lines changed inside a larger representative article document.',
                [
                    'Scope: article intro plus one body section plus one metrics callout segment.',
                    'Representative scale: larger than the tiny edit examples, but still localized.',
                    'Why it matters: article-sized files can still avoid blanket rewrites.',
                ],
                [
                    ['line' => 5, 'detail' => 'Expanded the intro paragraph with one additional release-handoff detail.'],
                    ['line' => 13, 'detail' => 'Refined one operations paragraph inside the article body.'],
                    ['line' => 18, 'detail' => 'Updated one metrics callout line in the same document.'],
                ]
            ),
        ];

        $plaintextDemo = self::prettyJson([
            'title' => 'Synthetic spring launch',
            'status' => 'staging',
            'blocks' => [
                ['type' => 'hero', 'headline' => 'Representative storage with precise mutation'],
                ['type' => 'cta', 'label' => 'Review synthetic release checklist'],
            ],
        ]);
        $plaintextBytes = strlen($plaintextDemo);
        $compressedBytes = self::compressBytes($plaintextDemo);
        $storedUnits = [
            ['id' => 'synthetic-demo-unit-01', 'role' => 'segment'],
            ['id' => 'synthetic-demo-unit-02', 'role' => 'segment'],
            ['id' => 'synthetic-demo-manifest-01', 'role' => 'manifest'],
        ];

        $crypto = [
            'notice' => 'High-level educational example only. The labels below are synthetic and do not expose production wiring, secrets, or operational identifiers.',
            'flow' => [
                ['title' => 'Structured content', 'tone' => 'blue'],
                ['title' => 'Compressed representation', 'tone' => 'green'],
                ['title' => 'Encrypted envelope', 'tone' => 'amber'],
                ['title' => 'Stored units', 'tone' => 'red'],
            ],
            'plaintext' => [
                'label' => 'Representative plaintext demo content',
                'tone' => 'blue',
                'language' => 'json',
                'content' => $plaintextDemo,
                'bytes' => $plaintextBytes,
            ],
            'compressed' => [
                'label' => 'Representative compressed demo payload',
                'tone' => 'green',
                'language' => 'pseudo',
                'content' => "gzip(representative plaintext) => synthetic-demo-payload (" . self::formatBytes($compressedBytes) . ")\n<synthetic compressed bytes omitted>",
                'bytes' => $compressedBytes,
            ],
            'encrypted' => [
                'label' => 'Representative encrypted demo envelope',
                'tone' => 'amber',
                'language' => 'json',
                'content' => self::prettyJson([
                    'envelopeType' => 'synthetic-demo-envelope-v1',
                    'keyLabel' => 'synthetic-demo-key-label-01',
                    'nonceLabel' => '<synthetic-demo-nonce>',
                    'ciphertext' => '<synthetic-opaque-bytes>',
                    'tagLabel' => '<synthetic-demo-tag>',
                ]),
                'bytes' => $compressedBytes + self::ENVELOPE_OVERHEAD_BYTES,
            ],
            'stored' => [
                'label' => 'Representative stored representation',
                'tone' => 'red',
                'language' => 'json',
                'content' => self::prettyJson([
                    'manifestLabel' => 'synthetic-demo-manifest-01',
                    'unitLabels' => ['synthetic-demo-unit-01', 'synthetic-demo-unit-02'],
                    'state' => 'synthetic-read-only-example',
                ]),
                'units' => $storedUnits,
            ],
            'pseudocode' => "representative structured content\n  -> compress(synthetic payload)\n  -> wrap in synthetic encrypted envelope\n  -> persist representative manifest + stored units",
        ];

        $compression = [
            'notice' => 'Representative numbers computed from local synthetic fixtures inside this route. They are not measured from live production artifacts. In this representative example, compression appears before the synthetic envelope step; encrypted output is treated as effectively incompressible.',
            'rows' => [
                self::buildCompressionRow(
                    'High-savings metadata pack',
                    self::prettyJson([
                        'entries' => array_fill(0, 18, [
                            'kind' => 'synthetic-content-entry',
                            'status' => 'staging',
                            'reviewState' => 'pending-synthetic-review',
                            'owner' => 'synthetic-ops-team',
                            'labels' => ['audit', 'structured', 'synthetic-delivery', 'release-window'],
                            'routing' => ['site' => 'synthetic-site', 'locale' => 'en-CA', 'surface' => 'control-plane'],
                        ]),
                    ]),
                    'Highly repetitive metadata compresses aggressively before the synthetic envelope step.'
                ),
                self::buildCompressionRow(
                    'Article-sized page',
                    "<article class=\"synthetic-longform\">\n  <header>\n    <h1>Synthetic launch analysis</h1>\n    <p>Representative long-form content carries repeated wrappers, headings, classes, and structural markup.</p>\n  </header>\n  <section><h2>Overview</h2><p>Repeated structure and editorial patterns still compress well even when the prose is less repetitive than raw metadata.</p></section>\n  <section><h2>Operations</h2><p>Representative long-form content benefits from compression, but not as dramatically as dense metadata packs.</p></section>\n  <section><h2>Release</h2><p>Review, staging, and promotion stay separate in the control plane.</p></section>\n</article>\n",
                    'Article-sized markup still benefits from compression, but the savings are more moderate than dense metadata.'
                ),
                self::buildCompressionRow(
                    'Article plus interchangeable block data',
                    self::prettyJson([
                        'article' => [
                            'slug' => 'synthetic-launch-feature',
                            'headline' => 'Synthetic launch feature',
                            'bodyBlocks' => array_fill(0, 5, [
                                'type' => 'feature-block',
                                'layout' => 'two-column',
                                'theme' => 'synthetic-release',
                                'cta' => 'Review synthetic release',
                            ]),
                        ],
                        'variants' => array_fill(0, 8, [
                            'locale' => 'en-CA',
                            'authorCard' => ['name' => 'Synthetic editor', 'team' => 'Synthetic editorial desk'],
                            'slotData' => ['theme' => 'synthetic-release', 'cta' => 'Review synthetic release', 'legal' => 'Representative synthetic copy'],
                        ]),
                    ]),
                    'An article combined with interchangeable repeated block data can save a large amount of space because the surrounding structure repeats heavily.'
                ),
            ],
        ];

        $featuredCompression = $compression['rows'][2];
        $chart = self::buildHeroChart($featuredCompression);

        $workflows = [
            [
                'tone' => 'teal',
                'eyebrow' => 'Small editorial change',
                'title' => 'Homepage or landing-page copy update',
                'actor' => 'Content editor',
                'surfaces' => 'Builder, staged preview, optional Explorer inspection',
                'summary' => 'A small homepage or landing-page edit should feel like a targeted content update, not a full opaque replacement.',
                'bestWhen' => 'One field, sentence, or CTA changes and the team wants rewrite scope to stay understandable.',
                'result' => 'Teams can reason about a localized rewrite before anything is promoted.',
                'steps' => [
                    ['stage' => 'Edit', 'copy' => 'Adjust one field or paragraph in structured content.'],
                    ['stage' => 'Review', 'copy' => 'Check the representative rewrite footprint before approval.'],
                    ['stage' => 'Promote', 'copy' => 'Keep the public website unchanged until the staged version is explicitly approved.'],
                ],
            ],
            [
                'tone' => 'blue',
                'eyebrow' => 'Release lane',
                'title' => 'Staging review and production promotion',
                'actor' => 'Editor plus reviewer',
                'surfaces' => 'Builder, Environments, public site kept separate',
                'summary' => 'Promotion works better when authoring, approval, and go-live decisions stay visibly separated.',
                'bestWhen' => 'A change needs reviewer sign-off and a clean record of what moved from staging to production.',
                'result' => 'Staging and production stay distinct, with a clearer promotion path.',
                'steps' => [
                    ['stage' => 'Prepare', 'copy' => 'Build and validate the change in staging first.'],
                    ['stage' => 'Approve', 'copy' => 'Capture reviewer sign-off before the go-live step.'],
                    ['stage' => 'Promote', 'copy' => 'Move the approved state forward only when the environment boundary is clear.'],
                ],
            ],
            [
                'tone' => 'amber',
                'eyebrow' => 'Inspection lane',
                'title' => 'Safe inspection without mixing inspection and editing',
                'actor' => 'Admin or technical reviewer',
                'surfaces' => 'Explorer for inspection, Builder for editing',
                'summary' => 'Inspection remains easier to trust when the read-only surface does not quietly become an editing surface.',
                'bestWhen' => 'A reviewer needs to inspect stored artifacts or structure without drifting into authoring work.',
                'result' => 'Review, inspection, and editing stay operationally distinct.',
                'steps' => [
                    ['stage' => 'Inspect', 'copy' => 'Use Explorer to inspect representative stored artifacts or layout.'],
                    ['stage' => 'Decide', 'copy' => 'Confirm whether the task is still inspection or has become an edit request.'],
                    ['stage' => 'Hand off', 'copy' => 'Switch to Builder only when actual authoring is required.'],
                ],
            ],
            [
                'tone' => 'green',
                'eyebrow' => 'Compression-heavy content',
                'title' => 'Content-heavy pages with repeated structured blocks',
                'actor' => 'Site team managing articles, promos, or catalog-heavy pages',
                'surfaces' => 'Structured content in Builder plus runtime delivery',
                'summary' => 'Large pages become easier to manage when repeated blocks and metadata stay structured instead of hand-duplicated everywhere.',
                'bestWhen' => 'Articles, promos, or catalogs repeat the same shapes, labels, metadata, or interchangeable content blocks.',
                'result' => 'Repeated structure stays friendlier to compression before the synthetic envelope step.',
                'steps' => [
                    ['stage' => 'Compose', 'copy' => 'Store repeated blocks, metadata, and article sections in structured content.'],
                    ['stage' => 'Pack', 'copy' => 'Let repeated plaintext patterns compress before the synthetic envelope step.'],
                    ['stage' => 'Deliver', 'copy' => 'Keep runtime delivery flexible without exposing storage identifiers on this page.'],
                ],
            ],
            [
                'tone' => 'rose',
                'eyebrow' => 'Boundary control',
                'title' => 'Tenant-aware control-plane boundaries',
                'actor' => 'Tenant admin',
                'surfaces' => 'Admin, roles, settings, and environment views',
                'summary' => 'Shared platforms need explicit boundaries so one team can work confidently without inheriting another team’s permissions.',
                'bestWhen' => 'Multiple teams share one platform and different people need different inspection, editing, or promotion authority.',
                'result' => 'Operational boundaries stay visible instead of being implied by convention.',
                'steps' => [
                    ['stage' => 'Assign', 'copy' => 'Grant inspection, editing, and promotion capabilities deliberately.'],
                    ['stage' => 'Separate', 'copy' => 'Keep system-level settings distinct from ordinary content work.'],
                    ['stage' => 'Audit', 'copy' => 'Use role-aware surfaces so tenant boundaries stay explicit over time.'],
                ],
            ],
        ];

        $history = [
            'notice' => 'Representative synthetic branch history and audit trail. Branch names, actors, timestamps, and actions below are examples only and do not come from a live repository, tenant, or customer workspace.',
            'legend' => 'The graph shows authored edits, review sign-off, promotion, and one explicit rollback path. Each node is labeled in text so the graph does not rely on color alone.',
            'branches' => [
                ['id' => 'production', 'label' => 'production'],
                ['id' => 'staging', 'label' => 'staging'],
                ['id' => 'feature-spring-launch', 'label' => 'feature/spring-launch'],
                ['id' => 'revert-hero-rollback', 'label' => 'revert/hero-rollback'],
            ],
            'events' => [
                [
                    'id' => 'syn-main-01',
                    'branch' => 'production',
                    'time' => '09:00',
                    'actor' => 'Synthetic release bot',
                    'label' => 'Baseline publish',
                    'detail' => 'The approved baseline stays live while staged work continues elsewhere.',
                    'kind' => 'publish',
                ],
                [
                    'id' => 'syn-stage-01',
                    'branch' => 'staging',
                    'time' => '09:04',
                    'actor' => 'Synthetic release bot',
                    'label' => 'Staging sync',
                    'detail' => 'Staging is aligned with the current approved baseline before edits begin.',
                    'kind' => 'sync',
                ],
                [
                    'id' => 'syn-feature-01',
                    'branch' => 'feature-spring-launch',
                    'time' => '09:18',
                    'actor' => 'Alex Chen (synthetic editor)',
                    'label' => 'Homepage launch copy update',
                    'detail' => 'A representative content edit is saved on a feature branch instead of directly on production.',
                    'kind' => 'edit',
                ],
                [
                    'id' => 'syn-feature-02',
                    'branch' => 'feature-spring-launch',
                    'time' => '09:32',
                    'actor' => 'Morgan Reed (synthetic reviewer)',
                    'label' => 'Review sign-off',
                    'detail' => 'Review approval is attached to the same synthetic branch for traceability.',
                    'kind' => 'review',
                ],
                [
                    'id' => 'syn-stage-merge',
                    'branch' => 'staging',
                    'time' => '09:45',
                    'actor' => 'Synthetic release bot',
                    'label' => 'Merge to staging',
                    'detail' => 'The approved feature branch is merged into staging for final verification.',
                    'kind' => 'merge',
                ],
                [
                    'id' => 'syn-prod-promote',
                    'branch' => 'production',
                    'time' => '10:05',
                    'actor' => 'Priya Singh (synthetic admin)',
                    'label' => 'Promote to production',
                    'detail' => 'Production receives the approved staging branch with an explicit promotion record.',
                    'kind' => 'promote',
                ],
                [
                    'id' => 'syn-revert-01',
                    'branch' => 'revert-hero-rollback',
                    'time' => '11:14',
                    'actor' => 'Priya Singh (synthetic admin)',
                    'label' => 'Open revert branch',
                    'detail' => 'A targeted rollback is prepared after a wording issue is spotted in the CTA.',
                    'kind' => 'revert',
                ],
                [
                    'id' => 'syn-prod-revert',
                    'branch' => 'production',
                    'time' => '11:26',
                    'actor' => 'Synthetic release bot',
                    'label' => 'Rollback promoted',
                    'detail' => 'The representative rollback returns to production without hiding the authored path.',
                    'kind' => 'revert-merge',
                ],
            ],
            'links' => [
                ['from' => 'syn-main-01', 'to' => 'syn-stage-01', 'type' => 'sync'],
                ['from' => 'syn-stage-01', 'to' => 'syn-feature-01', 'type' => 'branch'],
                ['from' => 'syn-feature-01', 'to' => 'syn-feature-02', 'type' => 'review'],
                ['from' => 'syn-feature-02', 'to' => 'syn-stage-merge', 'type' => 'merge'],
                ['from' => 'syn-stage-merge', 'to' => 'syn-prod-promote', 'type' => 'promote'],
                ['from' => 'syn-prod-promote', 'to' => 'syn-revert-01', 'type' => 'branch'],
                ['from' => 'syn-revert-01', 'to' => 'syn-prod-revert', 'type' => 'revert'],
            ],
            'tracked' => [
                'Actor identity and role at the time of change',
                'Representative branch path and promotion target',
                'Action time, approval point, and rollback path',
                'Content-focused summaries without exposing live customer data',
            ],
            'revertNotice' => 'Representative rollback stays explicit: the graph shows a separate synthetic revert branch rather than implying a hidden in-place mutation.',
        ];

        $sveltekit = [
            'notice' => 'Short representative summary based on the in-repo `@efsdb/adapter-php` package. This section stays high-level and omits chunking internals, runtime secrets, and deployment-specific identifiers.',
            'configLabel' => 'Adapter usage from the package README',
            'configCode' => "import adapter from '@efsdb/adapter-php';\n\nexport default {\n  kit: {\n    adapter: adapter()\n  }\n};\n",
            'flow' => [
                [
                    'title' => 'Client assets and prerendered output stay separable',
                    'copy' => 'The in-repo PHP adapter prepares SvelteKit output as distinct groups instead of flattening the whole site into one opaque publish artifact.',
                ],
                [
                    'title' => 'PHP import path remains authoritative',
                    'copy' => 'The adapter hands imported output through the PHP runtime path, which keeps the runtime truth aligned with the rest of EFSDB control-plane behavior.',
                ],
                [
                    'title' => 'EFSDB strengths stay visible',
                    'copy' => 'That separation makes promotion, inspection, storage efficiency, and representative rollback stories easier to explain and reason about.',
                ],
            ],
            'treeLabel' => 'Representative packaging view',
            'treeCode' => "sveltekit build\n├─ client app assets\n│  ├─ _app/immutable/*.js\n│  └─ _app/immutable/*.css\n├─ prerendered routes\n│  ├─ index.html\n│  └─ blog/synthetic-launch/index.html\n└─ imported into EFSDB through the PHP runtime\n",
            'benefits' => [
                'Shared app assets can be handled separately from prerendered pages and route output.',
                'Prerendered route output fits naturally with staged promotion and explicit rollback workflows.',
                'Structured import groups line up with compression-before-envelope behavior and clearer inspection boundaries.',
            ],
        ];

        $safety = [
            'title' => 'Safety and trust',
            'copy' => 'This showcase intentionally uses synthetic examples and omits sensitive implementation details. It is designed to explain the platform without weakening the system security posture.',
            'excluded' => [
                'No real secrets, keys, salts, IVs, env vars, or connection details.',
                'No live customer, tenant, or public-site content.',
                'No real chunk IDs, manifest IDs, hashes, storage roots, or bucket/container names.',
                'No production-path crypto or storage calls for this page.',
                'No live API requests or storage inspection for this route.',
            ],
        ];

        $payload = [
            'hero' => $hero,
            'strengths' => $strengths,
            'precision' => [
                'notice' => self::REPRESENTATIVE_TRACE_LABEL,
                'segmentModel' => self::REPRESENTATIVE_SEGMENT_MODEL,
                'segmentLegend' => 'Each footprint bar shows how much of the representative segment model changed versus stayed untouched. Accent fill means changed; muted fill means untouched.',
                'highlightLegend' => 'In the code panes, line numbers stay fixed and only changed rows get a tinted background plus an Edit marker.',
                'files' => $precisionFiles,
            ],
            'crypto' => $crypto,
            'compression' => $compression,
            'chart' => $chart,
            'workflows' => $workflows,
            'history' => $history,
            'sveltekit' => $sveltekit,
            'safety' => $safety,
        ];

        self::validatePayload($payload);

        return $payload;
    }

    public static function formatBytes(int $bytes): string
    {
        if ($bytes < 1024) {
            return $bytes . ' B';
        }

        if ($bytes < 1024 * 1024) {
            return number_format($bytes / 1024, 1) . ' KB';
        }

        return number_format($bytes / (1024 * 1024), 2) . ' MB';
    }

    public static function formatPercent(float $ratio, int $precision = 1): string
    {
        return number_format($ratio * 100, $precision) . '%';
    }

    /**
     * @param array<int,array{label:string,before:string,after:string}> $segments
     * @param list<string> $notes
     * @param list<array{line:int,detail:string}> $diffDetails
     * @return array<string,mixed>
     */
    private static function buildPrecisionDemo(
        string $kind,
        string $title,
        string $path,
        string $edit,
        array $segments,
        string $summary,
        array $notes,
        array $diffDetails
    ): array
    {
        $before = '';
        $after = '';
        $touchedSegments = 0;
        $rewrittenBytes = 0;
        $changedLabels = [];
        $changedIndexes = [];

        foreach ($segments as $index => $segment) {
            $before .= $segment['before'];
            $after .= $segment['after'];

            if ($segment['before'] !== $segment['after']) {
                $touchedSegments++;
                $rewrittenBytes += max(strlen($segment['before']), strlen($segment['after']));
                $changedLabels[] = $segment['label'];
                $changedIndexes[] = $index + 1;
            }
        }

        $originalSize = strlen($before);

        return [
            'kind' => $kind,
            'title' => $title,
            'path' => $path,
            'language' => self::detectLanguage($path),
            'edit' => $edit,
            'summary' => $summary,
            'notes' => $notes,
            'diffDetails' => $diffDetails,
            'before' => $before,
            'after' => $after,
            'originalBytes' => $originalSize,
            'totalSegments' => count($segments),
            'touchedSegments' => $touchedSegments,
            'approximateRewrittenBytes' => $rewrittenBytes,
            'rewriteRatio' => $originalSize > 0 ? $rewrittenBytes / $originalSize : 0.0,
            'segmentLabels' => $changedLabels,
            'touchedSegmentIndexes' => $changedIndexes,
        ];
    }

    private static function detectLanguage(string $path): string
    {
        return match (strtolower(pathinfo($path, PATHINFO_EXTENSION))) {
            'json' => 'json',
            'html' => 'html',
            'php' => 'php',
            default => 'text',
        };
    }

    /**
     * @param array<string,mixed> $row
     * @return array<string,mixed>
     */
    private static function buildHeroChart(array $row): array
    {
        $rawBytes = (int)$row['rawBytes'];
        $compressedBytes = (int)$row['compressedBytes'];
        $storedBytes = (int)$row['encryptedEnvelopeBytes'];
        $overheadBytes = max(0, $storedBytes - $compressedBytes);
        $savedBytes = max(0, $rawBytes - $compressedBytes);
        $total = $savedBytes + $compressedBytes + $overheadBytes;

        return [
            'title' => 'Representative storage profile',
            'copy' => 'Synthetic view of one article plus interchangeable data pack. The chart shows what remains stored, what was avoided by compression, and the small synthetic envelope overhead.',
            'segments' => [
                [
                    'label' => 'Compressed payload',
                    'bytes' => $compressedBytes,
                    'ratio' => $total > 0 ? $compressedBytes / $total : 0.0,
                    'color' => '#2563eb',
                ],
                [
                    'label' => 'Compression savings',
                    'bytes' => $savedBytes,
                    'ratio' => $total > 0 ? $savedBytes / $total : 0.0,
                    'color' => '#16a34a',
                ],
                [
                    'label' => 'Envelope overhead',
                    'bytes' => $overheadBytes,
                    'ratio' => $total > 0 ? $overheadBytes / $total : 0.0,
                    'color' => '#f59e0b',
                ],
            ],
            'rawBytes' => $rawBytes,
            'storedBytes' => $storedBytes,
            'savedBytes' => $savedBytes,
        ];
    }

    /**
     * @return array<string,mixed>
     */
    private static function buildCompressionRow(string $label, string $plaintext, string $observation): array
    {
        $rawBytes = strlen($plaintext);
        $compressedBytes = self::compressBytes($plaintext);
        $envelopeBytes = $compressedBytes + self::ENVELOPE_OVERHEAD_BYTES;

        return [
            'label' => $label,
            'rawBytes' => $rawBytes,
            'compressedBytes' => $compressedBytes,
            'encryptedEnvelopeBytes' => $envelopeBytes,
            'savedRatio' => $rawBytes > 0 ? 1 - ($compressedBytes / $rawBytes) : 0.0,
            'observation' => $observation,
        ];
    }

    /**
     * @param array<string,mixed> $payload
     */
    private static function validatePayload(array $payload): void
    {
        $encoded = json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        if (!is_string($encoded)) {
            throw new RuntimeException('Unable to serialize showcase payload for validation.');
        }

        $checks = [
            '/BEGIN PRIVATE KEY/i' => 'private key material marker',
            '/process\.env/i' => 'process.env reference',
            '/(^|[^A-Za-z0-9])\.env([^A-Za-z0-9]|$)/i' => '.env reference',
            '/(?:postgres(?:ql)?|mysql|mssql|sqlserver|mongodb|redis):\/\/[^\s"\']+/i' => 'connection string pattern',
            '/(?:DefaultEndpointsProtocol|AccountKey|SharedAccessSignature)=/i' => 'cloud connection string fragment',
            '/https?:\/\/[^\s"\']+/i' => 'absolute hostname reference',
            '/\b(?:localhost|127\.0\.0\.1)\b/i' => 'local hostname reference',
            '/[A-Za-z]:\\\\[^\s"\']+/i' => 'windows absolute path reference',
            '#/(?:Users|home|var|srv|mnt|opt)/[^\s"\']+#i' => 'unix absolute path reference',
            '/\b[a-f0-9]{32,}\b/i' => 'hash-like token',
            '/\b[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\b/i' => 'uuid-like token',
            '/sk_(?:live|prod)_[A-Za-z0-9]{12,}/i' => 'secret-like API token',
            '/AIza[0-9A-Za-z\-_]{20,}/' => 'secret-like API token',
        ];

        foreach ($checks as $pattern => $label) {
            if (preg_match($pattern, $encoded) === 1) {
                throw new RuntimeException('Showcase payload contains blocked content: ' . $label);
            }
        }
    }

    private static function prettyJson(array $value): string
    {
        return (string)json_encode(
            $value,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR
        ) . "\n";
    }

    private static function compressBytes(string $value): int
    {
        if (function_exists('gzencode')) {
            $compressed = gzencode($value, 9, ZLIB_ENCODING_GZIP);
            if (is_string($compressed)) {
                return strlen($compressed);
            }
        }

        $fallback = gzcompress($value, 9);
        if (!is_string($fallback)) {
            throw new RuntimeException('Unable to compress showcase demo fixture.');
        }

        return strlen($fallback);
    }
}
