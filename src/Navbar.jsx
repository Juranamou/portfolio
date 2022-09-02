import React from 'react'
import Canvas from "./Canvas.jsx";

export default function Navbar({setPage, page}) {
  return (
    <div className="border-l-4 border-indigo-500 min-h-full flex flex-col max-w-md space-x-4">
      <div className="flex space-x-4 ml-4 my-4 ">
        <div className="flex items-center justify-center bg-red-600 rounded-full w-24 h-24 text-center align-middle content-center">
          <div onClick={() => {setPage('projects')}}>Projects</div>
        </div>
        <div className="flex items-center justify-center bg-red-600 rounded-full w-24 h-24 text-center align-middle content-center">
          <div onClick={() => {setPage('resume')}}>Resume</div>
        </div>
        <div className="flex items-center justify-center bg-red-600 rounded-full w-24 h-24 text-center align-middle content-center">
          <div>Github</div>
        </div>
      </div>
      <div></div>
      <Canvas page={page} />
    </div>
  )
}
