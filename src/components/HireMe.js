import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

export const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-3
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-1 md:bottom-auto 
    md:absolute sm:right-0
    '>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-28'>
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />

        <Link href="mailto:juliano.moserjj@gmail.com" className='flex items-center justify-center 
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark 
        text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
        font-semibold hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light 
        hover:dark:border-light md:w-14 md:h-14 md:text-[12px]
        '>
          Hire Me
        </Link>
      </div>
    </div>
  )
}
