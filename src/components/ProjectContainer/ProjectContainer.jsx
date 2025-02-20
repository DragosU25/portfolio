import { motion } from "framer-motion";
import React from "react";

const ProjectContainer = ({ project, index }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className={`flex flex-col md:flex-row gap-8 items-center ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Imaginea proiectului */}
      <div className="relative flex-1">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full max-w-[500px] rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
      </div>

      {/* Detaliile proiectului */}
      <div className="flex-1 text-center md:text-left flex flex-col gap-6">
        <h3 className="text-sm text-purple-400 uppercase">Featured Project</h3>
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p className="bg-[#2A0F42] p-4 rounded-lg shadow-md">
          {project.description}
        </p>

        {/* Linkuri */}
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href={project.liveLink}
            className="text-blue-400 hover:text-blue-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 Live Demo
          </a>
          <a
            href={project.frontendGithubLink}
            className="text-gray-400 hover:text-gray-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            🖥️ Frontend Code
          </a>
          {project.backendGithubLink && (
            <a
              href={project.backendGithubLink}
              className="text-gray-400 hover:text-gray-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              🖥️ Backend Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectContainer;
