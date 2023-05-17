<script lang="ts">
    import logo from "$lib/assets/fajurion.png";
    import { fade, scale } from "svelte/transition";

    let addAppDialog = false;

    let name = "", description = "";
    let nameError = "", descriptionError = "";

    let elements = [
        {
            icon: "code",
            text: "Operating systems",
            link: "/os"
        },
        {
            icon: "people",
            text: "Users",
            link: "/settings"
        }
    ]

    let apps: any[] = [
    ]
    
    function appAdd() {
        nameError = "";
        descriptionError = "";

        if(name.length < 3 || name.length > 32) {
            nameError = "The name must be between 3 and 32 characters long.";
            return;
        }

        if(description.length > 255) {
            descriptionError = "The description must be between 0 and 255 characters long.";
            return;
        }

        // Create app
    } 

    function appDialog() {
        addAppDialog = true;
        name = "";
        description = "";
    }

</script>

{#if addAppDialog}
<div in:fade out:fade class="dialog-outer">
    <div in:scale out:scale class="dialog">
        <div class="header">
            <h3 class="text-medium">Add application</h3>
            <span class="material-icons icon-medium hover-primary clickable" on:keydown on:click={() => addAppDialog = false}>close</span>
        </div>

        <div class="content">
            {#if nameError != ""}
            <p class="small-headline-top text-small error">{nameError}</p>
            {:else}
            <p class="small-headline-top text-small">Enter an application name.</p>
            {/if}
            <input bind:value={name} type="text" class="dialog-input text-medium {nameError != '' ? 'dialog-input-error' : ''}" 
            placeholder="Application name">

            {#if descriptionError != ""}
            <p class="small-headline text-small error">{descriptionError}</p>
            {:else}
            <p class="small-headline text-small">Enter a description for your application (publicly visible).</p>
            {/if}
            <textarea bind:value={description} class="dialog-input text-medium {descriptionError != '' ? 'dialog-input-error' : ''}" 
            placeholder="Application description"></textarea>

            <button class="dialog-button text-medium headline-bottom" on:click={appAdd}>Add</button>
        </div>
    </div>
</div>
{/if}

<div class="sidebar">
    <div class="content">
        <div class="top">
            <div class="title">
                <img src={logo} alt="Fajurion Logo" />
                <p class="text-medium">Wareman</p>
            </div>
    
            <span class="hover-primary clickable material-icons icon-medium">logout</span>
        </div>
    
        <div class="buttons">

            <h3 class="text-medium headline-top">General</h3>
            {#each elements as element}
            <div class="sb-button">
                <span class="material-icons icon-small icon-primary">{element.icon}</span>
                <p class="text-medium">{element.text}</p>
            </div>
            {/each}
            
            <div class="row headline">
                <h3 class="text-medium">Warehouse</h3>
                <span class="material-icons icon-medium hover-primary clickable" on:click={appDialog} on:keydown>add</span>
            </div>

            {#if apps.length > 0}

            {#each apps as app}
            <div class="sb-button">
                <span class="material-icons icon-small icon-primary">dynamic_form</span>
                <p class="text-medium">{app.name}</p>
            </div>
            {/each}

            {:else}

            <p class="text-small">No applications found.</p>

            {/if}

        </div>
    </div>

    <div class="footer">
        <p class="text-small">© 2023 Fajurion Wareman</p>
    </div>
</div>

<style lang="scss">
    @import "$lib/styles/components/title-small.scss";
    @import "$lib/styles/components/dialog/input.scss";
    @import "$lib/styles/components/dialog/button.scss";
    @import "$lib/styles/dialog.scss";

    .sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .footer {
        padding: 0.3rem;
    }

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0rem;

        span {
            margin-right: 1rem;
        }
    }

    .sb-button {
        border-radius: 1rem;
        display: flex;
        align-items: center;
        padding: var(--button-padding);
        cursor: pointer;
        gap: var(--button-gap);
        transition: 250ms background-color ease;

        &:hover {
            background-color: var(--onyx);
        }
    }

    .headline {
        margin-top: 1rem;
        margin-bottom: 0.3rem;
    }

    .headline-bottom {
        margin-top: 1rem;
    }

    .headline-top {
        margin-bottom: 0.3rem;
    }

    .small-headline {
        margin-top: 0.5rem;
        margin-bottom: 0.3rem;
    }

    .small-headline-top {
        margin-bottom: 0.3rem;
    }

    .buttons {
        padding: 0.1rem 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .dialog .content {
        display: flex;
        flex-direction: column;

        button {
            width: max-content;
        }
    }

    textarea {
        font-family: Arial, Helvetica, sans-serif;
    }

</style>