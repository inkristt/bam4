import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai'
import { RiSearch2Line } from 'react-icons/ri'
import Korpa from './Korpa';
import { useStateContext } from '../context/StateContext';
import Menu from './Menu';

import Router from "next/router";


const Navigation = () => {
  const { showCart, setShowCart, totalQuantities, showMenu, setshowMenu } = useStateContext();
 /* const [term, setterm] = useState("")
  const [pokazi, setpokazi] = useState(false)
  const handlesearch = (e) => {
    e.preventDefault()
    if(term){
      Router.push(`/search/${term}`)
    }
    console.log('radii')
  }*/

  return (
    <div className="navbar-container">
      <button type="button" onClick={() => setshowMenu(!showMenu)} className="cart-icon" >
        <AiOutlineMenu />
      </button>
      <p className="logo">
        <Link href="/">Srebro Shop</Link>
      </p>
      <div>
        <button type="button" onClick={() => setShowCart(true)} className="cart-icon" >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
       { /*<button type="button" onClick={() => setpokazi(!pokazi)} className="cart-icon" >
          {!pokazi &&<RiSearch2Line />}
          </button>*/}
        {/* pokazi && <form
          onSubmit={handlesearch}
        >
          <input type="text" placeholder='Pretrazi' value={term} onChange={(e) => setterm(e.target.value)}></input> <p onClick={() => setpokazi(!pokazi)}> x</p>

  </form>*/}

      </div>


      {showMenu && <Menu />}


      {showCart && <Korpa />}
    </div>
  )
}



export default Navigation