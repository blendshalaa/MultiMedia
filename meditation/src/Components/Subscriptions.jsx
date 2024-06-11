/* eslint-disable no-unused-vars */
import React from 'react'
import SubscriptionBox from './SubscriptionBox'
import '../styles/index.css'

function Subscriptions() {
  return (
    <div>
        <section id='subscriptions' className="section is-medium">
  <h1 className="subtitle">Subscriptions</h1>
  <h2 className="title">
  Nourishing your mind within budget
  </h2>

  <div className='columns is-flex is-justify-content-center is-align-items-center mt-5'>

<div className='column is-one-third'>
<SubscriptionBox title='Basic Plan' 
price='199$'
permonth='per month. Only $6 per session!'
     description="Free features, limited storage"
     buttonText="Subscribe Now"
     backgroundColor="secondary"
     textColor="black" />
</div>

 <div className='column is-one-third'>
 <SubscriptionBox
        title="Premium Plan"
        price='399$'
        permonth='per month. Only $6 per session!'
        description="All features, unlimited storage"
        buttonText="Subscribe Now"
        backgroundColor="success"
        textColor="black"
        />
        
 </div>
   

  </div>
 
 
</section>
    </div>
  )
}

export default Subscriptions