import React from "react";

const NavLink = ({ href, title }) => {
  return <a className="hubert text-slate-100 sm:text-sm text-xs font-semibold font-inter text-center tracking-wider" href={href}>{title}</a>;
};

export default NavLink;
