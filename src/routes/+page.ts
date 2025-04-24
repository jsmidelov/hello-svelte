import type { PageLoad } from "./$types";
export interface ProductThumbnail {
    id: number;
    title: string;
    thumbnail: string;
}

let cachedProducts: ProductThumbnail[] = [];

export const load: PageLoad = async ({ fetch }) => {
    if (cachedProducts.length === 0) {
        try {
            const response = await fetch(
                "https://dummyjson.com/products?limit=10&skip=0&select=id,title,thumbnail"
            );
            const json = await response.json();
            cachedProducts = json.products as ProductThumbnail[];
            console.log("Fetched products:", cachedProducts);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        }
    }
    return {
        products: cachedProducts,
    };
};