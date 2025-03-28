import React, { useEffect } from 'react';
import '../../Components/Navbar/Navbar.css'
import '../Blog/Blog.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Sharing from '../../Components/Sharing/Sharing';
import Form from '../../Components/Form/Form';
import subData from '../../utils.js';

function BlogPost6() {

// browser tab title
useEffect(() => {
    document.title = 'What Do You Fear? (How to Use Fear to Your Advantage)';
  }, []);

  return (
    <div>
        <Helmet>
            <title>What Do You Fear? (How to Use Fear to Your Advantage) - Andres Choque</title>
            <meta name="description" content="How to learn code in a simple manner." />
            
            {/* OG Tags */}
            <meta property="og:title" content="What Do You Fear? (How to Use Fear to Your Advantage) - Andres Choque" />
            <meta property="og:description" content="What to learn from fear." />
            <meta property="og:image" content="https://andreschoque.com/static/media/blog6.a7c5559128545621c6e0.jpg" />
            <meta property="og:url" content="https://andreschoque.com/blog/what-do-you-fear" />
            
            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="What Do You Fear? (How to Use Fear to Your Advantage) - Andres Choque" />
            <meta name="twitter:description" content="What to learn from fear." />
            <meta name="twitter:image" content="https://andreschoque.com/static/media/blog6.a7c5559128545621c6e0.jpg" />
            <meta name="twitter:url" content="https://andreschoque.com/blog/what-do-you-fear"/>
        </Helmet>

        <div className='blog-post-header'>
            <div className='container'>
                <Navbar/>
            </div>
        </div>

        <div className='blog-post-content'>
            
            <Form
              classes={subData[0].classes}
              title={subData[0].title}
              description={subData[0].description}
            />

            <div className='blog-content-container'>
                <h1><strong>What Do You Fear? (How to Use Fear to Your Advantage)</strong></h1>
                <h2>March 28, 2025 | Andres Choque</h2> 

            <Sharing/>

            <hr />

            <div className='blog-body'>
                <div className='container-blog'>

                    

                    <br />

                    <p>Blessings,</p>

                    <p>- <em> Andres</em></p>

                    <hr />
                </div>
            </div>
            </div>
        </div>

        <div>
            <Link to={'/blog'} className='btn'>Back</Link>
        </div>

        <Footer/>
    </div>
  )
}

export default BlogPost6