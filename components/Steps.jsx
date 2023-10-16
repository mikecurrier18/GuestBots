'use client';

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {signIn, useSession, getProvider, getProviders} from 'next-auth/react'


const Steps = () => {

    const {data: session} = useSession();

    const [providers, setUpProviders] = useState(null);
      useEffect(() => {
        const setProviders = async() => {
          const response = await getProviders();
    
          setUpProviders(response);
        }
    
        setProviders();
      }, [])

  return (

<section className="block">
{session?.user ? (
  <div class="py-16 md:py-24 lg:py-12">
    <div class="px-5 md:px-10">
      <div class="mx-auto w-full max-w-7xl">
        <div class="mx-auto w-full max-w-3xl pb-9">
          <div class="text-center">
            <h2 class="head_text text-center">Getting started is easy as
            <br /><span className="orange_gradient text-center"><i>1, 2, 3</i></span>
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
          <div class=" grid-cols-1 grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
            <div className='head_text text-center'>
                <h1 className='orange_gradient inline-block max-w-full '><i>Step 1</i></h1>
            </div>
            <div class="text-xl font-semibold text-center">Set up billing through PayPal</div>

            <div className='lg:columns-2 flex-row w-full'>
            <Link
                href="/set-up-payments"
                className='  black_btn'
                >
                    More info
            </Link>
            <Link
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3TG73856XK7789901MS65XEY"
                target='_blank'
                className='outline_btn'
                >
                    Set up
            </Link>
                </div>

          </div>
          <div class="grid-cols-1 grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
          <div className='head_text text-center'>
                <h1 className='orange_gradient inline-block max-w-full'><i>Step 2</i></h1>
            </div>
            <div class="text-xl font-semibold text-center">Set up a bot unique bot for a property</div>
            <Link
                href="/simple-multi-step-form"
                className='outline_btn'
                >Create new bot</Link>          
            </div>
          <div class="grid-cols-1 grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
          <div className='head_text text-center'>
                <h1 className='orange_gradient inline-block max-w-full'><i>Step 3</i></h1>
            </div>
            <div class="text-xl font-semibold text-center">Join the community on Slack</div>
            <Link
                href="/community"
                className='outline_btn'
                >Join our Slack</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  ):(
    <>
{providers && Object.values(providers).map((provider) => (
        <button
         type='button'
         key={provider.name}
         onClick={()=> signIn(provider.id)}
         className='black_btn_lg'
        >
          Sign In
        </button>
      )
      )}
      </>
    )

}
</section>
  )
}

export default Steps