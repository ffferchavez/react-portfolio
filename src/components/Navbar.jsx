import React from "react";
import logo from "../assets/mfLogo.png";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMedium,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav
      id="hero"
      className={`mb-15 py-6 ${
        isDarkMode ? "text-darkText" : "text-lightText"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <a
            href="https://manuel-fernando.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="mx-2 w-8 cursor-pointer"
              src={logo}
              alt="logo"
              style={{ borderRadius: "8px" }}
            />
          </a>
        </div>

        {/* Social media icons on the right */}
        <div className="flex items-center gap-3 m-8 text-2xl">
          <a
            href="https://www.linkedin.com/in/ffferchavez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className={`${isDarkMode ? "text-darkText" : "text-lightText"}`}
            />
          </a>
          <a
            href="https://github.com/ffferchavez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className={`${isDarkMode ? "text-darkText" : "text-lightText"}`}
            />
          </a>
          <a
            href="https://x.com/ffferchavez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter
              className={`${isDarkMode ? "text-darkText" : "text-lightText"}`}
            />
          </a>
          <a
            href="https://medium.com/@ffferchavez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMedium
              className={`${isDarkMode ? "text-darkText" : "text-lightText"}`}
            />
          </a>
        </div>
      </div>

      {/* Theme Toggle Button in a new row */}
      <div className="flex justify-end mt-2 m-8">
        <button
          onClick={toggleTheme}
          className={`flex items-center text-xs rounded transition-colors duration-300 ease-in-out ${
            isDarkMode ? "text-darkText" : "text-lightText"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <FaMoon className="text-md mr-2" />
          ) : (
            <FaSun className="text-md mr-2" />
          )}
          <span>{isDarkMode ? "Go Light" : "Go Dark"}</span> {/* Text label */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
