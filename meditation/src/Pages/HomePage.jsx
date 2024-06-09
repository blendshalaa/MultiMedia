/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Loader from '../Components/Loader'
import Hero from '../Components/Hero'
import { useEffect } from 'react'
import Section from '../Components/Section'
import InspirationSection from '../Components/InspirationSection'
import QuoteSection from '../Components/QuoteSection'
import Footer from '../Components/Footer'
import Subscriptions from '../Components/Subscriptions'


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
        <InspirationSection/>
        <QuoteSection/>
        <Subscriptions/> 
        <Footer/>
        </>
    )}
    </div>
  )
  

}

export default HomePage