
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
const Laptops = () => {
    const allproducts=useLoaderData();
    const laptop=allproducts.filter(product=>product.category==="Laptops")
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {
            laptop.length>0?( 
               laptop?.map(product=><Cards key={product.product_id} product={product}></Cards>)
                ):(<p className="text-2xl md:col-span-3  flex-grow text-red-500 items-center">No items in this category</p>)
        }
               
                
                 
             </div>
    );
};

export default Laptops;
