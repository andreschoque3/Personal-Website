import React, { useEffect } from 'react';
import '../../Components/Navbar/Navbar.css'
import '../Blog/Blog.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Sharing from '../../Components/Sharing/Sharing';
import Form from '../../Components/Form/Form';
import subData from '../../utils.js';

function BlogPost5() {

// browser tab title
useEffect(() => {
    document.title = 'The Power of Walking (10,000 Steps a day Changed My Life)';
  }, []);

  return (
    <div>
        <Helmet>
            <title>The Power of Walking (10,000 Steps a day Changed My Life) - Andres Choque</title>
            <meta name="description" content="How to learn code in a simple manner." />
            
            {/* OG Tags */}
            <meta property="og:title" content="The Power of Walking (10,000 Steps a day Changed My Life) - Andres Choque" />
            <meta property="og:description" content="What to learn from going on long walks." />
            <meta property="og:image" content="https://andreschoque.com/static/media/blog5.e739eb5b601d11800327.jpg" />
            <meta property="og:url" content="https://andreschoque.com/blog/the-power-of-walking" />
            
            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Why Learn Code? You Solve Problems 50% Faster - Andres Choque" />
            <meta name="twitter:description" content="What to learn from going on long walks." />
            <meta name="twitter:image" content="https://andreschoque.com/static/media/blog5.e739eb5b601d11800327.jpg" />
            <meta name="twitter:url" content="https://andreschoque.com/blog/the-power-of-walking"/>
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
                <h1><strong>The Power of Walking (10,000 Steps a day Changed My Life)</strong></h1>
                <h2>October 22, 2024 | Andres Choque</h2> 

            <Sharing/>

            <hr />

            <div className='blog-body'>
                <div className='container-blog'>

                    

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

export default BlogPost5