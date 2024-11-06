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
import DefaultHome from './Components/CardSection/DefaultHome.jsx';
import ErrorPAge from './Components/ErrorPage/ErrorPAge.jsx';
import Details from './Components/Details/Details.jsx';
import DashBord from './Components/DashBord/DashBord.jsx';
import Staticstics from './Components/Statistics/Staticstics.jsx';
import HelpCenter from './Components/HelpCenter/HelpCenter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Homepage></Homepage>,
    errorElement:<ErrorPAge></ErrorPAge>,
    children:[
      {
        path: "/",
      element:<Banner></Banner>,
      children:[
        {
          path: "/",
        element:<DefaultHome />,
        loader:()=>fetch('../allproduct.json'),
      },
        {
        path: "/all",
      element:<Allcards />,
      loader:()=>fetch('../allproduct.json'),
    },
        {
        path: "/laptops",
      element:<Laptops />,
      loader:()=>fetch('../allproduct.json'),
    },
        {
        path: "/phones",
      element:<Phones />,
      loader:()=>fetch('../allproduct.json'),
    },
        {
        path: "/smartwatch",
      element:<SmartWaitch />,
      loader:()=>fetch('../allproduct.json'),
    },
        {
        path: "/macbook",
      element:<Macbook />,
      loader:()=>fetch('../allproduct.json'),
    },
        {
        path: "/iphones",
      element:<Iphones />,
      loader:()=>fetch('../allproduct.json'),
     
      
    },
      ]
      },
{
    path: "/details/:id",
  element:<Details></Details>,
  loader:()=>fetch('../allproduct.json'),
  },
{
    path: "/dashBord",
  element:<DashBord></DashBord>,

  },
{
    path: "/helpcenter",
  element:<HelpCenter></HelpCenter>

  },
{
    path: "/statistics",
  element:<Staticstics></Staticstics>,
  loader:()=>fetch('../allproduct.json'),

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
