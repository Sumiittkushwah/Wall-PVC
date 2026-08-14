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
    title: "PVC Wall Panels",
    description:
      "Stylish and durable wall panels designed for modern interior spaces.",
  },
  {
    id: 2,
    image: product2,
    title: "WPC Wall Panels",
    description:
      "Premium WPC panels offering elegant designs with excellent durability.",
  },
  {
    id: 3,
    image: product3,
    title: "Fluted Wall Panels",
    description:
      "Modern fluted designs that add depth, texture and elegance to interiors.",
  },
  {
    id: 4,
    image: product4,
    title: "Decorative Panels",
    description:
      "Beautiful decorative panels created to enhance walls and interior spaces.",
  },
  {
    id: 5,
    image: product5,
    title: "Designer Louvers",
    description:
      "Contemporary louvers designed to create stylish and sophisticated interiors.",
  },
  {
    id: 6,
    image: product6,
    title: "Interior Solutions",
    description:
      "Complete interior wall solutions for homes, offices and commercial spaces.",
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