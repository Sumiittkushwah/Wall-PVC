import React from "react";
import "../css/Location.css";

const Location = () => {
  return (
    <section className="location-section">

      {/* =================================
          HEADER
      ================================= */}

      <div className="location-header">

        <span className="location-subtitle">
          OUR LOCATION
        </span>

        <h2>
          Visit Our
          <span>Company</span>
        </h2>

        <p>
          We would love to welcome you. Visit our location
          and explore our range of premium interior wall solutions.
        </p>

      </div>


      {/* =================================
          LOCATION CONTAINER
      ================================= */}

      <div className="location-container">

        {/* =================================
            GOOGLE MAP
        ================================= */}

        <div className="location-map">

          <iframe
            title="The Great Wall Polyplast Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.427106400899!2d78.04162050000001!3d27.205737199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397471f1a905b68f%3A0x493ac40aedfdac7e!2sThe%20great%20Wall%20polyplast!5e0!3m2!1sen!2sin!4v1786727420815!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>


        {/* =================================
            LOCATION INFO
        ================================= */}

        <div className="location-info">

          <span className="location-label">
            FIND US
          </span>

          <h3>
            The Great Wall
            <span>Polyplast</span>
          </h3>

          <p>
            Visit us for product information, design consultation
            and interior wall panel solutions for your project.
          </p>


          {/* Address */}

          <div className="location-details">

            <div className="location-detail">

              <div className="location-icon">
                📍
              </div>

              <div>
                <span>Address</span>

                <h4>
                  Near Bankey Bihari Halwai <br/> Hathras Road, Rambagh,Agra-6

                  <br />
                  India
                </h4>
              </div>

            </div>


            {/* Phone */}

            <div className="location-detail">

              <div className="location-icon">
                ☎
              </div>

              <div>
                <span>Phone</span>

                <h4>
                  +91 9520662245
                </h4>
              </div>

            </div>


            {/* Email */}

            <div className="location-detail">

              <div className="location-icon">
                ✉
              </div>

              <div>
                <span>Email</span>

                <h4>
                  avinashgungun1976@gmail.com
                </h4>
              </div>

            </div>

          </div>


          {/* =================================
              DIRECTIONS BUTTON
          ================================= */}

          <a
            href="https://www.google.com/maps/search/?api=1&query=The+Great+Wall+Polyplast"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            Get Directions
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Location;