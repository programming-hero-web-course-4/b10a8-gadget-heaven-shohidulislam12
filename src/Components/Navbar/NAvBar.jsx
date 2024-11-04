import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Navbar.css'
import { useContext } from "react";
import { addToCard } from "../HomePage/Homepage";
const NAvBar = () => {
  const [productcart,setProductCart]=useContext(addToCard)
  console.log(productcart)
    return (
        <div className=" flex flex-col md:flex-row items-center justify-between container mx-auto text-white bg-purple-600 my-0 p-5    z-10">
   <div><a className=" text-xl">Gadget Heaven</a>
   
   </div>
   <div className="">
    <div className=" flex gap-5 px-1">
      <NavLink to="/">Home</NavLink>
      <NavLink>Statistics</NavLink>
      <NavLink>Dashboard</NavLink>
    </div>
  </div>
   <div className=" text-white flex gap-3">
    <a className=" relative" ><FaCartPlus /> <p className="absolute -top-3 -right-2 rounded-xl  text-xs text-black bg-white">{productcart.product_id}</p> </a>
    <a ><CiHeart /></a>
  </div>

  
</div>
    );
};

export default NAvBar;