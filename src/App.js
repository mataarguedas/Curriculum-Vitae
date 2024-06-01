import React from 'react';
import './App.css';
import SliderComponent from './SliderComponent';
import confetti from 'canvas-confetti';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';


function App() {
  const handleNameClick = () => {
    confetti();
  };

  return (
    <div className="App">
      <div className="click-text-container">
        <p className="click-text">Click my name!</p>
        <div className="curved-arrow">
          <svg height="100" width="200">
            <path d="M10 30 Q 100 100, 190 30" stroke="white" strokeWidth="5" fill="none" />
            <polygon points="185,25 195,30 185,35" fill="white" />
          </svg>
        </div>
      </div>
      <header className="App-header" onClick={handleNameClick}>
        <h1>Emmanuel Mata</h1>
        <p>Data Analyst and Developer</p>
      </header>
      <main>
        <section><ExperienceSection/></section>
        <section><EducationSection/></section>
        <section><SkillsSection/></section>
        <section><SliderComponent /></section>
      </main>
    </div>
  );
}

export default App;
