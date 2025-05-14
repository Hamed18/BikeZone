import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const slides = [
  {
    title: "Mountain Bikes",
    image: "https://i.postimg.cc/Y9VfCPrj/9498254.jpg",
  },
  {
    title: "Bike Accessories",
    image: "https://i.postimg.cc/PJwbpMJy/9626219.jpg",
  },
];

const Offer = () => {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="py-10">
      <SectionTitle subtitle="Today's Deals" title="Unmissable Daily Offers" />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%]">
              <div className="relative w-screen h-[45vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
