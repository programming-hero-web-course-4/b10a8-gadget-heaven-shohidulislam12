import { useEffect, useState } from "react";
import { getAddCart, removeAddCart } from "../LocalStorage/LocalStorageCart";
import { TbSortDescendingNumbers } from "react-icons/tb";
import Carts from "./AddCarts";

const AddCarts = () => {
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const cartProduct=getAddCart()
        setCart(cartProduct)
    },[])
    const handleRemove=(id)=>{
        removeAddCart(id)
        const cartProduct=getAddCart()
        setCart(cartProduct)

    }
   const handleSort=()=>{
    const sortCart=[...cart].sort((a,b)=>b.price-a.price)
         setCart(sortCart)
   }
 const TotalCost=cart.reduce((sum,price)=>sum+price.price,0)
    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between items-center">
                <h2 className="font-bold">Cart</h2>
                <p className="font-bold">Total cost:{TotalCost}</p>
                <p onClick={handleSort}  className="btn btn-outline btn-info">Sort by Price <TbSortDescendingNumbers /></p>
                <p className="btn text-white bg-purple-600 "><button>Purchase</button></p>
            </div>
         <div className="p-5 border m-5 rounded-xl">
         {
            cart.map((item,i)=><Carts handleRemove={handleRemove} key={i} item={item} ></Carts>)
           }
         </div>
        </div>
    );
};

export default AddCarts;
