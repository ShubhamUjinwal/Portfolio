import React from 'react';
import './App.css';
import Background from './background/background';
import BackgroundTitle from './background-title/background-title';
import Navbar from './navbar/navbar';
import About from './about/about';
import Skills from './skills/skills';
import Timeline from './timeline/timeline';
import Projects from './projects/projects';
import Contact from './contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BackgroundTitle/>
      <Background/>
      <About/>
      <Skills/>
      <Timeline/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
