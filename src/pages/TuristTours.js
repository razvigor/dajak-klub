import React from 'react'
import './TuristTours.scss'
import pic from '../img/turist-tours.jpg'
import picFive from '../img/turist-tours-five.jpg'

const TuristTours = () => {
  return (
    <div className='turist-tours'>
      <h2>TURISTIČKE TURE</h2>

      <h3>TURISTIČKA TURA - Zeleni most - Prvi mlin - Kastel - Zeleni most</h3>
      
      <p><b>25KM </b>- jedna osoba</p>
      <p><b>35KM </b> - dvije osobe</p>
      <p><b>45KM </b> - tri osobe (maksimalan broj odraslih osoba)</p>
      
      <div className='image-holder'>
      <img src={picFive} /> 
      <img src={pic} />        
      </div>

      <h4>Svi zainteresovani mogu dobiti više informacija kontaktiranjem kluba na stranici KONTAKT.</h4>
    </div>
  )
}

export default TuristTours