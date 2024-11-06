import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import {  Bar, XAxis, YAxis, Tooltip, CartesianGrid, ComposedChart, Legend, Area, Line, Scatter } from 'recharts';
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

<ComposedChart
      width={1200} height={300} data={allproducts}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="product_title" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone"  fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="price" barSize={20} fill="#9538E2" />
      <Line type="monotone"  stroke="#ff7300" />
      <Scatter dataKey="rating" fill="red" />
    </ComposedChart>







        </div>
        </div>
    );
};

export default Staticstics;
