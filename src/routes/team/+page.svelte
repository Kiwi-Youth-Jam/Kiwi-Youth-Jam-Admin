<script lang="ts">
    import { onMount } from 'svelte';
    import Grid from '#lib/components/Grid.svelte';
    import GridCard from '#lib/components/GridCard.svelte';
    import Header from '#lib/components/Header.svelte';

    import { CDN_URL } from '$app/env/public';

    let sponsors: {name: string, image: string}[] = $state([]);

    onMount(async () => {
        const sponsors_req = await fetch(`${CDN_URL}/pages/team.json`);
		sponsors = await sponsors_req.json();
	});
</script>

<Header text="Team page" />

<section id="sponsors" class="py-8 flex flex-col gap-4 items-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
	<Grid>
		{#each sponsors as sponsor}
			<GridCard name={sponsor.name} image={sponsor.image} description='' />
		{/each}
	</Grid>

    <a href={`${CDN_URL}/pages/team.json?edit`} target="_blank" rel="noopener noreferrer" class="text-xl bg-primary dark:bg-(--color-primary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Edit</a>
</section>