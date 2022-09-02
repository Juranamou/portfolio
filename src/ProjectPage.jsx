import React from 'react'
import ProjectSquare from './ProjectSquare.jsx'
export default function ProjectPage({ setPage }) {
  return (
    <>
      <div className='flex flex-col h-screen w-screen overflow-y-auto mt-0 ml-100 pl-5'>
        <ProjectSquare />
        <ProjectSquare />
        <ProjectSquare />
        <ProjectSquare />
      </div>
    </>

  )
}
