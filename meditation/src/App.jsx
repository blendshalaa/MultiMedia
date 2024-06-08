/* eslint-disable no-unused-vars */

import React from "react"
import HomePage from "./Pages/HomePage"
import Contact from "./Pages/Contact"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import NotFound from "./Components/NotFound"
import Loader from "./Components/Loader"
import Sounds from "./Pages/Sounds"
import Guides from "./Pages/Guides"
import ParallaxBackground from "./pixifolder/ParallaxBackground"





const router=createBrowserRouter([

  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/Contact",
    element:<Contact/>,
    errorElement:<NotFound/>

  },
  {
    path:"/Sounds",
    element:<Sounds/>,
    errorElement:<NotFound/>
  },
  {
    path:"/Guides",
    element:<Guides/>,
    errorElement:<NotFound/>
  }
 

])

function App() {

 

  return (
    <>
   
      <RouterProvider router={router}>
     
      <HomePage/>
     
      </RouterProvider>

   
   
    </>
  )
}

export default App
