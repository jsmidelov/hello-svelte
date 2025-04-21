<script lang="ts">
	import ProductThumb from './ProductThumb.svelte';
	import type { ProductThumbnail } from './+page';
	// let {products} = $props();
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
	console.log(products);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<!-- <Counter /> -->
	<div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center">
		{#each products as product}
			<ProductThumb {...product} />
		{/each}
	</div>
	<dialog id="dialog">
		<h1>Fruit</h1>
		<img
				src="src/lib/images/banana-fruit.png"
				alt="Svelte logo"
				width="300"
				height="300" />
		<p>The description about the selected fruit</p>
		<button id="close">Close</button>
	</dialog>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
