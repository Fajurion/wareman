<script lang="ts">
    import logo from "$lib/assets/fajurion.png";

    function login() {
        
    }
</script>

<div class="center">
    <div class="window">
        <div class="title">
            <img src={logo} alt="Fajurion Logo" />
            <h1>Wareman</h1>
        </div>

        <div class="form">
            <h3>Account login</h3>

            <input class="text-medium" type="text" placeholder="Username" />
            <input class="text-medium" type="password" placeholder="Password" />

            <button on:click={login} class="text-medium">Login</button>
        </div>

        <div class="footer">
            <p class="text-medium">No account?</p><a class="text-medium" href="/register">Create one!</a>
        </div>
    </div>
</div>

<style lang="scss">
    @import "$lib/styles/form.scss";

</style>