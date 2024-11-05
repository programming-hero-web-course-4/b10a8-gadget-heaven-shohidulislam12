import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import Cards from "../CardSection/Cards";
import { addCartProduct } from "../LocalStorage/LocalStorageCart";
import { addFav } from "../LocalStorage/LocalFav";




const Details = () => {
  const allproducts=useLoaderData(); 
  const {id}=useParams()

   const selectCard=allproducts.find(cards=>cards.product_id===parseInt(id))
   const {product_id,product_title,product_image,category,price,description,specifications,availability,rating}=selectCard;
   const handleAddCart=(selectCard)=>{
  addCartProduct(selectCard)
  
  }
  const handleFavorite=(selectCard)=>{
    addFav(selectCard)
  }
    return (
        <div className="relative mb-96">
            <div className="bg-purple-600 container mx-auto md:p-20 h-[400px] p-3 text-white">
                <h2 className="text-xl ">Product Details{product_title}</h2>
                <p className="text-sm">{description}</p>
            </div>
            {/* card */}
            <div className="card top-52 left-32 absolute  border border-gray-300 p-2 flex flex-col md:flex-row bg-base-100 md:w-3/4 mx-auto ">
  <figure className="md:w-1/2 w-full">
    <img className="rounded-xl h-full w-full"
      src={product_image}
      alt={product_title} />
  </figure>
  <div className="card-body bg-base-100 md:w-1/2 w-full text-left">
    <h2 className="card-title">{product_title}</h2>
    <p>${price}</p>
    <p >{availability?<button className="btn btn-xs btn-info">in stack</button>:<button className="btn btn-xs btn-info">out of stack</button>}</p>
    
    <p className="text-sm">{description}</p>
    <h2 >Specification:</h2>
    <ul className="text-sm">
        {
            specifications.map((specific,index)=><li key={index}>{index+1}.{specific}</li>)
        }
    </ul>
    <p>Rating ⭐ </p>
  
   
  
    <p><div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-6"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div> {rating}

</p>
<div className="flex gap-2  w-auto items-center">
<p className="flex items-center "><button onClick={()=>handleAddCart(selectCard)}  className="flex items-center gap-3 bg-purple-600 btn">Add to Cart  <a ><FaCartPlus /></a></button></p>

<p>
<button onClick={()=>handleFavorite(selectCard)} className="rounded-full border p-3 btn "><a ><CiHeart className="text-2xl"  /></a></button>
</p>
</div>
  </div>


</div>

        </div>
    );
};

export default Details;