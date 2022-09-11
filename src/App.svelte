<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import Todo from "./lib/Todo.svelte";

    let ready = false;
    onMount(() => (ready = true));
</script>

{#if ready}
    <main in:fly={{ y: 200, duration: 300 }}>
        <Todo />
    </main>
{/if}

<style>
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
