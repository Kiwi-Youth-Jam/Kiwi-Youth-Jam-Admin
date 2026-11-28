<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<style>
    @reference "../app.css";

    :global(body) {
        @apply bg-light dark:bg-dark;
    }

	:global(html) {
        scroll-behavior: smooth;
    }
</style>

<svelte:head>
	<title>Kiwi Youth Jam Admin Login</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}