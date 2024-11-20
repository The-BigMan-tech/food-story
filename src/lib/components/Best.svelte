<script>
    import content from '../../content/content.json'
    import Heading from './Heading.svelte';
    let extra = content.Extra
    let best = extra.best.split(' ')
    let {label=false} = $props()
</script>

<div class="flex flex-col ml-10 text-black relative">
    <div class="flex items-center gap-96">
        <Heading w1={best[0]} w2={best[1]} w3={best[2]}/>
        <p class="w-[20rem] text-lg">{extra.info}</p>
    </div>
    <div class="flex relative right-10 justify-around mt-12">
        <div class="flex flex-col items-center shadow-xl rounded-lg w-[22rem] pb-4">
            <img class="w-[80rem] mb-5" src={extra.pizza.img} alt="">
            <h2 class="font-bold text-3xl font-space_mono mb-2">{extra.pizza.text}</h2>
            <a class={`${label?'text-red-500':null}`} href="/">{extra.order}</a>
        </div>
        <div class="flex flex-col items-center justify-end shadow-xl rounded-lg w-[22rem] pb-4">
            <img class="w-[15rem] mb-5" src={extra.springroll.img} alt="">
            <h2 class="font-bold text-3xl font-space_mono mb-2">{extra.springroll.text}</h2>
            <a class="text-red-500" href="/">{extra.order}</a>
        </div>
        <div class="flex flex-col items-center justify-end shadow-xl rounded-lg w-[22rem] pb-4">
            <img class="w-72 mb-5 relative bottom-14" src={extra.hotdog.img} alt="">
            <h2 class="font-bold text-3xl font-space_mono mb-2">{extra.hotdog.text}</h2>
            <a class="text-red-500" href="/">{extra.order}</a>
        </div>
    </div>
</div>