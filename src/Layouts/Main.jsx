import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className="bg-cover bg-center" >
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;