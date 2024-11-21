<script>
	import '../app.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
    import Order from '$lib/components/Order.svelte';

	const sharedData = writable({key:9});
    setContext('sharedData', sharedData);
	
	const cart_items = writable(0);
	setContext('cart',cart_items)
	let { children} = $props();
</script>

{@render children()}
