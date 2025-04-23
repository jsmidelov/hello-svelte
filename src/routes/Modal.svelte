<script lang="ts">
    let {selected, closeModal} = $props();
    import { type ProductDetails, productDetailsCache } from "$lib/stores/products";
    import { get } from "svelte/store";

    // svelte-ignore non_reactive_update
    let details:ProductDetails = {
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        images: []
    };
    $effect(() => {
        const fetchDetails = async () => {
            const cache = get(productDetailsCache);
            if (cache[selected]) {
                details = cache[selected];
            } else {
                // Fetch from API and cache it
                if (!selected) {
                    return; 
                }
                console.log('selected: ', selected);
                let url = `https://dummyjson.com/products/${selected}`;
                console.log('url: ', url);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product details: ${response.statusText}`);
                }
                const product:ProductDetails = await response.json();
                console.log(`product: ${selected}`, product);
                productDetailsCache.update((cache) => {
                    cache[selected] = product;
                    return cache;
                });
                details = product;
            }
        };
        fetchDetails();
    });

</script>
{#if selected}
    <dialog id="dialog" open>
        <h1>{details.title}</h1>
        <img
            src={details.images[0]}
            alt=''
            width="300"
            height="300" />
        <p>{details.description}</p>
        <form method="dialog">
            <button type="submit" onclick={closeModal}>Close</button>
        </form>
    </dialog>
{/if}

<style>
    h1 {
		width: 100%;
	}
</style>