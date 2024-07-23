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

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
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
            className="relative rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center group"
          >
            <tech.Icon className={`text-7xl ${tech.color}`} />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ width: "100%", height: "100%" }}
            >
              <span className="text-xl"> {tech.name} </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
