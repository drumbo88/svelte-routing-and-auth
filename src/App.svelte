<script>
    import { Route, Router } from 'svelte-routing'
  import Home from './views/Home.svelte';
  import About from './views/About.svelte';
  import Profile from './views/Profile.svelte';
  import Login from './views/Login.svelte';
  import Navbar from './components/Navbar.svelte';

  import { onMount } from 'svelte/internal';
  import { user } from './stores/User';

  onMount(async () => {
    await user.current()
  })
</script>

{#if $user === false }
    <h1>Loading...</h1>
{:else}
    <div>
        <h1>Routing</h1>
        <Router>
            <Navbar />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </Router>
    </div>
{/if}