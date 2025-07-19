import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-xl mx-auto space-y-4">
    <p className="font-medium sm:text-xl text-center text-gray">{text}</p>

    <div className="flex justify-center">
      <Link to={link}>
        <div
          className="bg-white/20 backdrop-blur-sm
        text-gray font-semibold
        rounded-md px-6 py-2
        hover:bg-white/40 hover:text-black
        transition duration-300 ease-in-out
        shadow-md cursor-pointer"
        >
          {btnText} ➡️
        </div>
      </Link>
    </div>
  </div>
);

const renderContent = {
  1: (
    <div className="bg-white/30 backdrop-blur-md rounded-md">
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blu py-4 px-8 text-gray mx-5">
        Hi I am <span className="font-semibold"> Nathan </span> 👋
        <br />A Computer Science Student from Indonesia who live in Germany.
      </h1>
    </div>
  ),
  2: (
    <InfoBox
      text="Studying at University of Applied Science Aachen, and learn so many skills"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Have made multiple projects. Curious about it?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
