import { Link } from 'react-scroll'
import { useState } from 'react'
import Contact from './Contact';
import Work from './Work';
import Education from './Education';


function Nav() {
    const [ toggleState, setToggleState ] = useState(null);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const tabs = () => {
        if(toggleState) {
            toggleTab(0)
        } else {
            toggleTab(2)
        }
    }

    return (
    <nav className={toggleState === 2 ? 'nav-active animate__animated animate__backInUp' : 'nav-not-active'}>
        <div className="container">
            <div className="nav">
                <ul className='nav-menu'>
                    <li>
                        
                        <Link to='content' title='click here' onClick={() => tabs()}><i className={toggleState === 2 ? 'fa fa-times' : 'far fa-address-book'}></i></Link>
                        <div className={toggleState === 2 ? 'content' : 'content-hide'} id="content">
                            <Contact />
                            <div className='content-two'>
                                <Work />
                                <Education />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav