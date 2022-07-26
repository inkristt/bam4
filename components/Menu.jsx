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
  const [otvori2, setotvori2] = useState(false)
  const [otvori3, setotvori3] = useState(false)
  const [otvori4, setotvori4] = useState(false)
  const [otvori5, setotvori5] = useState(false)
  const [otvori6, setotvori6] = useState(false)
  const [otvori1, setotvori1] = useState(false)
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
          <p onClick={() => setotvori(!otvori)} className='p'>Prodavnica  <span  > {otvori ? <AiOutlineDown /> : <AiOutlineRight />}</span></p>
          {otvori && grupe?.map((item) =>
            <div key={item._id}  className='p10'>
              <p> {item.ime} </p>
                
                <div className='p10'>
                    {
                      kat?.map((k)=><p className='p' key={k._id} onClick={() => {setshowMenu(false) ; Router.push(`/kategorija/${k.slug.current}`); }} >
                      {k.grupa == item.ime ? k.ime : null }
                    </p>)
                    }
                </div>
            </div>
          )}

          <p onClick={() => setshowMenu(false)} ><Link href="/kontakt" >Kontakt </Link> </p>


        </div>


      </motion.div>
    </motion.div>
  )
}


export default Menu