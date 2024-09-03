import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

export default function Boxes() {
  return (
    <div className="flex justify-between mx-40 mt-10">
      <div className="relative flex items-center p-2 rounded-lg shadow-lg w-96 bg-bg-1">
        <div className="absolute flex pb-8 w-82">
          <div  className="w-40 mb-16 bg-cover h-60 bg-img1" />
          <div className="absolute ml-40 text-lg font-medium mt-14 text-col-4">Starting from 100 INR</div>
        </div>
        <div className="ml-44">
          
          <div className="mb-1 text-3xl font-medium text-col-4">Kids Clothing</div>
          <div className="mb-4 text-lg font-medium text-col-4">Age (0-6)</div>
          <div className="flex items-center justify-between w-24 h-10 px-3 text-base font-bold rounded-lg text-col-4 bg-nav-2">
          <button className="">Explore </button>
          <FaGreaterThan className="mt-1" />
          </div>
        </div>
      </div>


      <div className="relative flex items-center p-2 overflow-visible rounded-lg shadow-lg w-96 bg-bg-2">
      <div className="absolute top-0 mr-10 text-lg font-medium transform -translate-x-1/2 -translate-y-10 w-80 left-1/2 text-col-4">
        Starting from 500 INR
      </div>
        <div className="ml-4">
          <div className="mb-1 text-3xl font-medium text-col-4">Equipments</div>
          <div className="mb-4 text-lg font-medium text-col-4">Age (0-6)</div>
          <div className="flex items-center justify-between w-24 h-10 px-3 text-base font-bold rounded-lg text-col-4 bg-nav-2">
            <button className="">Explore</button>
            <FaGreaterThan className="mt-1" />
          </div>
        </div>
        <div className="absolute mt-1 -translate-y-1/2 bg-cover right-3 w-44 top-1/3 h-60 bg-img2" />
        
      </div>


      
      
      <div className="relative flex items-center p-2 overflow-visible rounded-lg shadow-lg w-96 bg-bg-1">
      <div className="absolute top-0 mr-10 text-lg font-medium transform -translate-x-1/2 -translate-y-10 w-80 left-1/2 text-col-4">
        Starting from 100 INR
      </div>
        <div className="ml-4">
          <div className="mb-1 text-3xl font-medium text-col-4">Toys</div>
          <div className="mb-4 text-lg font-medium text-col-4">Age (0-6)</div>
          <div className="flex items-center justify-between w-24 h-10 px-3 text-base font-bold rounded-lg text-col-4 bg-nav-2">
            <button className="">Explore</button>
            <FaGreaterThan className="mt-1" />
          </div>
        </div>
        <div className="absolute mt-1 -translate-y-1/2 bg-cover right-6 w-44 top-1/3 h-60 bg-img3" />
        
      </div>
    </div>
  );
}
