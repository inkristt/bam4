import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu } from 'react-icons/ai'
import { RiSearch2Line } from 'react-icons/ri'
import Korpa from './Korpa';
import { useStateContext } from '../context/StateContext';
import Menu from './Menu';
import {AiOutlineClose} from 'react-icons/ai'
import Router from "next/router";
import { motion } from "framer-motion"


const Navigation = () => {
  const { showCart, setShowCart, totalQuantities, showMenu, setshowMenu } = useStateContext();
  const [term, setterm] = useState("")
  const [pokazi, setpokazi] = useState(false)
  const handlesearch = (e) => {
    e.preventDefault()
    setterm('')
    if(term){
      Router.push(`/search/${term}`)
    }
    console.log('radii')
  }

  return (
    <div className="navbar-container">
      <button type="button" onClick={() => setshowMenu(!showMenu)} className="cart-icon" >
        <AiOutlineMenu />
      </button>
      <p className={!pokazi ? 'logo' : "nelogo"}>
        <Link href="/">Srebro Shop</Link>
      </p>
      <div className='flex4'>
      <button type="button" onClick={() => setpokazi(!pokazi)} className="cart-icon" >
          {!pokazi &&<RiSearch2Line />}
          </button>
        { pokazi && <form
          onSubmit={handlesearch}
          className="flex4"
        >
          <motion.input 
          initial={{opacity:0,width:0}}
          animate={{opacity:1,width:160}}
          transition={{ duration: 0.5 }}
          type="text" placeholder='Pretrazi' value={term} onChange={(e) => setterm(e.target.value)}></motion.input> <button className='cart-icon' type='button' onClick={() => setpokazi(!pokazi)}> <AiOutlineClose /> </button>

        </form>}
        <button type="button" onClick={() => setShowCart(true)} className="cart-icon" >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
       

      </div>


      {showMenu && <Menu />}


      {showCart && <Korpa />}
    </div>
  )
}



export default Navigation