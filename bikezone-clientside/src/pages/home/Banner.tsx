// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide className="w-full h-screen bg-amber-100">
          <div>
            <img
              src="https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/240034_wm-bmw-banner-june23-hqn.jpg"
              alt="banner 1" className="object-center object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-screen bg-amber-100">
          <div>
            <img
              src="https://s3-ap-southeast-2.amazonaws.com/imotor-cms/images_cms/240036_wm-bmw2-banner-june23-hqn.jpg"
              alt="banner 1" className="object-center object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Banner;
