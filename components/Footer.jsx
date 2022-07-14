import Link from 'next/link';
import React from 'react';
import { AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer-container">
      <p>Srebro Shop</p>
      <p className="icons">
        <a href='https://www.instagram.com/srebro.shop.nakit/'>
        <AiFillInstagram />
        </a>
        <a href='https://www.facebook.com/srebro.shop.nakit'>
        <AiOutlineFacebook />
        </a>
      </p>
    </div>
  )
}

export default Footer