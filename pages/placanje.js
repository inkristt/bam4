import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateContext';
import { client } from '../lib/client'
import Router from "next/router";
import { v4 as uuidv4 } from 'uuid';
import bam from "./assets/bam.jpg";
import Image from "next/image"




const Placanje = () => {
  const [ime, setime] = useState("")
  const [prezime, setprezime] = useState("")
  const [ulica, setulica] = useState("")
  const [drzava, setdrzava] = useState("")
  const [broj, setbroj] = useState("")
  const [grad, setgrad] = useState("")
  const [posta, setposta] = useState("")
  const [mail, setmail] = useState("")
  const { cartItems, totalPrice, totalQuantities, qty, promo } = useStateContext()
  const [fields, setfields] = useState(false)

  const doktor = {
    right: "20%",
    position: "absolute",
  }
  useEffect(() => {
   cartItems?.map((product)=>{
    product._key=uuidv4()
   })
  }, [])
  
  const zavrsi = () => {
    if (ime && prezime && drzava && grad && broj && mail && posta && ulica) {
      const doc = {
        _key: uuidv4(),
        _type: "narudzbina",
        ime: ime,
        prezime: prezime,
        ulica,
        drzava,
        grad,
        broj,
        mail,
        posta,
        ukupnacena: totalPrice,
        proizvod: cartItems,
        pkod: promo,
      }
      client.create(doc).then(() => {
        Router.push("/success");
      });
    } else {
      setfields(true);

      setTimeout(
        () => {
          setfields(false);
        },
        2000,
      );
    }
  }
  return (
    <form className='main'>
      {fields ? <p className="proba">Popunite sva polja</p> : <p></p>}
      <input type="text" placeholder='Ime' value={ime} onChange={(e) => setime(e.target.value)}></input>
      <input type="text" placeholder='Prezime' value={prezime} onChange={(e) => setprezime(e.target.value)}></input>
      <input type="text" placeholder='Mejl' value={mail} onChange={(e) => setmail(e.target.value)}></input>
      <input type="text" placeholder='Broj telefona' value={broj} onChange={(e) => setbroj(e.target.value)}></input>
      <input type="text" placeholder='Drzava' value={drzava} onChange={(e) => setdrzava(e.target.value)}></input>
      <input type="text" placeholder='Grad' value={grad} onChange={(e) => setgrad(e.target.value)}></input>
      <input type="text" placeholder='Ulica i broj' value={ulica} onChange={(e) => setulica(e.target.value)}></input>
      <input type="text" placeholder='Postanski broj' value={posta} onChange={(e) => setposta(e.target.value)}></input>
      <button type="button" onClick={zavrsi}>Potvrdi</button>
      <div style={doktor} className="titan">
        <Image src={bam} width={300} height={300} />
      </div>


    </form>
  )
}

export default Placanje