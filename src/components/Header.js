import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { FaViber } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Header.scss';
import Banner from '../img/pejin_mlin.jpg'

const Header = () => {
  return (
    <div className='header'>
       {/*  <div className='container'>
        <div className='info'>
            <a href="viber://chat/?number=%2B38765517261"><FaViber /> +387 65 517 261</a>
            <a href='mailto:dajak.klub@gmail.com'><FaRegEnvelope /> dajak.klub@gmail.com</a>
        </div>
        <div className='social'>
            <a href='https://sr-rs.facebook.com/nektardajak/'><FaFacebookF size={20} /></a>
            <a href='https://instagram.com/dajakklub?igshid=YmMyMTA2M2Y='><FaInstagram size={25} /></a>
        </div>  
        </div> */}
        <div className='banner' style={{backgroundImage: `url(${Banner})`}}>
            <div className='dajak'>
                <p>Sportsko udruženje građana</p>
                <h1>Dajak klub</h1>
                <p>Banja Luka</p>
            </div>
            <div className='typed-text'>
                <h2>U PONUDI:{' '}
                    <ReactTypingEffect
                        text={["Iznajmljivanje čamaca", "Turističke ture", "Škola dajakastva", "Upis novih članova"]}
                        speed={100}
                        eraseSpeed={100}
                        eraseDelay={100}
                        typingDelay={800}
                    />
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Header