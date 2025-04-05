import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Contact = ({ isDarkMode }) => {
  const [showButton, setShowButton] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isExpanded &&
        !event.target.closest(".nav-item") &&
        !event.target.closest("button")
      ) {
        setIsExpanded(false);
      }
    };

    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isExpanded]);

  return (
    <div
      className={`border-b pb-20 ${
        isDarkMode ? "border-neutral-900" : "border-neutral-300"
      }`}
    >
      <motion.h2
        id="contact"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-10 text-center text-4xl ${
          isDarkMode ? "text-darkText" : "text-lightText"
        }`}
      >
        Let's Get in Touch!
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={`my-4 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className={`my-4 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          aria-label={`Email: ${CONTACT.email}`}
          className={`block email-link ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
          whileHover={{ color: isDarkMode ? "#fff" : "#deab12" }}
          initial={{
            opacity: 0,
            x: -100,
            color: isDarkMode ? "#9ca3af" : "#374151",
          }}
          animate={{
            opacity: 1,
            x: 0,
            color: isDarkMode ? "#9ca3af" : "#374151",
          }}
          transition={{ duration: 1 }}
        >
          {CONTACT.email}
        </motion.a>
        <motion.a
          href="/impressum.html"
          title="Impressum"
          aria-label="View the Impressum page"
          className={`block impressum-link ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
          whileHover={{ color: isDarkMode ? "#fff" : "#deab12" }}
          initial={{
            opacity: 0,
            x: 100,
            color: isDarkMode ? "#9ca3af" : "#374151",
          }}
          animate={{
            opacity: 1,
            x: 0,
            color: isDarkMode ? "#9ca3af" : "#374151",
          }}
          transition={{ duration: 1 }}
          onClick={() => setIsExpanded(false)}
        >
          Impressum
        </motion.a>
      </div>
      {showButton && (
        <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col items-center space-y-2">
          {/* Folding Fan Links */}
          {isExpanded && (
            <div className="relative flex flex-col items-center space-y-2 transition-all duration-500 origin-bottom">
              <a
                href="#hero"
                className={`nav-item px-4 py-2 rounded-lg transition-all ${
                  isDarkMode
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setIsExpanded(false)}
              >
                Hero
              </a>
              <a
                href="#about"
                className={`nav-item px-4 py-2 rounded-lg transition-all ${
                  isDarkMode
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setIsExpanded(false)}
              >
                About
              </a>
              <a
                href="#technologies"
                className={`nav-item px-4 py-2 rounded-lg transition-all ${
                  isDarkMode
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setIsExpanded(false)}
              >
                Technologies
              </a>
              <a
                href="#projects"
                className={`nav-item px-4 py-2 rounded-lg transition-all ${
                  isDarkMode
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setIsExpanded(false)}
              >
                Projects
              </a>
              <a
                href="#experience"
                className={`nav-item px-4 py-2 rounded-lg transition-all ${
                  isDarkMode
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setIsExpanded(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className={`nav-item px-4 py-2 rounded-lg transition-all ${
                  isDarkMode
                    ? "bg-black text-white hover:bg-white hover:text-black"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
                onClick={() => setIsExpanded(false)}
              >
                Contact
              </a>
            </div>
          )}

          {/* Pages Menu Button */}
          <button
            onClick={handleClick}
            aria-label="Toggle page navigation"
            title="Toggle navigation"
            className={`transition-transform font-semibold duration-500 text-7xl ${
              isExpanded ? "rotate-[315deg]" : "rotate-0"
            } ${
              isDarkMode
                ? "text-gray-400 hover:text-gray-200"
                : "text-gray-700 hover:text-gray-600"
            }`}
          >
            :
          </button>
        </div>
      )}
    </div>
  );
};

export default Contact;
