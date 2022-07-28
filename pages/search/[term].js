import React from 'react'
import { Product } from '../../components'
import { client } from '../../lib/client'
import { motion } from "framer-motion"

const Search = ({products}) => {
  return (
    <div>
        
       
        {/*products.lenght !==0 && <p>{products[0].naziv}</p>*/
        }
        {console.log(JSON.parse(products)) }
    
        
        {JSON.parse(products).length ==0 && <div className='nista'><p> Nemamo takav proizvod...</p> </div>}
        <motion.div className="products-container grid">
          {JSON.parse(products)?.map((kategorija) => <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={kategorija._id}
          >
            <Product  product={kategorija} />
          </motion.div> )}
          </motion.div>
    </div>
  )

}

export const getServerSideProps = async ({ params: { term }}) => {
    const lista = `*[_type == "product" && naziv match '${term}*' || kategorije match '${term}*' || opis match '${term}*']` 
    const products = await client.fetch(lista)

    return {
      props: {products :  JSON.stringify(products) }
    }
  }

export default Search