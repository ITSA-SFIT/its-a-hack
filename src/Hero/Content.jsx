import React from "react";
import title from "./../title.svg";

const Content = () => {
  return (
    <div className="Front flex justify-center">
      <div className="max-w-[30rem] flex flex-col items-center">
        <h1 className="text-sm font-inter">ITSA PRESENTS</h1>
        <img src={title} alt="ITSAHACK" className="" />
        <h3 className="text-md font-inter text-center">
          Welcome to ‘ITS-A-Hack’! Get ready to test your code, push boundaries,
          and have some fun.
        </h3>
      </div>
    </div>
  );
};

export default Content;
