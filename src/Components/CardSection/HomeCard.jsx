import { NavLink } from "react-router-dom";

import './Homecard.css'
const HomeCard = () => {
    return (
        <div className=" my-10 md:mt-60 mt-28 h-auto ">
            <div><h2 className="text-2xl font-bold  my-10">Explore Cutting-Edge Gadgets</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-4 p-5">
                {/* these is for catagori */}
                 <div className="col-span-1 flex lg:p-10 p-2 flex-col rounded-2xl bg-white ">
                           <NavLink to="allProduct">All Product</NavLink>
                           <NavLink to="laptop">Laptops</NavLink>
                           <NavLink to="phones">Phones</NavLink>
                           <NavLink to="smartPhone">Smart Watches</NavLink>
                           <NavLink to="macbook">MacBook</NavLink>
                           <NavLink to="iphone">Iphone</NavLink>
                 </div>
                 {/* these is for cardas catagori */}
                 <div className="md:col-span-3 grid-cols-1">

                 </div>

            </div>
        </div>
    );
};

export default HomeCard;