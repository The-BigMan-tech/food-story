<script>
    import Order from "$lib/components/Order.svelte";
    import { getContext } from "svelte";
    import { get } from "svelte/store";

    let {data} = $props()
    const share = getContext('sharedData')
    console.log(get(share))
    console.log("RECEIVED",data[share])
    
</script>

<Order/>