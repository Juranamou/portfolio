import React from 'react'
import ProjectSquare from './ProjectSquare.jsx'


export default function ProjectPage({ setPage }) {
  const projects = [
    {
      'img': 'imgs/src/COOKin.gif',
      'link':"https://github.com/HiddenCloudVillage/COOKin",
      'description': "COOKin was designed to be an eco - friendly food recommendation application. COOKin allows people to determine the best recipes for them that utilizes the food they have at home. Make an account and enter the food you have around your house or what you are about to purchase from the grocery store. COOKin will take care of the rest.",
    },
    {
      'img': 'imgs/src/FEC.gif',
      'link':"https://github.com/gentoopenguinparty/SpeedyPenguinProject",
      'description': "Penguin clothing store was the first front end application I worked on. The site allows you to browse products, select them, leave reviews, questions, and see related products.",
    },
    {
      'img': 'imgs/src/silentSpy.gif',
      'link':"https://github.com/Juranamou/MVP",
      'description': "Silent Spy enables ebay users to determine when the proper time to buy a product is. It utilizes a web scraper and the ebay API to get past and current listings, and displays the list graphically. Users can also subscribe to email alerts, that tell a user when there product meets a price threshold. This web application was built in 2 days, when I decided to create a minimum viable product.",
    },
  ]
  return (
    <>
      <div className='flex flex-col overflow-y-auto mt-0 ml-100 px-8'>
        {projects.map((project, index) => (
          <ProjectSquare key={index} img={project.img} link={project.link} description={project.description} />
        ))}
      </div>
    </>

  )
}
