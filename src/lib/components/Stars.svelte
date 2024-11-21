<script>
    import content from '../../content/content.json'
    let {star_count} = $props()
</script>

{#each  Array.from({ length:star_count }, (_, i) => i) as star}
    <img class="w-4" src={content.RegularMenu.star} alt="">
{/each}