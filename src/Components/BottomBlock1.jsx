import React from 'react';
import Dropdown from "../assets/svg/Dropdown.svg";
import PieChart from './PieChart';


const BottomBlock1 = () => {
    return (
        <div className='bg-white rounded-[20px] w-[48%] p-5'>
          <div className='flex justify-between'>
          <div className="font-bold text-sm">
          <span>Top Products</span>
        </div>
        <div className="flex items-center gap-2 font-light text-xs">
            <span className="text-gray">May - June 2021</span>
            <img className="w-2 h-1" src={Dropdown} alt="Dropdown" />
          </div>
          </div>
          <div className='flex p-3 h-[95%]'>
            <PieChart/>
          </div>
        </div>
    );
}

export default BottomBlock1;
