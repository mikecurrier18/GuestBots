
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    
<footer class="px-3 py-8 text-gray-500 glassmorphism text-2 mt-10">
    <div class="flex flex-col">
        <div class="h-px mx-auto rounded-full md:hidden mt-7 w-11">
        </div>
        <div class="flex flex-col mt-4 md:mt-0 md:flex-row">
            <nav class="flex flex-col items-center justify-center flex-1 border-gray-100 md:items-end md:border-r md:pr-5">
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Set up payments
                </a>
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Create a bot
                </a>
                <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                    Community
                </a>
            </nav>
            <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11">
            </div>
            <div class="flex items-center justify-center flex-1 mt-4 border-gray-100 md:mt-0 md:border-r">
                
                    <Link href="/" className='flex gap-2 flex-center ml-4 hover:text-primary-gray-20'>
                    <span class="sr-only">
                        Settings
                    </span>
                        <Image 
                        src="/assets/images/logo.svg"
                         alt='logo'
                        width={30}
                        height={30}
                        className='object-contain'
                        />
                    </Link>
                    
            </div>
            <div class="h-px mx-auto mt-4 rounded-full md:hidden w-11 ">
            </div>
            <div class="flex flex-col items-center justify-center flex-1 mt-7 md:mt-0 md:items-start md:pl-5">
                <span class="">
                    © Guestbots, 2023
                </span>
                
            </div>
        </div>
    </div>
</footer>

  )
}

export default Footer