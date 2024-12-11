// import './App.css';
// import About from './pages/About';
// import Home from './pages/Home';
// import Navbar from './pages/Navbar';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <section id="Home">
//         <Home />
//       </section>
//       <section id="Projects">
//         <Projects />
//       </section>
//       <section id="Skills">
//         <Skills />
//       </section>
//       <section id="About">
//         <About />
//       </section>
//       <section id="Contact">
//         <Contact />
//       </section>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div>
      <Navbar />
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
