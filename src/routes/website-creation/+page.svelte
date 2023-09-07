<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	<h1>Website Creation</h1>

	{#each data.relatedServices as relatedService}
		<h2>{relatedService.name}</h2>
		<p>{relatedService.description}</p>
		<a href={`/website-creation/${relatedService.slug}`}>
			learn more
		</a>
	{/each}
</div>
