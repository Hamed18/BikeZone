import {
  FaBicycle,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Banner with Image */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Cycling adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome to Bike Zone
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Your ride, your freedom, our mission.
            </p>
            {/* <button className="bg-white text-green-700 hover:bg-green-50 font-semibold py-2 px-6 rounded-full transition duration-300">
              Explore Bikes
            </button> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-12">
          <SectionTitle subtitle="We Are For Social Cause" title="About Us" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1022&q=80"
                alt="Bike shop"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bike Zone is more than a shop — we are a destination for cycling
                enthusiasts. Whether you're a daily commuter, weekend adventurer, or
                eco-conscious rider, we bring quality and style to your ride.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2010, we've grown from a small local shop to a regional
                leader in cycling solutions, offering premium bikes, expert repairs,
                and community cycling events.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Values, Contact */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
            <FaBicycle className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3 text-center">Our Mission</h3>
            <p className="text-gray-700 text-center">
              To empower communities through safe, reliable, and affordable
              cycling solutions that promote health, sustainability, and joy.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
            <FaLeaf className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3 text-center">Our Values</h3>
            <ul className="text-gray-700 space-y-2 text-center">
              <li>• Sustainability</li>
              <li>• Innovation</li>
              <li>• Customer-Centricity</li>
              <li>• Inclusiveness</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition hover:-translate-y-1">
            <FaPhoneAlt className="text-yellow-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-xl mb-3 text-center">Contact Us</h3>
            <div className="text-gray-700 space-y-2 text-center">
              <p className="flex items-center justify-center">
                <FaEnvelope className="mr-2" /> support@bikezone.com
              </p>
              <p className="flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> +880 1234 567 890
              </p>
              <p className="mt-4 text-sm">
                123 Cycling Road, Bike City, BC 12345
              </p>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="relative bg-blue-600 text-white text-center px-6 py-12 rounded-2xl shadow-md mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Bike path pattern" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <blockquote className="italic text-xl md:text-2xl mb-6">
              "Life is like riding a bicycle. To keep your balance, you must keep
              moving."
            </blockquote>
            <p className="font-semibold text-lg">– Albert Einstein</p>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-2">Meet the Team</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-8"></div>
          <FaUsers className="text-4xl text-indigo-600 mx-auto mb-6" />
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Our team is made up of passionate riders, expert mechanics, and
            support staff who are here to help you get the most out of your
            biking experience. We ride, repair, and relate — because we care.
          </p>
          
          {/* Team Members Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { name: "Alex Morgan", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "Sarah Chen", role: "Head Mechanic", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Jamal Wright", role: "Sales Manager", img: "https://randomuser.me/api/portraits/men/75.jpg" },
              { name: "Maria Garcia", role: "Customer Service", img: "https://randomuser.me/api/portraits/women/63.jpg" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                />
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Cycling Journey?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Visit our shop or browse our online collection to find your perfect ride.
          </p>
          {/* <button className="bg-white text-green-700 hover:bg-green-50 font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md">
            Shop Now
          </button> */}
        </section>
      </main>
    </div>
  );
};

export default About;