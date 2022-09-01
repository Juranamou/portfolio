import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Welcome from "./Welcome.jsx";
import './index.css';
// Huzzah for jsx!
const App = () => {
  return (
    <div>
      <div className="text-4xl">Hello World</div>
      <Welcome />
    </div>
  );
}

root.render(<App />);