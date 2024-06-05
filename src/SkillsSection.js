import React, { useState } from 'react';

function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExperience = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`experience-section ${isExpanded ? 'expanded' : ''}`} onClick={toggleExperience}>
      <div className="content">
      <h2>Skills</h2>
          <p>Power BI, JavaScript, React, Node.js, CSS</p>
      </div>
    </section>
  );
}

export default ExperienceSection;
