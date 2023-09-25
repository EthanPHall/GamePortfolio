import React from 'react';
import logo from './logo.svg';
import './App.css';
import IntroSection from './Components/IntroSection';
import ProjectSection from './Components/ProjectSection';
import ContactSection from './Components/ContactSection';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <IntroSection></IntroSection>
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
