import React from 'react'
import './Contact.css'
import msg_icon from '../../Images/msg-icon.png'
import mail_icon from '../../Images/mail-icon.png'
import phone_icon from '../../Images/phone-icon.png'
import location_icon from '../../Images/location-icon.png'
import white_arrow from '../../Images/white-arrow.png'


const Contact = () => {
  return (
    <div className='contact'>
<div className='contact-us'>

<h3>Send Us Message <img src={msg_icon} alt="" /></h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure enim placeat pariatur praesentium quae a tenetur eum deleniti assumenda culpa nam incidunt ea voluptatibus aliquam quo non quod, expedita odio doloribus delectus rem earum cumque. Labore quam nemo explicabo qui obcaecati illo repellendus doloribus reprehenderit sint! Soluta ab molestiae nostrum!</p>
<ul>
    <li><img src={mail_icon} alt="" />testing@email.com</li>
    <li><img src={phone_icon} alt="" />+1 123 456 7890</li>
    <li><img src={location_icon} alt="" />123 Main Street, Anytown, 
        USA 12345</li>
</ul>
</div>

<div className='contact-us'>
    <form>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required/>
        <label>Phone Number</label>
        <input type="tel" name='phone'placeholder='Enter Your Email' required/>
        <label>Write Your Message</label>
        <textarea name='message' rows='6' cols='30' placeholder='Enter Your Message'></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>

    </form>
    
</div>

    
    </div>
  )
}

export default Contact