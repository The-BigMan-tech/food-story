<script>
    import YourCart from "$lib/components/YourCart.svelte";
    import { getContext } from "svelte";
    import { get } from "svelte/store";

    const count = getContext('cart')
    console.log("COUNT",get(count))
    let item_count = get(count)
</script>

<YourCart count={item_count}/>