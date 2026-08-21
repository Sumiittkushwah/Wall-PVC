import React from "react";
import "../css/WhatsAppButton.css";

const WhatsAppButton = () => {

  const phoneNumber = "9520662245";

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

      {/* WhatsApp Logo */}

      <svg
        className="whatsapp-icon"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M19.11 17.39c-.27-.14-1.6-.79-1.85-.88
          -.25-.09-.43-.14-.61.14-.18.27-.7.88-.86
          1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42
          -2.15-1.33-.79-.7-1.32-1.56-1.48-1.82
          -.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48
          .14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48
          -.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61
          -.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95
          2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.94 4.65
          4.12.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11
          .53-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28
          -.07-.11-.25-.18-.52-.32z"
        />

        <path
          fill="currentColor"
          d="M16.01 3.2c-7.07 0-12.8 5.73-12.8 12.8
          0 2.26.59 4.38 1.63 6.22L3.1 28.8l6.75-1.72
          a12.75 12.75 0 0 0 6.16 1.58h.01c7.06 0 12.8-5.74
          12.8-12.8S23.08 3.2 16.01 3.2zm0 23.35h-.01
          a10.57 10.57 0 0 1-5.39-1.48l-.39-.23-4.01
          1.02 1.07-3.91-.25-.4a10.55 10.55 0 1 1
          8.98 4.99z"
        />
      </svg>


      {/* Text */}

      <span className="whatsapp-text">
        Chat with us
      </span>

    </a>
  );
};

export default WhatsAppButton;