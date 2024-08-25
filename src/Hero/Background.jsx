import React from "react";
import { useGlobalContext } from "../context";

const BackgroundImage = ({ src, className, multiplier }) => {
  const { mousePos, windowSize, mobile } = useGlobalContext();
  let cord = {
    x: mousePos.x - windowSize.width / 2,
    y: mousePos.y - windowSize.height / 2,
  };
  let mouseMove = {
    x: (cord.x * 2) / windowSize.width,
    y: (cord.y * 2) / windowSize.height,
  };
  return (
    <img
      src={src}
      alt=""
      className={`absolute object-cover min-w-full min-h-full ${className} ${mobile ? "" : "top-[50%]"}`}
      style={
        !mobile ? {
          willChange: "transform",
          transform: `translateY(-50%) translate(${multiplier*100*mouseMove.x/2}%, ${
            multiplier*100*mouseMove.y/2
          }%) scale(${1+multiplier})`,
          transformOrigin: "center",
        } : {}
      }
    />
  );
};

const Background = () => {
  return (
    <>
      <BackgroundImage
        src="./bg-objects.png"
        className="z-[-4]"
        multiplier={0.3}
      />
      <BackgroundImage
        src="./bg-texture.png"
        className="z-[-2]"
        multiplier={0.2}
      />
      <BackgroundImage
        src="./bg-plastic.png"
        className="z-[-1]"
        multiplier={0.1}
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
