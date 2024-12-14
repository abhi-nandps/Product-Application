import React from "react";
import "./../App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductCard;
