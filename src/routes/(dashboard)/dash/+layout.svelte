<script lang="ts">
    import Sidebar from "./sidebar.svelte";

</script>

<div class="body">
    <div class="sb">
        <Sidebar />
    </div>

    <div class="content">
        <slot />
    </div>
</div>

<style lang="scss">

    .body {
        display: flex;
        width: 100vw;
        height: 100vh;

        .sb {
            width: 35%;
            max-width: 350px;
            min-width: 280px;
            height: 100%;
            background-color: var(--eerie-black);
        }

        .content {
            width: 100%;
            height: 100%;
        }
    }

</style>