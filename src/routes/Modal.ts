import { productDetailsCache } from "$lib/stores/products";
import type { ProductDetails } from "$lib/stores/products";
import { get } from "svelte/store";

// This is the solution I'd _like_ to work, since it'd decouple the fetching
// from the rendering nicely, but I haven't found a way to bind the response
// to the component runes like I managed with the page
export async function load(id: number): Promise<ProductDetails> {
    const cache = get(productDetailsCache);
    if (cache[id]) {
        return cache[id];
    }
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch product details: ${response.statusText}`);
    }
    
    const selected: ProductDetails = await response.json();
    productDetailsCache.update((cache) => {
        cache[id] = selected;
        return cache;
    });
    
    return selected;
}