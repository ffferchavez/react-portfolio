import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I'm a Full-Stack Developer with a Mechatronics background with a strong interest for Web Development, Fintech, AI, and cutting-edge technology. Through diverse experiences in the fields of Materials, Manufacturing, Automotive and Design, I have gained valuable insights and broadened my horizons. My focus has shifted to Software Development, where I have honed my skills in various programming languages and frameworks. With a goal of continuous improvement, I stay updated on the latest technologies and best practices. Effective communication and teamwork are integral parts of my work approach, while my hobbies in CAD design, 3D printing, lasers and electronics foster my creativity. I am excited to develop myself as professional in the Tech Field and take on new challenges.`;

export const ABOUT_TEXT = `As an accomplished Full-Stack Web Developer, I've honed a diverse skill set spanning a wide range of cutting-edge technologies, including React, Angular, Vue, Node.js, MongoDB, Express, Python, Django, PostgreSQL, AWS Lambda, and Docker, among others. What initially ignited my passion for web development was a deep fascination with how digital systems work, and this curiosity has evolved into a relentless drive to tackle complex challenges and deliver exceptional solutions. Thriving in collaborative environments, I excel at effective communication, attention to detail, and a commitment to excellence that permeates every aspect of my work. Beyond just coding, I pursue a balanced lifestyle through physical activity and personal growth, all of which fuel my enthusiasm to make a lasting impact in the ever-evolving tech landscape!`;

export const EXPERIENCES = [
  {
    year: "2024 - 2024",
    role: "Full-Stack Developer",
    company: "J&G Agency GmbH",
    description: `Contribution to the programming of user-friendly frontends and robust backends using modern technologies.
Active participation in the planning of new applications, whereby I can contribute my own ideas.`,
    technologies: ["HTML", "CSS", "JavaScript","Vue", "Vuetify", "Node", "mySQL"],
  },
  {
    year: "2022 - 2023",
    role: "Systems Integration",
    company: "AMETEK, inc. -SPECTRO Analytical Instruments GmbH",
    description: `Construction of special high technology elemental analyzers with optical emission spectroscopy and X-ray fluorescence spectrometry.
    The structure of the SPECTROGREEN ICP-OES in three model variants:

    Dual Side On Interface (DSOI),
    Twin Interface (TI) and
    Side On Plasma Viewing (SOP).

    Integration of each part in the machines from electronics, mechanics and software calibrations. From zero until delivery, carrying out the complete documentation for different countries worldwide.`,
    technologies: ["C", "Matlab", "Ansys Mechanical APDL", "Power Electronics"],
  },
  {
    year: "2021 - Present",
    role: "Materials Testing Technology",
    company: "WTBrinkmann GmbH",
    description: `
    carry out of non-destructive tests of welded objects such as trailers, liquids containers and tube lines for different applications in the industry with the following methods:
    Visual inspection (VT), Radiographic Testing (RT),
    Magnetic Particle Testing (MT),
    Mobile Hardness Testing (HT),
    Ultrasonic testing (UT),
    Penetrant Testing (PT).

    Then, evaluation of results and report of failures.`,
    technologies: ["VT", "RT", "MT", "HT","PT","UT",],
  },
];

export const PROJECTS = [
  {
    title: "Meet App",
    image: project6,
    description:
      "Meet is a PWA designed to display and manage events filtered by city using the Google Calendar API. Developed with React OOP, TDD, and BDD methodologies, it ensures a high-quality codebase. The app supports offline capability and can be installed on your phone or desktop. User authorization tokens and credentials are managed securely through AWS Lambda, leveraging a serverless architecture for efficient data handling and retrieval.",
    technologies: ["React", "Google API", "AWS Lambda", "Jest", "Cucumber"],
    githubLink: "https://github.com/ffferchavez/meet",
    projectUrl: "https://ffferchavez.github.io/meet/",
  },
  {
    title: "Marvel Flix - Frontend",
    image: project2,
    description:
      "This project is a front-end application built to interact with a my movie database API (Marvel Flix API). It allows users to browse movies, view details such as descriptions and ratings, and manage their own movie lists.",
    technologies: ["React", "SCSS", "Netlify", "Node", "React-Bootstrap", "Express.js"],
    githubLink: "https://github.com/ffferchavez/myFlix-client",
    projectUrl: "https://marvel-flix-app.netlify.app/",
  },
  {
    title: "Marvel Flix RESTful API",
    image: project1,
    description:
      "This project is an API that serves as a backend for managing movie data. It includes endpoints for fetching movie details, searching for movies, and user authentication for managing favorites or ratings.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    githubLink: "https://github.com/ffferchavez/movie-api",
    projectUrl: "https://github.com/ffferchavez/movie-api",
  },
  {
    title: "Pokedex App",
    image: project3,
    description:
      "The Pokedex App is a web application that functions as a digital encyclopedia for Pokémon. It enables users to search and browse through different Pokémon species, view their characteristics, abilities, and stats, and save favorites.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PokeAPI"],
    githubLink: "https://github.com/ffferchavez/pokedex-app",
    projectUrl: "https://ffferchavez.github.io/pokedex-app/",
  },
  {
    title: "Portfolio Website Version 1.0",
    image: project4,
    description:
      "Portfolio Website is a showcase of my skills with Vanilla JavaScript, plain HTML and CSS. It includes sections like About Me, Skills, Projects, and Contact. It serves as a hub for potential employers or collaborators to learn more about my work and skills.",
    technologies: ["HTML", "CSS", "Vanilla JavaScript"],
    githubLink: "https://github.com/ffferchavez/portfolio-website",
    projectUrl: "https://ffferchavez.github.io/portfolio-website/",
  },
  {
    title: "Simple To-Do List App",
    image: project5,
    description:
      "The To-Do List App is a simple task management application. Users can create tasks, mark them as completed, and delete them. It may include later on features like task prioritization, due dates, and categories or labels for organizing tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "JQuery"],
    githubLink: "https://github.com/ffferchavez/portfolio-website",
    projectUrl: "https://ffferchavez.github.io/to-do-list-app/",
  },
  
 /* 
  {
    title: "Marvel Flix - Angular,
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    githubLink: "https://github.com/ffferchavez/portfolio-website",
    projectUrl: "https://ffferchavez.github.io/to-do-list-app/",
  },
  {
    title: "Chat App - React Native",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    githubLink: "https://github.com/ffferchavez/portfolio-website",
    projectUrl: "https://ffferchavez.github.io/to-do-list-app/",
  },
  */
];

export const CONTACT = {
  address: "Dresdener Str. 14, 47533 Kleve, Germany",
  phoneNo: "+49 152 217 95849 ",
  email: "ffferchavez@gmail.com",
};
