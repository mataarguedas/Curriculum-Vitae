import React from 'react';
import './App.css';
import SliderComponent from './SliderComponent';
import confetti from 'canvas-confetti';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import LinkedInIcon from './LinkedInIcon';
import GithubIcon from './GithubIcon';

function App() {
  const handleNameClick = () => {
    confetti();
  };

  return (
    <div className="App">
      <div className="click-text-container">
        <p className="click-text">Click my name!</p>
      </div>
      <header className="App-header" onClick={handleNameClick}>
        <h1>Emmanuel Mata</h1>
        
        
      </header>
      <main>
        <div className="career">
          <h1>
            Data Analyst & Developer
          </h1>
          <h3>Heredia, Costa Rica</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
        
        <LinkedInIcon url="https://www.linkedin.com/in/emmanuel-enrique-m-a0a9ab82" /> 
        <GithubIcon url="https://github.com/mataarguedas" />

        </div>
        <section><ExperienceSection/></section>
        <section><EducationSection/></section>
        <section><SkillsSection/></section>
        <section><SliderComponent /></section> <br/>
        
      </main>
    </div>
  );
}

export default App;
