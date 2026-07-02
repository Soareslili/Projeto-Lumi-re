import type { Produts } from "../../types/products";


export async function getProduct() {
    const response = await fetch("/data/products.json");
    const data = await response.json();


    console.log("Produtos carregados:", data);
    return data as Produts[];
}