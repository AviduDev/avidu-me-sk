<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="container">
    <h1>projects</h1>

    {#each data.projects as project}
        <li>
            <a href={`/projects/${project.slug}`}>{project.name}</a>
        </li>
    {/each}
    
</div>