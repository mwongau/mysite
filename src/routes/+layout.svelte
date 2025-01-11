<script>
  import { base } from "$app/paths";
  //import '$lib/styles/style.css'
  //import Header from '$lib/components/Header.svelte'
  import Header from './Header.svelte'
</script>

<Header />

<div class="nav" style="background-color: AliceBlue;">
<a href="{base}/">Home</a> &nbsp; &nbsp;
<a href="{base}/blog">Blog</a> &nbsp; &nbsp;

<br />
</div>

<slot />


