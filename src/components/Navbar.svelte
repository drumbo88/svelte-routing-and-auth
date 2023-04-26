<script>
    import { Link } from 'svelte-routing'
    import { user } from '../stores/User'

    const cerrarSesion = () => {
        user.setUser(null)
        navigate('/login', { replace: true })
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