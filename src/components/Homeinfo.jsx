import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi , I am <span className="font-semibold">Gayathri</span>👋🏻
      <br />A  passionate third-year student  from India
    </h1>
  ),
  2: (
    <InfoBox
      text="Curious and driven, I'm a tech enthusiast who has completed my second year, passionate about mastering new skills. Click to learn more about my journey!"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text=" Working on different projects and gaining skills along the way"
      link="/projects"
      btnText="Visit My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Seeking collaboration on exciting projects or in need of a developer? Just a few keystrokes away from turning ideas into reality!"
      link="/contact"
      btnText="Let's Talk"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
