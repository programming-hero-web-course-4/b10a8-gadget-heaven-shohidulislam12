import { useLoaderData } from "react-router-dom";
import HomeCard from "../CardSection/HomeCard";


const Banner = () => {


    return (
        <div className="   container mx-auto">
        <div className=" relative bg-[#9538E2]  md:h-[500px] h-[600px]  text-center mb-3 ">
          <div className="w-3/4 mb-20 mx-auto text-white">
            <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn bg-white">Shop Now</button>
          </div>
        </div>

        <div className="w-1/2 border p-2 absolute md:top-96 md:left-64 -bottom-80 left-28 rounded-xl mx-auto">
        <img className="w-full h-full rounded-xl " src="/banner.jpg" alt="" />

        </div>
        <HomeCard ></HomeCard>
      </div>
    );
};

export default Banner;
