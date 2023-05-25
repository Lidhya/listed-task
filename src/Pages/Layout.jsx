import React from "react";
import LeftBar from "../Components/LeftBar";
import Dashboard from "./Dashboard";

const Layout = () => {
  return (
    <div class="bg-backgroundColor border-none m-0 p-0 ">
        <div className="flex h-screen">
        <div className="m-fourty mr-zero"><LeftBar/></div>
        <div className="m-sixty mb-eighty "><Dashboard/></div>
        </div>
    </div>
  );
};

export default Layout;
