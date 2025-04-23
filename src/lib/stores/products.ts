import { writable } from "svelte/store";

export interface ProductDetails {
    title:string;
    description:string;
    price:number;
    discountPercentage:number;
    rating:number;
    images:string[];
}

export const productDetailsCache = writable<Record<number, ProductDetails>>({});