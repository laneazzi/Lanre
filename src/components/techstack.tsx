import { useEffect, useRef } from "react";
import reactLogo from "../assets/react.svg";
import pythonLogo from "../assets/python.svg";
import kotlinLogo from "../assets/kotlin.svg";
import cplusLogo from "../assets/cplus.svg";
import scssLogo from "../assets/scss.svg";
import stripeLogo from "../assets/stripe.svg";
import nodejsLogo from "../assets/nodejs.svg";
import flutterLogo from "../assets/flutter.svg";
import gcloudLogo from "../assets/gcloud.svg";
import TSLogo from "../assets/typescript.svg";
import "./techstack.css";

function TechStack() {
  const isLightModeEnabled = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const textStyle = isLightModeEnabled
    ? {
        borderBottom: "2px solid #c6426e",
        background:
          "-webkit-linear-gradient(135deg, #8a2387, #e94057, #f27121)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {
        borderBottom: "2px solid #12d8fa",
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
      if (
        container &&
        container.scrollTop + container.offsetHeight >= container.scrollHeight
      ) {
        container.scrollTop = 0;
      } else if (container) {
        container.scrollTop += 1;
      }
      animationFrameId = requestAnimationFrame(scrollDiv);
    };

    scrollDiv();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <>
      <h3 style={textStyle}>Tech Stack </h3>
      <div className="container" ref={containerRef}>
        <img src={TSLogo} className="image-scroll" />
        <img src={scssLogo} className="image-scroll" />
        <img src={reactLogo} className="image-scroll" />
        <img src={cplusLogo} className="image-scroll" />
        <img src={pythonLogo} className="image-scroll" />
        <img src={kotlinLogo} className="image-scroll" />
        <img src={nodejsLogo} className="image-scroll" />
        <img src={gcloudLogo} className="image-scroll" />
        <img src={stripeLogo} className="image-scroll" />
        <img src={flutterLogo} className="image-scroll" />
      </div>
    </>
  );
}

export default TechStack;
