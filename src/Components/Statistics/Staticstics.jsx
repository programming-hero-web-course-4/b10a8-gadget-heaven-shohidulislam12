import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const Staticstics = () => {
    const allproducts=useLoaderData(); 
    const location = useLocation()
    useEffect(() => {
        document.title = 'Statics| Gadget Heaven';

      }, []);
    
    return (
        <div>
                   <div className="bg-purple-600 container mx-auto md:p-20 h-[200px] p-3 text-white">
                <h2 className="text-xl ">Statistics</h2>
                <p className="text-sm">Statistics is a crucial field of study that deals with the collection, analysis, interpretation, presentation, and organization of data. It plays a significant role in various disciplines, including business, healthcare, social sciences, and government. By employing statistical methods, researchers and analysts can transform raw data into meaningful information, aiding in decision-making processes.</p>
             
            </div>
        <div className="mx-auto my-10 border bg-white rounded-xl">
        <BarChart width={1200} height={300} data={allproducts}>
    <XAxis dataKey="product_title" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="price" fill="#9538E2" barSize={30} />
  </BarChart>

        </div>
        </div>
    );
};

export default Staticstics;
