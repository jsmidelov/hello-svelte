<script lang="ts">
	import ProductCard from './ProductCard.svelte';'./ProductCard.svelte';
	import type { ProductThumbnail } from './+page';
	// import { productDetailsCache } from "$lib/stores/products";
	// import { get } from "svelte/store";
	import Modal from './Modal.svelte';
	interface Props {
		products: ProductThumbnail[];
	}
	// let {products}:Props = $props();
	// console.log('products: ', products);
	let products:ProductThumbnail[] = [
    {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
    },
    {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
    },
    {
        "id": 3,
        "title": "Powder Canister",
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
    },
    {
        "id": 4,
        "title": "Red Lipstick",
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png"
    },
    {
        "id": 5,
        "title": "Red Nail Polish",
        "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png"
    },
    {
        "id": 6,
        "title": "Calvin Klein CK One",
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png"
    },
    {
        "id": 7,
        "title": "Chanel Coco Noir Eau De",
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png"
    },
    {
        "id": 8,
        "title": "Dior J'adore",
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
    },
    {
        "id": 9,
        "title": "Dolce Shine Eau de",
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png"
    },
    {
        "id": 10,
        "title": "Gucci Bloom Eau de",
        "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png"
    }
];

	let selected:number|null = $state(null);
	let root:HTMLElement;
	const openModal = (id:number) => {
		const dialog = root?.querySelector('dialog');
		if (dialog) {
			dialog.showModal();
		}
		selected = id;
	}
	const prefetch = async(id:number) => {
	// 	const cache = get(productDetailsCache);
    //     if (cache[id]) {
    //         return;
    //     } else {
    //         // Fetch from API and cache it
    //         const response = await fetch(`https://dummyjson.com/products/${id}`);
    //         const product = await response.json();
    //         productDetailsCache.update((cache) => {
    //             cache[id] = product;
    //             return cache;
    //         });
    //     }
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
	{#each products as product}
		<ProductCard prefetch={() => prefetch(product.id)} onclick={() => openModal(product.id)} {...product} />
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
