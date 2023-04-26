<script>
  import { onMount } from 'svelte/internal'
  import { user } from '../stores/User'
  import { navigate } from 'svelte-routing'

  onMount(() => {
    if (!$user) {
      navigate('/login', { replace: true })
    }
  })
</script>

<div>
  {#if $user}
    <h2>Profile (protected)</h2>
  {/if}
</div>
