import React from 'react'

export default function ProjectSquare(props) {
  return (
    <div className=' flex flex-col bg-slate-800 text-amber-200 my-10 w-8/12 min-h-full shrink-0 mx-0 ml-12 items-center'>
      <img className='w-11/12 pt-8' src={props.img} alt="silent Spy gif"></img>
      <div className='mt-10 min w-11/12 h-64'>
        <p className='text-2xl px-7 py-7'>{props.description}</p>
        <a className='text-2xl px-7 py-7' href={props.link}>
        {props.link}
        </a>
      </div>
    </div>
  )
}
