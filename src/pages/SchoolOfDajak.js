import React from 'react'
import './SchoolOfDajak.scss'
import pic from '../img/skola_dajakastva.jpg'

const SchoolOfDajak = () => {
  return (
    <div className='dajak-school'>
      <h2>ŠKOLA DAJAKAŠTVA</h2>

      <img src={pic}/>

      <p>Škola dajakaštva predstavlja savladavanje osnove tehnike upravljanja i vožnje dajak. Obuka je potpuno besplatna, a namijenjena je svim uzrastima starijim od 13 godina gdje mlađi kandidati moraju zadovoljiti
      određene fizičke predispozicije. </p>
      <p>Programom rukovode stručni trener profesor fizičkog vaspitanja i sporta Dragan Babić, iskusni takmičar kako u kajak-kanu sportu, tako i u dajakaštvu, Andrej Zamolo višegodišnji prvak na trkama dajak-čamaca i konstruktor čamaca, kao i drugi iskusni vozači dajak-čamaca. Treninzi se održavaju 3-5 puta sedmično u trajanju od 30 do 60 minuta u zavisnosti od uzrasne skupine. Zainteresovani kandidati pristupaju klubu i upisuju školu dajakaštva. Škola dajakaštva obuhvata provjeru plivačkih i fizičkih sposobnosti prije prvog kontakta s dajak-čamcem. Nakon školske obuke od jedne sezone polaznici polažu stručni ispit i nakon polaganja prelaze u rekreativnu ili takmičarsku kategoriju i dalje rade po odgovarajućem programu.</p>
      <h4>Svi zainteresovani mogu dobiti više informacija kontaktiranjem kluba na stranici KONTAKT.</h4>

    </div>
  )
}

export default SchoolOfDajak