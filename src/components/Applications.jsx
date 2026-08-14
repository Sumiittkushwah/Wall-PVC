import React from "react";
import { Link } from "react-router-dom";
import "../css/Applications.css";

import application1 from "../assets/application1.png";
import application2 from "../assets/application2.png";
import application3 from "../assets/application3.png";
import application4 from "../assets/application4.png";
import application5 from "../assets/application5.png";
import application6 from "../assets/application6.png";

const applications = [
  {
    id: 1,
    image: application1,
    title: "Residential",
    description:
      "Elegant wall solutions for living rooms, bedrooms, TV walls and modern homes.",
  },
  {
    id: 2,
    image: application2,
    title: "Office Spaces",
    description:
      "Create professional and inspiring workspaces with modern interior wall designs.",
  },
  {
    id: 3,
    image: application3,
    title: "Hotels",
    description:
      "Premium wall solutions for hotel lobbies, rooms, restaurants and reception areas.",
  },
  {
    id: 4,
    image: application4,
    title: "Retail Stores",
    description:
      "Make your showroom or retail space more attractive with stylish wall solutions.",
  },
  {
    id: 5,
    image: application5,
    title: "Restaurants & Cafés",
    description:
      "Transform dining spaces with beautiful textures, patterns and contemporary designs.",
  },
  {
    id: 6,
    image: application6,
    title: "Commercial Spaces",
    description:
      "Durable and stylish interior solutions for modern commercial environments.",
  },
];

const Applications = () => {
  return (
    <section className="applications-section">

      {/* Header */}
      <div className="applications-header">

        <span className="applications-subtitle">
          APPLICATIONS
        </span>

        <h2>
          Designed for
          <span>Every Space</span>
        </h2>

        <p>
          From modern homes to commercial spaces, our wall solutions
          are designed to enhance every interior with style and durability.
        </p>

      </div>


      {/* Applications Grid */}
      <div className="applications-container">

        {applications.map((application) => (
          <div
            className="application-card"
            key={application.id}
          >

            {/* Image */}
            <img
              src={application.image}
              alt={application.title}
            />


            {/* Overlay */}
            <div className="application-overlay">

              <div className="application-content">

                <span className="application-number">
                  0{application.id}
                </span>

                <h3>
                  {application.title}
                </h3>

                <p>
                  {application.description}
                </p>

                <Link
                  to="/products"
                  className="application-link"
                >
                  Explore Solutions
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Applications;