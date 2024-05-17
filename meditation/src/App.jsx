/* eslint-disable no-unused-vars */

import React from "react"
import HomePage from "./Pages/HomePage"
import Contact from "./Pages/Contact"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import AboutUs from "./Pages/AboutUs"
import Meditation from "./Pages/Meditation"
import NotFound from "./Components/NotFound"




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
    path:"/AboutUs",
    element:<AboutUs/>,
    errorElement:<NotFound/>
  },
  {
    path:'/Meditation',
    element:<Meditation/>,
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
