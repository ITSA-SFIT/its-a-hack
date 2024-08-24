import React from "react";
import SectionTitle from "../SectionTitle";

const Prizes = () => {
  return (
    <div className="bg-gradient-to-r h-dvh from-[#2b0303] to-[#000000] text-white px-28 py-8 font-inter">
      <SectionTitle>Prizes</SectionTitle>
      <div className="flex justify-around mt-10">
        <div className="w-[30%] flex flex-col items-center p-2">
          <img src="./prizes/silver.png" alt="" className="w-[70%]" />
          <h3 className="text-2xl font-semibold">Second Prize</h3>
          <h3>₹4,000</h3>
        </div>
        <div className="w-[35%] flex flex-col items-center bg-[#440000] p-2">
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
