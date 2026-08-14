import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">

      {/* =================================
          TOP CTA
      ================================= */}

      <div className="contact-heading">

        <span className="contact-subtitle">
          GET IN TOUCH
        </span>

        <h2>
          Ready to Transform
          <span>Your Space?</span>
        </h2>

        <p>
          Have a project in mind? Talk to our team and discover
          the right wall panel solution for your interior.
        </p>

      </div>


      {/* =================================
          CONTACT CONTAINER
      ================================= */}

      <div className="contact-container">


        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="contact-info">

          <span className="contact-info-label">
            CONTACT US
          </span>

          <h3>
            Let's Create
            <span>Beautiful Spaces.</span>
          </h3>

          <p className="contact-info-description">
            Whether you are planning a home, office, hotel or
            commercial project, our team is here to help you
            choose the perfect interior wall solution.
          </p>


          {/* Phone */}

          <div className="contact-item">

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <span>Call Us</span>
              <h4>+91 98765 43210</h4>
            </div>

          </div>


          {/* Email */}

          <div className="contact-item">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <span>Email Us</span>
              <h4>info@thegreatwallpolyplast.com</h4>
            </div>

          </div>


          {/* Address */}

          <div className="contact-item">

            <div className="contact-icon">
              ⌖
            </div>

            <div>
              <span>Visit Us</span>
              <h4>
                Your Business Address,
                <br />
                India
              </h4>
            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE FORM
        ================================= */}

        <div className="contact-form-wrapper">

          <form className="contact-form">

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />

              </div>


              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter phone number"
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
              />

            </div>


            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <select id="subject">

                <option value="">
                  Select a service
                </option>

                <option value="pvc">
                  PVC Wall Panels
                </option>

                <option value="wpc">
                  WPC Wall Panels
                </option>

                <option value="fluted">
                  Fluted Wall Panels
                </option>

                <option value="decorative">
                  Decorative Wall Panels
                </option>

                <option value="louvers">
                  Designer Louvers
                </option>

                <option value="other">
                  Other Enquiry
                </option>

              </select>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your project..."
              ></textarea>

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Enquiry
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;