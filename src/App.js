import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btnText, setBtnText] = useState('Dark Mode');

  const toggleBtn = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtnText('Light Mode');  
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtnText('Dark Mode');  
    }
  };

  return (
    <BrowserRouter basename="/portfolio">
      <div style={myStyle}> 
        <Navbar toggleBtn={toggleBtn} btnText={btnText} /> 
        <section id="Home">
          <Home />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
