/* eslint-disable no-unused-vars */
import React from 'react';
import AudioPlayer from './AudioPlayer';

const audios = [
  { src: 'https://www.bensound.com/bensound-music/bensound-relaxing.mp3', title: 'Relaxing' },
  { src: 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', title: 'Slow Motion' },
  { src: 'https://www.bensound.com/bensound-music/bensound-dreams.mp3', title: 'Dreams' },
  { src: 'https://www.bensound.com/bensound-music/bensound-tenderness.mp3', title: 'Tenderness' },
  { src: 'https://www.bensound.com/bensound-music/bensound-onceagain.mp3', title: 'Once Again' },
  { src: 'https://www.bensound.com/bensound-music/bensound-sweet.mp3', title: 'Sweet' },
];

function AudioList() {
  return (
    <section className="section ">
      <div className="container">
        <h1 className="title"> Audios Preview</h1>
        <div className="columns is-multiline">
          {audios.map((audio, index) => (
            <div className="column is-one-third" key={index}>
              <AudioPlayer src={audio.src} title={audio.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AudioList;
