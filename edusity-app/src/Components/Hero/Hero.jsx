import React from 'react'
import './Hero.css'
import dark_arrow from '../../Images/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
<div className='hero-text'>
<h1>Discover a limitless world of learning</h1>
<p>Review important concepts and explore new topics—the options are endless with Education.com! Join for free today and browse 36,000+ worksheets, games, lesson plans and more.
</p>
<button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
</div>
    </div>
  )
}

export default Hero