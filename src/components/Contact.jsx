import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ({ isDarkMode }) => {
  return (
    <div
      className={`border-b pb-20 ${
        isDarkMode ? "border-neutral-900" : "border-neutral-300"
      }`}
    >
      <motion.h2
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
          className={`block email-link ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
          whileHover={{ color: "#fff" }}
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
          href="src/constants/impressum.html"
          className={`block impressum-link ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
          whileHover={{ color: "#fff" }}
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
        >
          Impressum
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
