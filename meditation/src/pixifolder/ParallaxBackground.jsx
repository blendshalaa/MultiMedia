/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import * as PIXI from 'pixi.js';

const ParallaxBackground = () => {
  const pixiContainerRef = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight, transparent: true });
    pixiContainerRef.current.appendChild(app.view);

    const backgroundTexture = PIXI.Texture.from('background.jpg');
    const background = new PIXI.Sprite(backgroundTexture);
    background.position.set(0, 0);
    app.stage.addChild(background);

    // Add more layers and sprites for parallax effect

    const handleScroll = () => {
      const scrollY = window.scrollY;
      background.y = -scrollY * 0.2; // Adjust the speed for parallax effect
      // Update positions of other layers accordingly
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      app.destroy(true);
    };
  }, []);

  return <div ref={pixiContainerRef} />;
};

export default ParallaxBackground;
