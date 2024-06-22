import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./category.css";
import Item from "../components/Item/Item";

const Category = ({ category, banner }) => {
  const { all_products } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState("default");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortProducts = (products, sortBy) => {
    switch (sortBy) {
      case "price-low-to-high":
        return products.slice().sort((a, b) => a.price - b.price);
      case "price-high-to-low":
        return products.slice().sort((a, b) => b.price - a.price);
      default:
        return products; // Default to original order
    }
  };

  const sortedProducts = sortProducts(
    all_products.filter((item) => item.category.toLowerCase().includes(category)),
    sortBy
  );

  return (
    <section className="categoryContainer">
      <div>
        <div className="categoryBanner">
          <img src={banner} alt="Category Banner" />
        </div>
        <div className="categoryProductsList">
          <p>
            Showing 1-12 <span>out of {sortedProducts.length} products</span>
          </p>
          <div>
            <span>Sort By&nbsp;</span>
            <select value={sortBy} onChange={handleSortChange}>
              <option value="default">Default</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="categoryContent">
          {sortedProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.title}
              new_price={item.price}
              old_price={item.price} // Assuming price structure is the same
            />
          ))}
        </div>
        <div className="categoryLoad">
          <button>Load More</button>
        </div>
      </div>
    </section>
  );
};

export default Category;
