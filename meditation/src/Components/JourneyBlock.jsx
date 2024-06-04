/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "bulma/css/bulma.css"
import "../styles/blocks.css"


function JourneyBlock({header,subtitle,paragraph,image}) {
  return (
    <div className='is-vcentered is-gapless'>

 
    <div className='columns '>
        <div className='column is-one-third'>
        <h1 className='is-size-1'>{header}</h1>
        <h2 className='is-size-2 is-bold'>{subtitle}</h2>
        <p>{paragraph}</p>
        </div>
        <div className='column'>
            <img width={250} className='' src={image}></img>
        </div>
       
    </div>
    </div>
  )
}

export default JourneyBlock