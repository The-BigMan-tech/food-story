<script>
    import MenuItem from "$lib/components/MenuItem.svelte";
    let {image,text,star_img,star_count,reviews,price,buy} = $props()
</script>

<MenuItem image={image} text={text} star_img={star_img} reviews={reviews} price={price} buy={buy} star_count={star_count}/>