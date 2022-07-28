import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MainMenu from './MainMenu';
import Logo from '../img/Dajak logo 192x192-01.png';
import './NavBar.scss'
import { FaViber } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
    const [active, setActive] = useState(false)
    function mobBtnHandler() {
        setActive(!active)
    }
  return (
    <nav>
        <div className='container'>
        <div className='logo'><Link to="/"><img src={Logo} alt="Logo" height='120' width='120'/></Link></div>

        <div className='nav-right'>
        <MainMenu active={active} />

        <div className='contact-us'>
            <div className='info'>
                <a href="viber://chat/?number=%2B38765517261"><FaViber /> +387 65 517 261</a>
                <a href='mailto:dajak.klub@gmail.com'><FaRegEnvelope /> dajak.klub@gmail.com</a>
            </div>
            <div className='social'>
                <a href='https://sr-rs.facebook.com/nektardajak/'><FaFacebookF size={20} /></a>
                <a href='https://instagram.com/dajakklub?igshid=YmMyMTA2M2Y='><FaInstagram size={25} /></a>
            </div>  
        </div>
        </div>
        
        <div className='mobile-btn'>
            <button onClick={mobBtnHandler} className={`mob-btn${active ? ' active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        
        </div>
    </nav>
  )
}

export default NavBar