import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import {
  BsCalendarRange,
  BsFillChatDotsFill,
  BsArchiveFill,
} from "react-icons/bs";

import MenuAccordion from "./MenuAccordion";
import MultipleAccordion from "./MultipleAccordion";
import FromLayouts from "./FromLayouts";
const MenuDashBoard = () => {
  return (
    <div>
      <div>
        <div className="flex justify-end p-8 text-xl">
          <CgMenuLeft></CgMenuLeft>
        </div>

        <div>
          <div className="flex justify-start p-5">
            <p>MENU</p>
          </div>
          <div className="">
            <MenuAccordion></MenuAccordion>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-start p-5">
          <p>APPLICATIONS</p>
        </div>
        <div>
          <div className="flex justify-start p-5 btn-ghost">
            <button className="flex items-center text-lg">
              <BsCalendarRange className="mr-3"></BsCalendarRange>Calender
            </button>
          </div>
          <div className="flex justify-between p-5 btn-ghost ">
            <button className="flex items-center text-lg ">
              <BsFillChatDotsFill className="mr-3"></BsFillChatDotsFill>Chat
            </button>
            <div className="badge badge-error rounded-lg bg-opacity-50 text-red-400 font-medium">
            Hot
          </div>
          </div>
          <div className="flex justify-start p-5 btn-ghost">
            <button className="flex items-center text-lg">
              <BsArchiveFill className="mr-3"></BsArchiveFill>File Manager
            </button>
          </div>
          {/* Accordion part start */}
          <MultipleAccordion></MultipleAccordion>
        </div>
        <div>
          <FromLayouts></FromLayouts>
        </div>
      </div>
    </div>
  );
};

export default MenuDashBoard;
