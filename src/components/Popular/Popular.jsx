import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import "./popular.css"; // Assuming you already have a CSS file for this component

const Popular = () => {
  const [clothingProducts, setClothingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/clothing")
      .then((response) => {
        setClothingProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching clothing products:", error);
        setError("Failed to fetch clothing products");
        setLoading(false);
      });
  }, []);

  return (
    <div className="popularContainer">
      <div className="popularContent">
        <h1>Popular Clothing Products</h1>

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        <div className="productsContainer">
          {clothingProducts.length > 0 ? (
            clothingProducts.map((product) => (
              <Item
                key={product.id}
                id={product.id}
                name={product.title}
                image={product.image}
                old_price={product.price}
                new_price={product.price} // Assuming no discountedPrice in this API
              />
            ))
          ) : (
            <p>No clothing products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popular;
