import React from "react";
import BellIcon from "../assets/svg/BellIcon.svg";
import SearchIcon from "../assets/svg/SearchIcon.svg";
import user1 from "../assets/Images/image1.jpg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-30px w-1000px bg-transparent">
      <div className="text-black font-bold text-xl">Dashboard</div>
      <div className="flex items-center space-x-2 gap-5 ">
        <div className="flex items-center py-1 px-2 bg-white text-black rounded-[10px] text-sm">
        <input className="outline-none" type="text" placeholder="Search..." />
        <img className="w-4 h-4" src={SearchIcon} alt="SearchIcon" />
        </div>
        <img className="w-4 h-5" src={BellIcon} alt="BellIcon" />
        <img
          className="w-6 h-6 rounded-full object-cover"
          src={user1}
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
