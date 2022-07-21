import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client';


const Kat = ({kategorija:{ime, slug, slika}}) => {
  return (
    <div>
       
      <Link href={`/kategorija/${slug.current}`}> 
        <div className="product-card">
          <img 
            src={urlFor(slika)}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name kat-name">{ime}</p>
        </div>
      </Link>
    </div>
  )
}

export default Kat