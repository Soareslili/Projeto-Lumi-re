import necklace from "../assets/productnecklace.png";
import bracelet from "../assets/productbracelet.png";
import ring from "../assets/productring.png";
import earrings from "../assets/productearrings.png";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  { id: "diamond-necklace", name: "Aurora Diamond Necklace", category: "Necklaces", price: 4290, rating: 5, image: necklace, description: "An oval cut diamond suspended on a delicate 18k rose gold chain." },
  { id: "gold-bracelet", name: "Lumière Gold Bangle", category: "Bracelets", price: 2150, rating: 5, image: bracelet, description: "A polished 18k gold bangle set with five brilliant stones." },
  { id: "emerald-ring", name: "Verdant Emerald Ring", category: "Rings", price: 6780, rating: 5, image: ring, description: "Emerald cut centerpiece framed in warm yellow gold." },
  { id: "pearl-earrings", name: "Sirène Pearl Drops", category: "Earrings", price: 1290, rating: 5, image: earrings, description: "Hand-wrapped freshwater pearls set in filigree gold." },
];

export const collections = [
  { name: "Rings", slug: "rings", image: ring },
  { name: "Necklaces", slug: "necklaces", image: necklace },
  { name: "Earrings", slug: "earrings", image: earrings },
  { name: "Bracelets", slug: "bracelets", image: bracelet },
];
