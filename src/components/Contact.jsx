import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = ({ isDarkMode }) => {
  return (
    <div className={`border-b pb-20 ${isDarkMode ? 'border-neutral-900' : 'border-neutral-300'}`}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`my-10 text-center text-4xl ${isDarkMode ? 'text-darkText' : 'text-lightText'}`}
      >
        Let's Talk!
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={`my-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className={`my-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href={`mailto:${CONTACT.email}`}
          className={`email-link ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
          whileHover={{ color: "#48CAE4" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.email}
        </motion.a>
        <motion.a
          href="src/constants/impressum.html"
          className={`impressum-link ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}
          whileHover={{ color: "#48CAE4" }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Impressum
        </motion.a>
      </div>

      <style>{`
        .email-link, .impressum-link {
          text-decoration: none;
          display: block;
          margin-top: 10px;
          transition: color 0s ease;
        }
        .email-link:hover, .impressum-link:hover {
          color: #48CAE4;
          transition: color 0s ease;
        }
      `}</style>
    </div>
  );
};

export default Contact;
