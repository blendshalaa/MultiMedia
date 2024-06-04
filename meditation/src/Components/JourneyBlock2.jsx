/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "bulma/css/bulma.css"

function JourneyBlock2({header,subtitle,paragraph,image}) {
  return (
   
    <div className='columns mt-6'>
    <div className='column is-three-quarters'>
    <h1 className='is-size-1'>{header}</h1>
    <h2 className='is-size-2 is-bold'>{subtitle}</h2>
    <p>{paragraph}</p>
    </div>
    <div className='column'>
        <img width={250} className='' src={image}></img>
    </div>
   
</div>
   
  )
}

export default JourneyBlock2