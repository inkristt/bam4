import React from 'react'
import Image from 'next/image'
import bam from './assets/bam.jpg'

const Kontakt = () => {
  return (
    <div className='kanta'>
      <div className='mainkont'>
        <h1>Budimo u kontaktu</h1>
        <h4>Sve naše ogrlice su napravljene sa puno ljubavi.</h4>
        <div className='crnina'></div>
        <div className='gradient'><Image src={bam} width="1000" height='1000' /> </div>

      </div>
      <div className='cen'>
        <div className='glavni'>
          <div className='sirina'>
            <h2>Srebro Shop</h2>
            <hr />
          </div>
          <div className='sirina'>
            <h5>Adresa</h5>
            <h4>Pancevo</h4>
            <hr />
          </div>
          <div className='sirina'>
            <h5><span>Email:</span> tijana92@gmail.com</h5>
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

          <a className='btn' href="mailto:tinagluscevic92@gmail.com"> Posaljite poruku</a>

        </div>
      </div>

    </div>
  )
}

export default Kontakt
