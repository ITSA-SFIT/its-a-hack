import React, {useState, useEffect} from "react";

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
  const hackStart = new Date("2024-09-25T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(hackStart - new Date().getTime());

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = hackStart - now;
      setTimeLeft(timeDiff > 0 ? timeDiff : 0);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [hackStart]);

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="text-center">
      <span>Registration ends in</span>
      <div className="flex justify-center mt-4">
        <div className="flex sm:gap-2 gap-1 text-3xl font-bold items-baseline">
          <TimeCube time={days} label="Days" />:
          <TimeCube time={hours} label="Hours" />:
          <TimeCube time={minutes} label="Minutes" />:
          <TimeCube time={seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default Timer;
