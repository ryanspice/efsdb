<script lang="ts">
  import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete';
  import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
  import { css } from '@codemirror/lang-css';
  import { html } from '@codemirror/lang-html';
  import { json } from '@codemirror/lang-json';
  import { php } from '@codemirror/lang-php';
  import { bracketMatching, defaultHighlightStyle, foldGutter, foldKeymap, indentOnInput, syntaxHighlighting } from '@codemirror/language';
  import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
  import { Compartment, EditorState } from '@codemirror/state';
  import { crosshairCursor, drawSelection, dropCursor, EditorView, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, keymap, lineNumbers, rectangularSelection } from '@codemirror/view';
  import { onDestroy, onMount } from 'svelte';

  type Props = {
    value: string;
    language?: string;
    readonly?: boolean;
    contextLabel?: string;
    autofocus?: boolean;
    onchange?: (value: string) => void;
    onsave?: () => void;
  };

  let { value = $bindable(''), language = 'text', readonly = false, contextLabel = '', autofocus = false, onchange, onsave }: Props = $props();

  let container: HTMLDivElement;
  let view: EditorView | null = null;
  let readonlyCompartment = new Compartment();
  let languageCompartment = new Compartment();

  function detectLanguage(ext: string, mime: string): import('@codemirror/state').Extension {
    const e = ext.toLowerCase();
    switch (e) {
      case 'php':
        return php();
      case 'svelte':
        return html();
      case 'json':
        return json();
      case 'css':
        return css();
      case 'html':
      case 'htm':
        return html();
      default:
        return [];
    }
  }

  const theme = EditorView.theme({
    '&': {
      height: '100%',
      fontSize: 'var(--efs-code-font-size, 14px)',
      fontFamily: '"Cascadia Code", "Fira Code", "JetBrains Mono", monospace',
    },
    '.cm-scroller': {
      overflow: 'auto',
      fontFamily: 'inherit',
    },
    '.cm-content': {
      caretColor: '#007acc',
    },
    '.cm-gutters': {
      backgroundColor: '#f8f8f2',
      color: '#6e7681',
      border: 'none',
      borderRight: '1px solid #e0e0e0',
    },
    '.cm-activeLineGutter': {
      backgroundColor: '#efefef',
    },
    '.cm-activeLine': {
      backgroundColor: '#f5f5f5',
    },
    '.cm-selectionBackground': {
      backgroundColor: '#add6ff !important',
    },
    '&.cm-focused .cm-selectionBackground': {
      backgroundColor: '#add6ff !important',
    },
  });

  function buildExtensions(lang: string, isReadonly: boolean): import('@codemirror/state').Extension[] {
    const langExt = detectLanguage(lang, '');
    return [
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      foldGutter(),
      drawSelection(),
      dropCursor(),
      EditorState.allowMultipleSelections.of(true),
      indentOnInput(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([
        ...closeBracketsKeymap,
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...completionKeymap,
        indentWithTab,
        {
          key: 'Mod-s',
          run: () => {
            onsave?.();
            return true;
          },
        },
      ]),
      languageCompartment.of(langExt),
      readonlyCompartment.of(EditorState.readOnly.of(isReadonly)),
      theme,
    ];
  }

  onMount(() => {
    view = new EditorView({
      state: EditorState.create({
        doc: value,
        extensions: buildExtensions(language, readonly),
      }),
      parent: container,
    });

    view.dom.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault();
      }
    });
  });

  onDestroy(() => {
    view?.destroy();
    view = null;
  });

  $effect(() => {
    if (!view) return;
    const current = view.state.doc.toString();
    if (current !== value) {
      view.dispatch({
        changes: { from: 0, to: current.length, insert: value },
      });
    }
  });

  $effect(() => {
    if (!view) return;
    view.dispatch({
      effects: readonlyCompartment.reconfigure(EditorState.readOnly.of(readonly)),
    });
  });

  $effect(() => {
    if (!view) return;
    const langExt = detectLanguage(language, '');
    view.dispatch({
      effects: languageCompartment.reconfigure(langExt),
    });
  });

  $effect(() => {
    if (view && autofocus) {
      // Need a small timeout to let the editor finish mounting its layout
      setTimeout(() => view?.focus(), 10);
    }
  });

  export function getValue(): string {
    return view?.state.doc.toString() ?? value;
  }
</script>

<div class="editor-wrap" bind:this={container}>
  {#if contextLabel}
    <div class="contextBar">{contextLabel}</div>
  {/if}
</div>

<style>
  .editor-wrap {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    --efs-code-font-size: 14px;
  }

  .contextBar {
    padding: 4px 12px;
    font: var(--efs-font-label, 700 12px/1.45 "Segoe UI Variable", "Segoe UI", system-ui, sans-serif);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--primary, #0070cc);
    background: color-mix(in oklab, var(--primary, #0070cc), transparent 92%);
    border-bottom: 1px solid color-mix(in oklab, var(--border), var(--primary, #0070cc) 15%);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .editor-wrap :global(.cm-editor) {
    height: 100%;
    flex: 1;
    min-height: 0;
  }

  .editor-wrap :global(.cm-editor.cm-focused) {
    outline: none;
  }

  @media (min-width: 48rem) {
    .editor-wrap {
      --efs-code-font-size: 15px;
    }
  }
</style>
