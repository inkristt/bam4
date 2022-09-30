import React from 'react';
import { AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai';


const Footer = () => {
  return (
    <div className="footer-container">
      <p>Free Baka</p>
      <p className="icons">
        <a href='https://www.instagram.com/mlstomic/'>
        <AiFillInstagram />
        </a>
        <a href='https://www.facebook.com/'>
        <AiOutlineFacebook />
        </a>
      </p>
    </div>
  )
}

export default Footer