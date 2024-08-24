import React from "react";
import itsahackLogo from "./../logo.svg";
import itsahackTitle from "./../title.svg"
import SectionTitle from "../SectionTitle";

const HL = ({ children }) => {
  return (
    <span className=" text-orange-600 font-semibold"> {children} </span>
  )
}

const About = () => {
  return (
    <div id="about" className="About bg-gradient-to-r from-[#2b0303] to-[#000000] text-white px-28 py-8 font-inter">
      <SectionTitle>ABOUT</SectionTitle>
      <div className="flex md:flex-row flow-col items-center">
        <div className="md:w-[70%] pr-28">
          <p className="text-xl tracking-wide leading-7">
            <HL>ITS-A-Hack</HL> is a 48-hour online coding competition. It is an
            <HL>inter-college</HL> competition, participants from colleges across India
            can apply in groups of 3-4. All applications will be reviewed and
            top 25 groups will be selected. It will be hosted on Devfolio. There
            will be various tracks like AI/ML, Health Tech, FinTech, Web3,
            Open-Innovation. The competition will be judged by industry experts.
            We are expecting 500+ participants in the event.
          </p>
        </div>
        <div className="hello">
          <img src={itsahackLogo} alt="" className="h-80" />
          <img src={itsahackTitle} alt="" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default About;
