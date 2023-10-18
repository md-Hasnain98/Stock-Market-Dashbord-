import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell,legend, ResponsiveContainer, Legend } from "recharts";
import { BsThreeDots } from "react-icons/bs";
const ThirdPieCharts = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 100 },
    { name: "Group C", value: 200 },
  ];
  const COLORS = ["url(#colorPiv)", "url(#colorPjv)", "url(#colorPkv)"];
  return (
    <div style={{ height: "410px" }} className="w-full p-3">
    <div className=" mt-4 flex justify-between">
      <p className="text-lg font-medium">Order Stats</p>
      <div className="text-black flex justify-end items-center  ">
            <BsThreeDots></BsThreeDots>
          </div>
    </div>
    <div className="flex justify-center -mt-20 p-5">

      <PieChart width={200} height={300}>
      <defs>
             <linearGradient id="colorPiv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#1b78fa" stopOpacity={0.2}/>
      <stop offset="95%" stopColor="#1b78fa" stopOpacity={1}/>
    </linearGradient>
    <linearGradient id="colorPjv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#fc144a" stopOpacity={0.2}/>
      <stop offset="95%" stopColor="#fc144a" stopOpacity={1}/>
    </linearGradient>
    <linearGradient id="colorPkv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#d0def5" stopOpacity={0.3}/>
      <stop offset="95%" stopColor="#d0def5" stopOpacity={1}/>
    </linearGradient>
          </defs>
         
        <Pie
          data={data}
          cx={100}
          cy={200}
          innerRadius={55}
          outerRadius={80}
          fill="url(#colorPiv)"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
    <div className="p-2">
    <hr  className=" mt-10"/>
    </div>
    <div className="flex flex-wrap gap-4 justify-center">
      <p className="text-gray-500 font-medium">Completed</p>
      <p className="text-gray-500 font-medium">Pending</p>
      <p className="text-gray-500 font-medium">Cancel</p>
    </div>
     
    </div>
  );
};

export default ThirdPieCharts;
