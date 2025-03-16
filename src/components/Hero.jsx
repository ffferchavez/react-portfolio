import React, { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = ({ isDarkMode }) => {
  const titles = [
    "Full Stack Developer",
    "Mechatronics Engineer",
    "AI/BI Specialist",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500); // Switch every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b pb-4 lg:mb-8 dark:border-neutral-900">
      <div className="flex flex-wrap">
        <div className="w-full flex flex-col items-center text-center">
          <div className="flex flex-col">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl dark:text-darkText text-lightText"
            >
              Manuel Fernando
            </motion.h2>

            {/* Animate Presence for Smooth Title Switch */}
            <div className="h-[140px] sm:h-[150px] md:h-[160px] lg:h-[210px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[currentTitleIndex]} // Change key to trigger re-render
                  variants={container(0.5)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 font-extrabold tracking-tight text-center ${
                    titles[currentTitleIndex] === "Mechatronics Engineer"
                      ? "text-4xl sm:text-5xl lg:text-7xl"
                      : "text-5xl lg:text-7xl"
                  }`}
                  style={{
                    backgroundImage: isDarkMode
                      ? "linear-gradient(to right, #f1f1f1, #1B1B1B, #fff, #3c3c3c)" // Dark
                      : "linear-gradient(to right, #000, #deab12, #1B1B1B)", // Light
                    WebkitBackgroundClip: "text",
                    WebkitTextStroke: `2px ${isDarkMode ? "black" : "white"}`,
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {titles[currentTitleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="min-h-[80px] flex items-center justify-center">
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 font-thin py-6 tracking-tighter dark:text-darkText text-lightText text-center"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
