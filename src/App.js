import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsGrid from "./Components/CardsGrid"
import HomePage from "./Components/HomePage";

// Navbar
import NavBar2 from "./Components/Navbar2"

// Cart
import { CartProvider } from "./Components/Carts/CartContext";
import CartList from "./Components/Carts/CartList";

//Adding Items Form
import AddItems from "./Components/AddItems";

// Footer
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <CartProvider>

        <NavBar2 />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<CardsGrid />} />
            <Route path="cart" element={<CartList />} />
            <Route exact path="/additems" element={<AddItems />} />
          </Routes>
        </BrowserRouter >
        <Footer />
      </CartProvider >
    </>
  );
};

export default App;
