import React, { useState } from 'react';
 // Import the CSS file for styling
 import './ExperienceSection.css';

function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExperience = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`experience-section ${isExpanded ? 'expanded' : ''}`} onClick={toggleExperience}>
      <h2>Experience</h2>
      <div className="content">
        <p>Sales US DMV agent (2018-2021)</p>
        <p>Data Finance Analyst (2021-2024)</p>
      </div>
    </section>
  );
}

export default ExperienceSection;
