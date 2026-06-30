import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import { CartProvider } from "./Contexts/CartProvider";
import Hero from "./components/Home/Hero";
import About from "./components/page/About";
import Footer from "./components/page/Footer";
import Contact from "./components/page/Contact";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
         <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </main>
       <Footer />
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;