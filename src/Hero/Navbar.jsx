import React from "react";
import NavLink from "./NavLink";
import itsahackLogo from "./itsahack.svg";

const Navbar = () => {
  return (
    <nav className="Navbar flex justify-between p-6 items-center">
      <img src="./itsa-logo.png" alt="" className="w-12 h-12 hidden md:block" />
      <div className="flex gap-4 font grow justify-center">
        <NavLink href={"#"} title={"ABOUT US"} />
        <NavLink href={"#"} title={"TRACKS"} />
        <NavLink href={"#"} title={"PARTNERS"} />
        <NavLink href={"#"} title={"RULES"} />
        <NavLink href={"#"} title={"TEAM"} />
      </div>
      <img className="w-12 h-12 hidden md:block" src={itsahackLogo} alt="itsahack logo"/>
    </nav>
  );
};

export default Navbar;
