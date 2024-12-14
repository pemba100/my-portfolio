import React, { useState } from 'react';
import logo from '../image/logo.jpeg';
import '../pages/Navbar.css';

function Navbar( { toggleBtn, btnText}) {
  const [isOpen, setIsOpen] = useState(false);
  


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container' >
      <nav className='navbar pt-5'>
        <div className='logo'>
          <img src={logo} alt="logo" className='img-fluid rounded-circle' />
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul className='d-flex list-unstyled align-items-center justify-content-center'>
            <li className='me-5'>
              <a href="#Home" className='text-decoration-none fs-5 fw-bold text-secondary'>Home</a>
            </li>
            <li className='me-5'>
              <a href="#Projects" className='text-decoration-none fs-5 fw-bold text-secondary'>Projects</a>
            </li>
            <li className='me-5'>
              <a href="#Skills" className='text-decoration-none fs-5 fw-bold text-secondary'>Skills</a>
            </li>
            <li className='me-5'>
              <a href="#About" className='text-decoration-none fs-5 fw-bold text-secondary'>About me</a>
            </li>
            <li className='me-5'>
              <a href="#Contact" className='text-decoration-none fs-5 fw-bold text-secondary'>Contact me</a>
            </li>
          </ul>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu}    style={{ color: 'grey'}}
        >
          ☰
        </button>
        <button   onClick={toggleBtn}  className='btn btn-primary'   type='button'>{btnText}</button>
      </nav>
    </div>
  );
}

export default Navbar;
