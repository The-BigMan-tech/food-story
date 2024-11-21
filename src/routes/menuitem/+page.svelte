<script>
    import { getContext } from "svelte";
    import { get } from "svelte/store";
    let {index,image,text,star_img,star_count,reviews,price,buy} = $props()
    import MenuItem from "$lib/components/MenuItem.svelte";

    console.log("LAYOUT INDEX",index)
</script>

<MenuItem order='/order/{text}' index={index} image={image} text={text} star_img={star_img} reviews={reviews} price={price} buy={buy} star_count={star_count}/>
