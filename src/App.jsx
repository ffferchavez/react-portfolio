import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 ${isDarkMode ? 'dark' : ''}`}>
      <div className={`fixed inset-0 -z-10 h-full w-full`}>
        <div className={`relative h-full w-full ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
          {isDarkMode ? (
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
          ) : (
            <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Hero />
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
