import MenuItem from "./MenuItem.svelte"
import content from '../../content/content.json'
let regular = content.RegularMenu
let food = regular.fooditems

export default {
    title:'A Food Item Story',
    component:MenuItem,
}
function Template(args) {
    return {
        Component:MenuItem,
        props:args
    }
}
function genItem(food) {
    return {
        image:food.img,
        text:food.text,
        star_img:regular.star,
        reviews:food.reviews,
        price:food.price,
        buy:regular.buy,
        star_count:5
    }
}

export const Default = Template.bind({})
Default.args = genItem(food[1])
Default.parameters = {
  layout:'centered', // Center this specific story
};
