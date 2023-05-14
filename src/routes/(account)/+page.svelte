<script lang="ts">
    import logo from "$lib/assets/fajurion.png";
</script>

<div class="title">
    <img src={logo} alt="Fajurion Logo" />
    <h1>Wareman</h1>
</div>

<style lang="scss">

    .title {
        display: flex;
        align-items: center;

        img {
            filter: brightness(100%) sepia(100) saturate(100) hue-rotate(120deg);
            height: 50px;
            aspect-ratio: 1/1;
        }
    }

</style>