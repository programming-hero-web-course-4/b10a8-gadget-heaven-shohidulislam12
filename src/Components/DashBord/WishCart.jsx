import { CiCircleRemove } from "react-icons/ci";
import { addCartProduct } from "../LocalStorage/LocalStorageCart";

const WishCart = ({item,handleRemoveWish}) => {
    const {product_id,product_title,product_image,category,price,description,specifications,availability,rating}=item
    const handleAddCarts=(selectCard)=>{
        addCartProduct(selectCard)
     
        
        }
    return (
        <div className="flex md:flex-row items-center flex-col p-5 border gap-4 m-5 justify-between rounded-xl">
            <img className="w-[150px] h-[150px] rounded-xl" src={product_image} alt="" />
            <div className="text-left ">
                <h2 className="text-xl font-bold">{product_title}</h2>
                <p className="text-sm">{description}</p>
                <p className="text-sm font-bold" >Price: $ {price}</p>
                <button onClick={()=>handleAddCarts(item)}  className="btn rounded-2xl bg-purple-600 my-5 text-white">Add to Card</button>
            </div>
            <div onClick={()=>handleRemoveWish(product_id)} className="text-red-600"><CiCircleRemove /></div>
        </div>
    );
};


export default WishCart;