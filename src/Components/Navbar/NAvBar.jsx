import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { useEffect, useState } from "react";
import { getAddCart } from "../LocalStorage/LocalStorageCart";
import { getFavproduct } from "../LocalStorage/LocalFav";
import { useLocation } from 'react-router-dom';

const NAvBar = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const [cart,setCart]=useState([])
  useEffect(()=>{
      const cartProduct=getAddCart()
      setCart(cartProduct)
  },[])

  const [wish,setWish]=useState([])
  useEffect(()=>{
      const wishProduct=getFavproduct()
      setWish(wishProduct)
    
  },[])
    return (
        <div style={ {
          backgroundColor: currentPath === '/' ? '#9538E2 ' : currentPath === '/helpcenter' ? '#9538E2 ' : 'white',
         color: currentPath === '/' ? 'white ' : currentPath === '/statistics' ? 'black' : 'black',
        }} className=" flex flex-col md:flex-row items-center justify-between container mx-auto my-0 p-5    z-10">
   <div><a className=" text-xl">Gadget Heaven</a>
   
   </div>
   <div className="">
    <div className=" flex gap-5 px-1">
      <NavLink  to="/"  className={({ isActive }) =>isActive ? "text-yellow-300 font-bold" : ""}>Home</NavLink>
      <NavLink to="/statistics" className={({ isActive }) =>isActive ? "text-yellow-300 font-bold" : ""}>Statistics</NavLink>
      <NavLink to="/dashBord" className={({ isActive }) =>isActive ? "text-yellow-300 font-bold" : ""}>Dashboard</NavLink>
      <NavLink to="/helpcenter" className={({ isActive }) =>isActive ? "text-yellow-300 font-bold" : ""}>Help Center</NavLink>
    </div>
  </div>
   <div className=" flex gap-3">
    <a className=" relative" ><FaCartPlus className=" border rounded-full text-3xl" /> <p className="absolute -top-3 -right-2 p-1 rounded-full  text-xs text-black bg-white">{cart.length}</p> </a>
    <a  className="relative"><CiHeart  className="border rounded-full text-3xl" /> <p className="absolute z-44 -top-4  -right-2 p-1 rounded-full  text-xs text-black bg-white">{wish.length}</p></a>
  </div>

  
</div>
    );
};

export default NAvBar;