import React from "react";
import { Link } from "react-router-dom";
import "../css/Panel.css";

import panel1 from "../assets/panel1.png";
import panel2 from "../assets/panel2.png";
import panel3 from "../assets/panel3.png";
import panel4 from "../assets/panel4.png";
import panel5 from "../assets/panel5.png";
import panel6 from "../assets/panel6.png";
import panel7 from "../assets/panel7.png";
import panel8 from "../assets/panel8.png";
import panel9 from "../assets/panel9.png";
import panel10 from "../assets/panel10.png";
import panel11 from "../assets/panel11.png";
import panel12 from "../assets/panel12.png";
import panel13 from "../assets/panel13.png";
import panel14 from "../assets/panel14.png";
import panel15 from "../assets/panel15.png";
import panel16 from "../assets/panel16.png";
import panel17 from "../assets/panel17.png";
import panel18 from "../assets/panel18.png";
import panel19 from "../assets/panel19.png";
import panel20 from "../assets/panel20.png";


const products = [
  {
    id: 1,
    image: panel1,
    title: "PVC Wall Panels",
    description:
      "Stylish and durable wall panels designed for modern interior spaces.",
  },
  {
    id: 2,
    image: panel2,
    title: "WPC Wall Panels",
    description:
      "Premium WPC panels offering elegant designs with excellent durability.",
  },
  {
    id: 3,
    image: panel3,
    title: "Marble Finish Designer Louvers",
    description:
      "Elegant marble-finish louvers with vertical black detailing, perfect for creating premium and contemporary interior spaces.",
  },
  {
    id: 4,
    image: panel4,
    title: "Classic Beige Fluted Wall Panel",
    description:
      "Minimal beige fluted panel with clean horizontal detailing for a refined modern interior look.",
  },
  {
    id: 5,
    image: panel5,
    title: "Walnut Wood Finish Fluted Wall Panel",
    description:
      "Warm walnut wood-finish panel with sleek horizontal grooves for a premium and contemporary interior.",
  },
  {
    id: 6,
    image: panel6,
    title: "Natural Oak Wood Finish Wall Panel",
    description:
      "Natural oak-finish panel with sleek horizontal grooves for a warm, modern and sophisticated interior look.",
  },
  {
    id: 7,
    image: panel7,
    title: "Dark Walnut Wood Finish Wall Panel",
    description:
      "Rich dark walnut finish with sleek horizontal grooves for a warm and luxurious interior look.",
  },
  {
    id: 8,
    image: panel8,
    title: "Grey Marble Gold Vein Fluted Wall Panel",
    description:
      "Luxury grey marble finish with gold veining and sleek horizontal grooves for a premium modern interior.",
  },
  {
    id: 9,
    image: panel9,
    title: "Wood Finish Panels",
    description:
      "Elegant wood-inspired panels that bring warmth and character to interiors.",
  },
  {
    id: 10,
    image: panel10,
    title: "Luxury Wall Panels",
    description:
      "Luxury wall panels designed to give interiors a sophisticated appearance.",
  },
  {
    id: 11,
    image: panel11,
    title: "3D Wall Panels",
    description:
      "Three-dimensional wall designs that add depth and visual appeal.",
  },
  {
    id: 12,
    image: panel12,
    title: "Texture Wall Panels",
    description:
      "Beautiful textured panels designed to enhance modern interior walls.",
  },
  {
    id: 13,
    image: panel13,
    title: "Modern Louvers",
    description:
      "Contemporary louver designs suitable for residential and commercial interiors.",
  },
  {
    id: 14,
    image: panel14,
    title: "Designer Wall Panels",
    description:
      "Designer panels created for premium and visually appealing interiors.",
  },
  {
    id: 15,
    image: panel15,
    title: "Interior Decorative Panels",
    description:
      "Decorative interior panels that combine style and functionality.",
  },
  {
    id: 16,
    image: panel16,
    title: "Classic Wall Panels",
    description:
      "Classic wall panel designs suitable for elegant interior spaces.",
  },
  {
    id: 17,
    image: panel17,
    title: "Contemporary Panels",
    description:
      "Contemporary designs created for modern residential and commercial spaces.",
  },
  {
    id: 18,
    image: panel18,
    title: "Premium Louvers",
    description:
      "Premium louver solutions for stylish and sophisticated interiors.",
  },
  {
    id: 19,
    image: panel19,
    title: "Luxury Decorative Panels",
    description:
      "Luxury decorative panels designed to create impressive interior spaces.",
  },
  {
    id: 20,
    image: panel20,
    title: "Complete Interior Solutions",
    description:
      "Complete wall solutions designed for beautiful and modern interiors.",
  },
];


const Panel = () => {
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

          <div
            className="product-card"
            key={product.id}
          >

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
                {String(product.id).padStart(2, "0")}
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

export default Panel;