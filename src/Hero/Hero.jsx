import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Background from "./Background";
import { useGlobalContext } from "../context";
import Timer from "./Timer";
import Devfolio from "./Devfolio";

const Hero = () => {
  const { setMousePos } = useGlobalContext();

  return (
    <div
      className="Hero text-white h-dvh flex flex-col relative overflow-hidden"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
    >
      <Background />
      <Navbar />
      <Content />
      <Timer />
      <Devfolio />
    </div>
  );
};

export default Hero;
