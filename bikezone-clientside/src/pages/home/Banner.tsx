// Import Swiper React components and types
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import required modules
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// Type declarations for the component props
interface BannerProps {
  banners?: {
    id: number;
    imageUrl: string;
    altText: string;
  }[];
}

const Banner: React.FC<BannerProps> = ({ banners = defaultBanners }) => {
  // Swiper configuration with type
  const swiperParams: SwiperType = {
    modules: [Navigation, Autoplay, EffectFade],
    navigation: true,
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
  };

  return (
    <div className="relative w-full">
      <Swiper {...swiperParams} className="h-[50vh] md:h-[70vh] lg:h-[90vh]">
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="relative">
            <div className="absolute inset-0 bg-black/20"></div>
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

// Default banners data
const defaultBanners = [
  {
    id: 1,
    imageUrl:
      "https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/240034_wm-bmw-banner-june23-hqn.jpg",
    altText: "BMW Motorcycle Banner 1",
  },
  {
    id: 2,
    imageUrl:
      "https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/240036_wm-bmw2-banner-june23-hqn.jpg",
    altText: "BMW Motorcycle Banner 2",
  },
];

export default Banner;