import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import AnotherBarChart from "../AnotherBarChart";

const WaterFallCharts = () => {
  const data = [
    {
      name: "Feb",
      customers: 21,
      pv: 0,
      sales: 17,
    },
    {
      name: "Mar",
      customers: 25,
      pv: 10,
      sales: 21,
    },
    {
      name: "Apr",
      customers: 20,
      pv: 20,
      sales: 18,
    },
    {
      name: "May",
      customers: 28,
      pv: 30,
      sales: 24,
    },
    {
      name: "Jun",
      customers: 26,
      pv: 40,
      sales: 20,
    },
    {
      name: "Jul",
      customers: 30,
      pv: 50,
      sales: 26,
    },
    {
      name: "Aug",
      customers: 26,
      pv: 60,
      sales: 24,
    },
    {
      name: "Sep",
      customers: 34,
      pv: 70,
      sales: 32,
    },
    {
      name: "Oct",
      customers: 30,
      pv: 80,
      sales: 27,
    },
  ];

  
  return (
    <div className="w-full ">
      <ResponsiveContainer minHeight={300}  width="95%" height="100%">
        <BarChart width={100}   height={500} data={data}  >
          
          <Tooltip></Tooltip>
          <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#3996fa" stopOpacity={0.8} />
                  <stop offset="50%" stopColor="#8884d8" stopOpacity={0} />
                  <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#a39f9e" stopOpacity={0.15} />
                  <stop offset="50%" stopColor="#8884d8" stopOpacity={0} />
                  <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis  domain={[0, 40]}
            tickFormatter={(tickValue) => `${tickValue}k`} />
              <Bar
              
                maxBarSize={12}
                dataKey="sales"
                fill="url(#colorPv)"
                radius={10}
              />
              <Bar
                maxBarSize={12}
                dataKey="customers"
                fill="url(#colorUv)"
                radius={10}
              />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterFallCharts;
