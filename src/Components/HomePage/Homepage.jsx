import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NAvBar from "../Navbar/NAvBar";
import { createContext, useState } from "react";


export const addToCard=createContext([])

const Homepage = () => {
    const [productcart,setProductCart]=useState([])

    return (
     <div>

        <addToCard.Provider value={[productcart,setProductCart]}>
        <NAvBar></NAvBar>
         <Outlet/>
      <Footer></Footer>
        </addToCard.Provider>
     </div>
    );
};

export default Homepage;
