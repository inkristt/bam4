import React from 'react'
import Image from 'next/image'
import bam from './assets/bam.jpg'

const Kontakt = () => {
  return (
    <div className='kanta'>
      <div >
         <h1 style={{margin:0}}>Budimo u kontaktu</h1>


      </div>
      <div >
        <div className='glavni'>
          <div className='sirina'>
            <h2>Free Baka</h2>
            <hr />
          </div>
          <div className='sirina'>
            <h5>Adresa</h5>
            <h4>Beograd</h4>
            <hr />
          </div>
          <div className='sirina'>
            <h5><span>Email:</span> info@inkrist.net</h5>
            <hr />
            <br />
          </div >
          <div className='sirina'>
            <h4>Telefon:</h4>
            <h4 className='br'>061 72 58 496</h4>
            <hr />
          </div>
          <div className='sirina'>
            <h1>Kontaktiraj nas</h1>
            <hr />
          </div>

          <h5 className='h5'> Otvoreni smo za Vaše i predloge i sugestije.</h5>

          <a className='btn' href="mailto:info@inkrist.net"> Posaljite poruku</a>

        </div>
      </div>

    </div>
  )
}

export default Kontakt
