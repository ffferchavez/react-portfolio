import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import cvPdf from "../assets/manuel-fernando-resume.pdf";

const Experience = ({ isDarkMode }) => {
  return (
    <div
      className={`border-b pb-4 ${
        isDarkMode ? "border-neutral-900" : "border-neutral-300"
      }`}
    >
      <motion.h2
        id="experience"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-20 text-center text-4xl ${
          isDarkMode ? "text-darkText" : "text-lightText"
        }`}
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p
                className={`mb-2 ml-20 text-sm ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6
                className={`mb-2 font-semibold ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {experience.role} -{" "}
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-neutral-400" : "text-gray-600"
                  }`}
                >
                  {experience.company}
                </span>
              </h6>
              <p
                className={`mb-4 ${
                  isDarkMode ? "text-neutral-400" : "text-gray-800"
                }`}
              >
                {experience.description}
              </p>
              <div className="flex flex-wrap mb-4">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`mr-2 mb-2 rounded px-2 py-1 text-sm font-medium ${
                      isDarkMode
                        ? "bg-neutral-900 text-white"
                        : "bg-neutral-200 text-[#deab12]"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="text-center mt-20 mb-20"
      >
        <a
          href={cvPdf}
          download
          className={`text-2xl no-underline transition-colors duration-200 ${
            isDarkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-900 hover:text-[#deab12]"
          }`}
        >
          Download My Resume Here
        </a>
      </motion.div>
    </div>
  );
};

export default Experience;
