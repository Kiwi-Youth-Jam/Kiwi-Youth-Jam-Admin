<script lang="ts">
    import { onMount } from 'svelte';
    import Header from '#lib/components/Header.svelte';
    import Markdown from '#lib/components/Markdown.svelte';

    const { href, header } = $props();

    let md = $state('');

    onMount(async () => {
        const md_req = await fetch(href);
        md = await md_req.text();
    });
</script>

<div class="flex justify-center flex-col gap-4">
    <Header text={header} />
    <Markdown class="text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) shadow-xl rounded-4xl bg-(--color-primary) bg-(--color-primary-dark) mx-[10vw] min-[768px]:mx-[20vw] min-[1100px]:mx-[25vw] px-4" md={md} />

    <div class="flex justify-center">
        <a href={`${href}?edit2`} target="_blank" rel="noopener noreferrer" class="text-xl bg-primary dark:bg-(--color-primary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Edit</a>
    </div>
</div>