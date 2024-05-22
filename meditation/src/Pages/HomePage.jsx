/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Loader from '../Components/Loader'
import Hero from '../Components/Hero'
import { useEffect } from 'react'
import Section from '../Components/Section'

function HomePage() {
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
        <Hero/>
        <Section/>
        </>
    )}
    </div>
  )
  

}

export default HomePage