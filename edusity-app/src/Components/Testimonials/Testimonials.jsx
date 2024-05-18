import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Images/next-icon.png'
import back_icon from '../../Images/back-icon.png'
import user_1 from '../../Images/user-1.png'
import user_2 from '../../Images/user-2.png'
import user_3 from '../../Images/user-3.png'
import user_4 from '../../Images/user-4.png'

const Testimonials = () => {
const slider = useRef();
let value = 0;
const slideForward = () =>{
if(value > -50){
    value -= 25;
}
slider.current.style.transform = `translateX(${value}%)`;
}
const slideBackward = () =>{
    if(value < 0){
        value += 25;
    }
    slider.current.style.transform = `translateX(${value}%)`;
}
  return (
    <div className='testimonials'>
<img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
<img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
<div className="slider">
<ul ref={slider}>
    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_1} alt="" />
            <div>
                <h3>User 1</h3>
                <span>Berlin, Germany</span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo veritatis fuga nisi quisquam minus commodi, repellendus eveniet placeat corporis, facere consectetur molestiae accusamus libero nemo, error totam dolor hic earum laborum? A, consequuntur. Ea sed, alias, error quod provident nihil fugiat a ipsam laborum ab accusantium natus quidem dolorum.</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_2} alt="" />
            <div>
                <h3>User 2</h3>
                <span>Berlin, Germany</span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo veritatis fuga nisi quisquam minus commodi, repellendus eveniet placeat corporis, facere consectetur molestiae accusamus libero nemo, error totam dolor hic earum laborum? A, consequuntur. Ea sed, alias, error quod provident nihil fugiat a ipsam laborum ab accusantium natus quidem dolorum.</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_3} alt="" />
            <div>
                <h3>User 3</h3>
                <span>Berlin, Germany</span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo veritatis fuga nisi quisquam minus commodi, repellendus eveniet placeat corporis, facere consectetur molestiae accusamus libero nemo, error totam dolor hic earum laborum? A, consequuntur. Ea sed, alias, error quod provident nihil fugiat a ipsam laborum ab accusantium natus quidem dolorum.</p>
        </div>
    </li>

    <li>
        <div className="slide">
            <div className="user-info">
                <img src={user_4} alt="" />
            <div>
                <h3>User 4</h3>
                <span>Berlin, Germany</span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo veritatis fuga nisi quisquam minus commodi, repellendus eveniet placeat corporis, facere consectetur molestiae accusamus libero nemo, error totam dolor hic earum laborum? A, consequuntur. Ea sed, alias, error quod provident nihil fugiat a ipsam laborum ab accusantium natus quidem dolorum.</p>
        </div>
    </li>
</ul>

</div>
    </div>
  )
}

export default Testimonials