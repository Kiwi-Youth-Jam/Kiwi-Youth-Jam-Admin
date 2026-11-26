<script lang="ts">
    import { CDN_URL } from '$app/env/public';
    import { onMount } from 'svelte';

    let mailList: string[] = $state([]);

    onMount(async () => {
        const mailListReq = await fetch('/api/get_maillist');
        mailList = await mailListReq.json();
    });
</script>

<h2 class="font-bold text-4xl text-center text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) mb-4 ml-4">Newsletter</h2>

<div class="flex flex-col md:flex-row justify-between">
    <section class="flex flex-col gap-2 bg-primary dark:bg-(--color-primary:dark) rounded-xl p-4 ml-3 max-h-[40svh] md:max-h-[80svh] overflow-y-auto">
        <div class="flex flex-row items-center gap-4 md:min-w-[20vw] md:max-w-[20vw]">
            <h2 class="text-(--color-text-primary) text-xl font-bold">Mail list</h2>

            <a href="https://google.com" target="_blank" rel="noopener noreferrer" class="text-xl bg-secondary dark:bg-(--color-secondary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Add</a>
        </div>

        <div class="flex flex-col gap-2 font-bold">
            {#each mailList as mailEntry}
                <span class="text-(--color-text-primary)">{mailEntry}</span>
            {/each}
        </div>
    </section>

    <section id="preview" class="flex flex-col gap-4 items-center">
        <iframe class="border border-gray-300 rounded-lg" title="Newsletter html" src={`${CDN_URL}/newsletter.html`}></iframe>

        <div>
            <a href={`${CDN_URL}/newsletter.html?edit`} target="_blank" rel="noopener noreferrer" class="text-xl bg-primary dark:bg-(--color-primary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)">Edit</a>
        </div> <!-- For this to work add [global]\n cookie-lax to copyparty config-->
    </section>

    <section class="bg-primary dark:bg-(--color-primary:dark) rounded-xl md:min-w-[20vw] md:max-w-[20vw] mr-3 p-6">
        <form action='/api/send_newsletter' method="POST">
            <input type="text" name="to" placeholder="to" />
            <input type="text" name="subject" placeholder="subject" />
            <input type="submit" class="text-xl bg-secondary dark:bg-(--color-secondary-dark) shadow-xl rounded-xl font-display md:text-2xl transition p-2 hover:cursor-pointer hover:bg-(--color-hovered) text-(--color-text-primary) hover:dark:bg-(--color-hovered-dark) hover:text-(--color-text-hovered) hover:dark:text-(--color-text-hovered-dark)" value="Send" />
        </form>
    </section>
</div>