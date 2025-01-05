import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AddProductPage from "./components/AddProductPage";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/add-product" element={<AddProductPage addProduct={addProduct} />} />
      </Routes>
    </Router>
  );
}

export default App;
