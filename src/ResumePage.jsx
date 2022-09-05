import React from 'react'

export default function ResumePage() {
  return (
    <>
      <div className='flex flex-col py-5 px-10 font-bold whitespace-normal'>
        <p className='text-2xl'>
          John Economou - Charlotte N.C. - johnlafayeti@gmail.com
        </p>
        <div className='text-4xl pt-7 font-bold text-cyan-700' >
          TECHNICAL SKILLS
        </div>
        <div className='text-xl' >
          Languages: CSS HTML JavaScript TypeScript Python Matlab
        </div>
        <div className='text-xl'>
          Platforms: AWS Azure Heroku Linux
        </div>
        <div className='text-xl'>
          Frameworks: Node.js React
        </div>
        <div className='text-xl'>
          Data: MySQL PostgreSQL MongoDB
        </div>
        <div className='text-xl'>
          Testing and Deployment: Jest Mocha Chai NGINX K6
        </div>
        <div className='text-4xl pt-7 font-bold text-cyan-700' >
          SOFTWARE APPLICATIONS
        </div>
        <div className='text-2xl'>
          Back-End Development
        </div>
        <div className='text-2xl'>Created and scaled microservice to handle production level traffic for an e-commerce site by 
        load balancing servers with NGINX on AWS</div>
      </div>
    </>
  )
}
