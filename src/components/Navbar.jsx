import logo from "../assets/mfLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from "react-icons/fa"; // Added FaMedium

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="https://manuel-fernando.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img className="mx-2 w-8 cursor-pointer" src={logo} alt="logo" style={{ borderRadius: "5px" }} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ffferchavez" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ffferchavez" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/ffferchavez" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://medium.com/@ffferchavez" target="_blank" rel="noopener noreferrer">
          <FaMedium />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
