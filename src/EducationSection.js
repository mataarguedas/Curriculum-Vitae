import React, { useState } from 'react';
 // Import the CSS file for styling

function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExperience = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`experience-section ${isExpanded ? 'expanded' : ''}`} onClick={toggleExperience}>
      <div className="content">
        <h2>Education</h2>
          <p>Undergraduate Computer Engineering student at UNED</p>
      </div>
    </section>
  );
}

export default ExperienceSection;
