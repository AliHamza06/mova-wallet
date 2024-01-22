import React from 'react'

import PaymentButtons from '../../Components/PaymentButtons';
export default function Payments() {
  return (
    <div className='paymentMainSection'>
     <div className='paymentButtonSection'>
      <h6 className='paymentTitle'>I send</h6>
        <div>
          <PaymentButtons/>
        </div>
        <h6 className='paymentTitle paymentReceiveTitle'>I Receive</h6>
        <div>
          <PaymentButtons/>
        </div>
     </div>
     <div className="paymentForm">
        <form>
          <div className="mb-3">
            <label htmlFor="" className="form-label formLabel" >Recipient</label>
            <input type="text" className="form-control formInput" id="" placeholder='Enter Recipient Email Address / Phone Number'/>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label formLabel" >Money</label>
            <input type="text" className="form-control formInput" id="" placeholder='Enter Money'/>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label formLabel" >Bitcoin Address</label>
            <input type="text" className="form-control formInput" id="" placeholder='Enter Address'/>
          </div>
          
        </form>
     </div>
      <div className='amountTxtDiv'>
          <p>Total Amount</p>
          <h6>1,000.00 USD</h6>
      </div>
     <div>
     <button type="submit" className="payButton">Continue to Pay</button>
     </div>
    </div>
  )
}
