import React from "react";
import "../css/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "8476906334";

  const message = encodeURIComponent(
    "Hello, I am interested in your wall panel products. Please share more details."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-icon">☏</span>

      <span className="whatsapp-text">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;