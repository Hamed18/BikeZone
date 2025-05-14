import SectionBanner from "@/components/SectionBanner/SectionBanner";
import {
  FaBicycle,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

const About = () => {
  return (
    <div className=" text-gray-800">
      <SectionBanner heading="About Us" subHeading="About Us" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="bg-background text-foreground  py-12">
          <div className=" mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-semibold uppercase">
                A Brief History
              </h2>
            </div>
            <div className="md:w-2/3 space-y-4 text-sm md:text-base text-muted-foreground">
              <p>
                Ecomart began with a mission to make everyday shopping smarter,
                simpler, and more sustainable. From fresh produce to everyday
                essentials, we bring quality products directly to your doorstep.
              </p>
              <p>
                Today, Ecomart serves thousands of happy customers across the
                country with a commitment to value, variety, and speed. We’re
                redefining convenience in online shopping — one order at a time.
              </p>
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Bike Zone is more than a shop — we are a destination for cycling
            enthusiasts. Whether you’re a daily commuter, weekend adventurer, or
            eco-conscious rider, we bring quality and style to your ride.
          </p>
        </section>

        {/* Mission, Values, Contact */}
        <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaBicycle className="text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Our Mission</h3>
            <p>
              To empower communities through safe, reliable, and affordable
              cycling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaLeaf className=" text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Our Values</h3>
            <p>
              Sustainability, Innovation, Customer-Centricity, and
              Inclusiveness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaPhoneAlt className=" text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-xl mb-2">Contact Info</h3>
            <p className="mb-1">
              <FaEnvelope className="inline mr-2" /> support@bikezone.com
            </p>
            <p>
              <FaPhoneAlt className="inline mr-2" /> +880 1234 567 890
            </p>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
          <FaUsers className="text-4xl mx-auto mb-4" />
          <p className="text-gray-700 max-w-xl mx-auto">
            Our team is made up of passionate riders, expert mechanics, and
            support staff who are here to help you get the most out of your
            biking experience. We ride, repair, and relate — because we care.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
