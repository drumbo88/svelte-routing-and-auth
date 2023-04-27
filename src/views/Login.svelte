<script>
  import { navigate } from "svelte-routing";
  import { user } from "../stores/User";
  import { auth, providers, signInWithPopup } from "../firebase";

  $: if ($user) {
    navigate('/profile', { replace: true })
  }

  const procesarFormulario = async () => {
    try {
        const res = await signInWithPopup(auth, providers.google)
        user.setUser(res.user)
    } catch (error) {
        alert(error?.message || 'Auth error')
    }
  }
</script>

<div>
  <h1>Login</h1>
  <button type="submit" on:click={procesarFormulario}>Auth with Google</button>
</div>
