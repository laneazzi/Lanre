import { useState } from "react";

import Chat from "../components/chat";
import Modal from "../components/modal";
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

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className="navbar">
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <Chat />
        </Modal>
      )}
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
            href="https://docs.google.com/document/d/e/2PACX-1vRn8Il3c7M8RXJbcrRO7PTXBSnmYq2Iapic7d4o3IaCkCTq-MNQK5gBuFvQnM1fbUKlU7aZ_wJ5irUC/pub"
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
          <a
            title="Contact me"
            role="button"
            style={{ cursor: "pointer" }}
            onClick={handleOpenModal}
          >
            <img
              src={isLightModeEnabled ? messageLogo : messageLightLogo}
              className="navbar-icons"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.grapelaw.com/library/content/the-h1b-visa-transfer-process"
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
