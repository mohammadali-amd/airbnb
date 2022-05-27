import React from 'react'

import './Card.css'
import star from '../../assets/images/Star.png'
import image_1 from '../../assets/images/image_1.png'

const Card = () => {
  return (
    <div className='card'>
        <img src={image_1} alt="" className='card--image' />
        <div className='card--stats'>
            <img src={star} alt="star" className='card--star'/>
            <span>5.0 </span>
            <span style={{ color:'gray' }}> (6) • </span>
            <span style={{ color:'gray' }}> USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span style={{ fontWeight:'bold' }}>From $136</span> / person</p>
    </div>
  )
}

export default Card