<script>
    import content from '../../content/content.json'
    let text = content.HeroSection.features
    let icons = content.HeroSection.icons
</script>

<div class="flex bg-white relative bottom-14 py-4 shadow-xl w-[50rem] rounded-xl left-60 gap-10 justify-around">
    <div class="flex gap-5 items-center">
        <img class="w-12 h-12 p-2 bg-[#fb4368] rounded-full" src={icons.fast} alt="">
        <h1 class="font-bold text-2xl">{text.fast}</h1>
    </div>
    <div class="flex gap-5 items-center">
        <img class="w-12 h-12 p-2 bg-[#fb4368] rounded-full" src={icons.free} alt="">
        <h1 class="font-bold text-2xl">{text.free}</h1>
    </div>
    <div class="flex gap-5 items-center">
        <img class="w-12 h-12 p-2 bg-[#fb4368] rounded-full" src={icons.fresh} alt="">
        <h1 class="font-bold text-2xl">{text.fresh}</h1>
    </div>
</div>