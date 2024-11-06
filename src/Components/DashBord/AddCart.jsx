import { useEffect, useState } from "react";
import { getAddCart, removeAddCart } from "../LocalStorage/LocalStorageCart";
import { TbSortDescendingNumbers } from "react-icons/tb";
import Carts from "./AddCarts";
import Modal from "./Modal";
import toast  from 'react-hot-toast';
const AddCarts = () => {
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const cartProduct=getAddCart()
        setCart(cartProduct)
        document.title = 'AddedCart| Gadget Heaven';
    },[])
    const handleRemove=(id)=>{
        removeAddCart(id)
        const cartProduct=getAddCart()
        setCart(cartProduct)
        

    }
   const handleSort=()=>{
    const sortCart=[...cart].sort((a,b)=>b.price-a.price)
         setCart(sortCart)
        return toast.success (" product add success to favorite")
   }

 const TotalCost=cart.reduce((sum,price)=>sum+price.price,0)
//code for modal
const [isOpen,setOpen]=useState(false)
const handleOpen=()=>{
    setOpen(true)
}
const handleClose=()=>{
    setOpen(false)
}
console.log(cart.length)
    return (
        <div className="container mx-auto my-8">
            <div className="flex justify-between flex-col md:flex-row items-center">
                <span><h2 className="font-bold">Cart</h2>
                <p className="font-bold">Total cost:{TotalCost}$</p></span>
                <span>
                <p onClick={handleSort}  className="btn btn-outline btn-info">Sort by Price <TbSortDescendingNumbers /></p>
                <p disabled={cart.length == 0} onClick={handleOpen} className="btn text-white bg-purple-600 "><button  >Purchase</button></p>
                </span>
            </div>
         <div className="p-5 border m-5 rounded-xl">
         {
            cart.map((item,i)=><Carts handleRemove={handleRemove} key={i} item={item} ></Carts>)
           }
         </div>

        {
            isOpen? <Modal onClose={handleClose} isOpen={isOpen} TotalCost={TotalCost}></Modal>:''
        }


       

 


        </div>

    );
};

export default AddCarts;
