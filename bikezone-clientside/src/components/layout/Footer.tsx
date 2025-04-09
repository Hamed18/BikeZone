import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
type SocialMediaLink = {
  to: string;
  icon: React.ReactNode;
  alt: string;
};

const Footer = () => {
  const socialLinks: SocialMediaLink[] = [
    {
      to: "/",
      icon: <FaFacebookSquare className="text-2xl" />,
      alt: "Facebook",
    },
    { to: "/", icon: <FaTwitterSquare className="text-2xl" />, alt: "Twitter" },
    {
      to: "/",
      icon: <FaGooglePlusSquare className="text-2xl" />,
      alt: "Google+",
    },
  ];
  return (
    <div className="bg-black py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Copyright Section */}
          <div className="flex justify-center sm:justify-start">
            <p className="text-white opacity-70 w-full flex justify-center sm:justify-start">
              Copyright © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
          {/* Logo Section */}
          <div className="flex justify-center items-center">
            <img src="brandlogo.png" alt="Brand Logo" className="h-12" />
          </div>
          {/* Social Media Section */}
          <div className="flex justify-center sm:justify-end items-center space-x-4">
            <p className="text-white font-bold hidden sm:block">SOCIAL MEDIA</p>
            {socialLinks.map((link, index) => (
              <Link key={index} to={link.to} className="hover:text-primary">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
