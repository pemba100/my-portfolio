
import React, { useState } from 'react';
import logo from '../image/logo.jpeg';
import { Link } from 'react-router-dom';  
import '../pages/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <nav className='navbar mt-5'>
        <div className='logo'>
          <img src={logo} alt="logo" className='img-fluid rounded-circle' />
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul className='d-flex list-unstyled align-items-center justify-content-center'>
            <li className='me-5'>
              <Link to="/Home" className='text-decoration-none fs-5 fw-bold'>Home</Link>
            </li>
            <li className='me-5'>
              <Link to="/Projects" className='text-decoration-none fs-5 fw-bold'>Projects</Link>
            </li>
            <li className='me-5'>
              <Link to="/Skills" className='text-decoration-none fs-5 fw-bold'>Skills</Link>
            </li>
            <li className='me-5'>
              <Link to="/About" className='text-decoration-none fs-5 fw-bold'>About me</Link>
            </li>
            <li className='me-5'>
              <Link to="/Contact" className='text-decoration-none fs-5 fw-bold'>Contact me</Link>
            </li>
          </ul>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
