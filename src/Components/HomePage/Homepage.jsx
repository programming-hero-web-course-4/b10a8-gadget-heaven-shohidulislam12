import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NAvBar from "../Navbar/NAvBar";
import { Toaster } from 'react-hot-toast';



const Homepage = () => {
  

    return (
     <div>
 <Toaster />
      
        <NAvBar></NAvBar>
         <Outlet/>
      <Footer></Footer>
      
     </div>
    );
};

export default Homepage;
