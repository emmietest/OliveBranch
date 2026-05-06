import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { MainContent } from "@/sections/MainContent";
import { MenuPage } from "@/pages/MenuPage";
import { CartProvider } from "@/context/CartContext";

export const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="bg-white min-h-screen text-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};
