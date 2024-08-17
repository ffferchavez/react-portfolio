import { useState, useRef, useEffect } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiPostman, SiFigma, SiGithub } from "react-icons/si";
import { FaNodeJs, FaAngular } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techs = [
  { Icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { Icon: SiPython, name: "Python", color: "text-yellow-500" },
  { Icon: FaNodeJs, name: "Node", color: "text-green-500" },
  { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-700" },
  { Icon: FaAngular, name: "Angular", color: "text-red-600" },
  { Icon: SiGithub, name: "GitHub", color: "text-purple-600" },
  { Icon: SiPostman, name: "Postman", color: "text-orange-500" },
  { Icon: SiFigma, name: "Figma", color: "text-white" },
];

const additionalTools = {
  "Frontend Development": [
    "React", "React Native", "React Router", "React-Bootstrap", "Angular", "Angular Material", "VueJS",
    "Vuetify",
    "Bootstrap", "HTML", "CSS", "SCSS", "JQuery", "Recharts", "Redux", "Tailwind CSS",
    "Context API",
  ],
  "Programming Languages & Paradigms": [
    "JavaScript","TypeScript", "Python", "Object-Oriented Programming (OOP)", "Functional Programming (FP)",
  ],
  "Backend Development": [
    "NodeJS", "ExpressJS", "Django", "AWS Lambda", "RESTful API", "JSON", "XML", "Object-Relational Mappers (ORMs)"
  ],
  "Databases": [
    "MongoDB", "PostgreSQL", "MySQL", "SQLite", "SQLAlchemy", "Admin4", "MariaDB", "Firebase Realtime DB",
  ],
  "Hosting/Cloud Services": [
    "Heroku", "Netlify", "AWS", "Firebase", "Github Pages",
  ],
  "Authentication & Security": [
    "OAuth 2.0", "JSON Web Tokens (JWT)", "CORS (Cross-Origin Resource Sharing)", "PassportJS",
  ],
  "Testing": [
    "Test Driven Development (TDD)", "Behavior Driven Development (BDD)",
    "Unit Testing","E2E", "Gherkin", "Jest", "Cucumber", "Puppeteer", "User Features & Stories"
  ],
  "Development Concepts/Methodologies": [
    "Agile Development", "Clean Code", "DRY Code", "PWA", "SPA", "B2B", "Scrum", "Kanban", "MVT", "MCT",
    "Serverless Architecture", "Documentation Practices",
  ],
  "Documentation Tools": [
  "JSDoc", "TSDoc",
  ],
  "DevOps/Environment Management": [
    "CI/CD pipelines", "Atatus (Application Performance Monitoring)", "Docker", "Zsh", "MacOS", "PowerShell", "Windows", "npm",
    "pip",
  ],
  "Development Tools/Environments": [
    "Visual Studio Code", "Git", "Xcode", "Android Studio", "CodeBlocks", "Repl", "CodeSandBox", "Postman",
  ],
  "Project Management & Design Tools": [
    "Trello", "Jira(Atlassian)", "Canva", "Figma", "Sketch", "Blender",
  ],
  "Artificial Intelligence": [
    "AI Smart Prompts", "ChatGPT", "Matplotlib",
  ],
};

const Technologies = ({ isDarkMode }) => {
  const [showAdditionalTools, setShowAdditionalTools] = useState(false);
  const listRef = useRef(null);

  const toggleAdditionalTools = () => {
    setShowAdditionalTools(!showAdditionalTools);
  };

  const closeAdditionalTools = () => {
    setShowAdditionalTools(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        closeAdditionalTools();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`border-b pb-24 ${isDarkMode ? 'border-neutral-800' : 'border-neutral-300'}`}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`my-20 text-center text-4xl ${isDarkMode ? 'text-darkText' : 'text-lightText'}`}
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(2 + (index % 4))}
            initial="initial"
            animate="animate"
            className={`relative mb-4 rounded-2xl border-4 ${isDarkMode ? 'border-neutral-800' : 'border-neutral-300'} p-4 flex items-center justify-center group`}
          >
            <tech.Icon className={`text-7xl ${tech.color}`} />
            <motion.div
              className={`absolute inset-0 flex items-center justify-center ${isDarkMode ? 'bg-black bg-opacity-80 text-gray-300' : 'bg-gray-300 bg-opacity-80 text-gray-800'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              style={{ width: "100%", height: "100%" }}
            >
              <span className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}> {tech.name} </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-8">
        <motion.div
          onClick={toggleAdditionalTools}
          className={`no-underline cursor-pointer block mt-4 ${isDarkMode ? 'text-darkText hover:text-[#48CAE4]' : 'text-lightText hover:text-[#48CAE4]'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          See All My Technologies Here
        </motion.div>
        {showAdditionalTools && (
          <div ref={listRef} className="relative inline-block mt-4">
            <motion.div
              className={`relative mt-4 text-left p-6 rounded shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={closeAdditionalTools}
                className={`absolute top-2 right-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}
                style={{ cursor: 'pointer' }}
              >
                &times;
              </button>
              <div className="space-y-4">
                {Object.entries(additionalTools).map(([category, tools], index) => (
                  <div key={index}>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{category}</h3>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {tools.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technologies;
