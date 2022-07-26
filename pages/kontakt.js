import React from 'react'
import Image from 'next/image'
import bam from './assets/bam.jpg'
import {FiInstagram , FiFacebook} from 'react-icons/fi'
import {FaWhatsapp , FaViber} from 'react-icons/fa'
const Kontakt = () => {
  return (
    <div className='kanta'>
      <div className='mainkont'>
        <h1>Budimo u kontaktu</h1>
        <h4>Sve naše ogrlice su napravljene sa puno ljubavi.<br /> Nudimo vam uvek priliku da nam se javite i ostavite aše želje i utiske.</h4>
        <div className='crnina'></div>
       <div className='gradient'><Image src={bam} width="1000" height='1000' /> </div> 

      </div>
      <div className='kartice'>
        <div className='kartica'>
          <h1>Kontakt</h1>
          <h3>061 72 58 496</h3>
          <h3>srebroshop@gmail.com</h3>
        </div>
        <div className='kartica'>
          <h1>Radno vreme</h1>
          <h3>pon-petak</h3>
          <h3>8:00 - 16:00</h3>
        </div>
        <div className='kartica'>
          <h1>Adresa</h1>
          <h3>Mileševska 14, Vračar</h3>
          <h3>11000 Beograd, Srbija</h3>
        </div>
        <div className='kartica'>
          <h1>Adresa</h1>
          <h3>Mileševska 14, Vračar</h3>
          <h3>11000 Beograd, Srbija</h3>
        </div>
      </div>
      <div className='kartice'>
        <div className='kartica s'>
              <FiInstagram  />  
        </div>
        <div className='kartica s'>
          <FiFacebook />
        </div>
        <div className='kartica s'>
            <FaWhatsapp />
        </div>
        <div className='kartica s'>
          <FaViber />
        </div>  
      </div>
    </div>
  )
}

export default Kontakt
