import React, {useState} from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import './index.css';
import WelcomePage from "./WelcomePage.jsx";
import ResumePage from "./ResumePage.jsx";
import ProjectPage from "./ProjectPage.jsx";
// Huzzah for jsx!
const App = () => {
  const [page, setPage] = useState('welcome');
  return (
    <>
    {page === 'project' && <ProjectPage setPage={setPage}/>}
    {page === 'welcome' && <WelcomePage setPage={setPage}/>}
    {page === 'resume' && <ResumePage setPage={setPage}/>}
    </>
  );
}

root.render(<App />);