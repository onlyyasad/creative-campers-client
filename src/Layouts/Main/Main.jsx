import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer";
import NavBar from "../../Pages/Shared/NavBar";

AOS.init();

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
