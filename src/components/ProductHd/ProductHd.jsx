import React from "react";
import "./productHd.css";

const ProductHd = ({ product }) => {
  return (
    <div className="productHeading">
      <p>
        Home <i className="fa-solid fa-arrow-right-long"></i> Shop
        <i className="fa-solid fa-arrow-right-long"></i> {product.category}
        <i className="fa-solid fa-arrow-right-long"></i>
        {product.name}
      </p>
    </div>
  );
};

export default ProductHd;
