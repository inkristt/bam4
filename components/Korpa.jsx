import React, { useRef } from 'react'
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping, AiOutlineRight } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';



const Korpa = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove,setpromo,promo } = useStateContext();
  const pom = () => {

  }
  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}>
          <AiOutlineRight />
          <span className="heading">Vasa Korpa</span>
          <span className="cart-num-items">({totalQuantities})</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Vasa korpa je prazna</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Nastavite Kupovinu
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.naziv}</h5>
                 
                  <h4>{item.cena} Rsd</h4>
                </div>
                  {
                    item.zaliha > 0 ? <h5>{item.zaliha > 4 ? <p> Na stanju {item.zaliha} komada </p> : <p> Ostalo jos samo {item.zaliha} komada</p>} </h5> : <h5>Proizvod nedosupan</h5>
                  }
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className={item.quantity != 1 ? 'minus' : 'nimi'} onClick={() => toggleCartItemQuanitity(item._id, 'dec')}>
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className={item.zaliha > item.quantity ? "plus" : "ni"} onClick={() => { item.zaliha > item.quantity ? toggleCartItemQuanitity(item._id, 'inc') : pom }}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Ukupno:</h3>
              <h3>{totalPrice} Rsd</h3>
            </div>
            <div className="total mt10">
              <h3>Promo kod:</h3>
              <input type="text"  value={promo} onChange={(e) => setpromo(e.target.value)}></input>
            </div>
            <h6>Promo kod moze da uamni cenu artikla za 5%, 10% I 20%</h6>
            <div className="btn-container">
              <Link href={`/placanje`}>
                <button type="button" className="btn voz" onClick={() => setShowCart(false)}>
                  Nastavi placanje
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Korpa