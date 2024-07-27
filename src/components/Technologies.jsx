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

const additionalTools = [
  "React Native", "Angular Material", "TypeScript","ExpressJS",
  "Bootstrap", "Sass", "JQuery", "Heroku",
  "Netlify", "AWS Lambda", "OAuth 2.0", "Recharts",
  "Jest", "Cucumber", "Puppeteer", "PWA", "TDD", "BDD",
  "OOP", "Gherkin", "Django", "Firebase", "AI", "Trello",
  "Jira", "Canva", "Xcode", "Android Studio", "Scrum", "Kanban"
];

const Technologies = ({ isDarkMode }) => {
  const [showAdditionalTools, setShowAdditionalTools] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const listRef = useRef(null);

  const toggleAdditionalTools = () => {
    setShowAdditionalTools(!showAdditionalTools);
    setLinkClicked(true); // Mark link as clicked
  };

  const closeAdditionalTools = () => {
    setShowAdditionalTools(false);
    setLinkClicked(false); // Unmark link as clicked
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
            className={`relative rounded-2xl border-4 ${isDarkMode ? 'border-neutral-800' : 'border-neutral-300'} p-4 flex items-center justify-center group`}
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
        <motion.a
          onClick={toggleAdditionalTools}
          className={`no-underline cursor-pointer block mt-4 ${isDarkMode ? 'text-darkText hover:text-[#48CAE4]' : 'text-lightText hover:text-[#48CAE4]'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          See More Technologies Here
        </motion.a>
        {showAdditionalTools && (
          <div ref={listRef} className="relative inline-block mt-4">
            <motion.div
              className={`relative mt-4 text-center p-6 rounded shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {additionalTools.map((tool, index) => (
                  <div key={index} className={`col-span-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>{tool}</div>
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
