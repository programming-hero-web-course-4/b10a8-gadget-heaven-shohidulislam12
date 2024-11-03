import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Footer from './Components/Footer/Footer.jsx';
import Homepage from './Components/HomePage/Homepage.jsx';
import Banner from './Components/Bannar/Banner.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Homepage></Homepage>,
    children:[
      {
        path: "/",
      element:<Banner></Banner>,
      children:[
        {
          path: "/allProduct",
        element: <h2>all product </h2>
        }
      ]
      },
     
    ]
  },

  
  {
    path: "/",
  element:<Footer></Footer>
  }
    

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
