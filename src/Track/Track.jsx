import React from "react";
import SectionTitle from "../SectionTitle";

const TrackCard = ({ title, img }) => {
  return (
    <div className="DomainCard flex flex-col items-center h-full rounded-lg justify-baseline md:w-[20%] w-[40%] aspect-square transition-colors duration-300">
      <img src={img} alt="" className="w-[90%]" />
      <h3 className="text-xl font-semibold text-center my-2">{title}</h3>
    </div>
  );
};

const Track = () => {
  return (
    <div
      id="track"
      className="Track bg-gradient-to-r from-[#2b0303] to-[#000000] text-white lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>TRACK</SectionTitle>
      <div className="flex mt-10 justify-evenly gap-4 gap-y-8 flex-wrap items-baseline">
        <TrackCard
          title="Health Tech"
          img={"./tracks/health-tech.png"}
        />
        <TrackCard
          title="Fintech"
          img={"./tracks/fintech.png"}
        />
        <TrackCard
          title="Edtech"
          img={"./tracks/edutech.png"}
        />
        <TrackCard
          title="Logistics"
          img={"./tracks/logistics.png"}
        />
        <TrackCard
          title="E-commerce"
          img={"./tracks/ecommerce.png"}
        />
        <TrackCard
          title="Open Innovation"
          img={"./tracks/open-innovation.png"}
        />
      </div>
    </div>
  );
};

export default Track;