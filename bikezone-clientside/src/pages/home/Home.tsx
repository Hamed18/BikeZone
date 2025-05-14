import AboutSection from "../AboutSection";
import Banner from "./Banner";
import Categories from "./Categories";
import HowItWorks from "./HowItWorks";
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import FeaturedProduct from "./Product/FeaturedProduct";
import Scroll from "./Scroll/Scroll";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedProduct />
      <Offer />
      <Categories />
      <HowItWorks />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Scroll />
    </div>
  );
};

export default Home;
