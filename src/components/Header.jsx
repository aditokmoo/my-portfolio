import React from 'react'
import Typed from 'react-typed';
import skillIcons from '../img/skill-icons.png'
import 'animate.css';

function Header() {
  return (
    <header>
        <div className="container">
            <div className="header animate__animated animate__fadeIn" id='header'>
                <h1 className='animate__animated animate__backInDown'>Hi I’am Adi</h1>
                <span className='span'>Javascript Developer</span>
                <ul className='services'>
                  <li>Services:
                    <Typed 
                      strings={[ 
                        'Web Development',
                        'SEO Optimization',
                        'Web Design'
                      ]}
                      typeSpeed={100}
                      backSpeed={50}
                      loop
                    />
                  </li>
                </ul>
                <p>I am an ambitious self-taught web developer who has excellent problem solving skills that are mostly specialized in react.</p>
                <img src={skillIcons} alt="" id='skill-icons' />
            </div>
        </div>
    </header>
  )
}

export default Header