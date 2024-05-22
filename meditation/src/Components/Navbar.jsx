/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "bulma/css/bulma.css"

import animation from "../assets/animation.gif"
function Navbar() {

  const[isActive,setIsActive]=useState(false);

  function handleBurgerClick(){
    setIsActive(!isActive)
  }


  return (
   <>
   <nav className='navbar has-background-success-90' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand '>
    
      <a role='button' className={`navbar-burger${isActive?"is-active":""}`} aria-label='menu' aria-expanded={isActive?true:false} data-target="navbarBasicExample" onClick={handleBurgerClick}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      </a>
    </div>

    <div id='navbarBasicExample' className={ `navbar-menu  pl-6 ${!isActive?"is-active":""}`}>
      <div className='navbar-start '>
        <img src={animation} ></img>
      <a className='navbar-item mr-5 is-size-1  is-bold'>
         Meditate
        </a>
      </div>
      <div className='navbar-end '>
   
        <a className='navbar-item mr-5 is-size-5'>
          Programs
        </a>
        <a className='navbar-item mr-5 is-size-5'>
          Guides
        </a>
        <a className='navbar-item mr-5 is-size-5'>
          Sounds
        </a>
        <div className='navbar-item '>
          <div className='buttons mr-5'>
            <a className='button is-success has-text-white '>
              <strong>Contact Us</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
   </nav>
   
   </>
  )
}

export default Navbar