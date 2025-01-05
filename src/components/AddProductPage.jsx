import React, { useState } from "react";
import "./../App.css";

const AddProductPage = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() &&
      formData.image.trim() &&
      formData.price &&
      formData.category.trim()
    ) {
      addProduct({ ...formData, id: Date.now() });
      setFormData({ name: "", image: "", price: "", category: "" });
      alert("Product added successfully!");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="add-product-page">
      <h2 className="add-product-heading">Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter product name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Enter image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter category"
          value={formData.category}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
