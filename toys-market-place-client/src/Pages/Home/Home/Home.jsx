import Title from "../../Title/Title";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import LatestToy from "../LatestToy/LatestToy";
import ReviewPage from "../ReviewPage/ReviewPage";
import Category from "../ToysCatagory/Catagory";


const Home = () => {
    return (
        <div>
            <Title title="Home-Kid's Zone"></Title>

            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <LatestToy/>
            <ReviewPage></ReviewPage>
        </div>
    );
};

export default Home;