import React from 'react'
import './RiverVrbas.scss'
import pic from '../img/vrbas.jpg'

const RiverVrbas = () => {
  return (
    <div class='post'>
            <img src={pic} />
            <div class="text-holder">

                  <h2>RIJEKA VRBAS</h2>

                  <p>Vrbas je rijeka i pritoka Save u zapadnom dijelu Bosne i Hercegovine, dugačka oko 250 km, sa površinom sliva oko 5900 km². Nastaje od dva vrela na Zec-Planini (ogranak Vranice). Rijeka Vrbas usjeca kompozitnu dolinu, prolazeći kroz Skopljansku kotlinu, Vinacku klisuru, Jajačku kotlinu, kanjonsku dolinu Tjesno, Banjolučku kotlinu, a donjim tokom preko svoje makroplavine Lijevče polje. Pritoke Vrbasa su: Vrbanja, Pliva, Ugar i druge. Na rijeci je izgrađeno nekoliko značajnijih hidrocentrala. Na obalama Vrbasa ili u njegovoj blizini nalaze se Gornji Vakuf, Bugojno, Donji Vakuf, Jajce i Banja Luka.</p>
            </div>

            <div class='info'> 
                  <div class='item'>             
                        <p>Dužina:</p>
                        <p>250 km</p>
                  </div>

                  <div class='item'>             
                        <p>NM izvora:</p>
                        <p>1500 m</p>             
                  </div>

                  <div class='item'>
                         <p>Površina sliva :</p>
                         <p>5900 km²</p>
                  </div>

                  <div class='item'>
                         <p>Izvor:</p>
                        <p>ispod Zec-planine</p>
                  </div>

                  <div class='item'>
                         <p>Ušće :</p>
                         <p>Sava</p>
                  </div>

                  <div class='item'>
                         <p>Pritoke:</p>
                        <p>Vrbanja,Pliva,Ugar i druge</p>
                  </div>

                  <div class='item'>
                         <p>Države:</p>
                         <p>BiH</p>
                  </div>

                  <div class='item'>
                        <p>Gradovi:</p>
                        <p>Gornji Vakuf,Bugojno,Donji Vakuf,Jajce i Banja Luka</p>
                  </div>

                  <div class='item'>
                         <p>Sliv:</p>
                        <p>Crnomorski sliv</p>
                  </div>
        </div>
     </div>
  )
}

export default RiverVrbas