<!-- posts.svelte -->
<script>
	const {title= '', date= '', children} = $props()
</script>

<article>
	<h2>Title: {title}</h2>
	<h3>Date: {date}</h3>
	{@render children()}
</article>