import React, { useEffect } from 'react'
import { Product } from '../components'
import Kat from '../components/Kat'
import { useStateContext } from '../context/StateContext'
import { client, urlFor } from '../lib/client'
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';
import Link from 'next/link'

import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion"

const Home = ({ bannerData, kategorije, proizvodi,katgrupe }) => {
  const { setkat,setgrupe } = useStateContext();
  
  useEffect(() => {

    setkat(kategorije)
    setgrupe(katgrupe)
  }, [])
 
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/*<Swiper modules={[Autoplay, Pagination, Navigation]} spaceBetween={10} slidesPerView={1}  autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}

      >
        {bannerData.map((slideContent, index) => (
          <SwiperSlide key={slideContent.largeText1} virtualIndex={index} className='swiper-kont'>
            <div className='spas' >
              <div className='p'>
                <div className='spoj'>
                  <p>{slideContent.largeText1}</p>
                  {/*<Typewriter className="font"
                    options={{
                      strings: [slideContent.largeText1],
                      autoStart: true,
                      loop: true,
                    }} 
                  />}
                  <p>{index + 1}/{bannerData.length}</p>
                </div>
                {/*<p>{slideContent.saleTime}</p>
                <Link href={`/product/${slideContent.product}`}>
                  <button type='button' className='kurac '>{slideContent.buttonText}</button>
                </Link>}

              </div>
              <img src={urlFor(slideContent.image)} />
              <div className='crnina'></div>
            </div>

          </SwiperSlide>
        ))}
              </Swiper>*/}
      <div className="products-heading smanjen">
        <h2>Kategorija</h2>

      </div>
      <div className="products-container grid2">
        {katgrupe?.map((kategorija) => <Kat key={kategorija._id} kategorija={kategorija} />)}

      </div>
      <div className="products-heading">
        <h2>Naši proizvodi</h2>
        <p>Nakit po vasem ukusu</p>
      </div>
     

         <motion.div 
          
          className="products-container grid">
          {proizvodi?.map((kategorija) => <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    key={kategorija._id}
          >
            <Product  product={kategorija} />
          </motion.div> )}
        </motion.div>

     

    </motion.div>
  )
}
export const getServerSideProps = async () => {

  const kategorijelista = `*[_type == "kategorije"]`
  const kategorije = await client.fetch(kategorijelista)
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const productsQuery = '*[_type == "product"]'
  const proizvodi = await client.fetch(productsQuery);
  const grupice = '*[_type == "kategorijegrupe"]'
  const katgrupe = await  client.fetch(grupice)
  

  return {
    props: { bannerData, kategorije, proizvodi, katgrupe }
  }
}
export default Home
