import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
            <div className='contact-info'>
                <h2>INFORMACIJE</h2>
                
                <ul>
                  <li>
                    <h4>Predsjednik</h4>
                    <p>Andrej Zamolo</p>
                    <p>Tel: <a href="tel:+387 65 517-261">+387 65 517-261</a></p>
                    <p>Email: <a href="mailto:andrej.zamolo@gmail.com">andrej.zamolo@gmail.com</a></p>
                  </li>
                  <hr></hr>
                  <li>
                    <h4>Sekretar</h4>
                    <p>Boris Savić</p>
                    <p>Tel: <a href="tel:+387 65 566-139">+387 65 566-139</a></p>
                    <p>Email: <a href="mailto:borosav@gmail.com">borosav@gmail.com</a></p>                           
                  </li>
                  <hr></hr>
                  <li>
                    <span>Email: <a href='mailto:dajak.klub@gmail.com'>dajak.klub@gmail.com</a></span>
                    <span>Save Kovačevića 38</span>
                    <span>78000 Banja Luka</span>
                    <span>Republika Srpska, BIH</span>
                    <span>JIB: 4403144400005</span>
                    <span>ŽR: 5620998088309604</span>
                  </li>                       
                </ul>                                   
          </div>

          <div className='contact-form'>
            <h2>KONTAKTIRAJ NAS</h2>
            <div className='forms'>
              <label for="exampleFormControlInput1" class="form-label">Ime</label>
              <input type="text" class="form-control" placeholder="" aria-label="Username"
              aria-placeholder="Your Name"/>
            </div>

            <div className='forms'>
              <label for="exampleFormControlInput1" class="form-label">Prezime</label>
              <input type="text" class="form-control" placeholder="" aria-label="Username"
              aria-placeholder="Your Name"/>
            </div>

            <div className='forms'>
              <label for="exampleFormControlInput1" class="form-label">Email adresa</label>
              <input type="email" class="form-control" id="exampleFormControlInput1"
              placeholder=""/>
            </div>

            <div className='forms'>
              <label for="exampleFormControlTextarea1" class="form-label">Poruka</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder=""
              rows="9" cols='45'></textarea>
            </div>

            <button type="button" value="submit">Pošalji</button>
          </div>
    </div>
  )
}

export default Contact