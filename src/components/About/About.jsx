import React from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import AboutDetails from "../AboutDetails/AboutDetails";
import SkillsSchema from "../SkillsSchema/SkillsSchema";

function About() {
  return (
    <div className="px-5 flex flex-col items-center  bg-[#0B0213] text-white relative w-screen max-w-7xl mx-auto pt-25">
      <ImageContainer />
      <AboutDetails />

      <SkillsSchema />
    </div>
  );
}

export default About;
