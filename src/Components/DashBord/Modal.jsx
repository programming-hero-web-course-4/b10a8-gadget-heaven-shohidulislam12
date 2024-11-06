import { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { getAddCart } from "../LocalStorage/LocalStorageCart";
import toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Modal = ({isOpen,TotalCost,onClose}) => {
  const [cart,setCart]=useState([])
  useEffect(()=>{
    const cartProduct=getAddCart()
    setCart(cartProduct)

},[])
const navigate = useNavigate();
  const handlePurchas=()=>{
    const cartProducts=[];
localStorage.setItem('addCart',JSON.stringify(cartProducts))
    setCart(cartProducts)
    navigate('/')
    onClose()

    return toast.success (" Product SucessFully Purcess ")
}



    return (
<>
<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="modal-box bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                <MdVerified className="text-5xl text-green-500 font-bold" />
                <p className="py-4 text-2xl">Payment Successfully</p>
                <p>Thanks for purchasing.</p>
                <p>Total: {TotalCost}</p>
                <div className="modal-action w-full mt-4">
                    <p onClick={handlePurchas}  className="btn w-full">Close!</p>
                </div>
            </div>
        </div>



</>
    );
};

export default Modal;
