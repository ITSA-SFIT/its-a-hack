import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import { useGlobalContext } from "./context";
import About from "./About/About";
import Loading from "./Loading/Loading";
import Domain from "./Domain/Domain";
import Prizes from "./Prizes/Prizes";
import Timeline from "./Timeline/Timeline"
import Footer from "./Footer/Footer";
import FAQ from "./FAQ/FAQ";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkIfLoaded = () => {
      if (document.readyState === "complete") {
        // DOM and resources (including images) are fully loaded
        setIsLoaded(true);
      } else {
        // Fallback: add an event listener to handle when loading is complete
        window.addEventListener("load", () => setIsLoaded(true));
      }
    };

    checkIfLoaded();

    return () => {
      window.removeEventListener("load", () => setIsLoaded(true));
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
  }, [setMobile, setWindowSize]);
  

  return (
    <div className="App font-inter min-h-dvh min-w-full">
      <div className="h-dvh w-dvw fixed top-0 left-0 pointer-events-none opacity-0 z-[-1000]" ref={windowRef}></div>
      <Loading isLoaded={isLoaded} />
      <div className={isLoaded ? "" : "hidden pointer-events-none fixed"}>
        <Hero isLoaded={isLoaded} />
        <About />
        <Timeline />
        <Domain />
        <Prizes />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
