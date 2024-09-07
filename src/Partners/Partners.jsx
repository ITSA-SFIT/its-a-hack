import React from "react";
import SectionTitle from "../SectionTitle";
import SubSectionTitle from "../SubSectionTitle";

const PartnerCard = ({src, alt}) => {
  return (
    <div className="sm:w-[30%] w-full px-2 flex justify-center items-center bg-red-950 py-4 rounded-lg">
      <img src={src} alt={alt} className="w-[70%]" />
    </div>
  );
};

const Partners = () => {
  return (
    <div
      id="partners"
      className="bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>Our Partners</SectionTitle>
      <SubSectionTitle>Platinum Partners</SubSectionTitle>
      <div className="flex justify-around mt-4 gap-y-4 flex-wrap text-center items-stretch">
        <PartnerCard src="./partners/Devfolio.png" alt="Devfolio" />
        <PartnerCard src="./partners/Polygon.svg" alt="Polygon" />
        <PartnerCard src="./partners/ETHIndia.png" alt="ETHIndia" />
      </div>
      <SubSectionTitle>Vouchers Partners</SubSectionTitle>
      <div className="flex justify-center gap-x-10 gap-y-4 mt-4 flex-wrap text-center items-stretch">
        <PartnerCard src="./partners/InterviewBuddy.png" alt="InterviewBuddy" />
        <PartnerCard src="./partners/SYBGEN.png" alt="SYBGEN" />
      </div>
    </div>
  );
};

export default Partners;
