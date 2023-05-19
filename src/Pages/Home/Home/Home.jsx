import NavBar from "../../Shared/NavBar/NavBar";
import AllToys from "../AllToys/AllToys";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Catagory from "../ToysCatagory/Catagory";
import ToysCatagory from "../ToysCatagory/ToysCatagory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;