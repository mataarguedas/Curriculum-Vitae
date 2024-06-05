import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInIcon = ({ url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
      <FaLinkedin size={40} color="#0e76a8" />
    </div>
  );
};

export default LinkedInIcon;
