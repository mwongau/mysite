<!-- +layout.svelte -->
<script>
import Header from '$lib/components/Header.svelte'
import Nav from '$lib/components/Nav.svelte'
import '$lib/styles/style.css'
</script>

<Header title = "M Wong" subtitle = "My personal site" />
<Nav />

<main>
  <slot />
</main>



