import React from "react";
import "./homeHero.css";

function HomeHero() {
  return (
    <div className="heroContainer">
      <div className="heroSection">
        <div className="heroText">
          <h3>Style Elevated, Confidence Unleashed</h3>
          <p>
          Welcome to E-Stellar, where fashion meets expression. Discover a curated collection of trendsetting apparel designed to elevate your style effortlessly. Whether you're seeking casual chic or runway-ready looks, our diverse range ensures there's something for every occasion and personality. 
          Join the fashion-forward community at E-Stellar and redefine your wardrobe with every click.
          </p>
          <div className="homeRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <span>198k</span>
            <p>Excellent Reviews</p>
          </div>
          <div className="heroBtns">
            <button className="offerBtn">Shop Now</button>
            <button>
              <i class="fa-solid fa-tag"></i>Offers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;



