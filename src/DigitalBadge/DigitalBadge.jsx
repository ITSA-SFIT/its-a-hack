import React, { useRef, useState, useEffect } from "react";
import "./DigitalBadge.css";
import Badge from "./Badge";
import TeamCard from "./TeamCard";
import html2canvas from "html2canvas";
import data from "./teamData";
import SectionTitle from "../SectionTitle";

const DigitalBadge = ({ team, setTeam }) => {
  const cardRef = useRef(null);
  const pageRef = useRef(null);
  const [member, setMember] = useState(data[team].members[0]);

  useEffect(() => {
    setMember(data[team].members[0]);
  }, [team]);

  const handleChange = (e) => {
    setTeam(e.target.value);
    console.log(e.target.value);
  };

  const saveCard = async () => {
    const element = cardRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const saveWholePage = async () => {
    const element = pageRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div className="DigitalBadge flex-col justify-center  bg-gradient-to-r from-[#2b0303] to-[#000000] items-center p-2 lg:px-28 sm:px-20 hidden sm:flex">
      <div className="yoho text-white w-full font-inter">
        <div className="mt-6">
          <SectionTitle>DIGITAL BADGE</SectionTitle>
        </div>

        <div className="flex justify-center gap-4 mt-6 mb-4">
          <select
            className="text-white bg-black glassMorphism text-xl rounded-full px-4"
            name=""
            id=""
            onChange={handleChange}
          >
            {data.map((team, index) => (
              <option key={index} value={index} className="bg-[#651806]">
                {team.teamName}
              </option>
            ))}
          </select>
          <button
            className="btn-primary text-white flex h-12 glassMorphism rounded-full leading-4 items-center w-36 justify-center gap-2"
            onClick={saveCard}
          >
            <span className="material-symbols-rounded text-4xl">download</span>
            <p className="text-2xl">Badge</p>
          </button>
          <button
            className="btn-primary text-white flex h-12 glassMorphism rounded-full leading-4 items-center w-36  justify-center gap-2"
            onClick={saveWholePage}
          >
            <span className="material-symbols-rounded text-4xl">download</span>
            <p className="text-2xl">Page</p>
          </button>
        </div>
      </div>
      <span className="h-full bg-black rounded-3xl">
        <div className="h-full p-4 bg-black m-2" ref={pageRef}>
        <div className="BgGradient h-full relative">
          <img src="./hacker_bg.png" alt="" className="h-full" />
          <div className="absolute top-0 left-0 h-full w-full flex justify-between items-center">
            <Badge data={data[team]} member={member} />
            <div className="fixed opacity-0">
              <div className="p-2 bg-black" ref={cardRef}>
                <div
                  className="rounded-xl"
                  style={{
                    backgroundImage: "url('./download_bg.png')",
                    backgroundSize: "auto 110%",
                    backgroundPosition: "center center",
                  }}
                >
                  <Badge
                    data={data[team]}
                    style={{ backgroundColor: "rgba(255, 0,0,0.2)" }}
                    member={member}
                  />
                </div>
              </div>
            </div>
            <TeamCard
              data={data[team]}
              activeMember={member}
              setMember={setMember}
            />
          </div>
        </div>
      </div>
      </span>
      
    </div>
  );
};

export default DigitalBadge;
