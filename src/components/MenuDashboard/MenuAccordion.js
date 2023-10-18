import React from "react";
import { FiGrid } from "react-icons/fi";
const MenuAccordion = () => {
  return (
    <div className="p-2">
      <div className="collapse collapse-arrow">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center">
          <FiGrid className="text-lg my-2 mr-2"></FiGrid>
         <span className="text-lg">Dashboards</span> 
        </div>
        <div className="collapse-content bg-dark  ">
          <div className="flex justify-start ml-6 my-2">
            <a className="text-lg hover:text-white" href="">
              Ecommerce
            </a>
          </div>
          <div className="flex justify-start ml-6 my-2">
            <a className="text-lg hover:text-white" href="">
              Saas
            </a>
          </div>
          <div className="flex justify-start ml-6 my-2 ">
            <a className="text-lg hover:text-white" href="">
              Crypto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuAccordion;
