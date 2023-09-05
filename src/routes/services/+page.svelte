<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="container">
	<h1>services</h1>

	{#each data.services as service}
		<li>
			<a href={`/services/${service.slug}`}>
				{service.name}
			</a>
		</li>
	{/each}
</div>
