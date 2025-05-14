import { Link, NavLink } from "react-router-dom";
import LoginMenu from "../menu/LoginMenu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ModeToggle } from "../mode-toggle";
import BrandLogo from "../BrandLogo";

type NavItem = {
  to: string;
  label: string;
  show: boolean;
};

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { to: "/", label: "Home", show: true },
    { to: "/about", label: "About", show: true },
    { to: "/products", label: "Products", show: true },
    { to: "/contact", label: "Contact Us", show: true },
    { to: "/faq", label: "FAQ", show: true },
  ];

  return (
    <nav className="shadow-xl py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BrandLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems
              .filter((item) => item.show)
              .map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-2 rounded-none transition-all duration-200 ${
                      isActive
                        ? "text-primary font-semibold border-b-2 mx-4 border-primary"
                        : "text-gray-600 hover:border-b-2 mx-4"
                    }`
                  }
                >
                  <span>{item.label}</span>
                </NavLink>
              ))}

            {/* Mega Menu */}
            <div className="relative group">
              <button className="text-foreground hover:text-primary flex items-center gap-1 px-2">
                Pages <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-full bg-accent shadow-lg p-4 hidden group-hover:block w-48 z-40">
                <Link
                  to="/privacy"
                  className="text-foreground flex items-center gap-2 hover:underline"
                >
                  Privacy
                </Link>

                <Link
                  to="/404"
                  className="pt-5 text-foreground flex items-center gap-2  hover:underline"
                >
                  404 Page
                </Link>
              </div>
            </div>

            {/* Login or LoginMenu */}
            {!user ? (
              <NavLink to="/login">
                <Button className=" px-4 py-2 ml-4 rounded shadow">
                  Login
                </Button>
              </NavLink>
            ) : (
              <LoginMenu />
            )}

            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <ModeToggle />
              <SheetTrigger asChild>
                <Button size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-3 mt-10 px-5">
                  {navItems
                    .filter((item) => item.show)
                    .map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md text-base font-medium ${
                            isActive
                              ? "border-2"
                              : "text-gray-700 hover:bg-gray-100"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    ))}

                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-foreground py-2">
                      <span className="flex items-center gap-2">Pages</span>
                      <ChevronDown
                        size={16}
                        className="group-open:rotate-180 transition-transform"
                      />
                    </summary>
                    <div className="pl-4 mt-2 space-y-8">
                      <Link
                        to="/privacy"
                        className="block text-gray-700 font-semibold text-lg hover:text-primary pt-4"
                      >
                        Privacy
                      </Link>
                      <Link
                        to="/404"
                        className="block text-gray-700 font-semibold text-lg hover:bg-gray-100  hover:text-primary"
                      >
                        404 Page
                      </Link>
                    </div>
                  </details>

                  {/* Login or LoginMenu */}
                  {!user ? (
                    <NavLink
                      to="/login"
                      className="bg-primary text-white text-center py-2 rounded-md  transition"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </NavLink>
                  ) : (
                    <LoginMenu />
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
