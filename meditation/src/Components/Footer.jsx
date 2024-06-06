/* eslint-disable no-unused-vars */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/index.css'

function Footer() {
  return (
    <footer className="footer has-background-success-90">
      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <h3 className="title is-size-4 has-text-black">About Us</h3>
            <p className="has-text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sed diam eu magna pretium venenatis.
            </p>
            <a href="#" className="button is-inverted is-outlined mt-5">
              Learn More
            </a>
          </div>
          <div className="column is-4">
            <h3 className="title is-size-4 has-text-black">Navigation</h3>
            <ul>
              <li><a className='has-text-black' href="#">Home</a></li>
              <li><a className='has-text-black' href="#">About Us</a></li>
              <li><a className='has-text-black' href="#">Services</a></li>
              <li><a className='has-text-black' href="#">Contact</a></li>
            </ul>
          </div>
          <div className="column is-4">
            <h3 className="title is-size-4 has-text-black">Social Media</h3>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f fa-2x facebookicon"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-twitter fa-2x twittericon"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-instagram fa-2x instagramicon"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="content has-text-centered  mt-5">
        <p className="has-text-black">
          © 2024 My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;