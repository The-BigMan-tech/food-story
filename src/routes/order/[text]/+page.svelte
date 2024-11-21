<script>
    import Order from "$lib/components/Order.svelte";
    import { getContext } from "svelte";
    import { get } from "svelte/store";

    let {data} = $props()
    const share = getContext('sharedData')
    let index = get(share)['key']
    console.log("RECEIVED",data[index+1])
    
</script>

<Order/>