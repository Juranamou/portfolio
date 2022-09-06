import React from 'react'

export default function AboutMe() {
  return (
    <div className = "flex flex-col items-center max-w-md bg-gray-800 text-white " >
      <img className="rounded-full p-10" src="imgs/src/self.png"/>
      <div className='font-bold font-nothing-you-could-do text-5xl'>
      John Economou
      </div>
      <div className='font-quicksand text-xl'>
        johnlafayeti@gmail.com
      </div>
      <div className='font-quicksand text-xl'>
        <div className='px-5 py-5'>
          Software engineer currently seeking a new position at a company where I can learn and grow.
          
        </div>
        <div className='px-5 py-5'>
          <div className="font-bold">
            A Little Bit About Me
          </div>
          I originally got into coding when I was working in a geology labratory crushing rocks and processing the data with
          Matlab and Python. What started was me messing around with some script files eventually turned into me developing a new passion. Since those days in the lab
          I have spent all my time learning algorithms, creating full stack applications, and optimizing backends.
        </div>
        <div className='px-5 py-5'>
        <div className="font-bold">
          Free Time Activities
        </div>
        Rock climb outdoors in North Carolina, run with my Border Collie, and cook yummy food with my fiancée.
        </div>
      </div>
    </div>
  )
}
