import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Welcome from "./Welcome.jsx";
import AboutMe from "./AboutMe.jsx";
import './index.css';
// Huzzah for jsx!
const App = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen border-l-4 min-h-max">
        <AboutMe />
        <Welcome />
      </div>
    </>
  );
}

root.render(<App />);