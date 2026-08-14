import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

import image4 from "../assets/image4.png";

const About = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* Image */}
        <div className="about-image-wrapper">

          <div className="about-image">
            <img
              src={image4}
              alt="The Great Wall Polyplast"
            />
          </div>

          <div className="about-experience">
            <span className="experience-number">10+</span>
            <span className="experience-text">
              Years of
              <br />
              Experience
            </span>
          </div>

        </div>


        {/* Content */}
        <div className="about-content">

          <span className="about-subtitle">
            ABOUT OUR COMPANY
          </span>

          <h2>
            Creating Better
            <span> Spaces With Style</span>
          </h2>

          <p className="about-intro">
            The Great Wall Polyplast is dedicated to providing
            premium interior solutions designed to transform
            ordinary spaces into beautiful and modern environments.
          </p>

          <p>
            We combine innovative designs, quality materials and
            reliable manufacturing to deliver wall panels that are
            stylish, durable and suitable for modern interiors.
          </p>


          {/* Features */}

          <div className="about-features">

            <div className="about-feature">
              <span className="feature-icon">✓</span>

              <div>
                <h4>Premium Quality</h4>
                <p>Reliable materials and excellent finishing.</p>
              </div>
            </div>


            <div className="about-feature">
              <span className="feature-icon">✓</span>

              <div>
                <h4>Modern Designs</h4>
                <p>Contemporary designs for beautiful interiors.</p>
              </div>
            </div>


            <div className="about-feature">
              <span className="feature-icon">✓</span>

              <div>
                <h4>Long Lasting</h4>
                <p>Products designed for durability and performance.</p>
              </div>
            </div>


            <div className="about-feature">
              <span className="feature-icon">✓</span>

              <div>
                <h4>Customer Support</h4>
                <p>Professional support from selection to installation.</p>
              </div>
            </div>

          </div>


          {/* Button */}

          <Link
            to="/about"
            className="about-button"
          >
            Discover More
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default About;