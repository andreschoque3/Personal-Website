import React from 'react'

const TestBox = ({author, description, workplace}) => {
  return (
    <div className='test-box'>
        <h1>{author}</h1>
        <p>{description}</p>
        <br />
        <h2><em>{workplace}</em></h2>
    </div>
  )
}

export default TestBox