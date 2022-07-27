import React from 'react'
import './About.scss';
import pic from '../img/red-bull-dajak.jpg'
import img from '../img/Osnivaci-DAJAK-kluba.jpg'

const About = () => {
  return (
    <>
      <div class="post">
        <img src={pic} />

            <div class="text-holder">

                <h2>O KLUBU</h2>

                <p>Ideja o osnivanju kluba proistekla je iz čiste potrebe da se zaustavi erozija dajakaštva koja je
                    prijetila da ovu banjalučku vještinu baci u potpuni zaborav.Grupa entuzijasta odlučila je da je
                    jedino rješenje za vraćanje dajak-čamca na mjesto koje mu pripada osnivanje kluba kome je najvažniji
                    cilj očuvanje ove tradicije. </p>
                <p>Inicijalna kapisla koja je podstakla rađanje ideje o osnivanju kluba bila je sve lošija organizacija
                    tradicionalne trke dajak-čamaca što je dovelo da se 2009. godine ona uopšte i ne održi. Okupljeni na
                    "obali" (plaža porodice Zamolo u Boriku) , ova grupa zaljubljenika u dajak-čamac odlučila je nešto
                    promijeniti i osnovati klub. U međuvremenu Adem Ibrisagić pravi grupu na facebook-u pod nazivom
                    "Dajak klub", formira prvu i najveću arhivu slika dajak-čamaca uz pomoć velikog angažmana najvećih
                    legendi u ovome sportu od kojih je većina postavljena za administratore ove grupe tako da u vrlo
                    kratkom vremenskom periodu uspijevaju okupiti veliki broj ljubitelja ove tradicije ne samo iz
                    Banjaluke nego i iz dijaspore. Uz tako veliku podršku ljubitelja ove tradicije koja je davala
                    moralnu snagu, ubrzala cijeli proces oko osnivanja Dajak kluba i pomogla da ovo ne bi ostalo samo na
                    nivou Borika, iz tog razloga obuhvaćeno je cijelo područje od Ade do Novoselije na kojem se vozi
                    dajak-čamac, čime bi ovaj klub dobio širi karakter i samim tim bio klub za svakog istinskog
                    ljubitelja dajak-čamca. Odlučeno ja da se kontaktiraju mnogi ljubitelji i vlasnici čamaca kako iz
                    Banjaluke tako i iz dijaspore. Vrlo brzo dobijen je pozitivan odgovor od svih koji su bili
                    kontaktirani tako da se moglo pristupiti stavljanju kamena temeljca za ovaj klub.</p>
                <p>Početkom aprila 2010. klub je i zvanično registrovan u sudu , i sadašnja adresa kluba je Save
                    Kovačevića 38. Organi kluba su skupština,upravni i nadzorni odbor , kao i savjet kluba. Većina
                    statutarnih ciljeva odnosi se na očuvanje i popularizaciju dajak-čamca kao autohtone banjalučke
                    vještine, školu dajakaštva, na organizaciju trka dajak-čamaca, ekološka zaštita vodotoka, obala i
                    porječja rijeka, promotivno-turističke i rekreativne vožnje, postavljanje zvaničnih standarda vožnje
                    dajak čamca sa ciljem registrovanja ove vještine kao sporta.

                    Osnivači Dajak kluba na osnivačkoj sjednici početkom marta 2010. godine u prostorijama Ronilačkog
                    kluba "BUK"
                </p>
            </div>

            <img src={img} class="second-pic"alt=""/>
        </div>
    </>
    
  )
}


export default About