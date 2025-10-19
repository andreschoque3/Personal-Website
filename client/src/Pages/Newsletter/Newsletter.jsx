import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Form from '../../Components/Form/Form'

function Newsletter() {

  const subData = [
    {
      classes: 'sub-container',
      title: "Beyond Boundaries",
      description: "Get a fresh perspective on business, technology, and lifestyle every week. Join a growing community of curious minds who want more than just updates—they want insights.",
    }
  ]

  return (
    <div>
        <div className='container'>
            <Navbar/>
            <Form
             classes={subData[0].classes}
             title={subData[0].title}
             description={subData[0].description}
            />
        </div>
    </div>
  )
}

export default Newsletter