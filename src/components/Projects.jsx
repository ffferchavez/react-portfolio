import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = ({ isDarkMode }) => {
  return (
    <div
      className={`border-b pb-4 ${
        isDarkMode ? "border-neutral-900" : "border-neutral-300"
      }`}
    >
      <motion.h2
        id="projects"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-20 text-center text-4xl ${
          isDarkMode ? "text-darkText" : "text-lightText"
        }`}
      >
        Some Projects
      </motion.h2>
      <section aria-labelledby="projects">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 py-6 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex flex-col items-center"
            >
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Visit ${project.title} live project`}
                title={`Visit ${project.title}`}
              >
                <img
                  src={project.image}
                  width={200}
                  height={200}
                  alt={project.title}
                  loading="lazy"
                  title={project.title}
                  className="mb-2 rounded transform transition-transform duration-300 hover:scale-105"
                />
              </a>
              <motion.a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold mt-2 mb-2 email-link ${
                  isDarkMode ? "text-gray-300" : "text-gray-900"
                }`}
                aria-label={`Visit ${project.title} live project`}
                title={`Visit ${project.title}`}
                whileHover={{ color: "#deab12" }} // Hover effect
                initial={{
                  opacity: 0,
                  color: isDarkMode ? "#d1d5db" : "#111827",
                }} // Default text color
                animate={{
                  opacity: 1,
                  color: isDarkMode ? "#d1d5db" : "#111827",
                }} // Ensure text color resets correctly
                transition={{ duration: 0.5 }}
              >
                Check Me Out
              </motion.a>
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
                {project.title}
              </h6>
              <p
                className={`mb-4 ${
                  isDarkMode ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap mb-4">
                {project.technologies.map((tech, index) => (
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
              <div className="mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-200 hover:bg-gray-400 text-gray-700 py-1 px-1 rounded-sm inline-block transition duration-300 text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                  style={{ fontSize: "0.7rem", opacity: 0.6 }}
                  aria-label={`View ${project.title} source code on GitHub`}
                  title={`View ${project.title} source code`}
                >
                  Github Code
                </a>
                {project.caseStudyLink && (
                  <a
                    href={project.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-4 bg-gray-200 hover:bg-gray-400 text-gray-700 py-1 px-1 rounded-sm inline-block transition duration-300 text-sm ${
                      isDarkMode ? "text-gray-300" : "text-gray-800"
                    }`}
                    style={{ fontSize: "0.7rem", opacity: 0.6 }}
                    aria-label={`Read case study for ${project.title}`}
                    title={`Read case study for ${project.title}`}
                  >
                    Case Study
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
