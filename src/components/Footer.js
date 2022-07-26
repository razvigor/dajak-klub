import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-top-item'>
            <h2><span>Sportsko udruženje građana</span><span>DAJAK KLUB BANJA LUKA</span></h2>
            <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercita.</p>
            <div className='social'>
              <a href='https://sr-rs.facebook.com/nektardajak/' rel='noreferrer' target='_blank'><FaFacebookF /></a>
              <a href='https://instagram.com/dajakklub?igshid=YmMyMTA2M2Y=' rel='noreferrer' target='_blank'><FaInstagram /></a>
            </div>
          </div>
          
          <div className='footer-top-item'>
            <h2>U ponudi</h2>
            <ul>
              <li><Link to="/skola-dajakastva">Škola dajakaštva</Link></li>
              <li><Link to="/turisticke-ture">Turističke ture</Link></li>
              <li><Link to="/iznajmlivanje-camaca">Iznajmljivanje čamaca</Link></li>
            </ul>
          </div>
          <div className='footer-top-item'>
            <h2>Kontakt info</h2>
            <ul>
              <li>+387 65 517 261</li>
              <li>dajak.klub@gmail.com</li>
              <li>Save Kovačevića 38, Banja Luka 78000</li>
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          
          <p>©<span>{year}</span> dajak.org</p>
        </div>
      </div>
      </footer>
  )
}

export default Footer