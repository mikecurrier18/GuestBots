const StepA = ({ formData, handleChangeInput, handleNextStep }) => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step A: Basic info
        </h1>
        <div className='my-2'>
          <label>Enter email address used to set up your PayPal account</label>
          <input
            required
            type='email'
            name='paypal_email'
            placeholder='address@domain.com'
            value={formData.paypal_email}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>
        <div className='my-2'>
          <label>Enter your phone number</label>
          <input
            type='phone'
            name='phone'
            placeholder='123-456-7890'
            required
            value={formData.phone}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>
        <div className='my-2 flex justify-end items-center'>
          <button
            className='bg-blue-500 px-4 py-2 mt-2 rounded-xl'
            onClick={handleNextStep}
          >
            Next
          </button>
        </div>
      </div>
    );
  };
  
  export default StepA;