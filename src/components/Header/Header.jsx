import "./Header.css";
import Logo from "../../assets/images/netflix-logo.png"
import { Menu, Search, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navigationItems = [
    "Home",
    "TV Shows",
    "Movies",
    "Games",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-black text-gray-200 flex justify-between items-center p-4 h-[68px] text-sm md:text-[15px] font-medium text-nowrap"
            : "bg-transparent text-gray-200 flex justify-between items-center p-4 h-[68px] text-sm md:text-[15px] font-medium text-nowrap"
        }`}
      >
        <div className="flex item-center ">
          <Link to= {"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="Netflix Logo"
              className="w-36 pl-[50px]"
            />
          </Link>
          <ul className="hidden xl:flex space-x-7 items-center pl-[55px]">
            {navigationItems.map((item, index) => (
              <li
                className="cursor-pointer text-white hover:text-gray-300 text-sm font-medium transition-colors duration-200"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-4 relative">
          <div className="relative hidden md:inline-flex">
            <input
              type="text"
              className="bg-[#333333] px-4 py-2 rounded-full min-w-72 pr-10 outline-none"
              placeholder="Search..."
            />
            <Search className="absolute top-2 right-4 w-5 h-5" />
          </div>
          <button>Sign In</button>
        </div>
      </nav>
    </>
  );
}

export default Header