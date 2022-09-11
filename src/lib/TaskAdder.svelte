<script lang="ts">
    import { tasks } from "../stores/tasks";

    let task_to_add = "";

    function addTask(): void {
        if (task_to_add.trim().length > 0) {
            tasks.update((value) => [...value, { name: task_to_add }]);
        }
    }
</script>

<div class="task-input">
    <input type="text" bind:value={task_to_add} />
    <button on:click={addTask}>Aggiungi</button>
</div>

<style>
    .task-input {
        width: 100%;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    input {
        height: 35px;
        border-radius: 4px;
        border: 1px solid white;
        font-size: 18px;
        width: 80%;
    }

    button {
        background-color: #000000;
    }
</style>
