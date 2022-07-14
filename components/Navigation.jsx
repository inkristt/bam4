import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import Korpa from './Korpa';
import { useStateContext } from '../context/StateContext';

const Navigation = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Srebro Shop</Link>
      </p>

      <button type="button" onClick={() => setShowCart(true)} className="cart-icon" >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart &&<Korpa/>}
    </div>
  )
}

export default Navigation