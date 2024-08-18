import React from 'react'
import './Preloader.css'
import { ReactTyped } from 'react-typed';

function Preloader() {
  return (
    <div>
        
        <div className='preloader'>
            <h1>
            <ReactTyped
                  strings={["Loading..."]}
                  typeSpeed={60}
                />
            </h1>
            <div className='spinner'></div>
        </div>
    </div>
  )
}

export default Preloader