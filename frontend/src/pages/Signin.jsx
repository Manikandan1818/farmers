import { useState } from "react";
import signup from "../assest/signup.png";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  console.log(data);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (email && password) {
      alert("Sucessful!");
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <section className="flex flex-col w-full max-w-md bg-secondaryColor m-auto mt-3 md:mt-4 p-4">
      <div className="w-20 overflow-hidden m-auto rounded-full shadow-md shadow-iconColor">
        <img src={signup} className="w-full" />
      </div>

      <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          value={data.email}
          onChange={handleOnChange}
        />
        <label htmlFor="password">Password</label>
        <div className="flex bg-primaryColor px-2 py-1 mt-1 mb-2 rounded-xl focus-within:outline outline-2 focus-within:outline-iconColor">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full bg-primaryColor outline-none"
            value={data.password}
            onChange={handleOnChange}
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleShowPassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>

        <button className="w-full max-w-[150px] m-auto bg-iconColor hover:bg-greycolor text-white text-xl font-medium font-oswald uppercase py-2 rounded-full mt-4 cursor-pointer">
          Sign In
        </button>
      </form>
      <p className="text-left text-sm mt-2">
        Don't have an account?{" "}
        <Link to={"/signup"} className="text-iconColor underline">
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default Signin;
