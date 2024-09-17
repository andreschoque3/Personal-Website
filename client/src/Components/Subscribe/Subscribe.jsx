import React from 'react'
import './Subscribe.css'
import Form from '../Newsletter_Form/Form';

function Subscribe() {

  return (
    <div>
        <div className='sub-container'>
            <div className='sub-container'>
                <h1>Beyond Boundaries</h1>
                <p>Get a fresh perspective on business, technology, and lifestyle every week. Join a growing community of curious minds who want more than just updates—they want insights.</p>
                <Form/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe