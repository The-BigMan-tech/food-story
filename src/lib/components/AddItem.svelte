<script>
    import content from '../../content/content.json'
    let {item_count} = $props()
</script>

<div class="flex">
    <img class="w-10" src={content.Order.add} alt="">
    <p>{item_count}</p>
    <img class="w-10" src={content.Order.remove} alt="">
</div>