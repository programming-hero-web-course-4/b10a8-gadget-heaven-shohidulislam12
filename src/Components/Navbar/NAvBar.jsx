import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const NAvBar = () => {
    return (
        <div className=" flex flex-col md:flex-row items-center justify-between container mx-auto text-white bg-purple-600 my-0 p-5    z-10">
   <div><a className=" text-xl">Gadget Heaven</a>
   
   </div>
   <div className="">
    <div className=" flex gap-5 px-1">
      <NavLink>Home</NavLink>
      <NavLink>Statistics</NavLink>
      <NavLink>Dashboard</NavLink>
    </div>
  </div>
   <div className=" text-white flex gap-3">
    <a ><FaCartPlus /></a>
    <a ><CiHeart /></a>
  </div>

  
</div>
    );
};

export default NAvBar;