import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Hero from "./Hero/Hero";
import { useGlobalContext } from "./context";
import About from "./About/About";
import Loading from "./Loading/Loading";
import Domain from "./Domain/Domain";
import Prizes from "./Prizes/Prizes";
import Timeline from "./Timeline/Timeline";
import Footer from "./Footer/Footer";
import FAQ from "./FAQ/FAQ";
import Partners from "./Partners/Partners";
import VIP from "./VIP/VIP";
import ProblemStatement from "./ProblemStatement/ProblemStatement";
import Track from "./Track/Track";

const MainPage = ({ isLoaded }) => (
  <>
    <Hero isLoaded={isLoaded} />
    <About />
    <Timeline />
    <Domain />
    <Track />
    <ProblemStatement />
    <Prizes />
    <VIP />
    {/* <Judges />
    <Mentors /> */}
    <Partners />
    <FAQ />
    <Footer />
  </>
);

const RedirectToGithubForm = () => {
  useEffect(() => {
    window.location.href = "https://forms.gle/kLF7RepkvY5mK6VB8";
  }, []);

  return null;
};

const RedirectToPSForm = () => {
  useEffect(() => {
    window.location.href = "https://forms.gle/55UkjabJhEPYY4bn7";
  }, []);

  return null;
};

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
    <Router>
      <div className="App font-inter min-h-dvh min-w-full">
        <div className="h-dvh w-dvw fixed top-0 left-0 pointer-events-none opacity-0 z-[-1000]" ref={windowRef}></div>
        <Loading isLoaded={isLoaded} />
        <div className={isLoaded ? "" : "hidden pointer-events-none fixed"}>
          <Routes>
            <Route path="/" element={<MainPage isLoaded={isLoaded} />} />
            <Route path="/githubform" element={<RedirectToGithubForm />} />
            <Route path="/psform" element={<RedirectToPSForm />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;