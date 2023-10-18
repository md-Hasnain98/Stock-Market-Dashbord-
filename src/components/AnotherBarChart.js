import React from "react";

const AnotherBarChart = () => {
  return (
    <div>
    <div className="flex justify-start">
      <p className="text-gray-500 text-sm ml-5 font-medium">This Month</p>
     
    </div>
    <div className="flex items-center ">
      <p className="text-xl font-bold ml-5">$24,568</p>
      <div className="badge badge-accent text-green-600 rounded-xl ml-2 bg-opacity-20">+2.65%</div>
    </div>
    <div className="flex justify-center">
    
      <table className=" bg-white  w-full">
      <tbody>

        <tr>
          <td className="border-b border-r  lg:px-6 px-auto py-4">
           <p className="text-gray-500 font-medium">Orders</p>
           <p className="font-medium text-lg">5,643</p>
          </td>
          <td className="border-b   lg:px-6 px-auto py-4">
          <p className="text-gray-500 font-medium">Sales</p>
           <p className="font-medium text-lg">16,273</p>
          </td>
         
        </tr>
        <tr>
          <td className="border-b border-r  lg:px-6 px-auto py-4">
          <p className="text-gray-500 font-medium">Order Value</p>
           <p className="font-medium text-lg">12.03%</p>
          </td>
          <td className="border-b   lg:px-6 px-auto py-4">
          <p className="text-gray-500 font-medium">Customers</p>
           <p className="font-medium text-lg">21,456</p>
          </td>
          
        </tr>
        <tr>
          <td className=" border-r  lg:px-6 px-auto py-4">
          <p className="text-gray-500 font-medium">Income</p>
           <p className="font-medium text-lg">$35,652</p>
          </td>
          <td className="   lg:px-6 px-auto py-4">
          <p className="text-gray-500 font-medium">Expenses</p>
           <p className="font-medium text-lg">$12,248</p>
          </td>
          
        </tr>
      </tbody>
      </table>
    </div>
    </div>
  );
};

export default AnotherBarChart;
