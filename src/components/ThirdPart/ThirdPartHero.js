import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { BsThreeDots } from "react-icons/bs";
import RecentActivity from "./RecentActivity";
import "./ThirdPartHero.css";

const ThirdPartHero = () => {
  const value = 76;
  return (
    <div className=" relative border rounded-tr-3xl rounded-tl-3xl  ">
      <div
        className="hero static h-36 rounded-tr-3xl rounded-tl-3xl"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-70 rounded-tr-3xl rounded-tl-3xl">
          <div className="text-white flex justify-end m-3  ">
            <BsThreeDots></BsThreeDots>
          </div>
          <div className="flex justify-center">
            <div className="avatar absolute mt-16 ">
              <div className="w-24 rounded-full ring-4 ring-gray-400 ring-offset-base-100 ring-offset-2">
                <img className="" src="https://placeimg.com/80/80/people" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-content  ">
          <div className="max-w-md  "></div>
        </div>
      </div>
      {/* Avatar name section starts */}
      <div className="mt-16 h-full">
        <div>
          <p className="text-xl font-medium">Jennifer Bennett</p>
          <p className="text-lg text-gray-500 font-medium">Product Designer</p>
        </div>
        <div className="flex mt-8 p-5 justify-center">
          <div className=" text-center">
            <p className="text-2xl font-medium">1,269</p>
            <p className="text-xl text-gray-500 font-medium">Products</p>
          </div>
          <div className="divider sm:divider-horizontal md:divider-horizontal divider-horizontal lg:divider-horizontal"></div>
          <div className=" text-center">
            <p className="text-2xl font-medium">5.2k</p>
            <p className="text-xl text-gray-500 font-medium">Followers</p>
          </div>
        </div>
        <div className="p-2">
          <hr />
        </div>
        <div className="flex justify-between text-lg font-medium items-center p-2 top-0">
          <p>Earning</p>
          <button className="active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        {/* progress */}
        <div className="relative flex justify-center">
          <div className="mt-5  p-5 static w-60">
            <CircularProgressbar
              strokeWidth={6}
              circleRatio={0.5}
              className="font-medium "
              value={value}
              maxValue={100}
              text={`${value}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.75,
                pathColor: "#2388FA",
                textColor: "black",
                textSize: "16px",
                strokeLinecap: "butt",
              })}
            />
            <div>
              <div className=" ">
                <p className="text-2xl font-bold">$26,256</p>
                <p className="text-lg font-medium text-gray-500 ">
                  Earning this Month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-10 lg:justify-start md:justify-center sm:justify-center justify-center">
          <div className="badge badge-accent rounded-lg bg-opacity-40 text-green-700">
            +2.65%
          </div>
          <p className="text-sm font-medium text-gray-500 ml-2">
            From previous period
          </p>
        </div>
        <div className="p-2">
          <hr className="mt-5" />
        </div>
        <RecentActivity></RecentActivity>
      </div>
      
    </div>
  );
};

export default ThirdPartHero;
