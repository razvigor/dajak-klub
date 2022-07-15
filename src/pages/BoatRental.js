import React from 'react'
import './BoatRental.scss'

import pic from '../img/boat-rental-two.jpg'

const BoatRental = () => {
  return (
    <div className='boat-rental'>
      <h2>IZNAJMLJIVANJE ČAMACA</h2>

      <ul>
      <li>Članovi takmičari i predtakmičari imaju pravo besplatnog iznajmljivanja čamaca svakim danom od 8 do 11 časova.</li>
      <li>Članovi rekreativci koji ispunjavaju uslove samostalnog upravljanja čamcem imaće popust na iznajmljivanje u iznosu od 30 % (novi članovi koji hoće iznajmiti čamac i potvrditi status rekreativca će uz svo dužno poštovanje biti testirani od strane stručnih članova kluba).</li>
      <li>Članovi osnivači i počasni članovi imaju pravo na besplatno iznajmljivanje u zavisnosti od raspoloživosti čamaca gdje prednost imaju takmičari i rekreativci koji iznajmljuju čamac.</li>
      <li>Osobe koje žele iznajmiti čamac a nisu članovi kluba, plaćaju puni iznos iznajmljivanja.</li>
      <li>Svi čamci će biti pregledani prije i poslije iznajmljivanaja, a eventualnu štetu koju načini korisnik dužan je nadoknaditi u skladu sa procjenom štete.</li>
      <li>
        <span>1 sat – <b>10 KM</b></span>
        <span>1 dan – <b>60 KM</b></span>
        <span>2 dana – <b>90 KM</b></span>
        <span>3 dana – <b>120 KM</b></span>
      </li>

     
      </ul>

      
      <img src={pic} />

      <h4>Svi zainteresovani mogu dobiti više informacija kontaktiranjem kluba na stranici KONTAKT.</h4>
      
    </div>
  )
}

export default BoatRental