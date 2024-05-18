import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Images/logo.png'
import { Link } from 'react-scroll';


const Navbar = () => {
 const [sticky, setSticky] = useState(false);
 useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setSticky(true) : setSticky(false)
  })
 })

  return (
    <nav className= {`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo} alt="logo" className='logo'/>
    <ul>

<li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
<li><Link to='program' smooth={true} offset={-260} duration={600}>Program</Link></li>
<li><Link to='about' smooth={true} offset={-150} duration={600}>About Us</Link></li>
<li><Link to='campus' smooth={true} offset={-260} duration={600}>Campus</Link></li>
<li><Link to='testimonials' smooth={true} offset={-260} duration={600}>Testimonials</Link></li>
<li><Link to='contact' smooth={true} offset={-260} duration={600} className='btn'>Contact Us</Link></li>

    </ul>
    </nav>
  )
}

export default Navbar