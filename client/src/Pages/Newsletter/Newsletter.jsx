import React from 'react'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Navbar from '../../Components/Navbar/Navbar'


function Newsletter() {
  return (
    <div>
        <div className='container'>
            <Navbar/>
            <div>
                <Subscribe/>
            </div>
        </div>
    </div>
  )
}

export default Newsletter