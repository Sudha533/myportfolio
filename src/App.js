import './App.css';
import Navbar from './Components/Navbar';
import HeaderBanner from './Components/HeaderBanner';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import React from 'react';

function App() {
  return (
    <main className=" bg-white overflow-x-hidden">
      <Navbar/>
      <HeaderBanner/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </main>
      
    
  );
}

export default App;
