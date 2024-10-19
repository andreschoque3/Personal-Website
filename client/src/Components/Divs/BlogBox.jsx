import React from 'react'
import { Link } from 'react-router-dom'

const BlogBox = ({ imgSrc, imgAlt, blogTitle, blogLink, blogDate}) => {
  return (
    <div className='blog'>
        <img src={imgSrc} alt={imgAlt} />
        <h3>{blogTitle}</h3>
        <div className='blog-link'>
            <Link to={blogLink}>Read Full Post</Link>
        </div>
        <hr />
        <p className='author'>Andres Choque &nbsp; • &nbsp; {blogDate}</p>
    </div>
  )
}

export default BlogBox