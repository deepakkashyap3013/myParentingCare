import React, { useState, useEffect } from "react";
import data from "../product";
import Card from "../components/card";

let uniqueCategories = [
  "all",
  ...new Set(data.map((product) => product.category)),
];

const Home = () => {
  const [products, setProducts] = useState(data);
  const [categories, setCategories] = useState(uniqueCategories);
  const [selected, setSeleted] = useState(0);

  const filterCategory = (category, index) => {
    setSeleted(index);
    if (category === "all") {
      setProducts(data);
    } else {
      let particularCategory = data.filter(
        (product) => product.category === category
      );
      setProducts(particularCategory);
    }
  };

  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h3>
            There is no such thing as a perfect parent. So be the Real One.
          </h3>
        </div>
      </div>
      <h2 className="product-heading">Best Selling products for parents</h2>
      <div className="button-category">
        {categories.map((category, index) => {
          return (
            <button
              className={`${index === selected ? "button-active" : null} `}
              key={index}
              onClick={() => filterCategory(category, index)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="components">
        {products.map((product) => {
          return <Card key={product.id} {...product} />;
        })}
      </div>
      <a className="gotop" href="#">
        <i class="fas fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Home;
