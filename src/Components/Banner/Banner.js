import React from 'react'
import './Banner.css'
import banner from '../Images/2.jpg'
function Banner() {
  return (
    <div className='banner_img d-flex justify-content-center align-items-center flex-column'>
      <div style={{ }} >
        <div className="input-group mb-3 search">
          <input type="text" className="form-control seacrh_input" placeholder="Search Coin By Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
      </div>
      <div style={{ color: 'white', fontSize: '2rem' }}>
        Connecting the World to  Crypto
      </div>
    </div>
  )
}

export default Banner