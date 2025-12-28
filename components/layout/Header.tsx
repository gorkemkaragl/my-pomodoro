import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-4 pb-10 ">
      <Image
        className="select-none"
        src="/breaking-bad-seeklogo.png"
        alt="Breaking Bad"
        width={360}
        height={360}
        priority
      />

      <h1 className="font-bb uppercase tracking-[0.3em] text-[#c6b94c]">
        Pomodoro
      </h1>
    </div>
  )
}
