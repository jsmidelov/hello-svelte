<script lang="ts">
	import ProductCard from './ProductCard.svelte';'./ProductCard.svelte';
	import Modal from './Modal.svelte';
	import { page } from '$app/state';
	import { state } from '$lib/sharedState.svelte';

	let root:HTMLElement;
	const openModal = (id:number) => {
		const dialog = root?.querySelector('dialog');
		if (dialog) {
			dialog.showModal();
		}
		state.selected = id;
	}
	const closeModal = (e: Event) => {
		e.preventDefault();
		state.selected = 0;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section bind:this={root}>
	{#each page.data.products as product}
		<ProductCard onclick={() => openModal(product.id)} {...product} />
	{/each}
</section>
<Modal closeModal={closeModal} />

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
