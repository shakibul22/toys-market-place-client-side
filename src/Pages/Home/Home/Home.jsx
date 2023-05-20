import NavBar from "../../Shared/NavBar/NavBar";
import Title from "../../Title/Title";
import AllToys from "../AllToys/AllToys";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Catagory from "../ToysCatagory/Catagory";
import ToysCatagory from "../ToysCatagory/ToysCatagory";

const Home = () => {
    return (
        <div>
      <Title title="Home-Kid's Zone"></Title>

            <Banner></Banner>
            <Gallery></Gallery>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;