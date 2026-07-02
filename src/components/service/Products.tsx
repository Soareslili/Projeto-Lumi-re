import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../../Contexts/CartContext";
import type { Products } from "../../types/products";


interface ProductProps {
  products: Products[];
  onProductClick: (product: Products) => void;
  showViewAll?: boolean;
}

const CATEGORIES = [ "Entradas", "Massas", "Prato Principal", "Sobremesas", "Bebidas"];

export function Products({ products, onProductClick, showViewAll = false }: ProductProps) {
  const { addItem } = useCart();
 const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

  const filtered =
    activeCategory === undefined
      ? products
      : products.filter((p) => p.category === activeCategory);

  const displayed = showViewAll ? filtered : filtered.slice(0, 4);

  return (
    <section id="products" className="py-20 mt-4">
      <div className="container-custom px-8">

      

        {/* Category tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-md border px-5 py-2.5 text-sm font-semibold cursor-pointer uppercase tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-foreground/30 hover:border-foreground/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayed.map((product, index) => (
            <div
              key={product.productId}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-300 bg-card p-4 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 80}ms` }}
              onClick={() => onProductClick(product)}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="px-5 pb-6 pt-2 flex flex-col items-center gap-3">
                <h3 className="text-base font-bold text-center text-black leading-tight">
                  {product.name}
                </h3>

                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < 4 ? "text-yellow-300 fill-accent" : "text-muted-foreground"}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">(24)</span>
                </div>

                {/* Description */}
                {product.description && (
                  <p className=" text-center text-xs text-gray-900 line-clamp-3">
                    {product.description}
                  </p>
                )}

                {/* Price button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addItem({
                      id: String(product.productId),
                      name: product.name,
                      price: product.price,
                      image: product.imageUrl ?? "",
                    });
                  }}
                  className="mt-1 flex items-center gap-2 px-5 py-2 bg-primary hover:bg-accent/80 text-accent-foreground rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer"
                >
                  <ShoppingCart size={15} />
                  R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </button>
              </div>
            </div>
          ))}
        </div>

      

      </div>
    </section>
  );
}