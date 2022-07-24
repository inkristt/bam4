import React,{useEffect} from 'react'
import { Product,Banner } from '../components'
import Kat from '../components/Kat'
import { useStateContext } from '../context/StateContext'
import { client, urlFor } from '../lib/client'
import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';
import Link from 'next/link'

const Home = ({bannerData,kategorije,proizvodi}) => {
  const {setkat,setsviproizvodi} = useStateContext();
  

  useEffect(() => {
    
    setkat(kategorije)
    setsviproizvodi(proizvodi)
  }, [])
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <div>
      <Swiper modules={[Virtual]} spaceBetween={10} slidesPerView={1} virtual>
      {bannerData.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index} className='swiper-kont'>
          <div className='spas' >
            <div className='p'>
              <div className='spoj'>
                <p>{slideContent.largeText1}</p>
               
                <p>{index+1}/{bannerData.length}</p>
              </div>
              <p>{slideContent.saleTime}</p>
              <Link href={`/product/${slideContent.product}`}>
                    <button type='button' className='kurac '>{slideContent.buttonText}</button>
              </Link>
              
            </div>
            <img  src={urlFor(slideContent.image)} />
            <div className='crnina'></div>
          </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
      <div className="products-heading">
        <h2>Izaberite kategoriju:</h2>
        
      </div>
      <div className="products-container grid2">
      {kategorije?.map((kategorija) =>  <Kat key= {kategorija._id} kategorija={kategorija}  />)}
      
    </div>
    <div className="products-heading">
        <h2>Naši proizvodi</h2>
        <p>Nakit po vasem ukusu</p>
      </div>
      <div className="products-container grid">
        {proizvodi?.map((kategorija) =>  <Product  key= {kategorija._id} product={kategorija} />)}
    </div>
    </div>
  )
}
export const getServerSideProps = async () => {
  
  const kategorijelista=`*[_type == "kategorije"]`
  const kategorije= await client.fetch(kategorijelista)
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const productsQuery = '*[_type == "product"]'
  const proizvodi = await client.fetch(productsQuery);

  return {
    props: { bannerData,kategorije,proizvodi}
  }
}
export default Home
