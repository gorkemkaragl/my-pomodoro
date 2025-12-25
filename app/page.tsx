import About from '@/components/layout/About'
import Header from '@/components/layout/Header'
import Timer from '@/components/layout/Timer'
import React from 'react'

const page = () => {
  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <div className='max-w-2xl min-h-screen  mx-auto'>
        <Header></Header>
        <Timer></Timer>
        <About></About>
      </div>
    </div>
  )
}

export default page