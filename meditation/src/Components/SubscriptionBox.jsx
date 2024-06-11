/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/index.css'

const SubscriptionBox = ({ title,price,permonth, description, buttonText, backgroundColor, textColor }) => {

  const boxClassNames = ` sub-box box has-background-${backgroundColor} has-text-${textColor} p-3`;

  return (
    <div className={boxClassNames} >
      <h3 className="subtitle is-5">{title}</h3>
      <h2 className='title'>{price}</h2>
      <p className='span'>{permonth}</p>


      <p>{description}</p>
      <ul className='is-size-4 mt-5' style={{ listStyle: 'none', paddingLeft: '20px' }}> {/* Optional styling */}
    <li><i className="fas fa-calendar-alt" style={{ marginRight: '10px' }}></i> 1 session per day</li>
    <li><i className="fas fa-clock" style={{ marginRight: '10px' }}></i> Access: 7am to 10pm</li>
    <li><i className="fas fa-question-circle" style={{ marginRight: '10px' }}></i> Free guidance</li>
  </ul>
      <button className="button is-light mt-5">{buttonText}</button>
    </div>
  );
};

export default SubscriptionBox;