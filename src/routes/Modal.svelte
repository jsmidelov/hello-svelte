<script lang="ts">
	let { closeModal } = $props();
	import { type ProductDetails, productDetailsCache } from '$lib/stores/products';
	import { get } from 'svelte/store';
	import { state as sharedState } from '$lib/sharedState.svelte';

	let details: ProductDetails = $state({
		title: '',
		description: '',
		price: 0,
		discountPercentage: 0,
		rating: 0,
		images: []
	});
	const fetchDetails = async () => {
		const cache = get(productDetailsCache);
		if (cache[sharedState.selected]) {
			details = cache[sharedState.selected];
		} else {
			if (sharedState.selected === 0) {
				return;
			}
			let url = `https://dummyjson.com/products/${sharedState.selected}`;
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Failed to fetch product details: ${response.statusText}`);
			}
			const product: ProductDetails = await response.json();
			productDetailsCache.update((cache) => {
				cache[sharedState.selected] = product;
				return cache;
			});
			details = product;
		}
	};
	$effect.pre(() => {
		fetchDetails();
	});
</script>

<dialog class="modal" id="dialog" open={sharedState.selected !== 0} onclose={closeModal}>
	<div class="modal-box">
		<h1 class="text-lg font-bold">{details.title}</h1>
		<img src={details.images[0]} alt="" width="300" height="300" />
		<p>{details.description}</p>
		<form class="modal-action" method="dialog">
			<button class="btn" type="submit" onclick={closeModal}>Close</button>
		</form>
	</div>
</dialog>

<style>
	h1 {
		width: 100%;
	}
</style>
