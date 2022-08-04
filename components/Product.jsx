import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';

const Product = ({ product }) => {
  const router=useRouter()
  const { decQty, incQty, qty, onAdd, totalQuantities, setShowCart} = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, 1);

  }
  
  return (
    <div className="product-card" >
     
        <div onClick={()=>router.push(`/product/${product.slug.current}`)}   >
          <img 
            src={urlFor(product.image && product.image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          {
            product.zaliha >0? <h5>{product.zaliha> 4? <p> Na stanju {product.zaliha} komada </p> : <p> Ostalo jos samo {product.zaliha} komada</p>} </h5> : <h5>Proizvod nedosupan</h5>
          }
          
          <p className="product-name ">{product.naziv}</p>
          <p className="product-name hmm" >{product.kategorije}</p>
          <p className="product-price align-text">{product.cena}RSD</p>
          
        </div>
     
        {
          product.zaliha>0 ? <div className="buttons center">  
          <button type="button" className="buy-now2" onClick={handleBuyNow}>Dodaj u korpu</button>
        </div> : null
        } 
    </div>
  )
}

export default Product