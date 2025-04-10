import Banner from "./Banner";
import Marquee from "./Marquee";
import FeaturedProduct from "./Product/FeaturedProduct";
import Scroll from "./Scroll/Scroll";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedProduct />
      <Testimonials />
      <Scroll />
    </div>
  );
};

export default Home;
