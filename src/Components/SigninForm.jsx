import React, { useEffect, useState } from "react";
import Apple from "../assets/svg/appleIcon.svg";
import Google from "../assets/svg/googleIcon.svg";
import { useNavigate } from "react-router-dom";
import "../Styles/GoogleButton.css";

const SigninForm = ({ login }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const handleGoogleLogin = (response) => {
    login();
    navigate("/");
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleLogin,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("google-signin-button"),
      { theme: "filled_white", size: "medium", shape: "pill" }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 p-3 rounded flex gap-2.5 items-center absolute left-1/2 transform -translate-x-1/2"
          role="alert"
        >
          <strong className="font-bold">Holy smokes!</strong>
          <span className="block sm:inline">
            Something seriously bad happened.
          </span>
          <span onClick={() => setError(false)}>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div className="flex flex-col justify-start items-start md:w-[37.6%] w-[385px]">
        <span className="font-bold font-montserrat text-3xl">Sign In</span>
        <span className="text-[16px] font-lato">Sign in to your account</span>
      </div>
      <div className="flex justify-between md:w-[37.6%] w-[385px] py-[20px]">
        <div
          id="google-signin-button"
          className="p-[8px] w-[47%] gap-[4px] rounded-[10px] bg-white flex justify-center items-center h-[27px]"
        >
          <img src={Google} alt="Google" />
          <span className="text-gray text-xs font-montserrat">
            Sign in with Google
          </span>
        </div>

        <div className="p-[8px] w-[47%] gap-[4px] rounded-[10px] bg-white flex justify-center items-center h-[25px]">
          <img src={Apple} alt="Google" />
          <span className="text-gray text-xs font-montserrat ">
            Sign in with Apple
          </span>
        </div>
      </div>
      <div className="md:w-[37.6%] md:h-[36.8%] w-[385px]  rounded-[20px] bg-white flex flex-col px-[30px] py-[25px]">
        <div className="pb-[10px] gap-[5px] flex flex-col ">
          <label htmlFor="email" className="font-[400] font-lato">
            Email address
          </label>
          <input
            className="px-[15px] w-full h-[35px] rounded-[10px] bg-backgroundColor outline-none caret-slate-400 hover:bg-inputHoverColor"
            type="email"
            name="email"
            placeholder="Enter email address"
          />
        </div>
        <div className="pb-[10px] gap-[5px] flex flex-col">
          <label htmlFor="password" className="font-[400] font-lato">
            Password
          </label>
          <input
            className="px-[15px] w-full h-[35px] rounded-[10px] bg-backgroundColor outline-none caret-slate-400 hover:bg-inputHoverColor"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="pb-[10px]">
          <label htmlFor="Email" className="text-blue-800 text-base">
            Forgot password?
          </label>
        </div>
        <div className="">
          <input
            className="px-[15px] w-full h-[35px] rounded-[10px] text-white font-medium bg-black outline-none hover:bg-gray-950"
            type="Submit"
            name="Submit"
            value="Sign In"
            onClick={() => navigate("/")}
          />
        </div>
      </div>
      <div className="pt-[20px] text-center md:w-[37.6%] w-[385px]">
        <p className="text-gray ">
          Don't have an account?<span className="text-link">Register here</span>{" "}
        </p>
      </div>
    </>
  );
};

export default SigninForm;
