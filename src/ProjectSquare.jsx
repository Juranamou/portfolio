import React from 'react'

export default function ProjectSquare(props) {
  return (
    <div className=' flex flex-col bg-gray-700 text-white font-quicksand my-10 ml-9 items-center py-8 rounded-lg'>
      <p className="text-5xl font-bold">{props.project.title}</p> 
      <img className='w-10/12 pt-8' src={props.project.img} alt="silent Spy gif"></img>
      <div className='mt-10 min w-11/12'>
        <p className='text-2xl'>{props.project.description}</p>
        <a className='text-2xl' href={props.project.link} target="_blank">
          <button className='bg-red-500 p-2 rounded-lg text-white mt-10 hover:animate-pulse'>View Source Code</button>
        </a>
      </div>
    </div>
  )
}
