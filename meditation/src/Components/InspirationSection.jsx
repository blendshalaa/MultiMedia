/* eslint-disable no-unused-vars */
import React from 'react'
import JourneyBlock from './JourneyBlock'
import journey1 from '../assets/journey1.png'
import journey2 from '../assets/jounrey2.png'
import journey3 from '../assets/journey3.png'
import "bulma/css/bulma.css"
import JourneyBlock2 from './JourneyBlock2'
import JourneyBlock3 from './JourneyBlock3'
function InspirationSection() {
  return (
    <section className="section is-medium has-background-success-90">
       <h2 className="subtitle">
      How it works
    </h2>
    <h1 className="title">Your daily journey to mindfulness in 3 simple steps</h1>

  <div className='journey mt-6'> 
    <JourneyBlock header="01" subtitle="Share your preferences"
 paragraph={
  <>
    Never stress about what meditation to choose! Our MindfulMinds<br />
    AI tailors a personalized daily meditation plan just for you,<br />
    ensuring you receive the peace and serenity you need,<br />
    no matter your experience level.
  </>
}
   image={journey1}
   />
 

    <div className='page-container'>
    <JourneyBlock2 header="02" subtitle="Review your daily meditation plan"
 paragraph={
  <>
    Once a week, review the meditation plan crafted for you by <br />
    MindfulMinds AI.
     Modify techniques, switch sessions,
      or even<br /> incorporate your favorite mindfulness practices.
  </>
 }
 image={journey2}
  />
    </div>
  
  
   <JourneyBlock3 header="03" subtitle="Experience tranquility at your pace"
 paragraph={
  <>
   Expert meditation guides will curate your chosen sessions each<br /> day,
    and we ll bring them to your space whenever suits you best.<br />
     Adjust your meditation schedule and location daily to align with<br /> your evolving journey!
  </>
 }
 image={journey3}/>  
 </div>
  </section>

  )
  
}

export default InspirationSection