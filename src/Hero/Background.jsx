import React from "react";
import { useGlobalContext } from "../context";

const BackgroundImage = ({ src, className, multiplier }) => {
  const { mousePos, windowSize } = useGlobalContext();
  let cord = {
    x: mousePos.x - windowSize.width / 2,
    y: mousePos.y - windowSize.height / 2,
  }
  return <img src={src} alt="" className={`absolute object-cover min-w-full min-h-full ${className}`}
    style={
      {
        willChange: "transform",
        transform: `translate(${cord.x * multiplier}%, ${cord.y * multiplier}%) scale(1.3)`,
    }}
   />;
};

const Background = () => {
  const { mousePos, windowSize } = useGlobalContext();
  console.log(mousePos, windowSize);
  return (
    <>
      <BackgroundImage
        src="./bg-objects.png"
        className="z-[-4]"
        multiplier={0.02}
      />
      <BackgroundImage
        src="./bg-texture.png"
        className="z-[-2]"
        multiplier={0.015}
      />
      <BackgroundImage
        src="./bg-plastic.png"
        className="z-[-1]"
        multiplier={0.005}
      />
      <div
        className="h-full w-full absolute z-[3] pointer-events-none"
        // style={{
        //   willChange: "background",
        //   background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(249,232,225,0.1), transparent 80%)`,
        // }}
      ></div>
    </>
  );
};

export default Background;
