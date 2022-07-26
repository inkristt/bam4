import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping,AiOutlineMenu } from 'react-icons/ai'

import Korpa from './Korpa';
import { useStateContext } from '../context/StateContext';
import Menu from './Menu';
import logo from '../pages/assets/logo.png'
import Image from 'next/image'
const Navigation = () => {
  const { showCart, setShowCart, totalQuantities ,showMenu,setshowMenu} = useStateContext();

  return (
    <div className="navbar-container">
      <button type="button" onClick={() => setshowMenu(!showMenu)} className="cart-icon" >
        <AiOutlineMenu />
      </button>
      <p className="logo">
        <Link href="/"><Image src={logo} width='50' height='50'/></Link>
      </p>

      <button type="button" onClick={() => setShowCart(true)} className="cart-icon" >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      
      {showMenu && <Menu/>}


      {showCart &&<Korpa/>}
    </div>
  )
}

export default Navigation