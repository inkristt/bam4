import React,{useRef,useState} from 'react'
import { useStateContext } from '../context/StateContext';
import Link from 'next/link'
import {AiOutlineLeft,AiOutlineRight,AiOutlineDown} from 'react-icons/ai'

import { client } from '../lib/client'

const Menu = ({kategorije}) => {
  
    const { setshowMenu,kat} = useStateContext();
    const cartRef = useRef();
    const [otvori, setotvori] = useState(false)
    const handle =()=>{
        setshowMenu(false)
    }
  return (
    
    <div className='cart-wrapper menu' ref={cartRef}>
      
      <div className="menu-container">
        <button
        type="button"
        className="menu-heading"
        onClick={() => setshowMenu(false)}>
          <AiOutlineLeft />
        </button>
        <h3>Menu</h3>
        <div className='flex1 '>
                <p onClick={handle} ><Link href="/" >Pocetna </Link> </p>
                <p onClick={()=>setotvori(!otvori)}>Kategorije <span  > {otvori? <AiOutlineDown/>: <AiOutlineRight />}</span></p>
                {otvori && kat?.map((item)=>     
                        <p key={item._id} onClick={handle} >
                          <Link href={`/kategorija/${item.slug.current}`}>
                            {item.ime}
                          </Link>
                        </p> 
                )}
        </div>
        
        
      </div>
    </div>
  )
}


export default Menu