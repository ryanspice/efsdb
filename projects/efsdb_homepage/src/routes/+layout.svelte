<script lang="ts">
	import { onMount } from 'svelte';
	let { children } = $props();

	onMount(() => {
		const loader = document.getElementById('efsdb-initial-loader');
		if (loader) {
			loader.style.opacity = '0';
			setTimeout(() => loader.remove(), 300);
		}
	});
</script>

<main>
	{@render children()}
</main>