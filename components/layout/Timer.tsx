import React from 'react'

export default function Timer() {

    const options=["Pomodoro","Short Break","Long Break"]

  return (
    <div className=' flex items-center flex-col  mt-10'>
        <div className='flex justify-center gap-8 text-xl font-semibold'>
            {options.map((option,index)=>{
                return <h1 className={`${index === 0  ? "bg-gray-500 bg-opacity-30 ":"" }p-2 cursor-pointer transition-all rounded`} key={index}>{option}</h1>
            })}
        </div>
        <div className='mt-10 mb-10 '>
            <h1 className='text-9xl font-bold select-none m-0'>20:20</h1>
        </div>
        <button className='px-16 py-2 text-2xl rounded-md bg-white text-blue-500 uppercase font-bold'>
            Start
        </button>
    </div>
  )
}
