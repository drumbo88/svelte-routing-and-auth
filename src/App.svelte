<script>
    import { Route, Link, Router } from 'svelte-routing'
  import Home from './views/Home.svelte';
  import About from './views/About.svelte';
  import Profile from './views/Profile.svelte';
  import Login from './views/Login.svelte';
  import Navbar from './components/Navbar.svelte';
</script>

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