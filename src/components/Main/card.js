import React from "react";
import "./style.css";

function Card({ ...item }) {
  return (
    <div className="card">
      <img src={item.img} alt="pic" />
      <h4>{item.name}</h4>
      <p>{item.short}</p>
      <h5>Rs.{item.price}</h5>
    </div>
  );
}
export default Card;
