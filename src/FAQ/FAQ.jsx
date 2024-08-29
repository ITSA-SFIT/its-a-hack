import React from "react";
import SectionTitle from "../SectionTitle";
import FAQCard from "./FAQCard";

const FAQlist = [
  {
    question: "What is ITS-A-Hack?",
    answer:
      "ITS-A-Hack is a 48-hour online coding competition for college students across India. Participants work in teams to solve challenges across various tracks.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>FAQ</SectionTitle>
      <div className="mt-10">
        {FAQlist.map(({ question, answer }, index) => (
          <FAQCard question={question} answer={answer} key={index}  />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
