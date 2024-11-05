import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Navbar.css'
import { useEffect, useState } from "react";
import { getAddCart } from "../LocalStorage/LocalStorageCart";
import { getFavproduct } from "../LocalStorage/LocalFav";


const NAvBar = () => {

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
        <div className=" flex flex-col md:flex-row items-center justify-between container mx-auto text-white bg-purple-600 my-0 p-5    z-10">
   <div><a className=" text-xl">Gadget Heaven</a>
   
   </div>
   <div className="">
    <div className=" flex gap-5 px-1">
      <NavLink to="/">Home</NavLink>
      <NavLink >Statistics</NavLink>
      <NavLink to="dashBord">Dashboard</NavLink>
    </div>
  </div>
   <div className=" text-white flex gap-3">
    <a className=" relative" ><FaCartPlus /> <p className="absolute -top-3 -right-2 rounded-xl  text-xs text-black bg-white">{cart.length}</p> </a>
    <a  className="relative"><CiHeart  className="text-2xl " /> <p className="absolute z-44 -top-3  -right-2 rounded-xl  text-xs text-black bg-white">{wish.length}</p></a>
  </div>

  
</div>
    );
};

export default NAvBar;