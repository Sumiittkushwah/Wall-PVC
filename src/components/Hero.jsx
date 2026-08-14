import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Hero.css";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const slides = [
  {
    id: 1,
    image: image1,
    subtitle: "THE GREAT WALL POLYPLAST",
    title: "Transform Your Walls",
    description:
      "Premium decorative wall panels designed to bring style, durability and elegance to modern interiors.",
  },

  {
    id: 2,
    image: image2,
    subtitle: "MODERN INTERIOR SOLUTIONS",
    title: "Designed for Beautiful Spaces",
    description:
      "Discover modern wall panel solutions for homes, offices, hotels and commercial spaces.",
  },

  {
    id: 3,
    image: image3,
    subtitle: "QUALITY • DESIGN • DURABILITY",
    title: "Build Better Interiors",
    description:
      "Elegant designs with reliable quality, made for interiors that leave a lasting impression.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  /* ================================
     NEXT SLIDE
  ================================= */

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  /* ================================
     PREVIOUS SLIDE
  ================================= */

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  /* ================================
     GO TO SLIDE
  ================================= */

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  /* ================================
     AUTO SLIDER
  ================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* ================================
     KEYBOARD NAVIGATION
  ================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="hero" aria-label="Hero Slider">

      {/* =================================
          SLIDER
      ================================= */}

      <div className="hero-slider">

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >

            {/* Overlay */}

            <div className="hero-overlay"></div>


            {/* Content */}

            <div className="hero-container">

              <div className="hero-content">

                <span className="hero-subtitle">
                  {slide.subtitle}
                </span>

                <h1>{slide.title}</h1>

                <p>{slide.description}</p>


                {/* Buttons */}

                <div className="hero-buttons">

                  {/* <Link
                    to="/products"
                    className="hero-btn hero-btn-primary"
                  >
                    Explore Products
                  </Link> */}

                  {/* <Link
                    to="/contact"
                    className="hero-btn hero-btn-secondary"
                  >
                    Get a Quote
                  </Link> */}

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>


      {/* =================================
          PREVIOUS BUTTON
      ================================= */}

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <span>&#10094;</span>
      </button>


      {/* =================================
          NEXT BUTTON
      ================================= */}

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <span>&#10095;</span>
      </button>


      {/* =================================
          SLIDER DOTS
      ================================= */}

      <div className="hero-dots">

        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={`hero-dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              index === currentSlide ? "true" : undefined
            }
          />
        ))}

      </div>

    </section>
  );
};

export default Hero;