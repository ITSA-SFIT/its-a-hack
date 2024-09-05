import React, { useEffect, useState, useRef } from "react";
import playIcon from "./play.svg";

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const answerRef = useRef(null);
  const cardRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (answerRef.current) {
      setHeight(isOpen ? `${answerRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);
  return (
    <div
      className="bg-[#440000] sm:px-8 px-4 py-4 rounded-lg mb-6 lg:w-[47%] w-full h-full"
      onClick={() => setIsOpen((prev) => !prev)}
      ref={cardRef}
    >
      <div className="font-semibold sm:text-xl text-xl flex items-center">
        <img
          src={playIcon}
          alt=""
          className="fill-red-500 sm:w-6 w-6 inline mr-3 transition-transform duration-300"
          style={{ transform: isOpen ? "rotateZ(90deg)" : "rotateZ(0deg)" }}
        />
        {question}
      </div>
      <div
        className="transition-all duration-300 overflow-y-hidden border-l-2 border-red-500 pl-4 sm:ml-4 ml-3"
        style={{ height: height, marginTop: isOpen ? "0.6rem" : "0" }}
        ref={answerRef}
      >
        {answer}
      </div>
    </div>
  );
};

export default FAQCard;
