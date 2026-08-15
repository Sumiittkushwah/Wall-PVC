import React from "react";
import "../css/Manager.css";

import managerPhoto from "../assets/manager.png";
import logo from "../assets/logo.png";

const Manager = () => {
  return (
    <section className="manager-section">

      <div className="manager-container">

        {/* Owner Photo */}
        <div className="manager-photo-wrapper">
          <div className="manager-photo">
            <img
              src={managerPhoto}
              alt="Manager of The Great Wall Polyplast"
            />
          </div>
        </div>


        {/* Owner Content */}
        <div className="manager-content">

          <span className="manager-subtitle">
           MANAGEMENT
          </span>

          {/* Company Logo */}
          <div className="manager-logo">
            <img
              src={logo}
              alt="The Great Wall Polyplast Logo"
            />
          </div>

          {/* manager Name */}
          <h2>
            Mr. Manager Name
          </h2>

          <span className="manager-position">
            Managing Director
          </span>

          <p>
           The Great Wall Polyplast is committed to delivering
            premium interior wall solutions with quality, innovation
            and modern design.
          </p>

          <div className="manager-company">
            THE GREAT WALL POLYPLAST
          </div>

        </div>

      </div>

    </section>
  );
};

export default Manager;