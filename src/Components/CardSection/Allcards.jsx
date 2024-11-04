import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";



const Allcards = () => {
   const allproducts=useLoaderData()
console.log( typeof allproducts,allproducts)
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">

           {
            allproducts.map(product=><Cards key={product.product_id} product={product}></Cards>)
           }
            
        </div>
    );
};

export default Allcards;
