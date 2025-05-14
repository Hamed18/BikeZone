import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

interface BannerProps {
  banners?: {
    id: number;
    imageUrl: string;
    altText: string;
    title?: string;
    subtitle?: string;
    ctaText?: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ banners = defaultBanners }) => {
  const swiperParams: SwiperOptions = {
    modules: [Navigation, Autoplay, EffectFade],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    speed: 1000,
    navigation: true,
    pagination: {
      clickable: true,
    },
  };

  return (
    <div className="relative w-full">
      <Swiper {...swiperParams} className="h-[50vh] md:h-[70vh] lg:h-[90vh]">
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-black/20 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl mx-auto drop-shadow-2xl space-y-4">
                <p className="text-3xl md:text-5xl font-extrabold leading-tight animate-fadeIn">
                  {banner.title}
                </p>
                <p className="text-sm text-white md:text-2xl leading-relaxed animate-fadeIn delay-100 glow-text-sm">
                  {banner.subtitle}
                </p>
                {banner.ctaText && (
                  <Link
                    to={`/products`}
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out animate-fadeIn delay-200"
                  >
                    {banner.ctaText}
                  </Link>
                )}
              </div>
            </div>
            <img
              src={banner.imageUrl}
              alt={banner.altText}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const defaultBanners = [
  {
    id: 1,
    imageUrl:
      "https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/240034_wm-bmw-banner-june23-hqn.jpg",
    altText: "BMW Motorcycle Banner 1",
    title: "Experience the Ultimate Ride",
    subtitle:
      "Discover our premium BMW motorcycle collection with unmatched performance",
    ctaText: "Explore Now",
  },
  {
    id: 2,
    imageUrl:
      "https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/240036_wm-bmw2-banner-june23-hqn.jpg",
    altText: "BMW Motorcycle Banner 2",
    title: "Summer Special Offers",
    subtitle:
      "Limited-time discounts on select models. Ride in style this season!",
    ctaText: "View Deals",
  },
];

export default Banner;
