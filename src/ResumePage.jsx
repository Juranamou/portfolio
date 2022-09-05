import React from 'react'

export default function ResumePage() {
  return (
      <div className='flex flex-col py-5 px-10 whitespace-normal text-white font-quicksand'>
        <p className='text-2xl'>
          Charlotte, NC - johnlafayeti@gmail.com
        </p>
        <div className='text-6xl pt-7 font-bold text-white-300' >
          Technical Skills
        </div>
        <div className='text-2xl'>
          <span className="font-bold">Languages: </span>CSS, HTML, JavaScript, TypeScript, Python, Matlab
        </div>
        <div className='text-2xl'>
          <span className="font-bold">Platforms: </span>AWS, Azure, Heroku, Linux
        </div>
        <div className='text-2xl'>
          <span className="font-bold">Frameworks: </span>Node.js, React
        </div>
        <div className='text-2xl'>
          <span className="font-bold">Databases: </span>MySQL, PostgreSQL, MongoDB
        </div>
        <div className='text-2xl'>
          <span className="font-bold">Testing and Deployment: </span>Jest, Mocha, Chai, NGINX K6
        </div>
        <div className='text-6xl pt-7 font-bold text-white-300' >
          Software Applications
        </div>
        <div className='text-2xl'>
          Back-End Development
        </div>
        <div className='text-2xl'>Created and scaled microservice to handle production level traffic for an e-commerce site by 
        load balancing servers with NGINX on AWS</div>
      </div>
  )
}
