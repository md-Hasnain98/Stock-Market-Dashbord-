import React from "react";
import { BsPersonCheck, BsBox,BsCollection } from "react-icons/bs";
import { TfiPencilAlt } from "react-icons/tfi";
const FromLayouts = () => {
  return (
    <div>
      <div className="flex justify-start p-5">
        <p>LAYOUTS</p>
      </div>
      <div>
        <div className="flex justify-start p-5">
          <p>PAGES</p>
        </div>

        <div className="flex flex-wrap justify-between p-5 items-center  text-lg btn-ghost">
          <button className=" flex items-center">
            <BsPersonCheck className="mr-3"></BsPersonCheck>{" "}
            <span>Authentication</span>
          </button>
          <div className="badge badge-info rounded-full bg-opacity-90 text-gray-200 ">
            8
          </div>
        </div>
      </div>

      <div>
        <div className="collapse collapse-arrow">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center text-lg p-5">
            <BsBox className="mr-3"></BsBox>
            <span className="text-lg">Utility</span>
          </div>
        </div>
      </div>
      <div className="flex justify-start p-5">
        <p>COMPONENTS</p>
      </div>
      <div className=" ">
      <div className="collapse collapse-arrow ">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex  justify-start items-center text-lg p-5">
            <BsCollection className="mr-3"></BsCollection>
            <span className="text-lg ">UI Elements</span>
          </div>
        </div>

        <div className="collapse collapse-arrow">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center text-lg p-5">
            <TfiPencilAlt className="mr-3"></TfiPencilAlt>
            <span className="text-lg">Forms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromLayouts;
