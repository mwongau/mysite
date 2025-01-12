<script>
  import { base } from "$app/paths";
  //import '$lib/styles/style.css'
  //import Header from '$lib/components/Header.svelte'
  //import Header from './Header.svelte'
</script>

<div class="header" style="background-color: Lavender; padding: 5px; font-family: sans-serif">
<h1>M Wong</h1>
<h3>My personal site</h3>
</div> 

<div class="nav" style="background-color: AliceBlue; font-family: sans-serif">
<a href="{base}/">Home</a> &nbsp; &nbsp;
<a href="{base}/blog">Blog</a> &nbsp; &nbsp;
<a href="{base}/cv">CV</a> &nbsp; &nbsp;
<a href="{base}/privacy">Privacy</a> &nbsp; &nbsp;
<br />
</div>

<slot />

<style>
</style>


