import React from 'react'
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';

const KatDetails = ({proizvodi, kategorija}) => {
  
  return (
    <div>
      {console.log(kategorija)}
      {console.log(proizvodi)}
      <div className="products-container">
      {proizvodi?.map((product) =>product.kategorije==kategorija.ime ?  <Product key= {product._id} product={product} />:<p key={product._id}></p>)}
      
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
export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "kategorije" && slug.current == '${slug}'][0]`;
  
  const kategorija = await client.fetch(query);
  const productsQuery = '*[_type == "product"]'
  const proizvodi = await client.fetch(productsQuery);

  

  return {
    props: { proizvodi, kategorija }
  }
}

export default KatDetails