import React, { useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useStateContext } from '../context/StateContext'

const Gototop = () => {
    const { top, settop } = useStateContext()
    const {  showCart } = useStateContext();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                settop(true);
            } else {
                settop(false);
            }
        });
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            {!showCart && top && <motion.div
                onClick={goToTop}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='top'>
                <AiOutlineArrowUp />
            </motion.div>}
        </>

    )
}

export default Gototop