
import { CiCircleRemove } from "react-icons/ci";

const Carts = ({item,handleRemove}) => {

    const {product_id,product_title,product_image,category,price,description,specifications,availability,rating}=item

    return (
        <div className="flex p-5 border gap-4 m-5 justify-between rounded-xl">
            <img className="w-[150px] h-[150px] rounded-xl" src={product_image} alt="" />
            <div className="text-left ">
                <h2 className="text-xl font-bold">{product_title}</h2>
                <p className="text-sm">{description}</p>
                <p className="text-sm font-bold" >Price: $ {price}</p>
            </div>
            <div onClick={()=>handleRemove(product_id)} className="text-red-600"><CiCircleRemove /></div>
        </div>
    );
};

export default Carts;