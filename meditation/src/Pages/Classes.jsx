/* eslint-disable no-unused-vars */
import React from 'react'
import SliderClass from '../Components/SliderClass'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ClassCard from '../Components/ClassCard'
import '../styles/index.css'





function Classes() {
  return (
<div>
    <Navbar/>
<section className="section is-large">
    <div className='text mb-5'>
    <h1 className="title is-size-1 pt-4">Classes</h1>
  <h2 className="subtitle">
  We are dedicated to providing a sacred space where individuals<br></br> of all ages and abilities can embark on this profound path.
  </h2>
    </div>

  <SliderClass/>
  <div className='container clascards'>
  <div className='columns is-flex is-flex-direction-column is-align-items-center'>
    <div className='column clascard2'>
      <ClassCard
        title="Cardio Strength"
        subtitle="Cardio Strength classes are high-intensity workouts that combine cardiovascular exercises with strength training."
        buttonText="Book Class"
      />
    </div>
    <div className='column clascard2'>
      <ClassCard
        title="Muscle Building"
        subtitle="Muscle Building classes focus on strength training exercises to help participants increase muscle mass, strength, and tone."
        buttonText="Book Class"
      />
    </div>
    <div className='column clascard2'>
      <ClassCard
        title="Basic Yoga"
        subtitle="Basic Yoga classes introduce participants to fundamental yoga poses, breathing techniques, and relaxation exercise"
        buttonText="Book Class"
      />
    </div>
    <div className='column clascard2'>
      <ClassCard
        title="CrossFit"
        subtitle="CrossFit is a high-intensity fitness program that incorporates functional movements from various disciplines, including weightlifting, gymnastics, and cardio exercises."
        buttonText="Book Class"
      />
    </div>
  </div>
</div>

 

</section>
<Footer/>
  
</div>
  )
}

export default Classes