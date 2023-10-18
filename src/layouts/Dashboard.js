import React from "react";
import AnotherBarChart from "../components/AnotherBarChart";
import MenuDashBoard from "../components/MenuDashboard/MenuDashBoard";
import Navbar from "../components/navbar/Navbar";
import ThirdPartDashboard from "../components/ThirdPart/ThirdPartDashboard";
import WaterFallCharts from "../components/waterfallCharts/WaterFallCharts";
import { AiFillPieChart } from "react-icons/ai";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import Noty from "./../Noty";
import ThirdPartAreaCharts from "../components/AreaChart/ThirdPartAreaCharts";
import ThirdPieCharts from "../components/ThirdPieCharts/ThirdPieCharts";
import TopProducts from "../components/MiddleLastPart/TopProducts";

const Dashboard = () => {
  return (
    <div className="lg:flex md:grid sm:grid min-h-screen ">
      <section className=" min-h-screen lg:w-2/12 rounded-2xl ">
        <MenuDashBoard></MenuDashBoard>
      </section>

      <section
        data-theme="corporate"
        className="lg:w-10/12 flex min-h-screen rounded-tl-2xl"
      >
        <div className=" rounded-tl-2xl  w-full   p-3 min-h-screen">
          <Navbar></Navbar>
          <div className="lg:flex lg:flex-row flex flex-col-reverse md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse justify-evenly min-h-screen">
            <div className=" lg:w-9/12 mt-5  ">
              {/* middle first part start */}
              <div className="lg:grid lg:grid-cols-3 gap-5 mb-5 mt-1">
                <div className="border rounded-2xl p-4 flex items-center">
                  <div className="bg-blue-600 p-5  rounded-xl mr-2 text-white">
                    <AiFillPieChart className="text-white text-xl "></AiFillPieChart>
                  </div>
                  <div className="ml-2 ">
                    <div className="flex justify-start">
                      <p className="text-lg text-gray-500 font-medium">
                        Revenue
                      </p>
                    </div>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-xl font-medium">$21,456</p>
                      <div className="badge badge-accent  text-green-600 rounded-xl ml-2  bg-opacity-20">
                        +2.65%
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd */}
                <div className="border rounded-2xl">
                  <div className=" p-5 flex items-center">
                    <div className="bg-blue-600 p-5 rounded-xl mr-2 text-white">
                      <RiShoppingBag3Fill className="text-white text-xl"></RiShoppingBag3Fill>
                    </div>
                    <div className="ml-2 ">
                      <div className="flex justify-start ">
                        <p className="text-lg text-gray-500 font-medium">
                          Orders
                        </p>
                      </div>
                      <div className="flex items-center flex-wrap ">
                        <p className="text-xl font-medium">5,643</p>
                        <div className="badge badge-error  text-red-600 rounded-xl ml-2  bg-opacity-20">
                          -0.82%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd */}
                <div className="border rounded-2xl ">
                  <div className="p-5 flex items-center">
                    <div className="bg-blue-600 p-5 rounded-xl mr-2 text-white">
                      <MdPeopleAlt className="text-white text-xl"></MdPeopleAlt>
                    </div>

                    <div className="ml-2 ">
                      <div className="flex justify-start">
                        <p className="text-lg  text-gray-500 font-medium">
                          Customers
                        </p>
                      </div>
                      <div className="flex items-center flex-wrap ">
                        <p className="text-xl font-medium">45,254</p>
                        <div className="badge badge-error  text-red-600 rounded-xl ml-2  bg-opacity-20">
                          -1.04%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-2xl mt-16">
                <div className="">
                  <div className="flex justify-between items-center text-xl font-medium">
                    <p className="ml-5">Overview</p>

                    <div className="flex items-center justify-center">
                      <div className="collapse collapse-arrow">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-black flex justify-start items-center text-lg ">
                          <div className="flex">
                            <p className="text-lg">Sort By:</p>
                            <p className="text-lg ml-1 text-gray-500">Yearly</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:flex overflow-hidden">
                  <div className="lg:w-4/12">
                    <AnotherBarChart></AnotherBarChart>
                  </div>
                  <div className="lg:w-8/12">
                    <WaterFallCharts></WaterFallCharts>
                  </div>
                </div>
              </div>

              {/* 3rd portion of middle column */}
              <div className=" grid lg:grid-cols-3 gap-3  mt-16  ">
                {/* Area chart part starts */}
                <div className="grid border  rounded-2xl ">
                  {/* User activity part above area chart*/}
                  <div className=" ">
                    <div className="flex flex-wrap justify-between  items-center w-full p-3 ">
                      <p className="text-lg font-medium">User Activity</p>
                      <div className="collapse collapse-arrow">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title bg-dark   peer-checked:bg-dark peer-checked:text-black flex justify-start items-center text-lg ">
                          <div className="">
                            <p className="text-lg text-gray-500  font-medium">
                              Weekly
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-start p-2">
                      <p className="text-lg font-medium">This Month</p>
                      <p className="text-lg font-medium">16,543</p>
                    </div>
                  </div>
                  <ThirdPartAreaCharts></ThirdPartAreaCharts>
                </div>
                {/* pie chart start */}
                <div className="border rounded-2xl  ">
                  <ThirdPieCharts></ThirdPieCharts>
                </div>

                {/* Top Products part start */}
                <div className="border rounded-2xl">
                  <TopProducts></TopProducts>
                </div>
              </div>
            </div>
            <div className="lg:w-3/12 ml-2   min-h-screen mt-5 ">
              <ThirdPartDashboard></ThirdPartDashboard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
