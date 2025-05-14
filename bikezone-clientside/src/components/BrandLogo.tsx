import clsx from "clsx";
import logo from "@/assets/logo.svg";
import logowhite from "@/assets/logo-white.svg";

type BrandLogoProps = {
  className?: string;
  theme?: "light" | "dark"; // control logo manually or auto via theme
};

const BrandLogo = ({ className = "", theme }: BrandLogoProps) => {
  const renderLogo = () => {
    if (theme === "light") {
      return (
        <img
          src={logo}
          alt="Bike Zone Logo"
          className="w-10 h-10 md:w-14 md:h-14"
        />
      );
    }
    if (theme === "dark") {
      return (
        <img
          src={logowhite}
          alt="Bike Zone Logo White"
          className="w-10 h-10 md:w-14 md:h-14"
        />
      );
    }
    return (
      <>
        <img
          src={logo}
          alt="Bike Zone Logo"
          className="block dark:hidden w-10 h-10 md:w-14 md:h-14"
        />
        <img
          src={logowhite}
          alt="Bike Zone Logo White"
          className="hidden dark:block w-10 h-10 md:w-14 md:h-14"
        />
      </>
    );
  };

  return (
    <div className="flex items-center gap-3">
      {renderLogo()}
      <div className="flex flex-col justify-center uppercase leading-tight">
        <h1
          className={clsx(
            "font-bold text-lg md:text-2xl tracking-widest",
            className
          )}
        >
          <span className="text-[#E81938]">Bike</span>
          <span className="inline-block w-1" />
          <span>Zone</span>
        </h1>
        <span className="text-xs md:text-sm tracking-wider text-muted-foreground">
          Upgrade your ride
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
