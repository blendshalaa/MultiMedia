/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/quotecard.css'


function QuoteCard({imageUrl, name, username, content, date }) {
  return (
    <div>
       
        <div className='card small-card has-background-light'>
        <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={imageUrl} alt='img' className='profile-image'
         
          />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{name}</p>
        <p className="subtitle is-6">{username}</p>
      </div>
    </div>

    <div className="content">
    {content}
      <br />
      <time dateTime={date}>{new Date(date).toLocaleString()}</time>
    </div>
  </div>
        </div>
        </div>

  )
}

export default QuoteCard