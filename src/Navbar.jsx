import React from 'react'
import Canvas from "./Canvas.jsx";

export default function Navbar({setPage, page}) {
  return (
    <div className="border-l-4 min-h-full flex flex-col space-x-4 w-screen">
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-lg sticky top-0 left-0 right-0">
        <div className="w-full flex flex-row lg:flex lg:items-center lg:w-auto font-medium">
          <p onClick={() => {setPage('projects')}} className="text-3xl cursor-pointer hover:animate-pulse font-quicksand block mt-0 lg:inline-block text-black text-opacity-50 hover:text-opacity-100 mr-4">projects</p>
          <p onClick={() => {setPage('resume')}} className="text-3xl cursor-pointer hover:animate-pulse font-quicksand block mt-0 lg:inline-block text-black text-opacity-50 hover:text-opacity-100 mr-4">resume</p>
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" className="cursor-pointer hover:animate-pulse mr-4"/>
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png" className="cursor-pointer hover:animate-pulse mr-4"/>
        </div>
      </nav>
      <Canvas page={page} />
    </div>
  )
}
