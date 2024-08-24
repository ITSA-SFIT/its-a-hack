import React from "react";
import itsahackLogo from "./../logo.svg";
import SectionTitle from "../SectionTitle";

const TimelineCard = ({ reverse, date, time, event, description }) => {
  return (
    <div
      className={`relative flex mb-20 ${
        reverse === true ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-[50%] px-10 pt-4 ${
          reverse === true ? "text-left" : "text-right"
        }`}
      >
        <div>{date}</div>
        {time && <div>{time}</div>}
      </div>
      <div className="w-12 h-12 rounded-full bg-[#440000] absolute top-0 left-[50%] translate-x-[-50%] p-1.5 border-2 border-red-500">
        <img src={itsahackLogo} alt="" className="w-full" />
      </div>
      <div className="w-[50%] px-12">
        <div
          className={`bg-[#440000] ${
            reverse === true ? "text-left" : "text-left"
          } p-4 rounded-lg`}
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
  return (
    <div className="Timeline bg-gradient-to-r from-[#2b0303] to-[#000000] text-white px-28 py-8 font-inter">
      <SectionTitle>TIMELINE</SectionTitle>
      <div className="mt-10 relative pt-10">
        <div
          className="w-1 h-full absolute bg-red-600 top-0 bottom-0"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        ></div>
        <TimelineCard
          date={"28 August 2024"}
          time={"9:00 am"}
          event={"REGISTRATION STARTS"}
          description={
            "The registration for the ITS-A-Hack Hackathon will start."
          }
        />
        <TimelineCard
          date={"18 September 2024"}
          event={"REGISTRATION ENDS"}
          description={
            "The registration for the ITS-A-Hack Hackathon will start."
          }
          reverse
        />
        <TimelineCard
          date={"28 August 2024"}
          time={"9:00 am"}
          event={"REGISTRATION STARTS"}
          description={
            "The registration for the ITS-A-Hack Hackathon will start."
          }
        />
        <TimelineCard
          date={"18 September 2024"}
          event={"REGISTRATION ENDS"}
          description={
            "The registration for the ITS-A-Hack Hackathon will start."
          }
          reverse
        />
        <TimelineCard
          date={"28 August 2024"}
          time={"9:00 am"}
          event={"REGISTRATION STARTS"}
          description={
            "The registration for the ITS-A-Hack Hackathon will start."
          }
        />
        <TimelineCard
          date={"18 September 2024"}
          event={"REGISTRATION ENDS"}
          description={
            "The registration for the ITS-A-Hack Hackathon will start."
          }
          reverse
        />
      </div>
    </div>
  );
};

export default Timeline;
