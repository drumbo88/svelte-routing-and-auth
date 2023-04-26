<script>
    import { Route, Link, Router } from 'svelte-routing'
  import Home from './views/Home.svelte';
  import About from './views/About.svelte';
  import Profile from './views/Profile.svelte';
</script>

<div>
    <h1>Routing</h1>
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
        </nav>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
     </Router>
</div>