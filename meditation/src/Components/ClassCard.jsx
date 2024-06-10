/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Classes from '../Pages/Classes'
import '../styles/index.css'

function ClassCard({title,subtitle,buttonText}) {
  return (
    <div>
       
       <div className='box mt-5 is-flex is-flex-column is-justify-content-center is-align-items-center cardbox'>
        <div className='column is-5'>
        <h1 className='title'>{title}</h1>
      <p className='subtitle'>{subtitle}</p>
      <button className='button'>{buttonText}</button>
        </div>

    </div>
   

    </div>
  )
}

export default ClassCard