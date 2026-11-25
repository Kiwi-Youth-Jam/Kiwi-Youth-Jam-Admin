<script lang="ts">
    import { CDN_URL, GOOGLE_DRIVE_LINK } from '$app/env/public';
</script>

<h2 class="font-bold text-4xl text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) mb-4 ml-4">Welcome back</h2>

<section id="admin-tools" class="flex flex-col gap-2 text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) px-4">
    <h2 class="text-3xl font-bold">Admin tools</h2>

    <div class="flex flex-row gap-2">
        <a href={CDN_URL} target="_blank" rel="noopener noreferrer" class="text-xl bg-primary dark:bg-(--color-primary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Access CDN</a>
        <a href={GOOGLE_DRIVE_LINK} target="_blank" rel="noopener noreferrer" class="text-xl bg-primary dark:bg-(--color-primary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Access Google Drive</a>
    </div> <!-- For this to work add [global]\n cookie-lax to copyparty config-->
</section>