<script lang="ts">
    import TextField from "#lib/components/TextField.svelte";
</script>

<section class="flex flex-col justify-center items-center gap-8 h-[100svh] text-(--color-text-secondary) dark:text-(--color-text-secondary-dark)">
    <h2 class="font-bold text-(--color-text-secondary) dark:text-(--color-text-secondary-dark) text-4xl text-center md-4">Login to Kiwi Youth Jam admin</h2>

    <form class="flex flex-col gap-4" action="/api/login" method="POST">
        <TextField text="Email" id="email" />
        <TextField type='password' text="Password" id="password" />
        <input type="submit">
    </form>
</section>