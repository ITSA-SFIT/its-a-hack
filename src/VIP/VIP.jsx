import React from "react";
import SectionTitle from "../SectionTitle";
import SubSectionTitle from "../SubSectionTitle";
import Card from "./Card";

const VIP = () => {
  return (
    <div
      id="vip"
      className="VIP bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>VIP</SectionTitle>
      {/* <SubSectionTitle>Judges</SubSectionTitle>
      <div className="flex justify-around mt-4 gap-y-4 flex-wrap text-center items-stretch">
        
      </div> */}
      <SubSectionTitle>Mentors</SubSectionTitle>
      <div className="flex justify-around mt-4 gap-y-4 flex-wrap text-center items-stretch">
        <Card
          name="Chris Dias"
          imageSrc="./mentors/chris-dias.jpg"
          linkedinUrl="https://www.linkedin.com/in/chrisdias23/"
          githubUrl="https://github.com/chrisdias2311"
        />
        <Card
          name="Vighnesh Mestry"
          imageSrc="./mentors/vignesh-mestry.jpg"
          linkedinUrl="https://www.linkedin.com/in/vighnesh-mestry/"
          githubUrl="https://github.com/VighneshMestry"
        />
        <Card
          name="Mustafiz Ansari"
          imageSrc="./mentors/mustafiz-ansari.png"
          linkedinUrl="https://www.linkedin.com/in/mustafiz-ansari-b5b920249"
          githubUrl="https://github.com/mustafizzzz"
        />
        <Card
          name="Atmik Shetty"
          imageSrc=".\mentors\atmik-shetty.jpg"
          linkedinUrl="https://www.linkedin.com/in/atmik-shetty-b85448249"
          githubUrl="https://github.com/atmikshetty"
        />
      </div>
    </div>
  );
};

export default VIP;
