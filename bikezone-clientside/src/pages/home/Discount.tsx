import {
  FaTags,
  FaShippingFast,
  FaRegSmile,
  FaPercentage,
  FaRegClock,
} from "react-icons/fa";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const Discount = () => {
  return (
    <div className="bg-white text-gray-800"> 
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Current Promotions */}
        <section className="mb-12 text-center">
          <SectionTitle subtitle="Stock Limited" title="Special Offers" />
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Take advantage of our limited-time offers on a range of bikes and
            accessories. Whether you're upgrading your gear or starting fresh,
            now’s the time to save.
          </p>
        </section>

        {/* Discount Cards */}
        <section className="grid md:grid-cols-3 gap-8 mb-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaTags className="text-pink-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Up to 30% Off</h3>
            <p>Selected bikes and gear for this season only.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaShippingFast className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Free Shipping</h3>
            <p>On all orders over $100, delivered to your doorstep.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaRegSmile className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Satisfaction Guarantee</h3>
            <p>Love it or return it — hassle-free returns within 30 days.</p>
          </div>
        </section>

        {/* Bonus Offers */}
        <section className="grid md:grid-cols-2 gap-8 mb-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaPercentage className="text-indigo-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Bundle Deals</h3>
            <p>Save more when you buy sets — helmets, lights, and locks included.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition">
            <FaRegClock className="text-red-500 text-4xl mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Flash Sales</h3>
            <p>Limited-time offers every weekend. Stay tuned!</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Discount;
