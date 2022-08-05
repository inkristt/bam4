

import React from 'react'
import { Product } from '../../components';
import { client } from '../../lib/client';
import {motion} from 'framer-motion'
const Grupe = ({proizvodi}) => {
  return (
    <div>
        <div className="products-container grid">
        {
            proizvodi?.map((product)=>
                <motion.div key={product._id} 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    > <Product  product={product}></Product> </motion.div>  
            )
        }
        </div>
    </div>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "kategorijegrupe"] {
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
    const query = `*[_type == "kategorijegrupe" && slug.current == '${slug}'][0]`;
    const katgrupe = await client.fetch(query);
    const prodlista = `*[_type == "product" && grupa=='${katgrupe.ime}']`
    const proizvodi = await client.fetch(prodlista)

    return {
      props: {proizvodi}
    }
  }



export default Grupe