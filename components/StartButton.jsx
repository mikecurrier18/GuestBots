"use client";
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {signIn, useSession, getProvider, getProviders} from 'next-auth/react'


const StartButton = () => {

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
    <div>
        {session?.user ? (
          <div className='py-10'>
            <Link href="/simple-multi-step-form"
              className='black_btn_lg'
            >
              Create a bot
          </Link>
            </div>
        ):(
            <>
        {providers && Object.values(providers).map((provider) => (
                <button
                 type='button'
                 key={provider.name}
                 onClick={()=> signIn(provider.id)}
                 className='black_btn mt-16'
                >
                  Sign In
                </button>
              )
              )}
              </>
            )

        }</div>
  )
}

export default StartButton