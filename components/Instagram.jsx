import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { motion } from 'framer-motion'
const Instagram = () => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay:1 }}
      href='https://www.instagram.com/srebro.shop.nakit/'
    >
      <div className='grad'>
        <AiOutlineInstagram />
      </div>
    </motion.a>
  )
}

export default Instagram