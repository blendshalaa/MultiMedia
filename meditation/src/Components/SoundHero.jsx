/* eslint-disable no-unused-vars */
import React from 'react';
import MeditationVideo from './MeditationVideo';

function SoundHero() {
  return (
    <div>
      <section className="hero is-medium has-background-success-90">
        <div className="hero-body is-flex is-flex-direction-column is-align-items-center pt-5">
          <p className="title">Medium hero</p>
          <p className="subtitle">Medium subtitle</p>
          <div className="is-flex is-justify-content-center" style={{ width: '100%' }}>
            <MeditationVideo />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SoundHero;
