import React, { useState } from 'react';
import logo from '../../Components/Assets/andres-choque-logo.png'
import blog1 from '../Blog/Images/blog1.jpg'
import '../../Components/Navbar/Navbar.css'
import './Blog.css'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Blog() {

  // Menu functionality

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add the icons

  library.add(faCircleXmark, faBars)

  // Email functionality
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "efae9b3c-bf15-4bd7-91ed-ff9435feb4d9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Email successfully sent.")
      event.target.reset();
    }
    else {
      console.log("Error", res)
      toast.error("Error while sending email.")
    }
  };

  return (
    <div>
      <div className='blog-header'>
        <div className='container'>
          <div className='navbar'>
          <nav>
              <a href='#header'>
                  <img src={logo} alt="Andres-Choque-Logo" className='logo'/>
              </a>
              <ul className={menuOpen ? "active" : ""}>
                  <li><Link to="/#header">Home</Link></li>
                  <li><Link to="/">About</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to="/">Services</Link></li>
                  <li><Link to="/">Portfolio</Link></li>
                  <li><Link to="/">Contact</Link></li>
                  <FontAwesomeIcon icon={faCircleXmark} onClick={toggleMenu}/>
              </ul>
              <FontAwesomeIcon icon={faBars} onClick={toggleMenu}/>
          </nav>
          </div>
        </div>
        <div className='blog-title'>
          <h1>Beyond Boundries</h1>
          <p>Navigating life's adventures through Business, Technology, Lifestyle, and Digital Ventures.</p>
        </div>
      </div>

      <div className='blog-section'>
        <div className='subscriber-container'>
          <h1>Get the Latest News Straight to You</h1>
          <p>Join to get a dose of inspiration, insights, and a fresh perspective on life and business.</p>
          <form onSubmit={onSubmit}>
            <input type="text" name="Blog-Subcriber-Email" id="" placeholder='Your Email' />
            <button type='submit'>Join</button>
          </form>
        </div>

        <div className='blog-list'>
          <div className='blog'>
            <img src={blog1} alt="" />
            <h3>How to be Intentional After School (with 3 effective steps)</h3>
            <p className='description'>Most people feel 'stuck' after school finishes. Explore these strategies that help you get closer to your goals.</p>
            <div className='blog-link'>
              <Link to={'/blog/how-to-be-intentional-after-school'}>Read Full Post</Link>
            </div>
            <hr />
            <p className='author'>Andres Choque &nbsp; • &nbsp; June 23, 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog