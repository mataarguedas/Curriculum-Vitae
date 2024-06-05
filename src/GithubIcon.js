import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubIcon = ({ url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleClick}>
      <FaGithub size={40} color="#000" />
    </div>
  );
};

export default GitHubIcon;
