import React, { useState } from 'react';
import logo from '../Assets/andres-choque-logo.png'
import './Navbar.css'

function Navbar() {

  // Menu functionality

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className='navbar'>
        <nav>
            <a href='#header'>
                <img src={logo} alt="Andres Choque Logo" className='logo'/>
            </a>
            <ul className={menuOpen ? "active" : ""}>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <i className='fas fa-circle-xmark' onClick={toggleMenu}></i>
            </ul>
            <i className='fas fa-bars' onClick={toggleMenu}></i>
        </nav>
    </div>
  )
}

export default Navbar