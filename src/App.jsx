import React, { useRef, useEffect } from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import { useGlobalContext } from "./context";
import About from "./About/About";

function App() {
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
      <Hero />
      <About />
    </div>
  );
}

export default App;
