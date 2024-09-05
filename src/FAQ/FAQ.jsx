import React from "react";
import SectionTitle from "../SectionTitle";
import FAQCard from "./FAQCard";

const FAQlist = [
  {
    question: "What is ITS-A-Hack?",
    answer:
      "ITS-A-Hack is a 48-hour online coding competition for college students across India. Participants work in teams to solve challenges across various tracks.",
  },
  {
    question: "Who can participate?",
    answer:
      "All college students with a valid college ID card can participate in ITS-A-Hack.",
  },
  {
    question: "Are there any registration fees?",
    answer: "No, ITS-A-Hack is completely free for all participants.",
  },
  // {
  //   question: "How do I register?",
  //   answer:
  //     "Registration is done through Devfolio. You need to apply with your team or as an individual on the Devfolio platform.",
  // },
  // {
  //   question: "What tracks are available in the competition?",
  //   answer:
  //     "The hackathon includes tracks like AI/ML, Health Tech, FinTech, Web3, and Open-Innovation.",
  // },
  {
    question: "How long is the competition?",
    answer:
      "The hackathon runs for 48 hours, starting from the official kickoff time.",
  },
  {
    question: "How will the competition be judged?",
    answer:
      "The competition will be judged by industry experts who will evaluate the projects based on criteria such as innovation, technical execution, and impact.",
  },
  {
    question: "What do I need to participate?",
    answer:
      "A computer/laptop and a stable internet connection. Make sure to register through Devfolio before the deadline.",
  },
  {
    question: "Can we use external libraries or APIs?",
    answer: "Yes, you can use external libraries or APIs.",
  },
  {
    question: "Are there any guidelines or rules for the competition?",
    answer:
      "Yes, detailed guidelines and rules will be provided upon registration. Make sure to review them to ensure compliance.",
  },

  {
    question: "Will participants receive any certificates?",
    answer:
      "Yes, all participants will receive a participation certificate for their involvement in the hackathon.",
  },

  {
    question: "What certificates are awarded to the winners?",
    answer:
      "The top three winning teams will receive merit certificates for 1st, 2nd, and 3rd place, respectively.",
  },

  // {
  //   question: "Are there any additional prizes for the winners?",
  //   answer:
  //     "Yes, in addition to the merit certificates, the winners will receive exciting gifts.",
  // },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>FAQ</SectionTitle>
      <div className="mt-10 flex flex-wrap justify-evenly">
        {FAQlist.map(({ question, answer }, index) => (
          <FAQCard question={question} answer={answer} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
