import Link from 'next/link';
const StepFinal = () => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step Final: Success Result
        </h1>
        <div className='my-4'>
          <h3>Data Submited Successfully To Server</h3>
        </div>
        <div className= 'justify-start mx-3 mb-5 gap-4'>
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
