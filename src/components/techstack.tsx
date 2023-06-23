import { useEffect, useRef } from "react";

import sqlLogo from "../assets/sql.svg";
import scssLogo from "../assets/scss.svg";
import htmlLogo from "../assets/html.svg";
import reactLogo from "../assets/react.svg";
import cplusLogo from "../assets/cplus.svg";
import reduxLogo from "../assets/redux.svg";
import pythonLogo from "../assets/python.svg";
import kotlinLogo from "../assets/kotlin.svg";
import stripeLogo from "../assets/stripe.svg";
import nodejsLogo from "../assets/nodejs.svg";
import TSLogo from "../assets/typescript.svg";
import flutterLogo from "../assets/flutter.svg";

import "./techstack.css";

function TechStack() {
  const isLightModeEnabled = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  const isMobile = window.matchMedia("(max-width: 1024px)").matches;

  const textStyle = isLightModeEnabled
    ? {
        margin: "auto 0",
        padding: "0 10px 0 0",
        borderRight: isMobile ? "2px solid #c6426e" : "none",
        borderBottom: isMobile ? "none" : "2px solid #c6426e",
        background:
          "-webkit-linear-gradient(135deg, #8a2387, #e94057, #f27121)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {
        margin: "auto 0",
        padding: "0 10px 0 0",
        borderRight: isMobile ? "2px solid #12d8fa" : "none",
        borderBottom: isMobile ? "none" : "2px solid #12d8fa",
        background:
          "-webkit-linear-gradient(135deg, #a6ffcb, #12d8fa, #1fa2ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId: number;

    const scrollDiv = () => {
      if (container) {
        if (!isMobile) {
          if (
            container.scrollTop + container.offsetHeight >=
            container.scrollHeight
          ) {
            container.scrollTop = 0;
          } else {
            container.scrollTop += 1;
          }
        } else {
          if (
            container.scrollLeft + container.offsetWidth >=
            container.scrollWidth
          ) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(scrollDiv);
    };

    scrollDiv();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="mobile">
      <h3 style={textStyle} className="stack">
        Tech Stack
      </h3>
      <div className="container" ref={containerRef}>
        <img src={""} className="image-scroll" />
        <img src={""} className="image-scroll" />
        <img src={TSLogo} className="image-scroll" />
        <img src={sqlLogo} className="image-scroll" />
        <img src={htmlLogo} className="image-scroll" />
        <img src={scssLogo} className="image-scroll" />
        <img src={reactLogo} className="image-scroll" />
        <img src={reduxLogo} className="image-scroll" />
        <img src={cplusLogo} className="image-scroll" />
        <img src={pythonLogo} className="image-scroll" />
        <img src={kotlinLogo} className="image-scroll" />
        <img src={nodejsLogo} className="image-scroll" />
        <img src={stripeLogo} className="image-scroll" />
        <img src={flutterLogo} className="image-scroll" />
      </div>
    </div>
  );
}

export default TechStack;
