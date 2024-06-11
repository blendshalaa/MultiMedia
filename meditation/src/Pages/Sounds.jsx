/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../Components/Navbar'
import SoundHero from '../Components/SoundHero'
import SoundSection from '../Components/SoundSection'
import Footer from '../Components/Footer'
import AudioList from '../Components/AudioList'
import Loader from '../Components/Loader'
import { useEffect } from 'react'
import { useState } from 'react'

function Sounds() {
  const[loading,setIsLoading]=useState(false)
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading?(
         <div className='is-flex is-justify-content-center is-align-items-center 'style={{ height: '100vh' }}>
         <Loader/>
         </div>
      ):(
        <> 

    
     
      <Navbar/>
      <SoundHero/>
      <SoundSection/>
   
      <Footer/>
      </>
  
      )}
      </div>
  )
}

export default Sounds