import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >

          <img
            src={logo}
            alt="The Great Wall Polyplast"
            className="navbar-logo-image"
          />

          {/* <div className="navbar-logo-text">
            <span className="logo-title">
              THE GREAT WALL
            </span>

            <span className="logo-subtitle">
              POLYPLAST
            </span>
          </div> */}

        </Link>


        {/* Navigation Menu */}
        <div
          className={`nav-menu ${
            menuOpen ? "active" : ""
          }`}
        >

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>

          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>

          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link to="/applications" onClick={closeMenu}>
            Applications
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close menu"
              : "Open menu"
          }
        >

          {menuOpen ? (

            <span className="close-icon">
              ×
            </span>

          ) : (

            <>
              <span></span>
              <span></span>
              <span></span>
            </>

          )}

        </button>

      </div>

    </nav>
  );
};

export default Navbar;