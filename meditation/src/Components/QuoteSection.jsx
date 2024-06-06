/* eslint-disable no-unused-vars */
import React from 'react'
import QuoteCard from './QuoteCard'
import profile1 from '../assets/profilepic1.avif'
import profile2 from '../assets/profilepic2.avif'
import designer from '../assets/Designer.jpeg'
import '../styles/quotecard.css' // Assuming your custom CSS file

function QuoteSection() {
  const quotes = [
    {
      imageUrl: profile1,
      name: "John Smith",
      username: "johnsmith",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
      date: "2016-01-01T23:09:00"
    },
    {
      imageUrl: profile2,
      name: "Jane Doe",
      username: "janedoe",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2017-02-12T18:30:00"
    },
    {
      imageUrl: profile2,
      name: "Jane Doe",
      username: "janedoe",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2017-02-12T18:30:00"
    },
    {
      imageUrl: profile2,
      name: "Jane Doe",
      username: "janedoe",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2017-02-12T18:30:00"
    },
    {
      imageUrl: profile2,
      name: "Jane Doe",
      username: "janedoe",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2017-02-12T18:30:00"
    },
    {
      imageUrl: profile2,
      name: "Jane Doe",
      username: "janedoe",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2017-02-12T18:30:00"
    },

  ];

  return (
    <div>
      <section className="section is-medium">
        <h1 className="subtitle">Inspirations</h1>
        <h2 className="title mt-3">
          Once you experience it, youll embrace<br></br> mindfulness
        </h2>
        <div className="columns is-multiline"> {/* Key element for multiline */}
          {quotes.map((quote, index) => (
            <div key={index} className="column">
              <QuoteCard
                imageUrl={quote.imageUrl}
                name={quote.name}
                username={quote.username}
                content={quote.content}
                date={quote.date}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default QuoteSection;
