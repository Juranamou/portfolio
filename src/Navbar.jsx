import React from 'react'

export default function Navbar({setPage}) {
  return (
    <div className="border-l-4 border-indigo-500 min-h-full flex ">
      <div className="flex space-x-4 ml-4 mt-4">
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
    </div>
  )
}
