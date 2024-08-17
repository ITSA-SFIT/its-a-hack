// import React, { useEffect } from "react";
import devfolioIcon from "./devfolio.svg";

const Devfolio = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://apply.devfolio.co/v2/sdk.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  // return (
  //   <div
  //     className="apply-button"
  //     data-hackathon-slug="YOUR-HACKATHON-SLUG"
  //     data-button-theme="dark"
  //     style={{ height: "44px", width: "312px" }}
  //   ></div>
  // );
  return (
    <div className="flex justify-center mt-10">
      <a href="https://www.google.com" className="flex items-center gap-2 font-semibold bg-gradient-to-br from-red-700 to-red-900 px-8 py-2 rounded-xl shadow-xl"
        style={{
          boxShadow: "inset 0 0 4px 0px rgba(0,0,0,0.5)"}}
      >
        <img src={devfolioIcon} alt="" className="w-8 h-8" />
        Apply with Devfolio
      </a>
    </div>
  );
};

export default Devfolio;
