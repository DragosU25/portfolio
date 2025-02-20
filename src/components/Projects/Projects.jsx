import React from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import taskPro from "../../assets/projects/taskPro.png";
import moneyGuard from "../../assets/projects/moneyGuard.png";
import healthApp from "../../assets/projects/HealthApp.png";

const projects = [
  {
    id: "1",
    name: "TaskPro",
    description:
      "TaskPro is a task management app that helps users create, organize, and track their projects efficiently.",
    liveLink: "https://dragosu25.github.io/taskpro-project/",
    frontendGithubLink: "https://github.com/DragosU25/taskpro-project.git",
    backendGithubLink: "https://github.com/DragosU25/taskPro-api.git",
    image: taskPro,
  },
  {
    id: "2",
    name: "Money Guard",
    description:
      "Money Guard is a personal finance management app helping users track income, expenses, and budget effectively.",
    liveLink: "https://dragosu25.github.io/Money-Guard/#/login",
    frontendGithubLink: "https://github.com/DragosU25/Money-Guard.git",
    backendGithubLink: "",
    image: moneyGuard,
  },
  {
    id: "3",
    name: "Health App",
    description:
      "Health Project App helps users track their health metrics, set goals, and gain insights into nutrition and fitness.",
    liveLink: "https://dragosu25.github.io/health-project-app/#/",
    frontendGithubLink: "https://github.com/DragosU25/health-project-app.git",
    backendGithubLink: "https://github.com/DragosU25/health-app-server.git",
    image: healthApp,
  },
];

function Projects() {
  return (
    <div className="relative py-10 px-5 items-center text-white w-full max-w-7xl mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <ProjectContainer key={project.id} index={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
