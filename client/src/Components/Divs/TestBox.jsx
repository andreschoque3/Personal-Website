import React from 'react'

const TestBox = ({author, description}) => {
  return (
    <div className='test-box'>
        <h1>{author}</h1>
        <p>{description}</p>
    </div>
  )
}

export default TestBox