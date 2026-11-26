<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '#lib/components/Header.svelte';
    import Markdown from '#lib/components/Markdown.svelte';

    const { href, header, edit } = $props();

    let md = $state('');

    onMount(async () => {
        const md_req = await fetch(href);
        md = await md_req.text();
    });
</script>

<div class="flex justify-center flex-col gap-4">
    <Header text={header} />
    <Markdown md={md} />

    <div class="flex justify-center">
        <a href={edit} target="_blank" rel="noopener noreferrer" class="text-xl bg-primary dark:bg-(--color-primary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Edit</a>
    </div>
</div>