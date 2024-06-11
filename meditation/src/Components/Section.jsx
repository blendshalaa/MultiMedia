/* eslint-disable no-unused-vars */
import React from 'react'
import m from "../logos/3m.svg"
import barstool from "../logos/barstool-store.svg"
import budweiser from "../logos/budweiser.svg"
import buzzfeed from "../logos/buzzfeed.svg"
import forbes from "../logos/forbes.svg"
import macys from "../logos/macys.svg"
import menshealth from "../logos/menshealth.svg"
import mrbeast from "../logos/mrbeast.svg"

import '../styles/section.css'

function Section() {


  return (
   <>
   <div className="logos">
      <div className="logos-slide">
        <img src={m} />
        <img src={barstool} />
        <img src={budweiser} />
        <img src={buzzfeed}/>
        <img src={forbes} />
        <img src={macys} />
    
   
      </div>
      <div className="logos-slide">
        <img src={m} />
        <img src={barstool} />
        <img src={budweiser} />
        <img src={buzzfeed}/>
        <img src={forbes} />
        <img src={macys} />
        <img src={menshealth} />
     
      </div>
    </div>

   </>
  
      

       
  )
}

export default Section