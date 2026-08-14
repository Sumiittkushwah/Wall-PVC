import React from "react";
import { Link } from "react-router-dom";
import "../css/WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    icon: "✓",
    title: "Premium Quality",
    description:
      "We use quality materials and reliable manufacturing processes to deliver products with excellent finishing.",
  },
  {
    number: "02",
    icon: "◆",
    title: "Modern Designs",
    description:
      "Our contemporary designs help transform ordinary walls into stylish and visually appealing interiors.",
  },
  {
    number: "03",
    icon: "★",
    title: "Built to Last",
    description:
      "Our wall solutions are designed for durability, performance and long-lasting interior beauty.",
  },
  {
    number: "04",
    icon: "⚙",
    title: "Easy Installation",
    description:
      "Designed for convenient installation, helping you create beautiful spaces with less time and effort.",
  },
  {
    number: "05",
    icon: "◇",
    title: "Wide Range",
    description:
      "Choose from a wide range of textures, patterns, finishes and designs for different interior needs.",
  },
  {
    number: "06",
    icon: "♥",
    title: "Customer Support",
    description:
      "Our team provides professional assistance from product selection to installation and beyond.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      {/* Header */}
      <div className="why-header">

        <span className="why-subtitle">
          WHY CHOOSE US
        </span>

        <h2>
          Designed for Quality.
          <span>Built for Excellence.</span>
        </h2>

        <p>
          At The Great Wall Polyplast, we combine quality,
          innovation and modern design to create interior
          solutions that make every space better.
        </p>

      </div>


      {/* Cards */}
      <div className="why-container">

        {reasons.map((reason) => (
          <div className="why-card" key={reason.number}>

            <div className="why-card-top">

              <span className="why-number">
                {reason.number}
              </span>

              <span className="why-icon">
                {reason.icon}
              </span>

            </div>

            <h3>
              {reason.title}
            </h3>

            <p>
              {reason.description}
            </p>

            <div className="why-line"></div>

          </div>
        ))}

      </div>


      {/* Bottom CTA */}
      <div className="why-cta">

        <div className="why-cta-content">

          <h3>
            Ready to Transform Your Space?
          </h3>

          <p>
            Explore our premium wall panel solutions
            for your next interior project.
          </p>

        </div>

        <Link
          to="/contact"
          className="why-cta-button"
        >
          Get a Quote
          <span>→</span>
        </Link>

      </div>

    </section>
  );
};

export default WhyChooseUs;