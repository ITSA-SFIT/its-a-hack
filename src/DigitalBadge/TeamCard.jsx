import React from "react";

const MemberCard = ({ name, active, setMember }) => {
  const [firstName, lastName] = name.toUpperCase().split(" ");
  return (
    <div className={`glassMorphism transition-all flex p-4 py-2 items-center gap-4 rounded-xl cursor-pointer ${active && "active"}`} onClick={() => setMember(name)}>
      {/* <img src="badge_logo.png" alt="" className="w-10" /> */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 25C6.66974 21.9032 10.6338 20 15 20C19.3663 20 23.3303 21.9032 26.25 25M20.625 9.375C20.625 12.4816 18.1066 15 15 15C11.8934 15 9.375 12.4816 9.375 9.375C9.375 6.2684 11.8934 3.75 15 3.75C18.1066 3.75 20.625 6.2684 20.625 9.375Z"
          stroke="white"
          stroke-opacity="0.9"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h2 className="grow text-wrap font-bold text-xl leading-6 text-center">
        {firstName}
        <br />
        {lastName}
      </h2>
    </div>
  );
};

const TeamCard = ({data, activeMember, setMember}) => {
  return (
    <div className="text-white/90 w-72 ubuntu-regular">
      <div className="glassMorphism flex p-4 py-2 items-center gap-4 rounded-xl">
        <img src="badge_logo.png" alt="" className="w-12" />
        <h2 className="grow text-wrap font-bold text-2xl leading-6 text-center">
          {data.teamName}
        </h2>
      </div>
      <div className="mt-3 flex flex-col gap-3 ml-8">
      {
        data.members.map((member, index) => (
          <MemberCard key={index} name={member} active={activeMember === member} setMember={setMember}/>
        ))
      }
      </div>
    </div>
  );
};

export default TeamCard;
