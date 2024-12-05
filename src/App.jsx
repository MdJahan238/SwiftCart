import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './component/Home/Home';
import About from './component/About/About';
import './App.css'
import Contact from './component/Contact/Contact';
import Shop from './component/Shop/Shop';


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
        {
          path:"/product",
          element:<Shop></Shop>,
        },
        {
          path:"/contact",
          element:<Contact></Contact>,
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
