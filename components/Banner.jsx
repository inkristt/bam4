import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Banner = ({ heroBanner }) => {
  return (
    <div className='sticky'>
    <div className="hero-banner-container">
        <div className='Nebitan'></div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        
          <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />
          
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button" className='tipka'>{heroBanner.buttonText}</button>
          </Link>
        

     
    </div>
    </div>
  )
}

export default Banner