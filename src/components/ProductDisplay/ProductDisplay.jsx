import React, { useContext } from "react";
import product_rt_1 from "../../../public/data/product_rt_1.png";
import product_rt_2 from "../../../public/data/product_rt_2.png";
import product_rt_3 from "../../../public/data/product_rt_3.png";
import product_rt_4 from "../../../public/data/product_rt_4.png";
import "./productDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { product } = props;
  return (
    <div className="productDisplayContainer">
      <div className="productRtImg">
        <img src={product_rt_1} />
        <img src={product_rt_2} />
        <img src={product_rt_3} />
        <img src={product_rt_4} />
      </div>
      <div className="productImg">
        <img src={product.image} />
      </div>
      <div className="productDetails">
        <h2>{product.name}</h2>
        <div className="stars">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <span>(122)</span>
        </div>
        <div>
          <div className="productPrice">
            <p> ${product.old_price}</p>{" "}
            <span className="new_price">${product.new_price}</span>
          </div>
        </div>
        <span>Select Size:</span>
        <div className="productBtns">
          <button>S</button>
          <button>M</button>
          <button>L</button>
          <button>XL</button>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="addToCart"
        >
          ADD TO CART
        </button>
        <button className="buyItNow">BUY IT NOW</button>
        <p>
          Category: <span>{product.category} | T-Shirt | Crop Top</span>
        </p>
        <p>
          Tags: <span>Modern | Latest </span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
