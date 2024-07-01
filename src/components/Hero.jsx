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

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Manuel Fernando
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-3xl tracking-tight"
              style={{
                backgroundImage: 'linear-gradient(to right, #CBD5E0, #48CAE4, #CBD5E0)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
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
            width: 26rem;
            height: 26rem;
            border-radius: 42% 56% 72% 28% / 42% 42% 56% 48%;
            background-size: cover;
            background-position: center;
            animation: morph 3.75s linear infinite;
            filter: grayscale(50%);
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
