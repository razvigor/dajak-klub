import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainMenu.scss'
import { FaAngleDown } from "react-icons/fa";
const MainMenu = (props) => {
  function resetDropdown() {
    const dropdown = document.querySelectorAll('.dropdown')
    const button = document.querySelectorAll('.menu button')
    dropdown.forEach(item => item.classList.remove('active'))
    button.forEach(item => item.classList.remove('active'))
  }
  return (
    <>
    <ul className={`menu${props.active ? ' active' : ''}`}>
        <li><button onClick={(ev) => {
          const about = document.getElementById('about');
          const dropdown = document.querySelectorAll('.dropdown');
          const button = document.querySelectorAll('.menu button')
          if (about.classList.contains('active')) {
            about.classList.remove('active')
            ev.target.classList.remove('active')
          } else {
            dropdown.forEach(item => {
              item.classList.remove('active')
            })
            button.forEach(item => item.classList.remove('active'))
            about.classList.add('active')
            ev.target.classList.add('active')
            
          }
          
        }}>O KLUBU <FaAngleDown /></button>
          <ul id='about' className='dropdown'>
            <li><NavLink to='/o-klubu' onClick={resetDropdown}>O klubu</NavLink></li>
            <li><NavLink to='/dajak-camac' onClick={resetDropdown}>Dajak čamac</NavLink></li>
            <li><NavLink to='/raft-tim' onClick={resetDropdown}>Raft tim</NavLink></li>
            <li><NavLink to='/rijeka-vrbas' onClick={resetDropdown}>Rijeka Vrbas</NavLink></li>
            <li><a href='https://www.banjaluka.rs.ba' target='_blank' rel='noreferrer'>Grad Banja Luka</a></li>
            <li><NavLink to='/galerija' onClick={resetDropdown}>Galerija</NavLink></li>
          </ul>
        </li>
        <li><button onClick={(ev) => {
          const about = document.getElementById('school');
          const dropdown = document.querySelectorAll('.dropdown');
          const button = document.querySelectorAll('.menu button')
          if (about.classList.contains('active')) {
            about.classList.remove('active')
            ev.target.classList.remove('active')
            
          } else {
            dropdown.forEach(item => {
              item.classList.remove('active')
            })
            button.forEach(item => item.classList.remove('active'))
            about.classList.add('active')
            ev.target.classList.add('active')
          }
          
        }}>U PONUDI <FaAngleDown /></button>
          <ul id='school' className='dropdown'>
            <li><NavLink to='/skola-dajakastva' onClick={resetDropdown}>Škola dajakaštva</NavLink></li>
            <li><NavLink to='/turisticke-ture' onClick={resetDropdown}>Turističke ture</NavLink></li>
            <li><NavLink to='/iznajmlivanje-camaca' onClick={resetDropdown}>Iznajmljivanje čamaca</NavLink></li>
          </ul>
        </li>
        <li><NavLink to='/novosti' onClick={resetDropdown}>NOVOSTI</NavLink></li>
        <li><NavLink to='/kontakt' onClick={resetDropdown}>KONTAKT</NavLink></li>

    </ul>
    </>
  )
}

export default MainMenu