import Order from "./order.svelte";

export default {
    title:'Order',
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
