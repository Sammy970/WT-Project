import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardsGrid from "./Components/CardsGrid"
import HomePage from "./Components/HomePage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products" element={<CardsGrid />} />
        </Routes>
      </BrowserRouter >
    </>
  );
};

export default App;
