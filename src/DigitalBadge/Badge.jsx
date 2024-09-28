import React from "react";

const Badge = ({ data, member, style = {} }) => {
  return (
    <div
      className="Badge glassMorphism rounded-xl text-white/90 w-64 aspect-[2/3] pb-4 flex flex-col z-20"
      style={style}
    >
      <div className="flex justify-between items-end border-b border-red-300/30 px-4">
        <div className="grow border-r border-red-300/30 mr-2 pb-2 pt-7">
          <img src="./badge_title.png" alt="" className="w-24" />
        </div>
        <img src="./badge_logo.png" alt="" className="w-10 mb-1" />
      </div>
      <div className="grow flex flex-col justify-center">
        <h1 className="text-4xl px-4 ubuntu-medium">
          {member.split(" ")[0]}
          <br />
          {member.split(" ")[1]}
        </h1>
        <p className="text-xs px-4 mt-2 roboto-regular">Team: {data.teamName}</p>{" "}
        <h2 className="text-2xl mt-2 font-semibold  border-y py-2 px-4 border-red-300/30 alatsi-regular">
          HACKER
        </h2>
      </div>
      <div className="flex justify-between ubuntu-regular">
        <div className="flex flex-col justify-between grow">
          <p className="text-xs px-4">
            Valid for: <br />
            27 to 29 Sep, 2024
          </p>
          <hr className="border-red-300/30" />
          <p className="text-xs px-4">
            Issued by: <br />
            ITSA, SFIT
          </p>
        </div>
        <img
          src="badge_qr.png"
          alt=""
          className="w-[5rem] rounded-md mix-blend-screen border-[1.5px] border-red-300/30 mr-4"
        />
      </div>
    </div>
  );
};

export default Badge;
