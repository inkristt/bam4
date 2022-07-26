import React, { useRef, useState } from 'react'
import { useStateContext } from '../context/StateContext';
import Link from 'next/link'
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown } from 'react-icons/ai'
import Router from "next/router";
import { motion } from "framer-motion"

const Menu = () => {

  const { setshowMenu, kat,grupe } = useStateContext();
  const cartRef = useRef();
  const [otvori, setotvori] = useState(false)

  return (

    <motion.div

      className='cart-wrapper menu' ref={cartRef}>

      <motion.div className="menu-container"
        initial={{ opacity: 0, left: -300 }}
        animate={{ opacity: 1, left: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          type="button"
          className="menu-heading menu-btn"
          onClick={() => setshowMenu(false)}>
          <AiOutlineLeft />
        </button>
        <h3>Meni</h3>
        <div className='flex1 '>
          <p onClick={() => setshowMenu(false)} className='p' ><Link href="/" >Pocetna </Link> </p>
          <hr />
          <p onClick={() => setotvori(!otvori)} className='p'>Prodavnica  <span  > {otvori ? <AiOutlineDown /> : <AiOutlineRight />}</span></p>
          
          {otvori && kat?.map((item) =>
            <div key={item._id}  className='p10'>
              <p className='samodasescale'  onClick={()=>{Router.push(`/kategorija/${item.slug.current}`); setshowMenu(false)} }> {item.ime} </p>
                
                <div className='p10'>                 
                    {
                      item.grupa?.map((filter)=> <p className='samodasescale' key={filter}  onClick={()=>{Router.push(`/kategorijagrupe/${filter}`); setshowMenu(false)} } >{filter} </p>)
                    }                  
                </div>
            </div>
          )}
          <hr />


          
          <p onClick={() => setshowMenu(false)} ><Link href="/kontakt" >Kontakt </Link> </p>
          <hr />

        </div>


      </motion.div>
    </motion.div>
  )
}


export default Menu