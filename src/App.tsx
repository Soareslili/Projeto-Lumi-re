import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import { CartProvider } from "./Contexts/CartProvider";
import Hero from "./components/Home/Hero";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
         <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />}/>
          </Routes>
        </main>
        
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;