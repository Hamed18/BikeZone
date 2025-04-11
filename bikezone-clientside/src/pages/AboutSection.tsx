import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex gap-6">
          <img
            src="https://i.ibb.co.com/hxNcCMP9/man-choosed-motorcycles-moto-shop-guy-black-jacket-man-helmet.jpg"
            alt="Medical Lab"
            className="w-1/2 rounded-xl object-cover h-[300px] md:h-[500px]"
          />
          <img
            src="https://i.ibb.co.com/zV4Hrw2v/old-motorcycle-with-helmet-outdoors.jpg"
            alt="Medical Device"
            className="w-1/2 rounded-xl object-cover h-[300px] md:h-[500px] mt-14"
          />
        </div>

        <div>
          <p className="text-sm text-[#E81938] font-semibold uppercase tracking-wide mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Driven by Passion, Powered by Performance
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Velocity Bikes, we believe that cycling is more than just a mode
            of transport — it's a lifestyle. From high-performance road bikes to
            rugged mountain rides and urban commuters, our mission is to deliver
            quality, reliability, and a smooth ride every time.
            <br />
            <br />
            With expert service, premium gear, and a community-first approach,
            we're here to keep you rolling — wherever the road takes you.
          </p>
          <Link to="/about">
            <Button>Learn More About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
