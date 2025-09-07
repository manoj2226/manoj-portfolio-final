import React from "react";
import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaChartBar,   // ✅ Used instead of Power BI
  FaWindows,
  FaGoogle,
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiMongodb,
  SiTableau,
  SiTailwindcss,
  SiOpenai,     // ✅ for ChatGPT
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { VscVscode } from "react-icons/vsc"; // ✅ Correct import for VS Code

const skills = [
  { name: "Data Science", icon: <GiArtificialIntelligence size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "SQL", icon: <SiMongodb size={40} /> },
  { name: "Tableau", icon: <SiTableau size={40} /> },
  { name: "Power BI", icon: <FaChartBar size={40} /> }, // ✅ FIXED
  { name: "Excel", icon: <FaChartBar size={40} /> },
  { name: "ML", icon: <GiArtificialIntelligence size={40} /> },
  { name: "NLP", icon: <GiArtificialIntelligence size={40} /> },
  { name: "Statistics", icon: <FaChartBar size={40} /> },
  { name: "React.js", icon: <FaReact size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "Tally Prime", icon: <FaChartBar size={40} /> },
];

const tools = [
  { name: "ChatGPT", icon: <SiOpenai size={30} /> },
  { name: "Windows", icon: <FaWindows size={30} /> },
  { name: "VS Code", icon: <VscVscode size={30} /> }, // ✅ Fixed
  { name: "Google", icon: <FaGoogle size={30} /> },
];

const Skills = () => {
  return (
    <div className="p-10 bg-transparent">
      <h2 className="text-3xl font-serif mb-6 text-black dark:text-white">
        SKILLS
      </h2>
      <div className="flex flex-wrap gap-6 mb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center border px-6 py-3 rounded-full shadow-md 
                       bg-transparent text-black dark:text-white"
          >
            <span className="mr-3">{skill.icon}</span>
            <span className="text-lg font-serif">{skill.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-serif mb-6 text-black dark:text-white">
        TOOLS
      </h2>
      <div className="flex flex-wrap gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center border px-6 py-3 rounded-md shadow-md
                       bg-transparent text-black dark:text-white"
          >
            <span className="mr-3">{tool.icon}</span>
            <span className="text-lg font-serif">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
