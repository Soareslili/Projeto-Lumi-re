import type { Product } from "../../types/products";

export async function getProduct() {
    const response = await fetch("/data/products.json");
    const data = await response.json();

    console.log("Produtos carregados:", data);
    return data.products as Product[]; // pega só o array de dentro
}