import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header className="fixed w-full h-16 shadow-md px-2 md:px-4 bg-primaryColor1">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12">
            <img src={logo} alt="logo" className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
            {navLinks.map((item) => (
              <Link key={item.label} to={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <FaShoppingCart className="text-2xl text-secondaryColor1" />
          <FaUser className="text-2xl text-secondaryColor1" />
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
