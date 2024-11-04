import { NavLink, Outlet } from "react-router-dom";

import './Homecard.css'

const HomeCard = () => {

    return (
        <div className=" my-10 md:mt-60 mt-28 h-auto ">
            <div><h2 className="text-2xl font-bold  my-10">Explore Cutting-Edge Gadgets</h2></div>
            <div className="grid grid-cols-2 gap-3 border border-2 rounded-xl md:grid-cols-4 lg:p-10 p-5">
                {/* these is for catagori */}
            
                 <div role="tablist" className="bg-white border border-2  col-span-1 rounded-2xl flex lg:p-10 p-2 flex-col ">
                           <NavLink role="tab" className="tab" to="/all">All Product</NavLink>
                           <NavLink  role="tab" className="tab" to="/laptops">Laptops</NavLink>
                           <NavLink role="tab" className="tab" to="/phones">Phones</NavLink>
                           <NavLink role="tab" className="tab" to="/smartwatch">Smart Watches</NavLink>
                           <NavLink role="tab" className="tab" to="/macbook" >MacBook</NavLink>
                           <NavLink  role="tab" className="tab" to="/iphones">Iphone</NavLink>
                           </div>
              
                 {/* these is for cardas catagori */}
                 <div className="md:col-span-3 gap-5 ">
                    <h3>here i show home element </h3>
                    <Outlet></Outlet>
                 </div>

            </div>
        </div>
    );
}; 

export default HomeCard