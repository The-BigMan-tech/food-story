<script>
    import Stars from "./Stars.svelte";
    import AddItem from "./AddItem.svelte";
    import Page from "../../routes/+page.svelte";
    let {text,description,image,price,reviews} = $props()
    let item_count = $state(0)
</script>
<div class="flex items-center justify-center bg-[#c63451] text-white gap-12 shadow-xl py-5 rounded-xl px-6 w-[60rem]">
    <div class="flex flex-col">
        <img class="w-[110rem] h-[17rem] rounded-xl" src={image} alt="">
        <a class="relative top-6 underline" href="/">Back</a>
    </div>
    <div class="flex flex-col">
        <div class="flex relative">
            <div class="flex flex-col gap-2">
                <h1 class="font-space_mono font-bold text-3xl">{text}</h1>
                <div class="flex gap-5">
                    <div class="flex gap-4">
                        <Stars star_count=5/>
                    </div>
                    <p>{reviews}</p>
                </div>
            </div>
            <p class="absolute right-20 font-bold text-xl font-space_mono top-4">${price}</p>
        </div>
        <div class="flex flex-col gap-3 mt-6 mb-4">
            <h1 class="font-bold text-lg">Description</h1>
            <p class="font-sans">{description}</p>
        </div>
        <div class="flex gap-10 relative items-center">
            <AddItem item_count={item_count}/>
            <button class="bg-white text-[#c63451] rounded-2xl w-32 absolute left-44 py-3 shadow-md">Add to Cart</button>
        </div>
    </div>
</div>
