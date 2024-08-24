import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import { useGlobalContext } from "./context";
import About from "./About/About";
import Timeline from "./Timeline/Timeline";
import Loading from "./Loading/Loading";
import Domain from "./Domain/Domain";
import Prizes from "./Prizes/Prizes";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      console.log("DOM, images, and external resources are fully loaded");
      setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const windowRef = useRef(null);
  const { setWindowSize, setMobile } = useGlobalContext();

  useEffect(() => {
    const updateSize = () => {
      if (windowRef.current) {
        setWindowSize({
          width: windowRef.current.offsetWidth,
          height: windowRef.current.offsetHeight,
        });
        if (
          windowRef.current.offsetWidth < 768 ||
          windowRef.current.offsetHeight * 1.5 > windowRef.current.offsetWidth
        ) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="App font-inter" ref={windowRef}>
      <Loading isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <Hero isLoaded={isLoaded} />
          <About />
          {/* <Timeline /> */}
          <Domain />
          <Prizes />
        </>
      )}
    </div>
  );
}

export default App;
