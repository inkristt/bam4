import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client';


const Kat = ({kategorija:{ime, slug, slika}}) => {
  return (
    <div>
        {console.log(slug)}
      <Link href={`/kategorija/${slug.current}`}> 
        <div className="product-card">
          <img 
            src={urlFor(slika)}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{ime}</p>
        </div>
      </Link>
    </div>
  )
}

export default Kat