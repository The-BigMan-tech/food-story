<script>
    import Order from "$lib/components/Order.svelte";
    import { getContext } from "svelte";
    import { get } from "svelte/store";

    let {data} = $props()
    const share = getContext('sharedData')
    let index = (get(share)['key']) + 1
    console.log("RECEIVED",data[index])
    let particular_order = data[index]
</script>
<div class="flex justify-center relative top-24">
    <Order text={particular_order.text} description={particular_order.description} image={particular_order.img} price={particular_order.price} reviews={particular_order.reviews}/>
</div>
