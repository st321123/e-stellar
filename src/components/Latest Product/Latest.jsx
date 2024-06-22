import React, { useState, useEffect } from "react";
import axios from "axios";
import "./latest.css";
import Item from "../Item/Item";

function Latest() {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/clothing")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setLatest(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setError('Unexpected response format');
        }
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to fetch products');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="popularContainer">
      <div className="popularContent">
        <h1>Latest Clothing Products</h1>
        {latest.length === 0 ? (
          <p>No new latest products available.</p>
        ) : (
          <div className="latestProductsContainer">
            {latest.map((product) => (
              <Item
                key={product.id}
                id={product.id}
                name={product.title}
                image={product.image}
                old_price={product.price}
                new_price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Latest;
