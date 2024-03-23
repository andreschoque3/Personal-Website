import React, { useState } from 'react';
import logo from '../Assets/andres-choque-logo.png'
import { Switch } from 'antd'
import './Navbar.css'

function Navbar() {

  // Menu functionality

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Language toggle

  const [switchBackground, setSwitchBackground] = useState('#262626');
  
  const handleSwitchChange = (checked) => {
    if (checked) {
      setSwitchBackground('#ef5327');
    } else {
      setSwitchBackground('#262626'); 
    }
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
                <Switch 
                style={{background: switchBackground, marginLeft: '10px'}}
                checkedChildren={<span style={{fontSize: '15px'}}>ES <i className='fas fa-language'></i></span>} 
                unCheckedChildren={<span style={{fontSize: '15px'}}>EN <i className='fas fa-language'></i></span>} 
                onChange={handleSwitchChange}
                />
            </ul>
            <i className='fas fa-bars' onClick={toggleMenu}></i>
        </nav>
    </div>
  )
}

export default Navbar