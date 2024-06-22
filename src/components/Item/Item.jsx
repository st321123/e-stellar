import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`} className="itemImg">
        <i className="fa-solid fa-magnifying-glass"></i>
        <img src={image} alt={name} />
      </Link>
      <p>{name}</p>
      <span>${new_price.toFixed(2)}</span>
      <span className="oldPrice">${old_price.toFixed(2)}</span>
    </div>
  );
};

export default Item;


