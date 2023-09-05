<script>
	/** @type {import('./$types').PageData} */

	export let data;
</script>

<div class="container">
	<h1>{data.service.name}</h1>
	<h2>related services</h2>
	<ul>
		<li>
			{#each data.service.relatedServices as relatedService}
				<li>
					<a href={`/related-services/${relatedService.slug}`}>
						{relatedService.name}
					</a>
				</li>
			{/each}
		</li>
	</ul>
</div>
