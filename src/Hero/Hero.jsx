import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Background from "./Background";
import { useGlobalContext } from "../context";
import Timer from "./Timer";
import Devfolio from "./Devfolio";

const Hero = ({ isLoaded }) => {
  const { setMousePos } = useGlobalContext();

  return (
    <div
      className="Hero text-white h-dvh flex flex-col relative overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <Background />
      {isLoaded && (
        <>
          <Navbar />
          <div className="grow flex flex-col justify-around gap-y-4 pb-10">
            <Content />
            <Timer />
            <Devfolio />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
