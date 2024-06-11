/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/index.css';

function MeditationVideo() {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/ZToicYcHIOU"  // Updated to a different video URL
              title="Meditation Music"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeditationVideo;