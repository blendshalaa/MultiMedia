/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from 'react-lottie';

import { DotLottiePlayer } from '@dotlottie/react-player';

function LottieAnimation() {
    return (
        <DotLottiePlayer
          src="https://lottie.host/239fad35-ad6b-41f5-8a65-cf20088c6c12/82dGtAbqB5.json"
          background="transparent"
          speed={1}
          style={{ width: '500px', height: '500px' }}
          loop
          autoplay
        />
      );
}

export default LottieAnimation