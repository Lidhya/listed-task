import React from 'react';
import Navbar from '../Components/Navbar';
import TotalBlocks from '../Components/TotalBlocks';
import LineGraph from '../Components/LineGraph'; 
import BottomBlock1 from '../Components/BottomBlock1'; 
import BottomBlock2 from '../Components/BottomBlock2';

const Dashboard = () => {
    return (
        <div className='flex flex-col h-full'>
          <Navbar/>
          <TotalBlocks/>
          <LineGraph/>
          <div className='flex flex-row gap-10 h-[30%] mt-3 flex-wrap sm:flex-nowrap font-montserrat'>
            <BottomBlock1/>
            <BottomBlock2/>
          </div>
        </div>
    );
}

export default Dashboard;
