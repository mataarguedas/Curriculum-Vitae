import React, { useState } from 'react';
import './ContactButton.css';

const ContactButton = () => {
  const [showContactBox, setShowContactBox] = useState(false);

  const handleButtonClick = () => {
    setShowContactBox(!showContactBox);
  };

  return (
    <div className="contact-button-container">
      <button onClick={handleButtonClick} className="contact-button">
        Contact Me
      </button>
      {showContactBox && (
        <div className="contact-box">
          <h2>Contact Information</h2>
          <p>Email: mataarguedass@gmail.com</p>
          <p>Phone: +7232-4495</p>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
