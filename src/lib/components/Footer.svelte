<script>
    import content from '../../content/content.json'
    let footer = content.Footer
</script>

<div class="flex mt-20 bg-[#cc3654] h-40 pt-6 gap-8 text-white">
    <div class="flex ml-10 gap-8">
        <div class="flex flex-col gap-3">
            <h1 class="heading">{footer.text.food}</h1>
            <p class="font-[Consolas]">{footer.foodish_text}</p>
        </div>
    </div>
    <div class="flex flex-col gap-4">
        <h1 class="heading">{footer.text.follow}</h1>
        <div class="flex gap-5">
            <img class="w-8" src={footer.icons.facebook} alt="">
            <img class="w-8" src={footer.icons.instagram} alt="">
            <img class="w-8" src={footer.icons.pinterest} alt="">
            <img class="w-8" src={footer.icons.twitter} alt="">
        </div>
    </div>
    <div class="flex flex-col ml-24">
        <h1 class="heading mb-2">{footer.text.contact}</h1>
        <div class="flex flex-col gap-2 font-[Consolas]">
            <p>{footer.contact.phoneno}</p>
            <p>{footer.contact.info}</p>
            <p>{footer.contact.explore}</p>
        </div>
    </div>
</div>

<style>
    .heading {
        @apply text-4xl font-bold font-space_mono text-[#641927];
    }
</style>