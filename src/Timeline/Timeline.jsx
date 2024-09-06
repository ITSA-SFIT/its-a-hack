import React from "react";
import itsahackLogo from "./../logo.svg";
import SectionTitle from "../SectionTitle";
import { useGlobalContext } from "../context";
import schedule from "./schedule.js";

const TimelineCard = ({ reverse, date, time, event, description }) => {
  const { windowSize } = useGlobalContext();
  const mobile = windowSize.width < 640;
  return (
    <div
      className={`relative flex sm:mb-14 mb-10 ${
        reverse === true ? "flex-row-reverse" : ""
      }`}
    >
      {!mobile && (
        <div
          className={`w-[50%] pt-4 ${
            reverse === true ? "text-left pl-10" : "text-right pr-10"
          }`}
        >
          <div>{date}</div>
          {time && <div>{time}</div>}
        </div>
      )}
      <div
        className={`w-12 h-12 rounded-full bg-[#440000] absolute top-0 p-1.5 border-2 mt-2 border-red-500 translate-x-[-50%] ${
          !mobile ? "left-[50%]" : "left-[2.5rem]"
        }`}
      >
        <img src={itsahackLogo} alt="" className="w-full" />
      </div>
      <div
        className={`${reverse === true ? "pr-12" : "pl-12"} ${
          !mobile ? "w-[50%]" : "w-full pl-20"
        }`}
      >
        {mobile && (
          <p className="mb-2">
            {date}
            {time && " | "}
            {time}
          </p>
        )}
        <div
          className={`bg-[#440000] ${
            reverse === true ? "text-left" : "text-left"
          } rounded-lg p-4`}
        >
          <h3 className="text-xl font-bold mb-2">{event}</h3>
          <p className="text-sm pl-1 ml-1 border-l-red-600 border-l-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const { windowSize } = useGlobalContext();
  const mobile = windowSize.width < 640;
  return (
    <div
      id="timeline"
      className="Timeline bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>TIMELINE</SectionTitle>
      <div className="mt-10 relative pt-10">
        <div
          className="w-1 h-full absolute bg-red-600 top-0 bottom-0"
          style={{
            left: !mobile ? "50%" : "2.5rem",
            transform: "translateX(-50%)",
          }}
        ></div>
        {schedule.map((event, index) => {
          return (
            <TimelineCard
              key={index}
              date={event.date}
              time={event.time}
              event={event.event}
              description={event.description}
              reverse={index % 2 === 0 && !mobile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
