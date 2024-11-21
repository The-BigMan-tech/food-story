<script>
    import content from '../../content/content.json'
    let {item_count} = $props()
    function increase() {
        item_count += 1
    }
    function decrease() {
        if (item_count == 0) return;//Sick one liner
        item_count -= 1
    }
</script>

<div class="flex items-center">
    <button onclick={increase}><img class="w-10" src={content.Order.add} alt=""></button>
    <p>{item_count}</p>
    <button onclick={decrease}><img class="w-10" src={content.Order.remove} alt=""></button>
</div>