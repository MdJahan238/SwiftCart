import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './component/Home/Home';
import About from './component/About/About';
import './App.css'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/about",
          element:<About></About>,
        },
      ],
    },
  ]);

  return (

  <div>
 <RouterProvider router={router}></RouterProvider>
  </div>
)
 

}

export default App
