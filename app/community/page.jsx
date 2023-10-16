'use client';

import React from 'react'
import Image from 'next/image'
const community = () => {
  return (

<header className="block glassmorphism bg-cover bg-center text-black">
  <div className="px-5 md:px-10">
    <div className="py-16 md:py-24 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex-col flex items-center justify-center text-center">
          <div className="max-w-[720px] lg:max-w-[800px] mb-6 md:mb-10 lg:mb-12">
            <h1 className="font-bold mb-4 text-4xl md:text-6xl">Join our community on Slack!</h1>
            <div className="mx-auto max-w-[630px]">
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#" target="_blank" className="flex-row flex max-w-full items-center justify-start gap-4 bg-[#07132d] px-8 py-5 font-bold text-[#7c8aaa] transition hover:text-white rounded-full">
            <Image 
        src="/assets/images/logo.svg"
        alt='logo'
        width={30}
        height={30}
        className='object-contain'
        />              
        <p className="">Slack</p>
        </a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</header>  )
}

export default community