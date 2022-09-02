import React from 'react'
import Navbar from "./Navbar.jsx";
import AboutMe from "./AboutMe.jsx";

export default function WelcomePage({setPage}) {
  return (
    <>
      <div className='flex h-screen'>
        <AboutMe />
        <Navbar setPage={setPage} />
      </div>
    </>
  );
}
