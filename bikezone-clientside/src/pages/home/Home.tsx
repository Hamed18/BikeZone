import Banner from "./Banner";
import FeaturedProduct from "./Product/FeaturedProduct";
import Scroll from "./Scroll/Scroll";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedProduct />
      <Scroll />
    </div>
  );
};

export default Home;
