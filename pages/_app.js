import '../styles/globals.css'
import React from 'react'
import { Lea } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'
import Instagram from '../components/Instagram'
import Gototop from '../components/Gototop'


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Lea>
      <div className='zindex'>
        <Toaster  />
        <Instagram />
        <Gototop />
      </div>
      
      <Component {...pageProps} />
    </Lea>
    </StateContext>
  )
  
}

export default MyApp
