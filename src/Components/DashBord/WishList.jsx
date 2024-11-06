import { useEffect, useState } from "react";
import { addFav, getFavproduct, removeFavorite } from "../LocalStorage/LocalFav";
import toast  from 'react-hot-toast';
import WishCart from "./WishCart";
import { TbSortDescendingNumbers } from "react-icons/tb";
const WishList = () => {
    const [wish,setWish]=useState([])
    useEffect(()=>{
        const wishProduct=getFavproduct()
        setWish(wishProduct)
        console.log(wish)
        document.title = 'WishList| Gadget Heaven';

        return () => {
          document.title = 'Gadget Heaven'; 
        };
    },[])

    const handleRemoveWish=(id)=>{
        removeFavorite(id)
        const wishProduct=getFavproduct()
        setWish(wishProduct)
    }
   const handleSort=()=>{
    const sortCart=[...wish].sort((a,b)=>b.price-a.price)
         setWish(sortCart)
        return toast.success (" product add success to favorite")
   }
    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between items-center">
                <h2 className="font-bold">WishList</h2>
                <p onClick={handleSort}  className="btn btn-outline btn-info">Sort by Price <TbSortDescendingNumbers /></p>          
            </div>
         <div className="p-5 border m-5 rounded-xl">
         {
            wish.map((item,i)=><WishCart handleRemoveWish={handleRemoveWish} key={i} item={item} ></WishCart>)
           }
         </div>
        </div>
    );
};


export default WishList;