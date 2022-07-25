import React, { useRef, useState } from 'react'
import { useStateContext } from '../context/StateContext';
import Link from 'next/link'
import { AiOutlineLeft, AiOutlineRight, AiOutlineDown } from 'react-icons/ai'

import { motion } from "framer-motion"

const Menu = () => {

  const { setshowMenu, kat } = useStateContext();
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
        <h3>Menu</h3>
        <div className='flex1 '>
          <p onClick={() => setshowMenu(false)} ><Link href="/" >Pocetna </Link> </p>
          <p onClick={() => setotvori(!otvori)}>Kategorije <span  > {otvori ? <AiOutlineDown /> : <AiOutlineRight />}</span></p>
          {otvori && kat?.map((item) =>
            <p key={item._id} onClick={() => setshowMenu(false)} className='p10'>
              <Link href={`/kategorija/${item.slug.current}`}>
                {item.ime}
              </Link>
            </p>
          )}

          <Link href={`/omeni`}>
            <p>O meni</p>
          </Link>
          <Link href={`/kontakt`}>
            <p>Kontakt</p>
          </Link>


        </div>


      </motion.div>
    </motion.div>
  )
}


export default Menu