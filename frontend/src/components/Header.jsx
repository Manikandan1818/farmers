import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <header className="fixed w-full h-16 px-2 md:px-4 bg-primaryColor ">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-16">
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
          <div className="text-2xl text-iconColor relative">
            <FaShoppingCart />
            <div className="flex items-center justify-center absolute -top-2 -right-2 text-sm text-white bg-red-600 rounded-full h-4 w-4 text-center">
              0
            </div>
          </div>
          <div className="" onClick={handleShowMenu}>
            <FaUserCircle className="text-3xl text-iconColor cursor-pointer" />
            {showMenu && (
              <div className="flex flex-col whitespace-nowrap absolute right-1 cursor-pointer bg-primaryColor shadow-sm shadow-iconColor px-2 py-2">
                <Link to={"newproduct"}>New Product</Link>
                <Link to={"signin"}>Signin</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
