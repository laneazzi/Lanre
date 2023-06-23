import "./navbar.css";
import githubLogo from "../assets/github.svg";
import resumeLogo from "../assets/resume.svg";
import linkedinLogo from "../assets/linkedin.svg";
import githubLightLogo from "../assets/githubLight.svg";
import resumeLightLogo from "../assets/resumeLight.svg";
import linkedinLightLogo from "../assets/linkedinLight.svg";

const Navbar = () => {
  const isLightModeEnabled = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  return (
    <nav className="navbar">
      <ul className="list">
        <li>
          <a
            href="https://www.linkedin.com/in/olanrewaju-ayedun-88726b1b6/"
            target="_blank"
            title="My Linkedin"
          >
            <img
              src={isLightModeEnabled ? linkedinLogo : linkedinLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/laneazzi"
            target="_blank"
            title="My Github"
          >
            <img
              src={isLightModeEnabled ? githubLogo : githubLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://pdfhost.io/v/dTlH8cRRi_Software_Engineer_Web_Developer"
            target="_blank"
            title="My Resume"
          >
            <img
              src={isLightModeEnabled ? resumeLogo : resumeLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
      </ul>
      <ul className="list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
