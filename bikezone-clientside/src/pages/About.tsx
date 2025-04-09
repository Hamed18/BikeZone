import logo from "@/assets/logo.png";
import Marquee from "./home/Marquee";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Marquee/>
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border">
          {/* Header Section */}
          <div className="flex items-center justify-center gap-2 border border-black bg-gray-200 p-4 rounded-xl mb-8">
            <img src={logo} alt="Bike Zone Logo" className="w-10 h-10 md:w-16 md:h-16" />
            <div className="text-center">
              <h2 className="uppercase font-bold text-xl md:text-3xl">Bike Zone</h2>
              <p className="-mt-1 text-xs md:text-sm tracking-widest">Upgrade your ride</p>
            </div>
          </div>

          {/* About Section */}
          <h1 className="text-2xl font-bold text-center mb-6">About Us</h1>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Welcome to <span className="font-semibold">Bike Zone</span>, your go-to destination for all things biking.
            We're passionate about two wheels and dedicated to helping you find the perfect ride.
          </p>

          {/* Mission Section */}
          <h2 className="text-xl font-semibold mt-8 mb-2">Our Mission</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Our mission is to provide high-quality bikes and accessories that meet the needs of every rider — from
            beginners to professionals. We aim to promote a healthier, more eco-friendly lifestyle through cycling.
          </p>

          {/* Policy Section */}
          <h2 className="text-xl font-semibold mt-8 mb-2">Our Policy</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            We stand by the quality of our products and offer a no-hassle return policy within 30 days of purchase.
            Customer satisfaction is our top priority, and we ensure every transaction is secure and transparent.
          </p>

          {/* Contact Info Section */}
          <h2 className="text-xl font-semibold mt-8 mb-2">Contact Information</h2>
          <div className="text-gray-700 text-sm md:text-base leading-relaxed">
            <p>Email: <span className="font-medium">support@bikezone.com</span></p>
            <p>Phone: <span className="font-medium">+1 (800) 123-4567</span></p>
            <p>Location: <span className="font-medium">123 Cycle Street, Ride City, CA 90001</span></p>
            <p>Business Hours: <span className="font-medium">Mon - Sat: 9AM - 6PM</span></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
