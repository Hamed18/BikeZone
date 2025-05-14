import SectionBanner from "@/components/SectionBanner/SectionBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "How do I create an account on BikeZone?",
    answer:
      "Click on the 'Sign Up' button at the top right corner and fill in your personal and contact information. Once registered, you can book services, browse bikes, and manage orders.",
  },
  {
    question: "What services does BikeZone offer?",
    answer:
      "BikeZone offers a range of services including bike repairs, maintenance, spare parts delivery, emergency roadside assistance, and bike washing.",
  },
  {
    question: "How do I book a bike service?",
    answer:
      "After logging in, go to the 'Services' section, choose your desired service, select a time slot, and confirm your booking. You can also request home pick-up if available in your area.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept bKash, Nagad, Rocket, debit/credit cards, and cash on service. All online payments are processed through our secure partner ShurjoPay.",
  },
  {
    question: "Can I track my service request?",
    answer:
      "Yes, once a service is booked, you can track its progress from your dashboard under 'My Services'. We also send updates via SMS and email.",
  },
  {
    question: "Do you offer any warranty on services?",
    answer:
      "Yes, selected services come with a limited warranty. The warranty period and coverage details are mentioned at the time of booking.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via the 'Contact Us' page or call our helpline. We’re available 9 AM to 9 PM every day, including weekends.",
  },
];

const Faq = () => {
  return (
    <div>
      {" "}
      <SectionBanner heading="FAQ" subHeading="FAQ" />{" "}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="my-12 grid md:grid-cols-2" id="faq">
          <div className=" md:w-2/3 pr-14">
            <h2 className="text-3xl font-semibold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground ">
              Looking for answers ? Check if you find them here or{" "}
              <Link to="/contact">
                {" "}
                <span className="font-bold hover:underline">Contact Us</span>
              </Link>
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
};

export default Faq;
