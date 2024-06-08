/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function AudioPlayer({ src, title }) {
  return (
    <div className="box">
      <h2 className="title is-5">{title}</h2>
      <audio controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
