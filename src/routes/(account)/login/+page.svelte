<script lang="ts">
    import { goto } from "$app/navigation";
    import logo from "$lib/assets/fajurion.png";
    import { get, post } from "$lib/script/constants";

    let username: string, password: string;

    async function login() {

        const res = await post("/auth/login", JSON.stringify({
            "username": username,
            "password": password
        }));

        if(res.success) {
            localStorage.setItem("token", res.token);
            goto("/dash")
        }

        username = ""
        password = ""
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

            <input bind:value={username} class="text-medium" type="text" placeholder="Username" />
            <input bind:value={password} class="text-medium" type="password" placeholder="Password" />

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