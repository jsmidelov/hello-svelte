<script lang="ts">
    let { closeModal} = $props();
    import { type ProductDetails, productDetailsCache } from "$lib/stores/products";
    import { get } from "svelte/store";
    import { state } from "$lib/sharedState.svelte";

    // svelte-ignore non_reactive_update
    let details:ProductDetails = {
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        images: []
    };
    // let test = $state(selected);
    $effect(() => {
        const fetchDetails = async () => {
            const cache = get(productDetailsCache);
            if (cache[state.selected]) {
                details = cache[state.selected];
            } else {
                if (state.selected === 0) {
                    return; 
                }
                console.log('selected: ', state.selected);
                let url = `https://dummyjson.com/products/${state.selected}`;
                console.log('url: ', url);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product details: ${response.statusText}`);
                }
                const product:ProductDetails = await response.json();
                console.log(`product: ${state.selected}`, product);
                productDetailsCache.update((cache) => {
                    cache[state.selected] = product;
                    return cache;
                });
                details = product;
            }
        };
        fetchDetails();
    });

</script>
{#if state.selected}
    <dialog class="modal" id="dialog" open>
        <div class="modal-box">
            <h1 class="text-lg font-bold">{details.title}</h1>
            <img
                src={details.images[0]}
                alt=''
                width="300"
                height="300" />
            <p>{details.description}</p>
            <form class="modal-action" method="dialog">
                <button class="btn" type="submit" onclick={closeModal}>Close</button>
            </form>
        </div>
    </dialog>
{/if}

<style>
    h1 {
		width: 100%;
	}
</style>