import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsGrid from "./Components/CardsGrid"
import HomePage from "./Components/HomePage";

// Cart
import { CartProvider } from "./Components/Carts/CartContext";
import CartList from "./Components/Carts/CartList";

//Adding Items Form
import AddItems from "./Components/AddItems";

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<CardsGrid />} />
            <Route path="cart" element={<CartList />} />
            <Route path="additems" element={<AddItems />} />
          </Routes>
        </BrowserRouter >
      </CartProvider >
    </>
  );
};

export default App;
