import React, { useState } from 'react';
import PaymentButtons from '../../Components/PaymentButtons';
import PaymentSelect from '../../Components/PaymentSelect';

export default function Payments() {
  const [selectedOption, setSelectedOption] = useState('ETH');
  const [selectedButton, setSelectedButton] = useState(0);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className='paymentMainSection'>
      <div className='paymentButtonSection'>
        <h6 className='paymentTitle'>I send</h6>
        <div>
          <PaymentButtons onSelect={handleButtonClick} />
        </div>
        <h6 className='paymentTitle paymentReceiveTitle'>I Receive</h6>
        <div>
          <PaymentButtons/>
        </div>
      </div>

      <div className="paymentForm">
        <form>
          <div className="mb-3">
            <label htmlFor="" className="form-label formLabel">Recipient</label>
            <input type="text" className="form-control formInput" placeholder='Enter Recipient Email Address / Phone Number' />
          </div>

          {selectedButton === 1 && (
            <>
            <div className="mb-3">
            <label htmlFor="" className="form-label formLabel">Select Crypto</label>
            <PaymentSelect selectedOption={selectedOption} onSelect={handleSelect} />
            </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label formLabel">Receiver Address</label>
                <input type="text" className="form-control formInput" placeholder='Receiver Address' />
              </div>
            </>
          )}
            <div className="mb-3">
                <label htmlFor="" className="form-label formLabel">Other Details</label>
                <input type="text" className="form-control formInput" placeholder='Other Details' />
              </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label formLabel">Money</label>
            <input type="text" className="form-control formInput" placeholder='Enter Money' />
          </div>
        </form>
      </div>

      <div className='amountTxtDiv'>
        <p>Amount</p>
        <h6>1,000.00 $</h6>
      </div>
      <div className='amountTxtDiv mt-2'>
        <p>Transaction fees</p>
        <h6>10.00 $</h6>
      </div>
      <div className='amountTxtDiv mt-2'>
        <p>Total</p>
        <h6>1010.00 $</h6>
      </div>

      <div>
        <button type="submit" className="payButton">Continue to Pay</button>
      </div>
    </div>
  );
}
