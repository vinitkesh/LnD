import React, { useEffect } from 'react'

import Crows from './Crows'
import Banner from './assets/banner.png'

import gsap from 'gsap'

const App = () => {

  useEffect(() => {
    gsap.to('.logo', { delay:1, duration: 1, opacity:1 , ease: 'power2.inOut' })
  

  gsap.to('.est', { delay:1.2, duration: 1, opacity:1 , ease: 'power2.inOut' })
  gsap.to('a', { delay:1.4, duration: 1, opacity:1 , ease: 'power2.inOut' })


  }
  , [])


  return (<>
  <title></title>
    <div className='hero flex items-center justify-center flex-col w-screen h-screen '>
      <Crows />
      <img src={Banner} alt="banner" className='lg:w-[80%] m:w-full opacity-0 logo ' />
      <p className="est font-serif opacity-0 lg:text-3xl m:text-xl p-5">Est. 1961</p>
      <a href="#" className='opacity-0 p-5 m-5 text-white bg-gray-900 font-serif rounded-xl m:text-xl lg:text-2xl hover:scale-110 transition-all '>Inducting Now</a>
    </div>
    <div className="page1 items-center-flex-justify-center w-screen h-screen flex-col bg-gray-800 ">

    </div>
  </>
    
  )
}

export default App
