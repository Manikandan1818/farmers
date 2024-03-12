import { useState } from "react";
import signup from "../assest/signup.png";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <section className="flex flex-col w-full max-w-md bg-secondaryColor m-auto mt-3 md:mt-4 p-4">
      <div className="w-24 overflow-hidden m-auto">
        <img src={signup} className="w-full" />
      </div>
      {/* <h1 className="text-iconColor font-extrabold text-3xl font-oswald mt-2 mb-2">
        Sign up
      </h1> */}
      <form className="w-full py-3 flex flex-col">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="form-input"
        />
        <label htmlFor="firstname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="form-input"
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="form-input" />
        <label htmlFor="password">Password</label>
        <div className="flex bg-primaryColor px-2 py-1 mt-1 mb-2 rounded-xl focus-within:outline outline-2 focus-within:outline-iconColor">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full bg-primaryColor outline-none"
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <div className="flex bg-primaryColor px-2 py-1 mt-1 mb-2 rounded-xl focus-within:outline outline-2 focus-within:outline-iconColor">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmpassword"
            name="confirmpassword"
            className="w-full bg-primaryColor outline-none"
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowConfirmPassword}
          >
            {showConfirmPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>
        <button className="w-full max-w-[150px] m-auto bg-iconColor hover:bg-greycolor text-white text-xl font-medium font-oswald uppercase py-2 rounded-full mt-4 cursor-pointer">
          Sign up
        </button>
      </form>
      <p className="text-left text-sm mt-2">
        Already have an account?{" "}
        <Link to={"signin"} className="text-iconColor underline">
          Sign in
        </Link>
      </p>
    </section>
  );
};

export default Signup;
