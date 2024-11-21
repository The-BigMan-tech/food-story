<script>
    import Stars from "./Stars.svelte";
    import AddItem from "./AddItem.svelte";
    let {text,description,image,price,reviews} = $props()
    let item_count = $state(0)
</script>
<div class="flex justify-center">
    <div>
        <img src={image} alt="">
    </div>
    <div class="flex flex-col">
        <div class="flex">
            <div class="flex flex-col">
                <h1>{text}</h1>
                <div class="flex">
                    <Stars star_count=5/>
                    <p>{reviews}</p>
                </div>
            </div>
            <p>{price}</p>
        </div>
        <div>
            <h1>Description</h1>
            <p>{description}</p>
        </div>
        <div class="flex">
            <AddItem {item_count}/>
            <button>Add to Cart</button>
        </div>
    </div>
</div>
