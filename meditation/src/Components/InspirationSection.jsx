/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import '../styles/index.css';
import JourneyBlock from './JourneyBlock';
import journey1 from '../assets/journey1.png';
import jounrey2 from '../assets/jounrey2.png';
import journey3 from '../assets/journey3.png';
import "bulma/css/bulma.css";
import JourneyBlock2 from './JourneyBlock2';
import JourneyBlock3 from './JourneyBlock3';

function InspirationSection() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn'); // Add your CSS class for animation
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const journeyBlocks = document.querySelectorAll('.journey-block');
    journeyBlocks.forEach((block) => {
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section is-medium has-background-success-90">
      <h2 className="subtitle">How it works</h2>
      <h1 className="title">Your daily journey to mindfulness in 3 simple steps</h1>

      <div className='journey mt-6'>
        <div className="journey-block">
          <JourneyBlock
            header="01"
            subtitle="Share your preferences"
            paragraph="Never stress about what meditation to choose! Our MindfulMinds AI tailors a personalized daily meditation plan just for you, ensuring you receive the peace and serenity you need, no matter your experience level."
            image={journey1}
          />
        </div>

        <div className="journey-block">
          <JourneyBlock2
            header="02"
            subtitle="Review your daily meditation plan"
            paragraph="Once a week, review the meditation plan crafted for you by MindfulMinds AI. Modify techniques, switch sessions, or even incorporate your favorite mindfulness practices."
            image={jounrey2}
          />
        </div>

        <div className="journey-block">
          <JourneyBlock3
            header="03"
            subtitle="Experience tranquility at your pace"
            paragraph="Expert meditation guides will curate your chosen sessions each day, and we'll bring them to your space whenever suits you best. Adjust your meditation schedule and location daily to align with your evolving journey!"
            image={journey3}
          />
        </div>
      </div>
    </section>
  );
}

export default InspirationSection;
