import Picture from "./components/picture";
import TechStack from "./components/techstack";
//import Navbar from "./components/constants/navbar";

import "./App.css";
import Navbar from "./constants/navbar";

function App() {
  const isLightModeEnabled = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const textStyle = isLightModeEnabled
    ? {
        maxWidth: "600px",
        background:
          "-webkit-linear-gradient(135deg, #8a2387, #e94057, #f27121)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }
    : {
        maxWidth: "600px",
        background:
          "-webkit-linear-gradient(135deg, #a6ffcb, #12d8fa, #1fa2ff)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      };

  return (
    <>
      <Navbar />
      <div className="maincontainer">
        {/**<div className="toggle">
      <input type="checkbox" />
      <label> &nbsp; &nbsp;Toggle Dark Mode</label>
    </div> */}
        <div className="title">
          <Picture />
          <h1
            style={{ fontWeight: "600", lineHeight: "1.2", marginBottom: "0" }}
            className="name"
          >
            <span style={textStyle}>
              Olanrewaju Ayedun <br />
              aka Elijah.
            </span>
          </h1>
          <h3 style={textStyle} className="description">
            I love efficiency, productivity and lightheartedness. Let's write cool code while having fun(∩˃o˂∩)♡. <p> Already on H1B so a transfer is easy and seamless. </p>
          </h3>
        </div>
        <div>
          <TechStack />
          {/**<div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        Download my resume {count}
      </button>
    </div>
    <iframe
      src={resume}
      width={"500px"}
      height={"500px"}
      title={"Resume"}
      style={{ border: "none", borderRadius: "10px" }}
    /> */}
        </div>
      </div>
    </>
  );
}

export default App;
