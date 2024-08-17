import React from "react";

const NavLink = ({ href, title }) => {
  return <a className="text-slate-100 text-sm font-semibold font-inter text-center" href={href}>{title}</a>;
};

export default NavLink;
