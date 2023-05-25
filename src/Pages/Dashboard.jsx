import React from 'react';
import Navbar from '../Components/Navbar';
import TotalBlocks from '../Components/TotalBlocks';

const Dashboard = () => {
    return (
        <div className='flex flex-col'>
          <Navbar/>
          <TotalBlocks/>
        </div>
    );
}

export default Dashboard;
