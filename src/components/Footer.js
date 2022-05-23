import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer><p>©<span>{year}</span> dajak.org</p></footer>
  )
}

export default Footer