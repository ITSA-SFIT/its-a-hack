import React from "react";
import itsahackLogo from "./../logo.svg";
import itsahackTitle from "./../title.svg";
import SectionTitle from "../SectionTitle";
import "./About.css"

const HL = ({ children, glow }) => {
  return (
    <span
      className={`HL text-orange-600 font-semibold ${glow ? "glow" : ""}`}
    >
      {" "}
      {children}{" "}
    </span>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="About bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>ABOUT</SectionTitle>
      <div className="scroll-in flex md:flex-row flow-col items-center mt-10">
        <div className="md:w-[80%] sm:pr-10">
          <p className="text-xl tracking-wide leading-7">
            <HL glow>ITS-A-Hack</HL> is a <HL glow>48-hour online coding competition</HL>.
            It is an
            <HL glow>inter-college competition</HL>, participants from colleges
            across India can apply in <HL>solo</HL> or <HL>groups of 3-4</HL>. It will be hosted on{" "}
            <HL>Devfolio</HL>. There will be various tracks like{" "}
            <HL>AI/ML, Health Tech, FinTech, Web3, Open-Innovation</HL>. The
            competition will be judged by <HL>industry experts</HL>. We are
            expecting <HL glow>500+ participants</HL> in the event.
          </p>
        </div>
        <div className="hello md:flex flex-col justify-start hidden">
          <img src={itsahackLogo} alt="" className="w-64" />
          <img src={itsahackTitle} alt="" className="w-72" />
        </div>
      </div>
    </div>
  );
};

export default About;
