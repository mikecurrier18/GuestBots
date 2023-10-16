const StepC = ({
    formData,
    handleChangeInput,
    handlePrevStep,
    handleNextStep,
  }) => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step C: Additional Info
        </h1>
  
        <div className='my-2'>
          <label>Please provide any extra information about your property that you'd like your bot to know. <br />
          <br /><span>Here are some guest questions to think about before providing additional information:</span>
<ul className="text-center pb-5"><li>Is this a Duplex?</li>
<li>Do you have pool/spa jets?</li>
<li>Where is the washer/dryer?</li>
<li>Where is the wi-fi router?</li>
<li>"Can I park my _____ at your home?"</li>
<li>"How do I turn on the _____?"</li>
<li>"Where is the _____?"</li></ul>
</label>
          <textarea
            rows={6}
            required
            placeholder='Please provide extra details here...'
            name='extra_details'
            value={formData.extra_details}
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
  
  export default StepC;