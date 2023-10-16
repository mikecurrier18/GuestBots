import Link from 'next/link';
const StepFinal = () => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step Final: Success Result
        </h1>
        <div className='my-4'>
          <h3>Success! Your bot has been registered. If this is your first bot with us, click "next" to view the set-up instructions.</h3>
          
          <h3>If you've done this before, you can return to the home page. You only have to do this once, unless you have a different email receiving with your Airbnb notifications.</h3>
        </div>
        <div className= 'justify-start mx-3 mb-5 gap-4'>
        <Link href="/setup">
          <button className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
            Next
          </button>
          </Link>
            <Link href="/" className='text-gray-500 text-sm'>
              <button className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
                Return home
              </button>
            </Link>
            </div>
      </div>
    );
  };

  export default StepFinal;
