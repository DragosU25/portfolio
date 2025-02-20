import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/img.png";
import arrow from "../../assets/Arrow.png";

const ImageContainer = () => {
  return (
    <section className="relative flex flex-col-reverse gap-4 md:flex-row items-center justify-center p-6 md:p-12  text-white">
      <PurpleGradient />
      <ProfileContent />
      <Avatar />
    </section>
  );
};

// Background Gradient Effect
const PurpleGradient = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-purple-700 rounded-xl to-transparent opacity-15 pointer-events-none"></div>
  );
};

// Avatar with laptop component
const Avatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <img
        src={img}
        alt="Avatar"
        className="w-[250px] md:w-[350px] lg:w-[400px] transition-all duration-300 rounded-xl"
      />
    </motion.div>
  );
};

// Profile content component
const ProfileContent = () => {
  return (
    <div className="flex flex-col gap-4 text-center md:text-left max-w-lg">
      <Introduction />
      <JobTitle />
      <Tagline />
      <Footnote />
    </div>
  );
};

// Introduction text component
const Introduction = () => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
      Hello! I Am <span className="text-purple-500">Dragos Ungureanu</span>
    </h1>
  );
};

// Job title component
const JobTitle = () => {
  return (
    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
      A Web Developer who
    </h2>
  );
};

// Main tagline component with highlighted text
const Tagline = () => {
  return (
    <p className="text-md md:text-lg lg:text-xl">
      Brings <HighlightedText text="ideas" /> to life...
    </p>
  );
};

// Highlighted text with purple background
const HighlightedText = ({ text }) => {
  return (
    <span className="px-2 bg-purple-500 text-white rounded-md">{text}</span>
  );
};

// Footnote text component
const Footnote = () => {
  return (
    <p className="text-sm md:text-md text-gray-300">
      Transforming concepts into functional, beautiful web experiences.
    </p>
  );
};

export default ImageContainer;
