import React from "react";
import SectionTitle from "../SectionTitle";
import "./LeaderBoard.css";

const Card = ({ rank, name }) => {
  const title = rank === 1 ? "goldGlow" : rank === 2 ? "silverGlow" : rank <= 10 ? "glassMorphism whiteGlow" : "";
  return (
    <div className="flex justify-center gap-6 h-14 ubuntu-medium">
      <div className="w-14">
        <div className={`flex justify-center items-center h-full ${title} text-2xl font-bold rounded-lg`}>#{rank}</div>
      </div>
      <h1 className={`grow flex justify-center items-center h-full ${title} text-2xl font-bold rounded-lg`}>{name}</h1>
    </div>
  );
};

const LeaderBoard = () => {
  return (
    <div
      id="prizes"
      className="Prizes bg-gradient-to-r from-[#2b0303] to-[#000000] text-white/70 lg:px-28 sm:px-20 px-6 py-8 font-inter"
    >
      <SectionTitle>Initial Judging Round Leaderboard</SectionTitle>
      <div className="flex justify-center mt-10 flex-wrap text-center items-baseline">
        <div className="w-[30rem] flex flex-col gap-8">
          <Card rank={1} name="Team 1" />
          <Card rank={2} name="Team 1" />
          <Card rank={3} name="Team 1" />
          <Card rank={4} name="Team 1" />
          <Card rank={5} name="Team 1" />
          <Card rank={6} name="Team 1" />
          <Card rank={7} name="Team 1" />
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
