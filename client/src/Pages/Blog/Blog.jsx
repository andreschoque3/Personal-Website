import React, { useEffect } from 'react';
import blog1 from '../Blog/Images/blog1.jpg'
import blog2 from '../Blog/Images/blog2.jpg'
import blog3 from '../Blog/Images/blog3.jpg'
import blog4 from '../Blog/Images/blog4.jpg'
import blog5 from '../Blog/Images/blog5.jpg'
import '../../Components/Navbar/Navbar.css'
import './Blog.css'
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BlogBox from '../../Components/Divs/BlogBox';
import Form from '../../Components/Form/Form';

function Blog() {

  // browser tab title
  useEffect(() => {
    document.title = 'Blog - Andres Choque';
  }, []);

  const subsData = [
    {
       classes: 'subscriber-container',
       title: 'Get the Latest News Straight to You',
       description: 'Join to get a dose of inspiration, insights, and a fresh perspective on life and business.'
    }
  ]

  // Blog data
  const Blogdata = [
    {
      imgSrc: blog5,
      imgAlt: 'Blog-card-1',
      blogTitle: 'The Power of Walking (10,000 Steps a day Changed My Life)',
      blogLink: '/blog/the-power-of-walking',
      blogDate: 'October 22, 2024'
    },
    {
      imgSrc: blog4,
      imgAlt: 'Blog-card-2',
      blogTitle: 'Why Learn Code? You Solve Problems 50% Faster',
      blogLink: '/blog/why-learn-code-you-will-solve-problems-50-faster',
      blogDate: 'August 8, 2024'
    },
    {
      imgSrc: blog3,
      imgAlt: 'Blog-card-3',
      blogTitle: 'You Are One Mentor Away From Changing Your Life (Growth is Inevitable)',
      blogLink: '/blog/you-are-one-mentor-away-from-changing-your-life',
      blogDate: 'July 28, 2024'
    },
    {
      imgSrc: blog2,
      imgAlt: 'Blog-card-4',
      blogTitle: 'The Value of Travel and Where You Should Consider Going',
      blogLink: '/blog/the-value-of-travel',
      blogDate: 'July 14, 2024'
    },
    {
      imgSrc: blog1,
      imgAlt: 'Blog-card-5',
      blogTitle: 'How to be Intentional After School (With 3 Effective Steps)',
      blogLink: '/blog/how-to-be-intentional-after-school',
      blogDate: 'June 23, 2024'
    }
    
  ];

  return (
    <div>

      <Helmet>
          <title>Blog - Andres Choque</title>
          <meta name="description" content="Collection of thoughts and reflections." />

          {/* OG Tags */}
          <meta property="og:title" content="Blog - Andres Choque" />
          <meta property="og:description" content="Collection of thoughts and reflections." />
          <meta property="og:image" content="https://andreschoque.com/static/media/blog-bg.2277007bd37bf0f0b73b.jpg" />
          <meta property="og:url" content="https://andreschoque.com/blog" />
          <meta property="og:type" content="website" />

          {/* Twitter Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Blog - Andres Choque" />
          <meta name="twitter:description" content="Collection of thoughts and observations." />
          <meta name="twitter:image" content="https://andreschoque.com/static/media/blog-bg.2277007bd37bf0f0b73b.jpg" />
          <meta name="twitter:url" content="https://andreschoque.com/blog"/>
      </Helmet>

        <div className='blog-header'>
          <div className='container'>
            <Navbar/>
          </div>
        </div>

        <div className='blog-section'>

          <Form
              classes={subsData[0].classes}
              title={subsData[0].title}
              description={subsData[0].description}
          />
          
          <div className='blog-list'>
            {Blogdata.map((blogs, index) => (
                <BlogBox
                  key={index}
                  imgSrc={blogs.imgSrc}
                  imgAlt={blogs.imgAlt}
                  blogTitle={blogs.blogTitle}
                  blogLink={blogs.blogLink}
                  blogDate={blogs.blogDate}
                />
            ))}
          </div>
        </div>

      <Footer/>
    </div>
  )
}

export default Blog