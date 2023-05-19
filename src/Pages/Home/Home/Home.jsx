import NavBar from "../../Shared/NavBar/NavBar";
import AllToys from "../AllToys/AllToys";
import Banner from "../Banner/Banner";
import ToysCatagory from "../ToysCatagory/ToysCatagory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ToysCatagory></ToysCatagory>
            <AllToys></AllToys>
        </div>
    );
};

export default Home;