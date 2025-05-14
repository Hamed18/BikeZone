import { Link } from "react-router-dom";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import BrandLogo from "../BrandLogo";
import { SelectSeparator } from "../ui/select";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <BrandLogo theme="dark" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-lg font-semibold uppercase tracking-wide mb-2">
              Explore
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
              <Link to="/products" className="hover:text-white transition">
                Products
              </Link>
              <Link to="/faq" className="hover:text-white transition">
                Faq
              </Link>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
              <Link to="/privacy" className="hover:text-white transition">
                Privacy
              </Link>
            </nav>
          </div>

          {/* Column 3: Socials */}
          <div className="flex justify-center md:justify-end gap-6">
            <a
              href="https://www.facebook.com/jannatulfee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="hover:text-white transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://x.com/jannatul_zz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
              className="hover:text-white transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://github.com/jannat710"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jannatul38/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <SelectSeparator className="my-5" />
        {/* Copyright */}
        <div className=" text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Jannatul Ferdous</span> | All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
