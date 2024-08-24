import React from "react";

const TimeCube = ({ time, label }) => {
  return (
    <div className="flex w-16 h-16 sm:w-20 sm:h-20 flex-col rounded-xl justify-center shadow-inner items-center grow bg-gradient-to-b from-red-600 to-black"
    style={{
      boxShadow: "inset 0 0 10px 2px rgba(0,0,0,0.5)",
    }}>
      <span className="sm:text-5xl text-3xl font-normal digital leading-7 tracking-wider">{time < 10 && "0"}{time}</span>
      <span className="sm:text-sm text-xs font-normal">{label}</span>
    </div>
  );
};

const Timer = () => {
  return (
    <div className="text-center">
      <span>28th-29th September 2024</span>
      <div className="flex justify-center mt-4">
      <div className="flex sm:gap-2 gap-1 text-3xl font-bold items-baseline">
        <TimeCube time={0} label="Days" />:
        <TimeCube time={0} label="Hours" />:
        <TimeCube time={0} label="Minutes" />:
        <TimeCube time={0} label="Seconds" />
      </div>        
      </div>
    </div>
  );
};

export default Timer;
