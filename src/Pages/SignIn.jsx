import React from "react";
import SigninForm from "../Components/SigninForm";

const SignIn = ({login}) => {
  return (
    <div className="w-full flex h-screen items-center ">
      <div className="w-[40.8%] bg-black relative h-full hidden md:block">
        <span className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white absolute text-6xl font-montserrat font-bold text-left leading-normal text-[normal]">
          <span>Board.</span>
        </span>
      </div>
      <div className="bg-backgroundColor h-full md:w-[59.2%] w-full flex flex-col justify-center items-center">
        <SigninForm login={login}/>
      </div>
    </div>
  );
};

export default SignIn;
