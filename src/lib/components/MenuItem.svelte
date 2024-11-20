<script>
    let {image,text,star_img,star_count,reviews,price,buy} = $props()
</script>

<div class="z-0 flex flex-col bg-[#c63451] w-72 h-[21rem] items-center pt-7 rounded-xl text-white shadow-xl">
    <img class="w-56 h-44 rounded-lg shadow-lg mb-4" src={image} alt="">
    <h1 class="font-space_mono font-bold text-lg text-center mb-1 mt-2">{text}</h1>
    <div class="flex gap-3">
        <div class="flex">
            {#each  Array.from({ length:star_count }, (_, i) => i) as star}
                <img class="w-4" src={star_img} alt="">
            {/each}
        </div>
        <p class="text-sm">{reviews} reviews</p>
    </div>
    <div class="flex gap-3 relative top-3">
        <h2 class="text-2xl font-bold font-space_mono">${price}</h2>
        <a class="bg-white text-[#c63451] py-2 px-6 relative left-4 bottom-1 rounded-2xl" href="/order" data-sveltekit-noscroll>{buy}</a>
    </div>
</div>