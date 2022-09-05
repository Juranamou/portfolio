import React from 'react'
import silentSpy from './silentSpy.gif'
export default function ProjectSquare() {
  return (
    <div className=' flex flex-col bg-slate-800 text-amber-200 my-10 w-8/12 min-h-full shrink-0 mx-0 ml-12 items-center'>
      <img className='w-11/12 pt-8' src={silentSpy} alt="silent Spy gif"></img>
      <div className='bg-slate-400 mt-10 min w-11/12 h-64'>
        <p className='text-2xl px-7 py-7'>Silent Spy enables ebay users to determine when the proper time to buy a product is. It utilizes a web scraper and the ebay API
        to get past and current listings, and displays the list graphically. Users can also subscribe to email alerts, that tell a user when there product meets
        a price threshold. This web application was built in 2 days, when I decided to create a minimum viable product.</p>
        <a className='text-2xl px-7 py-7' href="https://github.com/Juranamou/MVP">
        https://github.com/Juranamou/MVP
        </a>
      </div>
    </div>
  )
}
