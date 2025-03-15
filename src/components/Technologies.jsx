import { useState, useRef, useEffect } from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiPython,
  SiPostman,
  SiFigma,
  SiGithub,
} from "react-icons/si";
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
  { Icon: FaAngular, name: "Angular", color: "text-red-600" },
  { Icon: SiPython, name: "Python", color: "text-yellow-500" },
  { Icon: FaNodeJs, name: "Node", color: "text-green-500" },
  { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-700" },
  { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { Icon: SiGithub, name: "GitHub", color: "text-purple-600" },
  { Icon: SiPostman, name: "Postman", color: "text-orange-500" },
  { Icon: SiFigma, name: "Figma", color: "text-[#0ACF83]" },
];

const additionalTools = {
  "Programming Languages & Paradigms": [
    "JavaScript",
    "Python",
    "TypeScript",
    "C",
    "OOP",
    "FP",
  ],
  "Frontend Development": [
    "React",
    "React Native",
    "React Router",
    "React-Bootstrap",
    "TailwindCSS",
    "Angular",
    "Angular Material",
    "Bootstrap",
    "HTML",
    "CSS",
    "SCSS",
    "JQuery",
    "Recharts",
    "Redux",
    "Context API",
  ],
  "Backend Development": [
    "NodeJS",
    "ExpressJS",
    "Django",
    "RESTful API",
    "JSON",
    "XML",
    "ORM",
  ],
  Databases: [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "SQLAlchemy",
    "Admin4",
    "MariaDB",
    "Firebase Realtime DB",
  ],
  "Hosting/Cloud Services": [
    "Heroku",
    "Netlify",
    "AWS",
    "Firebase",
    "Github Pages",
  ],
  "Authentication & Security": [
    "OAuth 2.0",
    "JSON Web Tokens (JWT)",
    "CORS (Cross-Origin Resource Sharing)",
    "PassportJS",
    "PyJWT",
  ],
  Testing: [
    "Test Driven Development (TDD)",
    "Behavior Driven Development (BDD)",
    "Unit Testing",
    "E2E",
    "Gherkin",
    "Jest",
    "Cucumber",
    "Puppeteer",
    "Features & User Stories",
  ],
  "Development Concepts/Methodologies": [
    "Agile Development",
    "Clean Code",
    "DRY Code",
    "Progressive Web App (PWA)",
    "Single Page App (SPA)",
    "CRUD",
    "SCRUM",
    "Kanban",
    "MVT",
    "MCT",
    "Serverless Architecture",
    "Documentation Practices",
  ],
  "Documentation Tools": ["JSDoc", "TSDoc"],
  "DevOps/Environment Management": [
    "CI/CD",
    "Lighthouse",
    "Docker",
    "Zsh",
    "MacOS",
    "npm/npx",
    "pip",
    "ng",
  ],
  "Development Tools/Environments": [
    "Visual Studio Code",
    "Cursor",
    "Git",
    "Xcode",
    "Android Studio",
    "CodeBlocks",
    "Repl",
    "CodeSandBox",
    "Postman",
    "Matlab",
  ],
  "Project Management & Design Tools": [
    "Trello",
    "Jira",
    "Confluence",
    "Canva",
    "Figma",
    "Sketch",
    "Blender",
    "Spline",
    "AI Gen",
  ],
};

const hardwareDevelopmentTools = {
  "CAD & PCB Design": [
    "SOLIDWORKS",
    "Fusion360",
    "Inventor",
    "Altium Designer",
  ],
  "Prototyping & Manufacturing": [
    "3D Printing (Bambu Slicer, Orca, Cura)",
    "Laser Cutting (Lightburn)",
    "Simulation & testing (LTspice)",
  ],
  "Embedded Systems": [
    "Mega 2560",
    "ESP32",
    "Arduino",
    "Raspberry Pi",
    "PCB Design/Assembly",
  ],
};

const Technologies = ({ isDarkMode }) => {
  const [showAdditionalTools, setShowAdditionalTools] = useState(false);
  const [showHardwareTools, setShowHardwareTools] = useState(false);
  const listRef = useRef(null);
  const scrollPositionRef = useRef(0);

  const toggleAdditionalTools = () => {
    if (!showAdditionalTools) {
      // Save the current scroll position before opening
      scrollPositionRef.current = window.scrollY;
    }
    setShowAdditionalTools(!showAdditionalTools);
  };

  const closeAdditionalTools = () => {
    setShowAdditionalTools(false);
    // Restore the scroll position after closing
    setTimeout(() => {
      window.scrollTo({ top: scrollPositionRef.current, behavior: "smooth" });
    }, 50);
  };

  const toggleHardwareTools = () => {
    setShowHardwareTools(!showHardwareTools);
  };

  const closeHardwareTools = () => {
    setShowHardwareTools(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        closeAdditionalTools();
        closeHardwareTools();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listRef.current && !listRef.current.contains(event.target)) {
        closeAdditionalTools();
        closeHardwareTools();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeAdditionalTools();
        closeHardwareTools();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const renderTools = (tools) => {
    return Array.isArray(tools)
      ? tools.join(", ")
      : Object.entries(tools).map(([subCategory, subTools], idx) => (
          <div key={idx}>
            <h4
              className={`text-md font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              {subCategory}
            </h4>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {subTools.join(", ")}
            </p>
          </div>
        ));
  };

  return (
    <div
      className={`border-b pb-24 ${
        isDarkMode ? "border-neutral-800" : "border-neutral-300"
      }`}
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`my-20 text-center text-4xl ${
          isDarkMode ? "text-darkText" : "text-lightText"
        }`}
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
            className={`relative mb-4 rounded-2xl border-4 ${
              isDarkMode ? "border-neutral-800" : "border-neutral-300"
            } p-4 flex items-center justify-center group`}
          >
            {tech.name === "Figma" ? (
              <div className="bg-gradient-to-br from-[#F24E1E] via-[#b930e7] to-[#0ACF83] p-1 rounded-lg">
                <tech.Icon className="text-7xl text-white" />
              </div>
            ) : (
              <tech.Icon className={`text-7xl ${tech.color}`} />
            )}
            <motion.div
              className={`absolute inset-0 flex items-center justify-center ${
                isDarkMode
                  ? "bg-black bg-opacity-80 text-gray-300"
                  : "bg-gray-300 bg-opacity-80 text-gray-800"
              } rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              style={{ width: "100%", height: "100%" }}
            >
              <span
                className={`text-xl ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {" "}
                {tech.name}{" "}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-8">
        <motion.div
          onClick={toggleAdditionalTools}
          className={`no-underline cursor-pointer block mt-4 ${
            isDarkMode
              ? "text-darkText hover:text-black"
              : "text-lightText hover:text-[#ba9935]"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Technologies I Have Worked With
        </motion.div>
        {showAdditionalTools && (
          <div ref={listRef} className="relative inline-block mt-4">
            <motion.div
              className={`relative mt-4 text-left p-6 rounded shadow-lg ${
                isDarkMode ? "bg-black" : "bg-gray-50"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={closeAdditionalTools}
                className={`absolute top-2 right-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-800"
                }`}
                style={{ cursor: "pointer" }}
              >
                &times;
              </button>
              <div className="space-y-4">
                {Object.entries(additionalTools).map(
                  ([category, tools], index) => (
                    <div key={index}>
                      <h3
                        className={`text-lg font-semibold ${
                          isDarkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {category}
                      </h3>
                      <div
                        className={`${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {renderTools(tools)}
                      </div>
                    </div>
                  )
                )}
                <motion.div
                  onClick={toggleHardwareTools}
                  className={`no-underline text-center cursor-pointer block mt-4 ${
                    isDarkMode
                      ? "text-darkText hover:text-gray-500"
                      : "text-lightText hover:text-[#deab12]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  My Hardware Dev Tools Here
                </motion.div>
                {showHardwareTools && (
                  <motion.div
                    className={`relative mt-4 text-left p-6 rounded shadow-lg ${
                      isDarkMode ? "bg-black" : "bg-gray-100"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      onClick={closeHardwareTools}
                      className={`absolute top-2 right-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-800"
                      }`}
                      style={{ cursor: "pointer" }}
                    >
                      &times;
                    </button>
                    <div className="space-y-4">
                      <div
                        className={`${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {renderTools(hardwareDevelopmentTools)}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technologies;
