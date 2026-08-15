import React from "react";
import "../css/Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">

        <div className="topbar-left">

          <span className="topbar-item">
            <span className="topbar-icon">📍</span>
            Near Bankey Bihari Halwai <br/> Hathras Road, Rambagh,Agra, Uttar Pradesh
          </span>

          <span className="topbar-divider"></span>

          <a
            href="mailto:avinashgungun1976@gmail.com"
            className="topbar-item"
          >
            <span className="topbar-icon">✉</span>
            avinashgungun1976@gmail.com
          </a>

        </div>

        <div className="topbar-right">

          <a href="tel:9837062245" className="topbar-item">
            <span className="topbar-icon">☎</span>
           9520662245
          </a>

          {/* <span className="topbar-divider"></span>

          <a href="tel:70177213852" className="topbar-item">
            <span className="topbar-icon">☎</span>
            70177 213852
          </a> */}

          {/* <span className="topbar-divider"></span> */}

          {/* <a
            href="https://wa.me/919837062245"
            target="_blank"
            rel="noreferrer"
            className="topbar-item whatsapp-link"
          >
            WhatsApp
          </a> */}

        </div>

      </div>
    </div>
  );
};

export default Topbar;