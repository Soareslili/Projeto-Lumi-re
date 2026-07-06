import { useEffect, useState } from "react";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import { CartProvider } from "./Contexts/CartProvider";
import Hero from "./components/Home/Hero";
import About from "./components/page/About";
import Footer from "./components/page/Footer";
import Contact from "./components/page/Contact";

import { getProduct } from "./components/service/ProductService";
import { Products } from "./components/service/Products";
import type { Product } from "./types/products";
import CartSheet from "./components/Layout/CartSheet";
import CheckoutModal from "./components/Home/CheckoutModal";



function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProduct()
      .then((data) => {
        console.log("Produtos carregados:", data);
        setProducts(data);
      })
      .finally(() => (false));
  }, []);


  const handleProductClick = (product: Product) => {
    console.log("Produto clicado:", product);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/products" element={
                <Products products={products} onProductClick={handleProductClick} showViewAll={true} />

              } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <CartSheet />
          <CheckoutModal />
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;