import React from 'react'
import Navbar from "./Navbar.jsx";
import AboutMe from "./AboutMe.jsx";

export default function WelcomePage({setPage}) {
  return (
    <>
      <div className='flex h-screen'>
        <AboutMe />
        <Navbar setPage={setPage} className="flex justify-center items-center h-screen w-screen min-w-full min-h-full shrink-0 " />
      </div>
    </>
  );
}
