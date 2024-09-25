import React from "react";
import SectionTitle from "../SectionTitle";
import title from "../title.svg"

const ProblemStatementCard = () => {
  return (
    <div className="bg-red-950 flex-col p-4 aspect-square blur-sm inline-block m-2 w-64">
      Don't inspect the code, it's just a placeholder. The actual problem
      statement will be provided on the day of the event.
    </div>
  );
};

const ProblemStatement = () => {
  return (
    <div
      id="ProblemStatement"
      className="bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>Problem Statement</SectionTitle>
      <div className="flex relative justify-around mt-10 gap-8 text-center items-baseline flex-wrap">
        <ProblemStatementCard />
        <ProblemStatementCard />
        <ProblemStatementCard />
        <h3 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl w-full font-semibold text-gray-200 flex items-center gap-2 justify-center flex-wrap">
          Problem Statement will be provided 24 hours before<img src={title} alt="" className="h-[1.6rem] inline"/>starts
        </h3>
      </div>
    </div>
  );
};

export default ProblemStatement;
