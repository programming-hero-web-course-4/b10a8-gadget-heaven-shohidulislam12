import { useState } from "react";
import AddCart from "./AddCart";
import WishList from "./WishList";
import AddCarts from "./AddCart";


const DashBord = () => {
     const [button,setButton]=useState(true)
    return (
        <div>
        <div className="bg-purple-600 container mx-auto md:p-20 h-[400px] p-3 text-white">
                <h2 className="text-xl ">Dashboard</h2>
                <p className="text-sm">Discover High-Performance Gaming Laptops: Power & Precision in Every Click!"</p>
                <div className="my-5">
                    <button className={button?`btn  bg-white text-purple-600`:`btn btn-outline text-white`} onClick={()=>setButton(true)}>Cart</button>
                    <button className={!button?`btn  bg-white text-purple-600`:`btn btn-outline text-white`} onClick={()=>setButton(false)}>Wishlist</button>
                   
                </div>
            </div>
            {
                        button?<AddCarts></AddCarts>:<WishList></WishList>
                    }
        </div>
    );
};

export default DashBord;