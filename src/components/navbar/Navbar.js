import React from "react";
import Noty from "../../Noty";
import CountryFlagIcons from "../CountryFlagIcons";
import { FiGrid } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="navbar  ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
      </div>
      <div className="lg:block hidden">
        <div className="flex ">
          <button className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div>
            <CountryFlagIcons></CountryFlagIcons>
          </div>
          <div className=" btn btn-ghost">
            <FiGrid className="text-lg"></FiGrid>
          </div>
          <div className=" btn btn-ghost">
            <FiSettings className="text-lg"></FiSettings>
          </div>
          <Noty width={"30px"} color={"#122C34"} count={4}></Noty>
          <div className="dropdown dropdown-end mx-5">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* small display nav bar drop down */}
      <div className="dropdown dropdown-left">
        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content    mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            {" "}
            <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </li>

          <li className="flex justify-start">
            {" "}
            <CountryFlagIcons></CountryFlagIcons>
          </li>
          <li>
            {" "}
            <div className=" btn btn-ghost">
              <FiGrid className="text-lg"></FiGrid>
            </div>
          </li>
          <li>
            <div className=" btn btn-ghost">
              <FiSettings className="text-lg"></FiSettings>
            </div>
          </li>
          <li>
            {" "}
            <Noty width={"30px"} color={"#122C34"} count={4}></Noty>
          </li>
          <li tabIndex={1} >
            {" "}
            <div   className="block">
              <label  className="btn btn-ghost btn-circle avatar"> 
                <div className="w-auto rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                 
                </div>
              </label>
              <ul
                tabIndex={1}
                className="mt-3  mb-10 p-2 shadow   bg-base-100 rounded-box "
              >
                <li >
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
