import { GoDotFill } from "react-icons/go";

interface SectionBannerProps {
  heading: string;
  subHeading: string;
  bannerImage?: string;
}

const SectionBanner = ({
  heading,
  subHeading,
  bannerImage,
}: SectionBannerProps) => {
  const defaultImage =
    "https://i.ibb.co.com/jk8CB45Z/photo-custom-made-retro-motorcycle-against-skyscraper.jpg";

  return (
    <div className="w-full">
      <div className="relative h-[40vh]">
        <img
          alt="banner"
          src={bannerImage || defaultImage}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex items-center text-white max-w-7xl mx-auto px-4 md:px-8  z-20">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold pb-2">{heading}</h2>
            <div className="flex items-center gap-2 text-sm md:text-base font-medium">
              <p>Home</p>
              <GoDotFill />
              <p>{subHeading}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
