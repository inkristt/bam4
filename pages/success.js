import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';
import { client } from '../lib/client'

import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
const Success = ({kategorije,katgrupe}) => {
  const { setCartItems, setTotalPrice, setTotalQuantities,cartItems,setkat,setgrupe } = useStateContext();

  useEffect(() => {

    cartItems?.map((item)=>{
        const dec= item.quantity;
        const jed= item.zaliha-dec

        client.patch(item._id).set({zaliha: jed,quantity:0}).commit().then((updated)=>{
          console.log('Daj mi updateovan pls! New document:')
          console.log(updated)
        }).catch((err)=>console.error("NE daj boze",err))
    })


    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
    setkat(kategorije)
    setgrupe(katgrupe)
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
          <a className="email" href="mailto:tinagluscevic92@gmail.com">
              tinagluscevic92@gmail.com
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
export const getServerSideProps = async () => {
  
  const kategorijelista=`*[_type == "kategorije"]`
  const kategorije= await client.fetch(kategorijelista)
 
  const grupice = '*[_type == "kategorijegrupe"]'
  const katgrupe = await  client.fetch(grupice)

  return {
    props: { kategorije,katgrupe}
  }
}
export default Success