import React from "react";
import SectionTitle from "../SectionTitle";

const Prizes = () => {
  return (
    <div id="prizes" className="Prizes bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter">
      <SectionTitle>Prizes</SectionTitle>
      <div className="flex justify-around mt-10 flex-wrap text-center items-baseline">
        <div className="sm:w-[30%] w-[45%] flex flex-col items-center p-2 sm:order-1 order-2">
          <img src="./prizes/silver.png" alt="" className="w-[70%]" />
          <h3 className="sm:text-2xl text-xl font-semibold">Second Prize</h3>
          <h3 className="text-lg">₹4,000</h3>
        </div>
        <div className="sm:w-[35%] w-[80%] flex flex-col items-center sm:order-2 order-1 bg-[#440000] p-2">
          <img src="./prizes/gold.png" alt="" className="sm:w-[70%] w-[50%]" />
          <h3 className="sm:text-2xl text-xl font-semibold">First Prize</h3>
          <h3 className="text-lg">₹6,000</h3>
        </div>
        <div className="sm:w-[30%] w-[45%] flex flex-col items-center sm:order-3 order-3">
          <img src="./prizes/bronze.png" alt="" className="w-[70%] p-2" />
          <h3 className="sm:text-2xl text-xl font-semibold">Third Prize</h3>
          <h3 className="text-lg">₹2,000</h3>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
