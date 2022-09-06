import React from 'react'

export default function ResumePage() {
  return (
    <div className='flex flex-col py-5 px-10 whitespace-normal text-white font-quicksand'>
      <p className='text-2xl'>
        Charlotte, NC - johnlafayeti@gmail.com
      </p>
      <div className='text-6xl pt-7 font-bold text-white-300 underline mb-5' >
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
      <div className='text-6xl pt-7 font-bold text-white-300 underline mb-5' >
        Software Applications
      </div>
      <div className='text-3xl font-bold'>
        Back-End Development - Californium API
      </div>
      <div className='text-2xl'>Created and scaled microservice to handle production level traffic for an e-commerce site by
        load balancing servers with NGINX on AWS</div>
      <div className='text-2xl'>Fixed bottleneck locations by testing the speed and performance of the server with K6</div>
      <div className='text-2xl'>Designed MongoDB database schema which supported production level traffic flow</div>
      <div className='text-3xl font-bold mt-4'>
        Front-End Development - Penguin Clothing Store
      </div>
      <div className='text-2xl'>Constructed a forum for users to read and add reviews for clothing products by creating reusable
        React components with CSS styled-components to enable an interactive web application</div>
      <div className='text-2xl'>Optimized API queries with Axios, reducing the time to paint by approximately 50%</div>
      <div className='text-2xl'>Implemented unit and end to end tests with Jest, increasing the total test coverage to >70%</div>
      <div className='text-3xl font-bold mt-4'>
        Full Stack - COOKin
      </div>
      <div className='text-2xl'>Composed a recipe database by scraping many pre-existing websites with Puppeteer</div>
      <div className='text-2xl'>Developed an application which recommended delicious recipes based on the ingredients the user has at home</div>
      <div className='text-2xl'>Created a back-end server using Axios and Node/Express which queries the recipe database</div>
    </div>

  )
}
