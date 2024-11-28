
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
         <Route path='/Projects' element={<Projects/>}/>
         <Route path='/Skills' element={<Skills/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  
    
    </div>
  );
}

export default App;
