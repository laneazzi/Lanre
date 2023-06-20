import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 style={{ fontWeight: "600", lineHeight: "1.2" }}>
        <span
          style={{
            background:
              " -webkit-linear-gradient(135deg, #a6ffcb, #12d8fa, #1fa2ff )",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Olanrewaju Ayedun aka Elijah.
        </span>
      </h1>
      <h3
        style={{
          background:
            " -webkit-linear-gradient(135deg, #a6ffcb, #12d8fa, #1fa2ff )",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        I am a Fullstack Web Developer with extensive knowledge and years of
        valuable expertise. I also love learning new things.
      </h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
