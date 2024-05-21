/* eslint-disable no-unused-vars */
import React from 'react'
import "bulma/css/bulma.css"
import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
  
    const handleBurgerClick = (event) => {
      const el = event.currentTarget;
      
      const target = el.dataset.target;
      const targetElement = document.getElementById(target);

    
      el.classList.toggle('is-active');
      if (targetElement) {
        targetElement.classList.toggle('is-active');
      }
    };

 
    const navbarBurgers = document.querySelectorAll('.navbar-burger');
    navbarBurgers.forEach(el => {
      el.addEventListener('click', handleBurgerClick);
    });

    return () => {
      navbarBurgers.forEach(el => {
        el.removeEventListener('click', handleBurgerClick);
      });
    };
  }, []);
  return (
   <>
   <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
    
      <a role='button' className='navbar-burger' aria-label='menu' aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      </a>
    </div>

    <div id='navbarBasicExample' className='navbar-menu mt-3 pl-6  '>
      <div className='navbar-start '>
      <a className='navbar-item mr-5 is-size-1 has-text-success'>
         Meditate
        </a>
      </div>
      <div className='navbar-end '>
   
        <a className='navbar-item mr-5 is-size-4'>
          Programs
        </a>
        <a className='navbar-item mr-5 is-size-4'>
          Guides
        </a>
        <a className='navbar-item mr-5 is-size-4'>
          Sounds
        </a>
        <div className='navbar-item '>
          <div className='buttons mr-5'>
            <a className='button is-primary has-text-white '>
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