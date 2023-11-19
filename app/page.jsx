'use client'
import Feed from '@components/Feed';
import StartButton from '@components/StartButton'
import Steps from '@components/Steps'
import { useState, useEffect } from 'react'
import {signIn, useSession, getProvider, getProviders} from 'next-auth/react'
import Link from 'next/link';
const Home = () => {
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
    <section className="w-full flex-center flex-col">
{session?.user ? (

        
        <Steps />
        ):(
          <>
      {providers && Object.values(providers).map((provider) => (
        <div>

              <h1 className="head_text text-center">
              Welcome to 
              <br className="max-md:hidden" />
              <span className="orange_gradient text-center"> GuestBots</span>
          </h1>
          <p className="desc text-center">Sign in with your email and create a custom chat bot for your property.</p>
          <div className='flex-center w-full pb-10'>

          <div className='text-2xl font-semibold'>
              <Link
                href="/sign-in"
                target='_blank'
                className='outline_btn mx-2'
                >
                    Sign in
            </Link></div>
          <div className='text-2xl font-semibold'>
              <Link
                href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-3TG73856XK7789901MS65XEY"
                target='_blank'
                className='outline_btn'
                >
                    Register
            </Link></div>
          </div>
        </div>
        )
            )}
            </>
          )
      
      }
    </section>
  )
}

export default Home