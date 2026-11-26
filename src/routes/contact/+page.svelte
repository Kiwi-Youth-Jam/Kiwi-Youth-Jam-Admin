<script lang="ts">
    import MarkdownLoader from '#lib/components/MarkdownLoader.svelte';

    import { CDN_URL, CONTACT_PAGE_EDIT_URL } from '$app/env/public';
</script>

<MarkdownLoader href={`${CDN_URL}/pages/contact.md`} header="Contact page" edit={CONTACT_PAGE_EDIT_URL} />