import React from "react";
import SectionTitle from "../SectionTitle";

const DomainCard = ({ title, img }) => {
  return (
    <div className="DomainCard flex flex-col items-center h-full rounded-lg justify-baseline md:w-[20%] w-[40%] aspect-square border-2 border-transparent hover:border-red-500 transition-colors duration-300">
      <img src={img} alt="" className="w-[90%]" />
      <h3 className="text-xl font-semibold text-center my-2">{title}</h3>
    </div>
  );
};

const Domain = () => {
  return (
    <div
      id="domain"
      className="Domain bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>DOMAIN</SectionTitle>
      <div className="flex mt-10 justify-evenly gap-4 flex-wrap items-baseline">
        <DomainCard
          title="AI/ML"
          img={"./domain/aiml.png"}
        />
        <DomainCard
          title="Web/App"
          img={"./domain/webapp.png"}
        />
        <DomainCard
          title="Blockchain"
          img={"./domain/blockchain.png"}
        />
        <DomainCard
          title="Open Innovation"
          img={"./domain/open-innovation.png"}
        />
      </div>
    </div>
  );
};

export default Domain;
