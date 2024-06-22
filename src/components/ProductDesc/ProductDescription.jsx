import React from "react";
import "./productDescription.css";

const ProductDescription = () => {
  return (
    <div className="productDesc">
      <div>
        <button className="descBtn">Description</button>
        <button>Care Guide</button>
        <button>Size Guide</button>
      </div>
      <div className="desc">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat
          nulla dignissimos, laudantium iusto id facere excepturi provident quam
          maxime quidem. Deserunt molestiae veritatis ratione a cumque sapiente
          consequatur ex quis eveniet dolorem modi ad animi earum, dignissimos
          adipisci illum. Magnam saepe voluptatibus a consequuntur deserunt
          omnis amet reprehenderit perspiciatis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dolorum
          dolores repellat ea tempore vitae laborum cupiditate unde vel, neque
          accusantium eaque maiores, suscipit blanditiis soluta sint minima
          eligendi autem?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
