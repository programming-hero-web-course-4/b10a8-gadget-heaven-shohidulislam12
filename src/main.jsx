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
import Allcards from './Components/CardSection/Allcards.jsx';
import Laptops from './Components/CardSection/Laptops.jsx';
import Phones from './Components/CardSection/Phones.jsx';
import SmartWaitch from './Components/CardSection/SmartWaitch.jsx';
import Macbook from './Components/CardSection/Macbook.jsx';
import Iphones from './Components/CardSection/Iphones.jsx';

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
        path: "/all",
      element:<Allcards />,
      loader:()=>fetch('/allproduct.json'),
    },
        {
        path: "/laptops",
      element:<Laptops />,
    },
        {
        path: "/phones",
      element:<Phones />,
    },
        {
        path: "/smartwatch",
      element:<SmartWaitch />,
    },
        {
        path: "/macbook",
      element:<Macbook />,
    },
        {
        path: "/iphones",
      element:<Iphones />,
     
      
    },
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
