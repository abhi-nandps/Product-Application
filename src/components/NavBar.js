import React from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Product Management</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  );
};

export default NavBar;
