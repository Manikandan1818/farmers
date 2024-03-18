import { useState } from "react";
import signupImage from "../assest/signup.png";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utilities/ImagetoBase64";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleConfirmPassword = () => {
    setConfirmPassword((prev) => !prev);
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

  const handleUploadFileImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
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
      if (res.alert) {
        navigate("/signin");
      }
    } catch (error) {
      toast(error);
    }
  };

  return (
    <section className="flex flex-col w-full max-w-md bg-secondaryColor m-auto mt-3 md:mt-4 p-4">
      <div className="w-20 h-20 overflow-hidden m-auto rounded-full shadow-md shadow-iconColor relative">
        <img
          src={data.image ? data.image : signupImage}
          className="w-full h-full"
        />
        <label htmlFor="profileImage">
          <div className="absolute bottom-0 h-1/3 bg-iconColor w-full text-center text-sm text-white p-1 opacity-60 cursor-pointer">
            Upload
          </div>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            className="hidden"
            onChange={handleUploadFileImage}
          />
        </label>
      </div>

      <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstName"
          className="form-input"
          value={data.firstName}
          onChange={handleOnChange}
        />
        <label htmlFor="firstname">Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastName"
          className="form-input"
          value={data.lastName}
          onChange={handleOnChange}
        />
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
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="flex bg-primaryColor px-2 py-1 mt-1 mb-2 rounded-xl focus-within:outline outline-2 focus-within:outline-iconColor">
          <input
            type={confirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className="w-full bg-primaryColor outline-none"
            value={data.confirmPassword}
            onChange={handleOnChange}
          />
          <span
            className="flex text-xl cursor-pointer"
            onClick={handleConfirmPassword}
          >
            {confirmPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>

        <button className="w-full max-w-[150px] m-auto bg-iconColor hover:bg-greycolor text-white text-xl font-medium font-oswald uppercase py-2 rounded-full mt-4 cursor-pointer">
          Sign up
        </button>
      </form>
      <p className="text-left text-sm mt-2">
        Already have an account?{" "}
        <Link to={"/signin"} className="text-iconColor underline">
          Sign in
        </Link>
      </p>
    </section>
  );
};

export default Signup;
