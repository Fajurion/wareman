<script lang="ts">
    import { goto } from "$app/navigation";
    import logo from "$lib/assets/fajurion.png";
    import { get, post } from "$lib/script/constants";

    let username: string;
    let license: string;
    let password: string = "helloworld";

    let showPW = false;
    let copied = false;

    async function create() {

        if(username.length > 32) {
            alert("Username is too long!");
            return;
        }

        let res = await post("/account/create", JSON.stringify({
            "username": username,
            "license": license
        }))

        console.log(res)

        if(res.success) {
            password = res.password
            showPW = true;
            copied = false;
        } else {
            console.log("Account creation failed!")
        }
    }

    function copyPassword() {
        navigator.clipboard.writeText(password)
        copied = true;
    }
</script>

{#if showPW}
<div class="dialog-outer">
    <div class="dialog">
        <div class="header">
            <h2>Account created</h2>
        </div>

        <div class="content">

            <p class="text-medium">Please copy your password and keep it <strong>safe</strong>!</p>
            <div class="copy-field df">
                <p class="text-medium">{password}</p>
                <span class="material-icons icon clickable" on:click={copyPassword} on:keydown>content_copy</span>
            </div>

            {#if !copied}
            <button class="dialog-button text-medium df" on:click={copyPassword}>Copy password</button>
            {/if}

            {#if copied}
            <button class="dialog-button text-medium df" on:click={() => goto("/login")}>Continue</button>
            {/if}
        </div>
    </div>
</div>
{/if}

<div class="center">
    <div class="window">
        <div class="title">
            <img src={logo} alt="Fajurion Logo" />
            <h1>Wareman</h1>
        </div>

        <div class="form">
            <h3>Account creation</h3>

            <input bind:value={username} class="text-medium" type="text" placeholder="Username" />
            <input bind:value={license} class="text-medium" type="password" placeholder="Admin token/License" />

            <button on:click={create} on:keydown class="text-medium">Create account</button>
        </div>

        <div class="footer">
            <p class="text-medium">Already have an account?</p><a class="text-medium" href="/login">Login!</a>
        </div>
    </div>
</div>

<style lang="scss">
    @import "$lib/styles/dialog.scss";
    @import "$lib/styles/components/dialog/dialog-button.scss";
    @import "$lib/styles/components/normal/copy-field.scss";
    @import "$lib/styles/form.scss";
    @import "$lib/styles/components/title.scss";

    .df {
        margin-top: 0.3rem;
    }

    .dialog-button {
        margin-top: 1rem;
    }

</style>