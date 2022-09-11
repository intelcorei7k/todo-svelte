<script lang="ts">
    export let name: string;
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { tasks } from "../stores/tasks";

    let color = "";
    onMount(async () => {
        color = `#${Math.floor(
            Math.random() * (99 - 20) + 20
        ).toString()}${Math.floor(
            Math.random() * (99 - 20) + 20
        ).toString()}${Math.floor(Math.random() * (99 - 20) + 20).toString()}`;
    });

    function deleteTask(): void {
        tasks.update((value) => value.filter((task) => task.name != name));
    }
</script>

<div
    transition:fly={{ y: 200, duration: 400 }}
    class="task"
    style:background-color={color}
>
    <div class="name">{name}</div>
    <button class="delete" on:click={deleteTask}>X</button>
</div>

<style>
    .task {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        height: 60px;
        border-radius: 2px;
        margin-top: 5px;
    }
</style>
