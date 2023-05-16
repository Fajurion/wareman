<script lang="ts">
    import logo from "$lib/assets/fajurion.png";
</script>

<div class="center">
    <div class="window">
        <div class="title">
            <img src={logo} alt="Fajurion Logo" />
            <h1>Wareman</h1>
        </div>

        <div class="form">
            <input class="text-medium" type="text" placeholder="Username" />
            <input class="text-medium" type="password" placeholder="Password" />

            <button class="text-medium">Login</button>
        </div>

        <div class="footer">
            <p class="text-medium">No account?</p><a class="text-medium" href="/">Create one!</a>
        </div>
    </div>
</div>

<style lang="scss">

    .title {
        display: flex;
        align-items: center;

        img {
            filter: brightness(100%) sepia(100) saturate(100) hue-rotate(120deg);
            height: 60px;
            aspect-ratio: 1/1;
        }
        padding: 0.5rem;
    }

    .window {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 0.3rem;
        background-color: var(--eerie-black);
        border-radius: 1rem;
        padding: 1.5rem;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
    
    .footer {
        display: flex;
        gap: 0.3rem;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        padding: 0.5rem;

        input {
            width: 20vw;
            max-width: 350px;
            min-width: 150px;
            padding: 0.5rem 0.7rem;
            color: white;
            border-radius: 0.5rem;
            border: none;
            outline: none;
            border: 2px solid var(--outer-space);
            background-color: var(--outer-space);
            transition: 250ms border ease;
        
            &:focus {
                border: 2px solid var(--slate-gray);
            }
        }

        button {
            padding: 0.5rem 0.7rem;
            color: white;
            border-radius: 0.5rem;
            border: none;
            outline: none;
            cursor: pointer;
            background-color: var(--outer-space);
            transition: 250ms background-color ease;
        
            &:hover {
                background-color: var(--onyx);
            }
        }

    }

    a {
        color: var(--french-gray-2);
        text-decoration: none;
        transition: 250ms all ease;
        
        &:hover {
            transform: translateX(5px);
            color: var(--french-gray);
        }
    }

</style>