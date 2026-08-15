import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* =================================
          FOOTER MAIN
      ================================= */}

      <div className="footer-container">

        {/* =================================
            COMPANY
        ================================= */}

        <div className="footer-company">

          <Link to="/" className="footer-logo">

            <span className="footer-logo-icon">
              ◇
            </span>

            <span>
              THE GREAT WALL
              <small>POLYPLAST</small>
            </span>

          </Link>


          <p>
            Premium interior wall solutions designed to transform
            ordinary spaces into beautiful, modern and elegant
            environments.
          </p>


          {/* Social Links */}

          {/* <div className="footer-social">

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              ▶
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

          </div> */}

        </div>


        {/* =================================
            QUICK LINKS
        ================================= */}

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <Link to="/">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/products">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>

            <li>
              <Link to="/location">
                Location
              </Link>
            </li>

          </ul>

        </div>


        {/* =================================
            PRODUCTS
        ================================= */}

        <div className="footer-column">

          <h3>
            Our Products
          </h3>

          <ul>

            <li>
              <Link to="/products">
                PVC Wall Panel
              </Link>
            </li>

            <li>
              <Link to="/products">
                WPC Wall Panel
              </Link>
            </li>

            <li>
              <Link to="/products">
                Fluted Wall Panel
              </Link>
            </li>

            <li>
              <Link to="/products">
                Decorative Wall Panel
              </Link>
            </li>

            <li>
              <Link to="/products">
                Designer Louvers
              </Link>
            </li>

          </ul>

        </div>


        {/* =================================
            CONTACT
        ================================= */}

        <div className="footer-column footer-contact">

          <h3>
            Contact Us
          </h3>


          {/* Phone */}

          <div className="footer-contact-item">

            <span className="footer-contact-icon">
              ☎
            </span>

            <div>

              <small>
                Phone
              </small>

              <a href="tel:+919520662245">
                +91 9520662245
              </a>

            </div>

          </div>


          {/* Email */}

          <div className="footer-contact-item">

            <span className="footer-contact-icon">
              ✉
            </span>

            <div>

              <small>
                Email
              </small>

              <a href="mailto:avinashgungun1976@gmail.com">
                avinashgungun1976@gmail.com
              </a>

            </div>

          </div>


          {/* Address */}

          <div className="footer-contact-item">

            <span className="footer-contact-icon">
              📍
            </span>

            <div>

              <small>
                Address
              </small>

              <p>
                Near Bankey Bihari Halwai <br/> Hathras Road, Rambagh,Agra-6

                <br />
                India
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =================================
          FOOTER BOTTOM
      ================================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} The Great Wall Polyplast.
          All Rights Reserved.
        </p>


        <div className="footer-bottom-links">

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;