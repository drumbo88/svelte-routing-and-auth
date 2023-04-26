<script>
  import { navigate } from "svelte-routing";
  import { user } from "../stores/User";

  let email = ''
  let passwd = ''

  const procesarFormulario = () => {
    console.log('Todo funcionando')
    if (!email.trim() || !passwd.trim()) {
        alert('Campos vacíos')
        return
    }
    user.setUser({email, passwd})
    navigate('/profile', { replace: true })
  }
</script>

<div>
  <h1>Acceso</h1>
  <form on:submit|preventDefault={procesarFormulario}>
    <input bind:value={email} type="text" placeholder="Ingrese email" />
    <input bind:value={passwd} type="text" placeholder="Ingrese password" />
    <button type="submit">Acceder</button>
  </form>
</div>
