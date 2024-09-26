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
      <SubSectionTitle>Judges</SubSectionTitle>
      <div className="flex justify-around mt-4 gap-y-4 flex-wrap text-center items-stretch">
        <Card
          name="Parth Barai"
          imageSrc="./judges/parth-barai.jpg"
          linkedinUrl="https://www.linkedin.com/in/parth-barai/"
          githubUrl="https://github.com/ParthNBarai"
        />
        <Card
          name="Sahil Nirkhe"
          imageSrc="./judges/sahile-nirkhe.jpg"
          linkedinUrl="https://www.linkedin.com/in/sahil-nirkhe-0b7b3b1b4/"
          githubUrl="https://github.com/SAHILGAWLI"
        />
        <Card
          name="Obaid Khan"
          imageSrc="./judges/obaid-khan.jpeg"
          linkedinUrl="https://www.linkedin.com/in/obaid-khan-590489213"
          githubUrl="https://github.com/ObaidKhan625/"
        />
        <Card
          name="Parbat RajPurohit"
          imageSrc="./judges/parbat-rajpurohit.jpg"
          linkedinUrl="https://www.linkedin.com/in/parbat680"
          githubUrl="https://github.com/parbat680"
        />
        <Card
          name="Jaineel Mamotra"
          imageSrc="./judges/jaineel-mantora.jpg"
          linkedinUrl="https://linkedin.com/in/jaineel-mamtora"
          githubUrl="https://github.com/Jaineel-Mamtora"
        />
        <Card
          name="Karan Surve"
          imageSrc="./judges/karan-surve.jpg"
          linkedinUrl="https://linkedin.com/in/jaineel-mamtora"
          githubUrl="https://github.com/Jaineel-Mamtora"
        />
        <Card
          name="Viral Soni"
          imageSrc="./judges/viral-soni.jpeg"
          linkedinUrl="https://www.linkedin.com/in/viralsoni"
          githubUrl="https://github.com/V-Soni"
        />
        <Card
          name="Joshua Dsouza"
          imageSrc="./judges/joshua-dsouza.png"
          linkedinUrl="https://www.linkedin.com/in/xjosh/"
          githubUrl="https://github.com/GR4Yxx"
        />
        <Card
          name="Telcy Gomes"
          imageSrc="./judges/telcy-gomes.jpeg"
          linkedinUrl="http://linkedin.com/in/telcy-gomes-b97b721a9/"
          githubUrl="https://github.com/Telcy23"
        />
      </div>
      <SubSectionTitle>Mentors</SubSectionTitle>
      <div className="flex justify-center mt-4 gap-4 flex-wrap text-center items-stretch">
        <Card
        mentor
          name="Chris Dias"
          imageSrc="./mentors/chris-dias.jpg"
          linkedinUrl="https://www.linkedin.com/in/chrisdias23/"
          githubUrl="https://github.com/chrisdias2311"
        />
        <Card
        mentor
          name="Vighnesh Mestry"
          imageSrc="./mentors/vignesh-mestry.jpg"
          linkedinUrl="https://www.linkedin.com/in/vighnesh-mestry/"
          githubUrl="https://github.com/VighneshMestry"
        />
        <Card
        mentor
          name="Mustafiz Ansari"
          imageSrc="./mentors/mustafiz-ansari.png"
          linkedinUrl="https://www.linkedin.com/in/mustafiz-ansari-b5b920249"
          githubUrl="https://github.com/mustafizzzz"
        />
        <Card
        mentor
          name="Atmik Shetty"
          imageSrc=".\mentors\atmik-shetty.jpg"
          linkedinUrl="https://www.linkedin.com/in/atmik-shetty-b85448249"
          githubUrl="https://github.com/atmikshetty"
        />
        <Card
        mentor
          name="Deepika Muchhala"
          imageSrc=".\mentors\deepika-muchhala.jpg"
          linkedinUrl="https://www.linkedin.com/in/deepika-muchhala-a8002422b"
          githubUrl="https://github.com/deepika9103"
        />
        <Card
        mentor
          name="Shantanu Sakpal"
          imageSrc=".\mentors\shantanu-sakpal.jpg"
          linkedinUrl="https://www.linkedin.com/in/shantanu-sakpal-435846228/"
          githubUrl="https://github.com/shantanuSakpal"
        />
      </div>
    </div>
  );
};

export default VIP;
