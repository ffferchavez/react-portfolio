import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`overflow-x-hidden text-neutral-300 antialiased selection:bg-[#deab12] selection:text-black ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className={`fixed inset-0 -z-10 h-full w-full`}>
        <div
          className={`relative h-full w-full ${
            isDarkMode
              ? "bg-black"
              : "bg-white bg-light-grid bg-[size:6rem_4rem]"
          }`}
        >
          {isDarkMode ? (
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_3%_200px,#aaa,transparent)]"></div>
          ) : (
            <div className="absolute inset-0 h-full w-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_30%_200px,#f5f5f5,transparent)]"></div>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Technologies isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};
export default App;
