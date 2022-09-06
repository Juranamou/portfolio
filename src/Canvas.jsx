import React from 'react'
import ProjectPage from './ProjectPage.jsx';
import ResumePage from './ResumePage.jsx';
export default function Canvas({ page }) {
  return (
    <>
      {page === 'projects' && <ProjectPage />}
      {page === 'resume' && <ResumePage/>}
    </>
  )
}

