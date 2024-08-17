import { createContext, useContext, useState } from "react";

const globalContext = createContext();

export const useGlobalContext = () => useContext(globalContext);

export const GlobalProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: null, y: null });
  const [mobile, setMobile] = useState(null);

  return (
    <globalContext.Provider
      value={{
        windowSize,
        setWindowSize,
        mousePos,
        setMousePos,
        mobile,
        setMobile,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
