import React from "react";
import "../css/Owner.css";

import ownerPhoto from "../assets/owner.png";
import logo from "../assets/logo.png";

const Owner = () => {
  return (
    <section className="owner-section">

      <div className="owner-container">

        {/* Owner Photo */}
        <div className="owner-photo-wrapper">
          <div className="owner-photo">
            <img
              src={ownerPhoto}
              alt="Founder of The Great Wall Polyplast"
            />
          </div>
        </div>


        {/* Owner Content */}
        <div className="owner-content">

          <span className="owner-subtitle">
            MEET OUR FOUNDER
          </span>

          {/* Company Logo */}
          <div className="owner-logo">
            <img
              src={logo}
              alt="The Great Wall Polyplast Logo"
            />
          </div>

          {/* Owner Name */}
          <h2>
            Mr. Avinash Gupta
          </h2>

          <span className="owner-position">
            Founder & Owner
          </span>

          <p>
            With a vision for quality, innovation and modern
            interior solutions, the founder of The Great Wall
            Polyplast is committed to delivering premium wall
            solutions that transform beautiful spaces.
          </p>

          <div className="owner-company">
            THE GREAT WALL POLYPLAST
          </div>

        </div>

      </div>

    </section>
  );
};

export default Owner;