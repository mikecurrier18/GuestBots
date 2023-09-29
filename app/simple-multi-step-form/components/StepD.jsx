
  const StepD = ({
    formData,
    handleChangeInput,
    handlePrevStep,
    handleSubmitFormData,
  }) => {
    return (
      <div>
        <h1 className='mt-2 text-xl font-bold text-blue-900'>
          Step D: Confirm Form Data
        </h1>
        <DataConfirmRow label='PayPal email:' value={formData.paypal_email} />
        <DataConfirmRow label='Phone:' value={formData.phone} />
        <DataConfirmRow label='Property link:' value={formData.propertyLink} />
        <DataConfirmRow label='Internal name:' value={formData.internal_name} />
        <DataConfirmRow
          label='Check-in instructions:'
          value={formData.checkin_instructions}
        />
        <DataConfirmRow label='Pets allowed:' value={formData.pets} />
        <DataConfirmRow label='Pet fee:' value={formData.pet_fee} />

        <DataConfirmRow
          label='Income Per Month:'
          value={formData.incomePerMonth}
        />
        <DataConfirmRow label='Tax Percantage:' value={formData.taxPercantage} />
  
        <div className='my-4 flex items-center'>
          <input
            type='checkbox'
            name='agreeToTerms'
            id='agreeToTerms'
            value={formData.agreeToTerms}
            onChange={(e) => handleChangeInput(e)}
            className='w-4 h-4 mr-2 accent-pink-300 focus:accent-pink-500'
          />
          <label htmlFor='agreeToTerms'>I Agree to Terms of Services</label>
        </div>
  
        <div className='my-2 flex justify-between items-center'>
          <button
            className='bg-yellow-400 px-4 py-2 mt-2 rounded-xl'
            onClick={handlePrevStep}
          >
            Prev
          </button>
          <button
            className='bg-blue-500 px-4 py-2 mt-2 rounded-xl'
            onClick={handleSubmitFormData}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };
  
  export default StepD;
  
  // A Seperate component to show data
  const DataConfirmRow = ({ label, value }) => {
    return (
      <div className='my-3 border border-dashed border-gray-200 p-1 rounded-lg'>
        <span className='mr-4 text-slate-500'>{label}</span>
        <span className='mr-4 text-slate-900'>{value}</span>
      </div>
    );
  };