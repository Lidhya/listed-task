import React from "react";
import Apple from "../assets/svg/appleIcon.svg";
import Google from "../assets/svg/googleIcon.svg";

const SigninForm = () => {
  return (
    <>
      <div className="flex flex-col justify-start items-start md:w-[37.6%] w-[385px]">
        <span className="font-bold font-montserrat text-3xl">Sign In</span>
        <span className="text-[16px] font-lato">Sign in to your account</span>
      </div>
      <div className="flex justify-between md:w-[37.6%] w-[385px] py-[20px]">
        <div className="p-[8px] w-[47%] gap-[4px] rounded-[10px] bg-white flex justify-center items-center h-[27px]">
          <img src={Google} alt="Google" />
          <span className="text-gray text-xs font-montserrat">Sign in with Google</span>
        </div>

        <div className="p-[8px] w-[47%] gap-[4px] rounded-[10px] bg-white flex justify-center items-center h-[25px]">
          <img src={Apple} alt="Google" />
          <span className="text-gray text-xs font-montserrat ">Sign in with Apple</span>
        </div>
      </div>
      <div class="md:w-[37.6%] md:h-[36.8%] w-[385px]  rounded-[20px] bg-white flex flex-col px-[30px] py-[25px]">
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
            value={"Sign In"}
          />
        </div>
      </div>
      <div className="pt-[20px] text-center md:w-[37.6%] w-[385px]">
    <p className="text-gray ">Don't have an account?<span className="text-link">Register here</span> </p>
      </div>

    </>
  );
};

export default SigninForm;
