<script lang="ts">
    import MarkdownLoader from '#lib/components/MarkdownLoader.svelte';

    import { CDN_URL, ABOUT_PAGE_EDIT_URL } from '$app/env/public';
</script>

<MarkdownLoader href={`${CDN_URL}/pages/about.md`} header="About page" edit={ABOUT_PAGE_EDIT_URL} />