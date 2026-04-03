<svelte:options customElement="efsdb-envelope-inspector" />
<script lang="ts">
    import EnvelopeInspector from './EnvelopeInspector.svelte';

    let { url = '' } = $props<{ url: string }>();
</script>

<EnvelopeInspector envelopeUrl={url} />
