import React from "react";
import { Link } from "react-router-dom";
import "../css/Products.css";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

const products = [
  {
    id: 1,
    image: product1,
    title: "PVC Fluted Panels",
    description:
      "Stylish fluted panels for modern and elegant interiors..",
  },
  {
    id: 2,
    image: product2,
    title: "Super Heavy Panels",
    description:
      "Strong and durable panels designed for heavy-duty interiors..",
  },
  {
    id: 3,
    image: product3,
    title: "Slim  Panels",
    description:
      "Sleek and lightweight panels for modern interiors.",
  },
  {
    id: 4,
    image: product4,
    title: "WPVC lower (23 mm)",
    description:
      "Premium 23 mm WPVC panels for durable and stylish interiors.",
  },
  {
    id: 5,
    image: product5,
    title: "WPVC lower (17mm)",
    description:
      "Durable 17 mm WPVC panels for stylish modern interiors.",
  },
  {
    id: 6,
    image: product6,
    title: "Interior U.V Marble Sheet",
    description:
      "Elegant UV marble sheets for stylish and luxurious interiors.",
  },
];

const Products = () => {
  return (
    <section className="products-section">

      {/* Section Header */}
      <div className="products-header">

        <span className="products-subtitle">
          OUR PRODUCTS
        </span>

        <h2>
          Premium Solutions for
          <span> Modern Interiors</span>
        </h2>

        <p>
          Explore our range of stylish, durable and innovative
          interior wall solutions designed to transform your spaces.
        </p>

      </div>


      {/* Products Grid */}
      <div className="products-container">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            {/* Image */}
            <div className="product-image">

              <img
                src={product.image}
                alt={product.title}
              />

              <div className="product-overlay">
                <Link to="/products">
                  View Product
                </Link>
              </div>

            </div>


            {/* Content */}
            <div className="product-content">

              <span className="product-number">
                0{product.id}
              </span>

              <h3>
                {product.title}
              </h3>

              <p>
                {product.description}
              </p>

              <Link
                to="/products"
                className="product-link"
              >
                Explore More
                <span>→</span>
              </Link>

            </div>

          </div>
        ))}

      </div>


      {/* Bottom Button */}
      <div className="products-button-wrapper">

        <Link
          to="/products"
          className="products-button"
        >
          View All Products
          <span>→</span>
        </Link>

      </div>

    </section>
  );
};

export default Products;