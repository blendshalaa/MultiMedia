/* eslint-disable no-unused-vars */
import React from 'react';
import "bulma/css/bulma.css";
import LottieAnimation from './LottieAnimation';

function Hero() {
  return (
    <div>
      <section className="hero has-background-success-90 is-medium">
        <div className="hero-body">
          <div className="columns is-centered">
            <div className="column is-half  mt-6 is-flex-row is-justify-content-center is-align-items-center">
              <p className="title is-size-1">Daily tranquility,<br />your path to inner<br />peace begins now</p>
              <p className="subtitle has-text-dark mt-5">Your daily path to mindful living. Experience tranquility on<br />demand with our tailored meditation subscription,
                designed<br />for your inner peace and well-being.</p>
              <div className='mt-5'>
                <button className="button mr-5">Start Meditating</button>
                <button className="button has-background-success">Learn More</button>
                
              </div>
              
            </div>
            
            <div className="column is-half  ">
            <div className="is-flex is-justify-content-center is-align-items-center mb-5 ">
                <LottieAnimation />
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
