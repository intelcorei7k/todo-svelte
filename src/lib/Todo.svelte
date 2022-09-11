<script lang="ts">
    import TaskAdder from "./TaskAdder.svelte";
    import TaskViewer from "./TaskViewer.svelte";
</script>

<div class="main-container">
    <div class="main-title">Che combiniamo oggi?</div>
    <TaskAdder />
    <TaskViewer />
</div>

<style>
    .main-container {
        display: flex;
        flex-direction: column;
        padding: 5px;
        border-radius: 4px;
        background-color: #242424;
        overflow-y: scroll;
        height: max(50%, 500px);
        width: max(22.5%, 350px);
    }

    .main-title {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-top: 5px;
    }
</style>
