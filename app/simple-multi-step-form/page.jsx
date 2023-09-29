import React from 'react';
import SimpleMultiStepForm from './components/SimpleMultiStepForm';

const page = () => {
  return (
    <div className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism mb-10'>
            <h1 className='head_text text-center'>
        <span className='blue_gradient'>Create a bot</span>
        </h1>
        <p className='desc text-center max-w-md'>To create a bot for a new property, please provide us with the information below.</p>
    
      
      <SimpleMultiStepForm showStepNumber={true} />
    </div>
  );
};

export default page;