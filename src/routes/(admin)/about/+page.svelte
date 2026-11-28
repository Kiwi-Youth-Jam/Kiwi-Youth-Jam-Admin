<script lang="ts">
    import MarkdownLoader from '#lib/components/MarkdownLoader.svelte';

    import { CDN_URL } from '$app/env/public';
</script>

<MarkdownLoader href={`${CDN_URL}/pages/about.md`} header="About page" />