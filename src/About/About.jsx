import React from "react";
import itsahackLogo from "./../logo.svg";
import itsahackTitle from "./../title.svg";
import SectionTitle from "../SectionTitle";
import "./About.css";

const HL = ({ children, glow }) => {
  return (
    <span className={`HL text-orange-600 font-semibold ${glow ? "glow" : ""}`}>
      {children}
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
          <p className="text-xl tracking-wide leading-7 text-justify">
            Welcome to <HL glow>ITS-A-Hack</HL>, a thrilling <HL glow>48-hour online hackathon</HL> where creativity meets technology! From <HL glow>September 27th to 29th, 2024</HL>, join us in a high-energy, virtual environment designed to foster innovation, collaboration, and cutting-edge solutions. Whether you're an <HL glow>AI/ML enthusiast</HL>, a <HL glow>health tech pioneer</HL>, a <HL glow>fintech visionary</HL>, a <HL glow>Web3 architect</HL>, or just love open innovation, there's a track for you.
          </p>
          <br />
          <p className="text-xl tracking-wide leading-7 text-justify">
            Throughout the event, participants will team up (<HL glow>1-4 members per team</HL>) to tackle real-world challenges, supported by top-notch mentors and engaging workshops. With ample networking opportunities, you'll connect with fellow tech enthusiasts and industry experts. Plus, exciting prizes await the most innovative solutions.
          </p>
        </div>
        <div className="hello md:flex flex-col justify-start hidden ml-10">
          <img src={itsahackLogo} alt="" className="w-64" />
          <img src={itsahackTitle} alt="" className="w-72" />
        </div>
      </div>
    </div>
  );
};

export default About;