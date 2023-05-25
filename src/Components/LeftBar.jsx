import React, { useState } from "react";
import DashboardIcon from "../assets/svg/DashboardIcon.svg";
import Transactions from "../assets/svg/Transaction_white.svg";
import ScheduleIcon from "../assets/svg/ScheduleIcon.svg";
import UserIcon from "../assets/svg/UserIcon.svg";
import SettingIcon from "../assets/svg/SettingIcon.svg";
import Navigation from "./Navigation";

const navData = [
  {
    id: 1,
    name: "Dashboard",
    svg: DashboardIcon,
  },
  {
    id: 2,
    name: "Transactions",
    svg: Transactions,
  },
  {
    id: 3,
    name: "Schedules",
    svg: ScheduleIcon,
  },
  {
    id: 4,
    name: "Users",
    svg: UserIcon,
  },
  {
    id: 5,
    name: "Settings",
    svg: SettingIcon,
  },
];

const LeftBar = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };
  return (
    <div className=" flex bg-black h-full p-[50px] rounded-[30px]  flex-col justify-between items-start text-white">
      <div className="flex flex-col text-white items-start lg:gap-9 md:gap-4">
        <div className="py-2.5 text-3xl font-montserrat font-bold text-left leading-normal ">
          <span>Board.</span>
        </div>
        {navData.map((data) => (
          <div
            className={data === selectedIcon ? `font-bold` : `font-normal`}
            onClick={() => handleIconClick(data)}
          >
            <Navigation data={data} key={data.id} />
          </div>
        ))}
      </div>
      <div className="font-light flex flex-col items-start text-white text-sm">
        <span className="py-2.5">Help</span>
        <span className="py-2.5">Contact Us</span>
      </div>
    </div>
  );
};

export default LeftBar;
