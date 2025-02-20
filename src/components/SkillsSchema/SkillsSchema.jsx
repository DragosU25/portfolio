import { motion } from "framer-motion";
import { FaReact, FaJs, FaCss3Alt, FaFigma, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiNextdotjs,
  SiHtml5,
  SiGit,
} from "react-icons/si";

const icons = [
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <SiVite className="text-purple-400" />, name: "Vite" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS" },
  { icon: <SiHtml5 className="text-orange-500" />, name: "CSS" },
  { icon: <SiMongodb className="text-green-400" />, name: "CSS" },
  { icon: <FaFigma className="text-pink-500" />, name: "CSS" },
  { icon: <FaNodeJs className="text-green-500" />, name: "CSS" },
  { icon: <SiNextdotjs className="text-gray-500" />, name: "CSS" },
  { icon: <SiGit className="text-orange-600" />, name: "CSS" },
];

export default function SkillsSchema() {
  return (
    <section className="flex flex-col items-center pt-30 gap-5   text-white text-center pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl"
      >
        <span className="text-purple-400">Technologies </span>
        I've worked with
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-gray-400"
      >
        A collection of tools and frameworks I've used in my projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-6 mt-6 flex-wrap items-center justify-center"
      >
        {icons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-4xl"
          >
            {item.icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
