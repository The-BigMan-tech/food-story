import Order from "./Order.svelte"
import content from '../../content/content.json'
import { Description } from "@storybook/blocks"

let food = content.RegularMenu.fooditems[0]
export default {
    title:"Order",
    component:Order
}

function Template(args) {
    return {
        Component:Order,
        props:args
    }
}
export const Default = Template.bind({})
Default.parameters = {
    layout:'centered'
}
Default.args = {
    text:food.text,
    description:food.description,
    image:food.img,
    price:food.price,
    reviews:food.reviews
}