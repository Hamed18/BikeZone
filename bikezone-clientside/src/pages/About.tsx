import logo from "@/assets/logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border">
          <div className="flex items-center justify-center gap-2 border border-black bg-gray-200 p-4 rounded-xl mb-8">
            <img src={logo} alt="Bike Zone Logo" className="w-10 h-10 md:w-16 md:h-16" />
            <div className="text-center">
              <h2 className="uppercase font-bold text-xl md:text-3xl">Bike Zone</h2>
              <p className="-mt-1 text-xs md:text-sm tracking-widest">Upgrade your ride</p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">About Us</h1>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Welcome to <span className="font-semibold">Bike Zone</span>, your trusted destination for premium bikes and accessories. 
            We are passionate about two wheels and committed to helping you upgrade your ride.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Whether you're a city commuter, trail explorer, or performance enthusiast, we offer a curated selection of bikes to match your lifestyle. 
            Our shop is built around quality, affordability, and a love for riding. We believe that everyone deserves a smooth, safe, and fun biking experience.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
            Our mission is to inspire and empower our customers to embrace a healthier and more sustainable mode of transportation. 
            With exceptional customer service and knowledgeable support, we’re here to get you rolling.
          </p>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Thank you for choosing <span className="font-semibold">Bike Zone</span>. Let’s ride toward a better future — one pedal at a time.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
