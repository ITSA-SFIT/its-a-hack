import React from "react";
import SectionTitle from "../SectionTitle";

const Prizes = () => {
  return (
    <div className="bg-gradient-to-r h-dvh from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter">
      <SectionTitle>Prizes</SectionTitle>
      <div className="flex justify-around mt-10 flex-wrap text-center">
        <div className="w-[30%] flex flex-col sm:order-1 order-2 items-center p-2">
          <img src="./prizes/silver.png" alt="" className="w-[70%]" />
          <h3 className="text-2xl font-semibold">Second Prize</h3>
          <h3>₹4,000</h3>
        </div>
        <div className="sm:w-[35%] w-[80%] flex flex-col items-center bg-[#440000] p-2">
          <img src="./prizes/gold.png" alt="" className="w-[70%]" />
          <h3 className="text-2xl font-semibold">First Prize</h3>
          <h3>₹6,000</h3>
        </div>
        <div className="w-[30%] flex flex-col items-center">
          <img src="./prizes/bronze.png" alt="" className="w-[70%] p-2" />
          <h3 className="text-2xl font-semibold">Third Prize</h3>
          <h3>₹2,000</h3>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
