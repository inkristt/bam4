import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { client } from '../lib/client'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities,cartItems } = useStateContext();

  useEffect(() => {

    cartItems?.map((item)=>{
        const dec= item.quantity;
        const jed= item.zaliha-dec

        client.patch(item._id).set({zaliha: jed}).commit().then((updated)=>{
          console.log('Daj mi updateovan pls! New document:')
          console.log(updated)
        }).catch((err)=>console.error("NE daj boze",err))
    })


    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
    
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Hvala na kupovini!</h2>
        <p className="email-msg">Proverite mejl u toku dana.</p>
        <p className="description">
          Ako imate pitanja, pitajte nas
          <a className="email" href="mailto:inkris1989@gmail.com">
            inkris1989@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn joj">
            Nastavite kupovinu
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success