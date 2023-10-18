import React from "react";

const RecentActivity = () => {
  return (
    <div className="p-5">
      <div className="flex justify-start  text-black text-xl font-medium">
        <p>Recent Activity</p>
      </div>

{/* 1st activity */}
      <div className="mt-8 grid grid-cols-2 ">
        <div className=" bg-gray-300 w-16 h-16 rounded-lg">
          <p>12</p>
          <p>Sep</p>
        </div>
        <div className="">
        <p className="text-sm ml-2 font-medium">Responded to need "Volunteer Activities"</p>
        </div>
      </div>

{/* 2nd activity */}
      <div className="mt-5 lg:grid  lg:grid-cols-2 flex justify-between">
        <div className=" bg-gray-300 w-16 h-16  rounded-lg ">
          <p>11</p>
          <p>Sep</p>
        </div>
        <div className="w-1/2 lg:w-auto">
        <p className="text-sm ml-2 font-medium">Everyone realizes would be desirable...</p>
        <p className="text-blue-600  lg:ml-5 ">Read more</p>
        </div>
      </div>

{/* 3rd activity */}
      <div className="mt-5 grid grid-cols-2 ">
        <div className=" bg-gray-300 w-16 h-16 rounded-lg">
          <p>10</p>
          <p>Sep</p>
        </div>
        <div>
        <p className="text-sm font-medium">Joined the group "Boardsmanship Forum"</p>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
