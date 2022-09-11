<script lang="ts">
    import Task from "./Task.svelte";
    import { tasks } from "../stores/tasks";

    let tasks_store = [];
    tasks.subscribe((value) => (tasks_store = value));
</script>

<div class="task-viewer">
    {#each tasks_store as task}
        <Task name={task.name} />
    {/each}
</div>

<style>
    .task-viewer {
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
</style>
