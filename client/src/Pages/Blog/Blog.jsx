import React, { useState, useEffect } from 'react';
import logo from '../../Components/Assets/andres-choque-logo.png'
import blog1 from '../Blog/Images/blog1.jpg'
import blog2 from '../Blog/Images/blog2.jpg'
import '../../Components/Navbar/Navbar.css'
import './Blog.css'
import { Link } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

function Blog() {

  // browser tab title
  useEffect(() => {
    document.title = 'Blog Posts';
  }, []);

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

      <Helmet>
          <title>Blog - Andres Choque</title>
          <meta name="description" content="Collection of thoughts and reflections." />

          {/* OG Tags */}
          <meta property="og:title" content="Blog - Andres Choque" />
          <meta property="og:description" content="Collection of thoughts and reflections." />
          <meta property="og:image" content="https://andreschoque.com/static/media/blog-bg.1230c2caaa3e9048b9c2.jpg" />
          <meta property="og:url" content="https://andreschoque.com/blog" />
          <meta property="og:type" content="website" />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blog - Andres Choque" />
          <meta name="twitter:description" content="Collection of thoughts and observations." />
          <meta name="twitter:image" content="https://andreschoque.com/static/media/blog-bg.1230c2caaa3e9048b9c2.jpg" />
          <meta name="twitter:url" content="https://andreschoque.com/blog"/>
      </Helmet>

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
          <h1>Beyond Boundaries</h1>
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
            <img src={blog2} alt="" />
            <h3>The Value of Travel and Where You Should Consider Going</h3>
            <p className='description'>Traveling not only opens up opportunities such as work, friendships, and exploration but also broadens your mindset.</p>
            <div className='blog-link'>
              <Link to={'/blog/the-value-of-travel'}>Read Full Post</Link>
            </div>
            <hr />
            <p className='author'>Andres Choque &nbsp; • &nbsp; July 14, 2024</p>
          </div>

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