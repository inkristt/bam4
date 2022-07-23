import '../styles/globals.css'
import React from 'react'
import { Lea } from '../components'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
    <Lea>
      <div className='zindex'>
        <Toaster  />
      </div>
      
      <Component {...pageProps} />
    </Lea>
    </StateContext>
  )
  
}

export default MyApp
