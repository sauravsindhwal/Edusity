import React from 'react'
import './About.css'
import about_img from '../../Images/about.png'
import play_icon from '../../Images/play-icon.png'

const About = () => {
  return (
    <div className='about'>
    <div className="about-left">
<img src={about_img} alt="" className='about-img'/>
<img src={play_icon} alt="" className='play-icon'/>

    </div>

    <div className="about-right">
<h3>About University</h3>
<h2>The People of Harvard</h2>

<p>What makes Harvard special are our people. Through continued efforts in inclusion and belonging, Harvard has built a community comprising many backgrounds, cultures, races, identities, life experiences, perspectives, beliefs, and values.</p>
<p>What makes Harvard special are our people. Through continued efforts in inclusion and belonging, Harvard has built a community comprising many backgrounds, cultures, races, identities, life experiences, perspectives, beliefs, and values.</p>
<p>What makes Harvard special are our people. Through continued efforts in inclusion and belonging, Harvard has built a community comprising many backgrounds, cultures, races, identities, life experiences, perspectives, beliefs, and values.</p>
    </div>

    </div>
  )
}

export default About