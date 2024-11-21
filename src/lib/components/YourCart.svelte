<script>
    let {items} = $props()
</script>
<div>
    {#each Object.entries(items) as [key,val]}
        <h1>{key}</h1>
        <h1>{val}</h1>
    {/each}
</div>