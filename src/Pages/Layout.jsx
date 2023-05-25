import React from "react";
import LeftBar from "../Components/LeftBar";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <div class="bg-backgroundColor border-none m-0 p-0 ">
        <div className="flex h-screen w-full">
        <div className="hidden md:block md:w-[20%] m-9 mr-0"><LeftBar/></div>
        <div className="md:w-[70%] m-14 mb-20 "><Dashboard/></div>
        </div>
    </div>
  );
};

export default Layout;
