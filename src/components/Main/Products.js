import React, { useState, useEffect } from "react";
import { productsdb } from "../../data/data";
import Card from "./card";

const data = productsdb;
function Products() {
  const [productsData, setProductsData] = useState(data);
  const [brand, setBrand] = useState("Levis");

  useEffect(() => {});

  function lowtohigh(productsList) {
    const lowArr = [...productsList].sort((a, b) => a.price - b.price);
    setProductsData(lowArr);
  }
  function hightolow(products) {
    const newObj = [...products];
    newObj.sort((a, b) => b.price - a.price);
    setProductsData(newObj);
  }

  function handleChange(event) {
    const { value } = event.target;
    setBrand(value);
    const newArr = [...data];
    const newData = newArr.filter((item) => item.brand === value);
    setProductsData(newData);
  }

  function handleClear() {
    setProductsData(data);
  }

  return (
    <div className="flex">
      <div className="filters">
        <h2>Filters</h2>
        <button onClick={handleClear}>Clear</button>
        <h4>Size</h4>
        <input type="checkbox" /> S
        <input type="checkbox" /> M
        <input type="checkbox" /> L
        <input type="checkbox" /> XL
        <br />
        <h4>Brand</h4>
        <select value={brand} onChange={handleChange}>
          <option value="Levis">Levis</option>
          <option value="Huetrap">Huetrap</option>
          <option value="Roadster">Roadster</option>
        </select>
      </div>
      <div className="products">
        <p>
          <b>Clothing</b>(Showing 1 – 40 products of 1,01,277 products)
        </p>
        <button onClick={() => lowtohigh(productsData)}>
          Price-Low to High
        </button>
        <button onClick={() => hightolow(productsData)}>
          Price-High to low
        </button>
        <div className="cards">
          {productsData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
