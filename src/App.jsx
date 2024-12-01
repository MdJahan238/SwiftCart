<<<<<<< HEAD
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './component/Home/Home';
import About from './component/About/About';


=======

import './App.css'
>>>>>>> fff2100d599bc1bcf665ffc72ab6c64f75df1c27

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
<<<<<<< HEAD
  <div>
 <RouterProvider router={router}></RouterProvider>
  </div>
)
 
=======
    <div>
     
    </div>
  )
>>>>>>> fff2100d599bc1bcf665ffc72ab6c64f75df1c27
}

export default App
