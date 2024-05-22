/* eslint-disable no-unused-vars */
import React from 'react';
import "bulma/css/bulma.css";
import LottieAnimation from './LottieAnimation';

function Hero() {
  return (
    <div>
      <section className="hero has-background-success-90 is-small">
        <div className="hero-body">
          <div className="columns is-vcentered">
            <div className="column is-6 mt-6 ml-6">
              <div>
                <p className="title is-size-1">Daily tranquility,<br />your path to inner<br />peace begins now</p>
                <p className="subtitle has-text-dark mt-5">Your daily path to mindful living. Experience tranquility on<br />demand with our tailored meditation subscription,
                  designed<br />for your inner peace and well-being.</p>
                <div className='mt-5'>
                  <button className="button mr-5">Start Meditating</button>
                  <button className="button has-background-success">Learn More</button>
                </div>
              </div>
            </div>
            <div className="column is-5 is-flex is-justify-content-center is-align-items-center">
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
