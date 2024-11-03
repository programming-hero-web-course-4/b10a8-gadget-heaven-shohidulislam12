import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NAvBar from "../Navbar/NAvBar";


const Homepage = () => {
    return (
     <div>
         <NAvBar></NAvBar>
         <Outlet/>
      <Footer></Footer>
     </div>
    );
};

export default Homepage;
