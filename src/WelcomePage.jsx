import React from 'react'
import Navbar from "./Navbar.jsx";
import AboutMe from "./AboutMe.jsx";
import Canvas from "./Canvas.jsx";

export default function WelcomePage({ setPage, page }) {
  return (
    <>
      <div className='flex h-screen'>
        <AboutMe className=""/>
        <Navbar setPage={setPage} page={page} />
      </div>
    </>
  );
}
