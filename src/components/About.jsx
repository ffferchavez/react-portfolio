import React from "react";
import aboutImg from "../assets/mfAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import "../index.css";

const About = ({ isDarkMode }) => {
  return (
    <div
      className={`border-b ${
        isDarkMode ? "border-neutral-900" : "border-neutral-300"
      } mt-10 pb-4`}
    >
      <h2
        id="about"
        className={`lg:my-20 text-center text-4xl ${
          isDarkMode ? "text-neutral-300" : "text-neutral-800"
        }`}
      >
        About
        <span
          className={`${isDarkMode ? "text-neutral-500" : "text-[#deab12]"}`}
        >
          {" "}
          Me
        </span>
      </h2>
      <div className="flex flex-wrap mb-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 lg:mb-8 flex items-center justify-center"
          style={{ height: "600px" }}
        >
          <div
            className={`rounded-full overflow-hidden transition-all duration-300 ${
              isDarkMode ? "bg-darkBackground" : "bg-lightBackground"
            } w-[80vw] max-w-[500px] h-[80vw] max-h-[500px]`}
          >
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-full h-full object-cover rounded-full filter grayscale-[90%] brightness-50 hover:grayscale-[70%] hover:brightness-75 transition-all duration-300"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div
            className={`about-text font-thin flex justify-center lg:justify-start ${
              isDarkMode ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            <div
              className="mb-8 max-w-xl"
              dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
