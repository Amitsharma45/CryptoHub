import React from 'react'
import './About'

export default function About() {
  return (
    <div className="container" id="about-container">
      <h1 className='text-center my-4 ' style={{ textDecorationLine: 'underline' }} >About Us </h1>
      <p id="para">
        CryptoHub is a single page react js  application, that was developed with the help of <a style={{color:'yellow'}} href="https://www.coingecko.com/en/api" target="blank">Coingecko Api</a>. This application is used to find the detail of any cryptocurrency like the current price of the coin, total market cap of the coin, and 24-hour price low and high.
        <br /><br />
        And a Line chart that represents the price action of coins on different time frames i.e 24 hours, last week, and 30 days.
      </p>
      <p>Tech Stack Used: React JS, Bootstrap, Chart JS, axios, Git.</p>
    </div>
  )
}
