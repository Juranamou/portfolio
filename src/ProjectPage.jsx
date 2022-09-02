import React from 'react'
import ProjectSquare from './ProjectSquare.jsx'
export default function ProjectPage({ setPage }) {
  return (
    <>
      <div className='flex flex-col h-screen w-screen items-center overflow-y-auto mt-0'>
        <ProjectSquare />
        <ProjectSquare />
        <ProjectSquare />
        <ProjectSquare />
      </div>
    </>

  )
}
