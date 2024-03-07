import logo from "../assest/logo.png";

const Header = () => {
  return (
    <header className="fixed w-full h-16 shadow-md px-2 md:px-4">
      {/* desktop */}
      <div className="flex items-center h-full">
        <div className="h-14">
          <img src={logo} alt="logo" className="h-full" />
        </div>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
