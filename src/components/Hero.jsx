import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/mfProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ isDarkMode }) => {
  return (
    <div className="border-b pb-4 lg:mb-36 dark:border-neutral-900">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl dark:text-darkText text-lightText"
            >
              Manuel Fernando
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-extrabold tracking-tight"
              style={{
                backgroundImage: isDarkMode
                  ? "linear-gradient(to right, #000, #b8b6b2, #1B1B1B)" // Light colors gradient for dark mode
                  : "linear-gradient(to right, #000, #deab12, #1B1B1B)", // Dark colors gradient for light mode
                WebkitBackgroundClip: "text",
                WebkitTextStroke: `2px ${isDarkMode ? "black" : "white"}`,
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 font-thin max-w-xl py-6 tracking-tighter dark:text-darkText text-lightText"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="blob"
            style={{ backgroundImage: `url(${profilePic})` }}
          />
        </div>
      </div>
      <style>
        {`
    @keyframes morph {
      0%, 100% {
        border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
      }
      33% {
        border-radius: 72% 28% 48% 48% / 28% 28% 72% 72%;
      }
      66% {
        border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%;
      }
    }
    .blob {
      overflow: hidden;
      width: 32rem;
      height: 24rem;
      position: relative;
      border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
      background-size: cover;
      background-position: center;
      animation: morph 2.5s linear infinite;
      filter: grayscale(80%) contrast(1.1); /* Greyish effect */
    }
    .blob::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2); /* Dark overlay */
      border-radius: inherit;
    }
  `}
      </style>
    </div>
  );
};

export default Hero;
