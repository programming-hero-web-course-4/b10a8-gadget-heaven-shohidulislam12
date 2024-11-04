
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
const SmartWaitch = () => {
    const allproducts=useLoaderData();
    const smartWatch=allproducts.filter(product=>product.category==="Smart Watches")
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {
            smartWatch.length>0?( 
                smartWatch?.map(product=><Cards key={product.product_id} product={product}></Cards>)
                ):(<p className="text-2xl md:col-span-3  flex-grow text-red-500 items-center">No items in this category</p>)
        }
               
                
                 
             </div>
    );
};

export default SmartWaitch;