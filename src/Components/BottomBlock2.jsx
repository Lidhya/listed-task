import React from 'react';
import Dropright from "../assets/svg/Dropright.svg";

const BottomBlock2 = () => {
    return (
        <div className='bg-white rounded-[20px] w-[48%] p-4 flex flex-col gap-2 justify-center'>
        <div className='flex justify-between '>
        <div className="font-bold text-sm">
        <span>Today’s schedule</span>
      </div>
      <div className="flex items-center gap-2 font-light text-xs">
          <span className="text-gray">See all</span>
          <img className="w-1 h-2" src={Dropright} alt="Dropdown" />
        </div>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='text-[10px] flex flex-col justify-start items-start border-l-4 border-line1 p-2 '>
            <span className='font-semibold text-gray1'>Meeting with suppliers from Kuta Bali</span>
            <span className='font-light text-gray2'>14.00-15.00</span>
            <span className='font-light text-gray2'>at Sunset Road, Kuta, Bali </span>
        </div>
        <div className='text-[10px] flex flex-col justify-start items-start border-l-4 border-blue p-2'>
            <span className='font-semibold text-gray1'>Meeting with suppliers from Kuta Bali</span>
            <span className='font-light text-gray2'>14.00-15.00</span>
            <span className='font-light text-gray2'>at Sunset Road, Kuta, Bali </span>
        </div>
        </div>
      </div>
    );
}

export default BottomBlock2;
