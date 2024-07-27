import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";

export const HERO_CONTENT = 
`Full Stack Web Developer with more than a decade of Mechatronics experience, skilled in building
responsive applications using modern technologies and frameworks.
Combines technical precision and innovative problem-solving to optimize performance and enhance
user experiences.`;

export const ABOUT_TEXT = 
`<p style="margin-bottom: 12px;">Hi, I’m a Full Stack Web Developer transitioning from more than a decade in Mechatronics. This unique journey has shaped me into a developer who blends technical precision with innovative problem-solving.</p>
<p style="margin-bottom: 12px;">I build responsive, efficient applications using modern technologies and frameworks, always prioritizing user experience. My engineering background gives me a strong analytical foundation, enabling me to tackle complex challenges methodically.</p>
<p style="margin-bottom: 12px;">Additionally, my curiosity and passion for learning drive me to explore new technologies and creative solutions. I’m eager to join a forward-thinking tech company where I can leverage my diverse skill set, bring fresh perspectives, and contribute to impactful projects.</p>
<p style="margin-bottom: 12px;">I’m not just changing careers – I’m evolving my professional identity to merge the best of both worlds.</p>`;

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
    company: "AMETEK, inc. - SPECTRO Analytical Instruments GmbH",
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
    title: "Event Discovery Platform",
    image: project6,
    description:
      "Meet App: Meet is a Progressive Web App for event discovery and management, integrating with the Google Calendar API. Built with React and following TDD/BDD practices, it offers city-based event filtering, offline functionality, and data visualization. The app utilizes AWS Lambda and a serverless architecture for backend processes, ensuring scalable and secure performance. Installable on both desktop and mobile devices, Meet provides a seamless user experience across platforms.",
    technologies: ["React" , "PWA", "AWS Lambda", "Node.js", "Express.js", "MongoDB", "Jest", "Cucumber", "OAuth 2.0", "Recharts", "Service Workers"],
    githubLink: "https://github.com/ffferchavez/meet",
    projectUrl: "https://ffferchavez.github.io/meet/",
  },
  {
    title: "Film Catalog Viewer 1",
    image: project2,
    description:
      "Marvel-Flix (React FrontEnd): This project is a front-end application built to interact with my movie database API (Marvel Flix API). It allows users to browse movies, view details such as descriptions and manage their own favorite movie lists and profiles.",
    technologies: ["React", "SCSS", "Netlify", "Node", "React-Bootstrap", "Express.js"],
    githubLink: "https://github.com/ffferchavez/myFlix-client",
    projectUrl: "https://marvel-flix-app.netlify.app/",
    caseStudyLink: "https://drive.google.com/file/d/1b-LW_Z3n5hpZve2_YQrAWMwWgZkEHKGS/view?usp=sharing",
  },

  {
    title: "Chat Application",
    image: project8,
    description:
      "ChatMate (React Native Mobile App): ChatMate is a cross-platform mobile chat application built with React Native and Expo. It provides a smooth chat experience with text messaging, image sharing, and real-time location updates. Users can join chat rooms, send photos, and share their location. Conversations are stored online in Google Firestore and locally for offline access. Firebase is used for anonymous authentication, and the app includes accessibility features for diverse users.",
    technologies: ["React Native", "Expo", "Xcode", "Android Studio", "Firestore", "Firebase", "AsyncStorage"],
    githubLink: "https://github.com/ffferchavez/chatmate",
    projectUrl: "https://github.com/ffferchavez/chatmate",
  },

  {
    title: "Film Catalog Viewer 2",
    image: project7,
    description:
      "myFlix (Angular FrontEnd): This project is a front-end application designed to interface with an existing movie database API. Built using Angular, it allows users to explore a wide range of movies, view detailed information about each film, director, and genre, and manage their profiles and favorite movie lists. The app features a responsive design and leverages Angular Material for a modern and intuitive user experience.",
    technologies: ["Angular", "Angular Material", "TypeScript", "Node.js", "TypeDoc", "Angular CLI", "MongoDB"],
    githubLink: "https://github.com/ffferchavez/myFlix-Angular",
    projectUrl: "ffferchavez.github.io/myFlix-Angular/",
  },

  {
    title: "RESTful API",
    image: project1,
    description:
      "Marvel-Flix API: This project is an API that serves as a backend for managing movie data. It includes endpoints for fetching movie details, searching for movies, and user authentication for managing favorites or ratings.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Heroku", "Postman"],
    githubLink: "https://github.com/ffferchavez/movie-api",
    projectUrl: "https://github.com/ffferchavez/movie-api",
  },
  {
    title: "Pokémon Encyclopedia",
    image: project3,
    description:
      "Pokedex App: The Pokedex App is a web application that functions as a digital encyclopedia for Pokémon. It enables users to search and browse through different Pokémon species, view their characteristics, abilities, stats and save favorites.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PokeAPI"],
    githubLink: "https://github.com/ffferchavez/pokedex-app",
    projectUrl: "https://ffferchavez.github.io/pokedex-app/",
  },
  {
    title: "Portfolio Website v1.0",
    image: project4,
    description:
      "Portfolio Website is a showcase of my skills with Vanilla JavaScript, plain HTML and CSS. It includes sections About Me, Skills, Projects, and Contact Form. It serves as a hub for potential employers or collaborators to learn more about my work and skills.",
    technologies: ["HTML", "CSS", "Vanilla JavaScript"],
    githubLink: "https://github.com/ffferchavez/portfolio-website",
    projectUrl: "https://ffferchavez.github.io/portfolio-website/",
  },
  {
    title: "To-Do List Application",
    image: project5,
    description:
      "The To-Do List App is a simple task management application. Users can create tasks, mark them as completed, and delete them. It may include later on features like task prioritization, due dates, and categories or labels for organizing tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "JQuery"],
    githubLink: "https://github.com/ffferchavez/portfolio-website",
    projectUrl: "https://ffferchavez.github.io/to-do-list-app/",
  },
];

export const CONTACT = {
  address: "Kleve, Germany",
  phoneNo: "+49 152 217 95849 ",
  email: "manuel.fernando.info@gmail.com",
};
