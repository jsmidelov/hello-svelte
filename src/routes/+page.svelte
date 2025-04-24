<script lang="ts">
	import ProductCard from './ProductCard.svelte';'./ProductCard.svelte';
	import Modal from './Modal.svelte';
	import { page } from '$app/state';

	let selected:number|null = $state(null);
	let root:HTMLElement;
	const openModal = (id:number) => {
		const dialog = root?.querySelector('dialog');
		if (dialog) {
			dialog.showModal();
		}
		selected = id;
	}
	const closeModal = (e: Event) => {
		e.preventDefault();
		selected = null;
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
<Modal selected={selected} closeModal={closeModal} />

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
