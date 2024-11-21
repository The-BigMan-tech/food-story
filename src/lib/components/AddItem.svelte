<script>
    import content from '../../content/content.json'
    import { getContext } from 'svelte';
    let {item_count,text} = $props()

    const cart_count = getContext('cart')
    function increase() {
        item_count += 1
       // cart_count.set({[details]:item_count})
        cart_count.update(currentCart => ({...currentCart,[text]: item_count }));
    }
    function decrease() {
        if (item_count == 0) return;//Sick one liner
        item_count -= 1
        //cart_count.set({[details]:item_count})
    }
</script>

<div class="flex items-center justify-around px-4 gap-7 border border-[#db5772] h-8 rounded-lg py-5">
    <button onclick={increase}><img class="w-3" src={content.Order.add} alt=""></button>
    <p class="text-lg">{item_count}</p>
    <button onclick={decrease}><img class="w-3" src={content.Order.remove} alt=""></button>
</div>