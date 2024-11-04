

const Cards = ({product}) => {
    const {product_id,product_title,product_image,category,price,description,specifications,availability,rating}=product;
 
    return (

        <div className="card border  ">
        <figure className="p-2">
          <img
            src={product_image}
            className="rounded-xl w-full h-[150px]" />
        </figure>
        <div className=" text-left flex flex-col ">
          <h2 className="">{product_title}</h2>
          <p> price : {price}$</p>
          <div className="card-actions ">
            <button className=" text-purple-600 bg-white rounded-2xl border text-sm p-2">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Cards;