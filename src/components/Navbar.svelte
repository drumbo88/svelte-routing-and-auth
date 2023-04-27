<script>
    import { Link, navigate } from 'svelte-routing'
    import { user } from '../stores/User'
    import { auth } from '../firebase';

    const cerrarSesion = async () => {
        try {
            await auth.signOut()
            user.setUser(null)
            navigate('/login', { replace: true })
        }
        catch (error) {
            console.log(error)
        }
    }
</script>

<nav>
    {#if $user}
        <Link to="/profile">Profile</Link>
        <button on:click={cerrarSesion}>Logout</button>
    {:else}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
    {/if}
</nav>