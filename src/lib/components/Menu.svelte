<script module>
    import content from '../../content/content.json'
    import Heading from './Heading.svelte';
    import MenuItem from '../../routes/menuitem/+page.svelte';
    let regular = content.RegularMenu
    let regular_menu = regular.heading.split(' ')
    let food = regular.fooditems

    export const order_data = [...food]
</script>

<div class="flex flex-col ml-10 mt-20">
    <div class="flex flex-col gap-5 mb-14">
        <Heading w1={regular_menu[0]} w2={regular_menu[1]} w3={regular_menu[2]}/>
        <p class="text-lg">{regular.paragraph}</p>
    </div>
    <div class="grid grid-cols-[repeat(3,24rem)] grid-rows-3 gap-y-10">
        {#each food as item}
            <MenuItem index={food.indexOf(item)} image={item.img} text={item.text} reviews={item.reviews} price={item.price} buy={regular.buy} star_count=5/>
        {/each}
    </div>
</div>
