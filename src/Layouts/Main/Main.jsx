import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/Shared/NavBar";
import Footer from "../../Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="font-poppins">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;