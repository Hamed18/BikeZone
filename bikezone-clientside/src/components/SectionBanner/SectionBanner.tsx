import { GoDotFill } from "react-icons/go";
interface SectionBannerProps {
  heading: string;
  subHeading: string;
}
const SectionBanner = ({ heading, subHeading }: SectionBannerProps) => {
  return (
    <div className="w-full">
      <div className="border relative">
        <img
          alt="banner"
          src="https://i.ibb.co.com/jk8CB45Z/photo-custom-made-retro-motorcycle-against-skyscraper.jpg"
          className="w-full md:h-[60vh] h-[20vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="text-white absolute top-5 md:top-40 flex items-center pl-5 md:pl-32 max-w-[1440px] mx-auto z-20">
          <div>
            <div>
              <h1 className="text-2xl md:text-[56px] font-bold pb-4 w-1/2 md:w-full">
                {heading}
              </h1>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-lg font-medium">
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
