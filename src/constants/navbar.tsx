import homeLogo from "../assets/home.svg";
import githubLogo from "../assets/github.svg";
import resumeLogo from "../assets/resume.svg";
import messageLogo from "../assets/message.svg";
import questionLogo from "../assets/question.svg";
import linkedinLogo from "../assets/linkedin.svg";
import homeLightLogo from "../assets/homeLight.svg";
import githubLightLogo from "../assets/githubLight.svg";
import resumeLightLogo from "../assets/resumeLight.svg";
import messageLightLogo from "../assets/messageLight.svg";
import questionLightLogo from "../assets/questionLight.svg";
import linkedinLightLogo from "../assets/linkedinLight.svg";

import "./navbar.css";

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
          >
            <img
              src={isLightModeEnabled ? linkedinLogo : linkedinLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/laneazzi" target="_blank">
            <img
              src={isLightModeEnabled ? githubLogo : githubLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1_Hetf-sf1k8w2_65x1Q60Ug1wgY9ZWRh/view?usp=drive_link"
            target="_blank"
            title="My resume"
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
          <a href="/">
            <img
              src={isLightModeEnabled ? homeLogo : homeLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
        <li>
          <a href="/contact" title="Contact me">
            <img
              src={isLightModeEnabled ? messageLogo : messageLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/optional-practical-training-extension-for-stem-students-stem-opt"
            title="STEM-OPT"
            target="_blank"
          >
            <img
              src={isLightModeEnabled ? questionLogo : questionLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
