import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useStateContext } from '../context/StateContext'
const Instagram = () => {
  const {  showCart } = useStateContext();
  return (
    <>
    {!showCart && <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay:1 }}
      href='https://www.instagram.com/srebro.shop.nakit/'
    >
      <div className='grad'>
        <AiOutlineInstagram />
      </div>
    </motion.a>}
    </>
    
  )
}

export default Instagram