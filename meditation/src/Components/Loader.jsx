/* eslint-disable no-unused-vars */
import React from 'react'

import {Audio} from 'react-loader-spinner'

function Loader() {
  return (
    <>
    <div className='loader-wrapper'>
        <Audio height="100" width="100" color='green' ariaLabel='Loading'/>
    </div>
    </>
  )
}

export default Loader