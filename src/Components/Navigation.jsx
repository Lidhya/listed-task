import React from 'react';

const Navigation = ({data}) => {
    return (
        <div className=" flex justify-start items-center gap-[20px] ">
          <img className="h-5 w-5 text-white hidden lg:block" src={data.svg} alt={data.name} />
          <span>{data.name}</span>
        </div>
    );
}

export default Navigation;
