import { BiMenuAltLeft } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
interface SectionTitleProps {
  subtitle: string;
  title: string;
}
const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="text-center py-20 font-semibold">
      <div className="flex justify-center items-center gap-2 text-lg uppercase">
        <BiMenuAltRight className="text-[#E81938] " />
        {subtitle}
        <BiMenuAltLeft className="text-[#E81938] " />
      </div>

      <h1 className="text-5xl">{title}</h1>
    </div>
  );
};

export default SectionTitle;
