import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Bike, CreditCard, CheckCircle, MapPin } from "lucide-react";

const features = [
  {
    title: "Explore Bikes & Accessories",
    desc: "Browse our collection of bikes, helmets, parts, and riding gear tailored to every rider.",
    icon: Bike,
  },
  {
    title: "Secure Payment Options",
    desc: "Pay confidently via bKash, Nagad, cards, or ShurjoPay—your details stay protected.",
    icon: CreditCard,
  },
  {
    title: "Order & Service Confirmation",
    desc: "Receive instant confirmation for product purchases or booked services via email and SMS.",
    icon: CheckCircle,
  },
  {
    title: "Track Delivery or Service",
    desc: "Get real-time updates and location tracking for your orders or on-site service.",
    icon: MapPin,
  },
];

const HowItWorks = () => {
  return (
    <section>
      <SectionTitle subtitle="How It Works" title="Making Your Ride Easy" />

      <div className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-4">
              <div className="mx-auto mb-4 w-20 h-20 rounded-full shadow-md flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="uppercase text-primary text-sm tracking-widest font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
