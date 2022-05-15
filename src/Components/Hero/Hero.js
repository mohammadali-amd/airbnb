import React from 'react'

import './Hero.css'
import hero from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <div>
      <img src={hero} className='hero--image'/>
      <div className='hero--text'>
        <h2>Online Experiences</h2>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </div>
  )
}

export default Hero