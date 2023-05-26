import React from 'react';
import RevenueIcon from "../assets/svg/RevenueIcon.svg";
import Transactions_Black from "../assets/svg/Transactions_Black.svg";
import TotalLikes from "../assets/svg/TotalLikes.svg";
import TotalUsers from "../assets/svg/TotalUsers.svg";


const TotalBlocks = () => {
    return (
        <div className='flex gap-9 my-7 flex-wrap sm:flex-nowrap'>
            <div className='flex flex-col p-4 bg-block1 w-[22.1%] rounded-[20px]'>
                <div className='flex justify-end items-end'><img className='w-6 h-6 ' src={RevenueIcon} alt="RevenueIcon" /></div>
                <span className='text-sm'>Total Revenue</span>
                <h1 className='font-bold lg:text-2xl md:text-xl '>$2,129,430</h1>
            </div>
            <div className='flex flex-col p-4 bg-block2 w-[22.1%] rounded-[20px]'>
                <div className='flex justify-end items-end'><img className='w-6 h-6 ' src={Transactions_Black} alt="Transactions_Black" /></div>
                <span className='text-sm'>Transactions</span>
                <h1 className='font-bold lg:text-2xl md:text-xl '>1,520</h1>
            </div>
            <div className='flex flex-col p-4 bg-block3 w-[22.1%] rounded-[20px]'>
                <div className='flex justify-end items-end'><img className='w-6 h-6 ' src={TotalLikes} alt="TotalLikes" /></div>
                <span className='text-sm'>Total </span>
                <h1 className='font-bold lg:text-2xl md:text-xl '>9,721</h1>
            </div>
            <div className='flex flex-col p-4 bg-block4 w-[22.1%] rounded-[20px]'>
                <div className='flex justify-end items-end'><img className='w-7 h-6 ' src={TotalUsers} alt="TotalUsers" /></div>
                <span className='text-sm'>Total Users</span>
                <h1 className='font-bold lg:text-2xl md:text-xl '>892</h1>
            </div>
            
        </div>
    );
}

export default TotalBlocks;
