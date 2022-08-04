import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client';
import { motion, Variants } from "framer-motion";

const Kat = ({kategorija:{ime, slug, slika}}) => {
  

  return (
    <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5,delay:1 }}
      >
       
      <Link href={`/kategorijagrupe/${slug.current}`} > 
        <div className="product-card">
          <img 
            src={urlFor(slika)}
            width={250}
            height={250}
            className="kat-image"
          />
          <p className="kat-name aw">{ime}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default Kat