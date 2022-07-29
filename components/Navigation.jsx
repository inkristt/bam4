import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineMenu,AiFillFacebook,AiFillInstagram } from 'react-icons/ai'
import { RiSearch2Line } from 'react-icons/ri'
import Korpa from './Korpa';
import { useStateContext } from '../context/StateContext';
import Menu from './Menu';
import {AiOutlineClose} from 'react-icons/ai'
import Router from "next/router";
import { motion } from "framer-motion"
import Image from 'next/image';
import logo from '../pages/assets/Logo.png'



const Navigation = () => {
  const { showCart, setShowCart, totalQuantities, showMenu, setshowMenu } = useStateContext();
  const [term, setterm] = useState("")
  const [pokazi, setpokazi] = useState(false)
  const [skloni, setskloni] = useState(false)
  const handlesearch = (e) => {
    e.preventDefault()
    setterm('')
    if(term){
      Router.push(`/search/${term}`)
    }
    console.log('radii')
  }

  return (
    <div>
      <div className='kupon'>
            <a href='https://www.instagram.com/srebro.shop.nakit/'>
            <AiFillInstagram />
            </a>
              <a href='https://www.facebook.com/srebro.shop.nakit'>
              <AiFillFacebook />
              </a>
              
      </div>
      <div className='dizajn' >
        <a onClick={()=>Router.push('/')}>
          <Image src={logo} width='100px' height='100px' />
        </a>
      </div>
      <div className="navbar-container">
      <button type="button" onClick={() => setshowMenu(!showMenu)} className="cart-icon" >
        <AiOutlineMenu />
      </button>
    <p className={!pokazi ? 'logo fon' : "nelogo fon"}>
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

    </div>
    
  )
}



export default Navigation