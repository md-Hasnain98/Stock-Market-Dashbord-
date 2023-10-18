import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
const ThirdPartAreaCharts = () => {
  const data = [
    {
      name: "Mon",
      Previous: 40,
      Current: 20,
      amt: 2400,
    },
    {
      name: "Tue",
      Previous: 35,
      Current: 58,
      amt: 2210,
    },
    {
      name: "Wed",
      Previous: 60,
      Current: 48,
      amt: 2290,
    },
    {
      name: "Thu",
      Previous: 35,
      Current: 85,
      amt: 2000,
    },
    {
      name: "Fri",
      Previous: 55,
      Current: 52,
      amt: 2181,
    },
    {
      name: "Sat",
      Previous: 45,
      Current: 58,
      amt: 2500,
    },
  ];
  return (
    <div
      style={{ height: "410px" }}
      className="  w-full "
    >
      <ResponsiveContainer width="95%" height="100%">
        <AreaChart
          margin={{
            right: 0,
            left: 0,
          }}
          data={data}
        >
          <defs>
             <linearGradient id="colorYv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ff0a60" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ff0a60" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorXv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#055df5" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#055df5" stopOpacity={0}/>
    </linearGradient>
          </defs>
          <Legend
            iconSize={8}
            align="right"
            iconType="circle"
            verticalAlign="top"
            height={36}
          />
          <XAxis dataKey={"name"} />
          <YAxis tickCount={6} type="number" domain={[0, 100]} />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="Previous"
            stroke="#ff0a60"
            fillOpacity={1}
            fill="url(#colorYv)"
          />
          <Area
            type="monotone"
            dataKey="Current"
            stroke="#055df5"
            fillOpacity={1}
            fill="url(#colorXv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ThirdPartAreaCharts;
