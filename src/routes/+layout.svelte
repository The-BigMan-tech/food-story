<script>
	import '../app.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const sharedData = writable({key:9});
    setContext('sharedData', sharedData);
	
	let { children} = $props();
</script>

{@render children()}
