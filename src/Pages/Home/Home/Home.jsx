import Title from "../../Title/Title";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../ToysCatagory/Catagory";


const Home = () => {
    return (
        <div>
      <Title title="Home-Kid's Zone"></Title>

            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            {/* <AllToys></AllToys> */}
        </div>
    );
};

export default Home;