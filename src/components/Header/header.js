import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h3>Flipkart</h3>
      <input type="text" placeholder="search for products, brand and more" />
      <h4>Login</h4>
      <h4>Cart</h4>
    </div>
  );
}

export default Header;
