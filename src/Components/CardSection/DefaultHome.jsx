import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";


const DefaultHome = () => {
    const allCards=useLoaderData()
  const sliceCards=allCards.slice(0,6)
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
           {
            sliceCards.map(card=><Cards key={card.product_id} product={card}></Cards>)
           }
        </div>
    );
};

export default DefaultHome;