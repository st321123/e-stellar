import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";

const RelatedProduct = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/clothing")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPopular(response.data);
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
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Related Clothing Products</h1>
        {popular.length === 0 ? (
          <p>No related products available.</p>
        ) : (
          <div style={styles.productsContainer}>
            {popular.map((product) => (
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
};

const styles = {
  container: {
    margin: "20px 0",
    padding: "20px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  productsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
  },
};

export default RelatedProduct;
