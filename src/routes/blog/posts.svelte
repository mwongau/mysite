<!-- posts.svelte -->
<script>
	export let title;
	export let date;
</script>

<article>
	<h2>Title: {title}</h2>
	<h3>Date: {date}</h3>
	<slot />
</article>