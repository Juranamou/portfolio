import React from 'react'
import Canvas from "./Canvas.jsx";

export default function Navbar({setPage, page}) {
  return (
    <div className="border-l-4 border-indigo-500 min-h-full flex flex-col space-x-4">
      <div className="flex space-x-4 ml-20 my-4 ">
        <div onClick={() => {setPage('projects')}} className=" cursor-pointer flex items-center justify-center bg-lime-50 rounded-full w-24 h-24 text-center content-center border-8 border-zinc-800">
          <div className='text-lg'>Projects</div>
        </div>
        <div onClick={() => {setPage('resume')}} className=" cursor-pointer flex items-center justify-center bg-lime-50 rounded-full w-24 h-24 text-center content-center border-8 border-zinc-800">
          <div>Resume</div>
        </div>
        <div onClick={() => {window.open('https://github.com/Juranamou')}} className=" cursor-pointer flex items-center justify-center bg-lime-50 rounded-full w-24 h-24 text-center content-center border-8 border-zinc-800">
          <div className = 'cursor-pointer'>Github</div>
        </div>
        <div onClick={() => {window.open('https://www.linkedin.com/in/john-economou/')}} className="cursor-pointer flex items-center justify-center bg-lime-50 rounded-full w-24 h-24 text-center content-center border-8 border-zinc-800">
          <div>LinkedIn</div>
        </div>
      </div>
      <div></div>
      <Canvas page={page} />
    </div>
  )
}
