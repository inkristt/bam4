import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { urlFor } from '../lib/client';
import { useStateContext } from '../context/StateContext';

const Product = ({ product }) => {
  const { decQty, incQty, qty, onAdd, totalQuantities, setShowCart} = useStateContext();
  const handleBuyNow = () => {
    onAdd(product, 1);

  }
  
  return (
    <div className="product-card" >
      <Link href={`/product/${product.slug.current}`}>
        <div >
          <img 
            src={urlFor(product.image && product.image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          {
            product.zaliha >0? <h5>{product.zaliha> 4? <p> Na stanju {product.zaliha} komada </p> : <p> Ostalo jos samo {product.zaliha} komada</p>} </h5> : <h5>Product nedosupan</h5>
          }
          
          <p className="product-name kat-name">{product.naziv}</p>
          <p className="product-name align-text" >Kategorija: {product.kategorije}</p>
          <p className="product-price align-text">{product.cena} Rsd</p>
          
        </div>
      </Link>
        {
          product.zaliha>0 ? <div className="buttons center">  
          <button type="button" className="buy-now2" onClick={handleBuyNow}>Dodaj u korpu</button>
        </div> : <p></p>
        } 
    </div>
  )
}

export default Product