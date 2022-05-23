import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import MainMenu from './MainMenu';
import Logo from '../img/Dajak logo 192x192-01.png';
import './NavBar.scss'

const NavBar = () => {
    const [active, setActive] = useState(false)
    function mobBtnHandler() {
        setActive(!active)
    }
  return (
    <nav>
        <div className='container'>
        <div className='logo'><Link to="/"><img src={Logo} alt="Logo" height='60' /></Link></div>
        <div className='mobile-btn'>
            <button onClick={mobBtnHandler} className={`mob-btn${active ? ' active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <MainMenu active={active} />
        </div>
    </nav>
  )
}

export default NavBar