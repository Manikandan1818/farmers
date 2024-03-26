import { useState } from "react";
import signup from "../assest/signup.png";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSucess } from "../redux/userSlice";

const Signin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginStart());
      try {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/signin`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const res = await fetchData.json();
        toast(res.message);
        dispatch(loginSucess(res.data));
        if (res.alert) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        dispatch(loginFailure());
      }
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <section className="flex flex-col w-full max-w-md bg-secondaryColor m-auto mt-5 md:mt-2 p-4">
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
