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
    <div id="about" className="About bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter">
      <SectionTitle>ABOUT</SectionTitle>
      <div className="flex md:flex-row flow-col items-center mt-10">
        <div className="md:w-[80%] sm:pr-10">
          <p className="text-xl tracking-wide leading-7">
            <HL>ITS-A-Hack</HL> is a <HL>48-hour online coding competition</HL>. It is an
            <HL>inter-college competition</HL>, participants from colleges across India
            can apply in <HL>groups of 3-4</HL>. All applications will be reviewed and
            <HL>top 25 groups</HL> will be selected. It will be hosted on <HL>Devfolio</HL>. There
            will be various tracks like <HL>AI/ML, Health Tech, FinTech, Web3,
            Open-Innovation</HL>. The competition will be judged by <HL>industry experts</HL>.
            We are expecting <HL>500+ participants</HL> in the event.
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
