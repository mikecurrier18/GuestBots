const StepB = ({
    formData,
    handleChangeInput,
    handlePrevStep,
    handleNextStep,
  }) => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step B: Property info
        </h1>
  
        <div className='my-2'>
          <label>Link to property's listing on Airbnb</label>
          <input
            type='text'
            name='propertyLink'
            required
            placeholder='https://www.airbnb.com/...'
            value={formData.propertyLink}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>
        <div className='my-2'>
          <label>Property internal name</label>
          <input
            type='text'
            name='internal_name'
            required
            placeholder='ex. "Main street house"'
            value={formData.internal_name}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>
        <div className='my-2'>
          <label>Check-in instructions</label>
          <textarea
            rows={6}
            required
            placeholder='Copy these instructions from your listing on Airbnb and paste them here.'
            name='checkin_instructions'
            value={formData.checkin_instructions}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>

        <div className='my-2'>
          <label>Do you allow pets?</label>
          <input
            type='text'
            name='pets'
            required
            placeholder='"Yes." or "No."'
            value={formData.pets}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>

        <div className='my-2'>
          <label>If you allow pets, what is your fee? If not, ignore this field.</label>
          <input
            type='text'
            name='pet_fee'
            placeholder='ex. "$100 per night"'
            value={formData.pet_fee}
            onChange={(e) => handleChangeInput(e)}
            className='w-full outline-none border border-gray-400 px-2 py-1 rounded-lg focus:border-blue-600'
          />
        </div>

  
        <div className='my-2 flex justify-between items-center'>
          <button
            className='bg-gray-400 px-4 py-2 rounded-xl'
            onClick={handlePrevStep}
          >
            Prev
          </button>
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
  
  export default StepB;