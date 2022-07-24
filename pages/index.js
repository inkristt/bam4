import React,{useEffect} from 'react'
import { Product,Banner } from '../components'
import Kat from '../components/Kat'
import { useStateContext } from '../context/StateContext'
import { client } from '../lib/client'

const Home = ({bannerData,kategorije,proizvodi}) => {
  const {setkat,setsviproizvodi} = useStateContext();
  

  useEffect(() => {
    
    setkat(kategorije)
    setsviproizvodi(proizvodi)
  }, [])
  
  return (
    <div>
      <Banner heroBanner={bannerData.length && bannerData[0]}  />
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
