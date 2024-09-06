import React from "react";
import SectionTitle from "../SectionTitle";
import SubSectionTitle from "../SubSectionTitle";

const Partners = () => {
  return (
    <div id="partners" className="bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter">
      <SectionTitle>Our Partners</SectionTitle>
      <SubSectionTitle>Platinum Partners</SubSectionTitle>
      <div className="flex justify-around mt-10 flex-wrap text-center items-baseline">
        <div className="sm:w-[30%] w-full flex flex-col items-center p-2 sm:mb-5 mb-5">
          <img src="./partners/Devfolio.png" alt="Devfolio" className="w-[70%] sm:block hidden" />
          <img src="./partners/Devfolio.png" alt="Devfolio" className="w-[70%] sm:hidden block" />
        </div>
        <div className="sm:w-[30%] w-full flex flex-col items-center p-2 sm:mb-5 mb-5">
          <img src="./partners/Polygon.svg" alt="Polygon" className="w-[70%] sm:block hidden" />
          <img src="./partners/Polygon.svg" alt="Polygon" className="w-[70%] sm:hidden block" />
        </div>
        <div className="sm:w-[30%] w-full flex flex-col items-center p-2 sm:mb-5 mb-5">
          <img src="./partners/ETHIndia.png" alt="ETHIndia" className="w-[70%] sm:block hidden" />
          <img src="./partners/ETHIndia.png" alt="ETHIndia" className="w-[70%] sm:hidden block" />
        </div>
      </div>
      <SubSectionTitle>Vouchers Partners</SubSectionTitle>
      <div className="flex justify-around mt-10 flex-wrap text-center items-baseline">
        <div className="sm:w-[30%] w-full flex flex-col items-center p-2 sm:mb-5 mb-5">
          <img src="./partners/InterviewBuddy.png" alt="InterviewBuddy" className="w-[70%] sm:block hidden" />
          <img src="./partners/InterviewBuddy.png" alt="InterviewBuddy" className="w-[70%] sm:hidden block" />
        </div>
        <div className="sm:w-[30%] w-full flex flex-col items-center p-2 sm:mb-5 mb-5">
          <img src="./partners/SYBGEN.png" alt="SYBGEN" className="w-[70%] sm:block hidden" />
          <img src="./partners/SYBGEN.png" alt="SYBGEN" className="w-[70%] sm:hidden block" />
        </div>
      </div>
    </div>
  );
};

export default Partners;