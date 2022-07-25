import React from 'react'
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

import { motion} from "framer-motion"

const KatDetails = ({ proizvodi, kategorija }) => {

  return (
    <div className='odvajanje'>
      <div className='centar'>
        <div className='rel'>
          <p>{kategorija.ime}</p>
          <div className='crnina'></div>
          <img className='slidza' src={urlFor(kategorija.slika)} />
        </div>
      </div>
      <div className='mrel'>
        <p>{kategorija.ime}</p>
        <div className='crnina'></div>
        <img className='slidza' src={urlFor(kategorija.slika)} />
      </div>
      <div>
        <div className="products-container grid2 margin">
          {proizvodi?.map((product) => product.kategorije == kategorija.ime ?
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={product._id}
              > <Product product={product} /> </motion.div>
           : null)}
        </div>
      </div>


    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "kategorije"] {
    slug {
      current
    }
  }
  `;
  const kategorije = await client.fetch(query);
  const paths = kategorije.map((kategorija) => ({
    params: {
      slug: kategorija.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking'
  }
}
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "kategorije" && slug.current == '${slug}'][0]`;

  const kategorija = await client.fetch(query);
  const productsQuery = '*[_type == "product"]'
  const proizvodi = await client.fetch(productsQuery);



  return {
    props: { proizvodi, kategorija }
  }
}

export default KatDetails