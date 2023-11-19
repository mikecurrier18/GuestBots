'use client';

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {signIn, useSession, getProvider, getProviders} from 'next-auth/react'


const Payments = () => {

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
  <div class="py-16 md:py-24 lg:py-5">
    <div class="px-5 md:px-10">
      <div class="mx-auto w-full max-w-10xl">
        <div class="mx-auto w-full max-w-3xl pb-9">
          <div class="text-center">
            <h2 class="head_text text-center orange_gradient pb-3">Payments
            </h2>
          </div>
        </div>
        <div className='w-full p-0 text-center flex-center flex'>
          <div className='text-4xl font-bold'>
            <h1 className='pb-8 px-4'><i>Ready to set up payments?</i></h1>
          </div>
          <div className='text-2xl pb-5'><Link
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3TG73856XK7789901MS65XEY"
                target='_blank'
                className='outline_btn'
                >
                    Click here!
            </Link></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 md:gap-4 lg:gap-6 justify-items-stretch">
          <div class=" grid-cols-1 grid border border-solid border-[#dfdfdf]  p-8 md:p-10">
            <div className='head_text text-center'>
                <h1 className='orange_gradient inline-block max-w-full py-4'><i>Setting up</i></h1>
            </div>
            <div class="text-xl text-left">Our payments are handled through a PayPal-powered monthly charge. In order to use your bots, you <i>must</i> set up your payments with us. Your bots will not work unless they have a payment account associated with them.</div>

            <div className=' flex-row w-full'>
            <div className='text-2xl font-semibold'><Link
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3TG73856XK7789901MS65XEY"
                target='_blank'
                className='outline_btn'
                >
                    Set up payments
            </Link></div>
            
                </div>
          </div>
          
          <div class="grid-cols-1 grid gap-8 border border-solid border-[#dfdfdf]  p-8 md:p-10">
          <div className='head_text text-center'>
                <h1 className='orange_gradient inline-block max-w-full py-4'><i>How it works</i></h1>
            </div>
            <div class="text-xl text-left">After setting up your payment information, your bots will be ready to be used! We bill you based on how much your bot sends messages, meaning you don't pay for more than you need! If you've set up payments and are still having trouble with your bot, you may have not set up your email forwarding. Click the button below to learn more. </div>
            <div className='text-2xl font-semibold'>
              <Link
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3TG73856XK7789901MS65XEY"
                target='_blank'
                className='outline_btn'
                >
                    Set up forwarding
            </Link></div>
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
         className='black_btn_lg mt-10'
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

export default Payments

