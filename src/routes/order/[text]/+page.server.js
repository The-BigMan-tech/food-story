import { order_data } from "$lib/components/Menu.svelte"

export function load() {
    let stat_order = {}
    for (let [i,v] of order_data.entries()) {
        stat_order[i+1] = v
    }
    return stat_order
}