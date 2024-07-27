import React from 'react';
import aboutImg from "../assets/mfAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <div className={`border-b ${isDarkMode ? 'border-neutral-900' : 'border-neutral-300'} pb-4`}>
      <h2 className={`my-20 text-center text-4xl ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
        About
        <span className={`${isDarkMode ? 'text-neutral-500' : 'text-neutral-600'}`}> Me</span>
      </h2>
      <div className="flex flex-wrap mb-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center"
          style={{ height: '500px' }}
        >
          <div className={`rounded-2xl overflow-hidden filter grayscale-[50%] brightness-85 ${isDarkMode ? 'bg-darkBackground' : 'bg-lightBackground'}`} style={{ width: '500px', height: '500px' }}>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-full h-full object-cover"
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
          <div className={`flex justify-center lg:justify-start ${isDarkMode ? 'text-neutral-300' : 'text-neutral-800'}`}>
            <div className="my-2 max-w-xl" dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
