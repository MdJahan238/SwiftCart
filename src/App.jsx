import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './component/Home/Home';
import About from './component/About/About';
import './App.css'
import Product from './component/Product/Product';
import Contact from './component/Contact/Contact';
import InfoCardBanner from './component/Home/InfoCardBanner/InfoCardBanner';
import BannerSlider from './component/Home/BannerSlider/BannerSlider';


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
          element:<Product></Product>,
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
