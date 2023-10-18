import React from 'react';
import { BiBookAlt } from "react-icons/bi";
import { FiShoppingBag,FiBriefcase,FiWifi } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";


const MultipleAccordion = () => {
    return (
        <div>
            <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center text-lg p-5">
            <FiShoppingBag className='mr-3'></FiShoppingBag>
              <span className="text-lg">Ecommerce</span>
            </div>
          </div>


            <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center text-lg p-5">
            <AiOutlineMail className='mr-3'></AiOutlineMail>
              <span className="text-lg">Email</span>
            </div>
          </div>


            <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center text-lg p-5">
            <BiBookAlt className='mr-3'></BiBookAlt>
              <span className="text-lg">Invoices</span>
            </div>
          </div>


            <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center text-lg p-5">
            <FiBriefcase className='mr-3'></FiBriefcase>
              <span className="text-lg">Projects</span>
            </div>
          </div>


            <div className="collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-dark  peer-checked:bg-dark peer-checked:text-white flex justify-start items-center text-lg p-5">
            <FiWifi className='mr-3'></FiWifi>
              <span className="text-lg">Contacts</span>
            </div>
          </div>
        </div>
    );
};

export default MultipleAccordion;