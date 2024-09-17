import React from 'react'
import './BlogSubscriber.css'
import Form from '../Newsletter_Form/Form'

function BlogSubscriber() {

  return (
    <div>
        <div className='subscriber-container'>
            <h1>Haven't subscribed yet?</h1>
            <p>Join to get a dose of inspiration, insights, and a fresh perspective on life and business.</p>
            <Form/>
        </div>
    </div>
  )
}

export default BlogSubscriber