import React from 'react'

export default function AboutMe() {
  return (
    <div className = "flex flex-col items-center max-w-md bg-green-300" >
      <div className='font-bold'>
      John Economou's Web Portfolio :)
      </div>
      <div className='px-5 py-5'>
        Hello my name is John and I am a software engineer currently seeking a new position at a company where I can learn and grow.
        Message me on linkedin or email me!
        Johnlafayeti@gmail.com
      </div>
      <div className='px-5 py-5'>
        Just a little bit about me: I originally got into coding when I was working in a geology labratory crushing rocks, and processing the data with
        Matlab and Python. What started as me messing around with some script files eventually turned into me developing a new passion. Since those days in the lab
        I have spent all my time learning algorithms, creating full stack applications, and optimizing backends.
      </div>
      <div className='px-5 py-5'>
      During my freetime I love to rock climb outdoors in North Carolina, running with my border collie, or cooking yummie food with my Fiance.
      </div>
    </div>
  )
}
