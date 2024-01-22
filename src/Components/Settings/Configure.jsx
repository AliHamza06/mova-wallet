import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export default function Configure() {
  const [bitcoinAddress, setBitcoinAddress] = useState('');
  const [perfectMoneyAddress, setPerfectMoneyAddress] = useState('');
  const [payeerAddress, setPayeerAddress] = useState('');
  const [mobileMoney, setMobileMoney] = useState();
  const [ubaCard, setUbaCard] = useState('');
  const [bsicCard, setBsicCard] = useState('');

  const [errorMessages, setErrorMessages] = useState({
    bitcoinAddress: '',
    perfectMoneyAddress: '',
    payeerAddress: '',
    mobileMoney: '',
    ubaCard: '',
    bsicCard: '',
  });

  const handleSaveChanges = (e) => {
    e.preventDefault();

    // Validation logic
    let errors = {
      bitcoinAddress: bitcoinAddress.trim() ? '' : 'Bitcoin Address is required',
      perfectMoneyAddress: perfectMoneyAddress.trim() ? '' : 'Perfect Money Address is required',
      payeerAddress: payeerAddress.trim() ? '' : 'Payeer Address is required',
      mobileMoney: mobileMoney ? '' : 'Mobile Money is required',
      ubaCard: ubaCard.trim() ? '' : 'UBA Card is required',
      bsicCard: bsicCard.trim() ? '' : 'BSIC Card is required',
    };

    // Update the state with the error messages
    setErrorMessages(errors);

    // If there are no errors, you can proceed with saving changes
    if (Object.values(errors).every((error) => error === '')) {
      // Add logic to save changes (e.g., make an API call)
      console.log('Changes saved successfully!');
    }
  };

  return (
    <>
      <div className="settingHeadingDiv">
        <h5>Configure Accounts</h5>
        <p>Configure your accounts that you use on the site to facilitate all your purchasing, exchange, and reloading operations.</p>
      </div>
      <form onSubmit={handleSaveChanges}>
        <div className="row">
          {/* Bitcoin Address */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Preferred Bitcoin Address</label>
                <label className="form-label formLabel inputError errorLabelConfg">{errorMessages.bitcoinAddress}</label>
              </div>
              <input
                type="text"
                className="form-control formInput"
                placeholder="Bitcoin Address"
                value={bitcoinAddress}
                onChange={(e) => setBitcoinAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Perfect Money Address */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Preferred Perfect Money account</label>
                <label className="form-label formLabel inputError errorLabelConfg">{errorMessages.perfectMoneyAddress}</label>
              </div>
              <input
                type="text"
                className="form-control formInput"
                placeholder="Perfect Money Address"
                value={perfectMoneyAddress}
                onChange={(e) => setPerfectMoneyAddress(e.target.value)}
              />
            </div>
          </div>

          {/* Payeer Address */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Preferred Payeer Account</label>
                <label className="form-label formLabel inputError errorLabelConfg">{errorMessages.payeerAddress}</label>
              </div>
              <input
                type="text"
                className="form-control formInput"
                placeholder="Payeer Address"
                value={payeerAddress}
                onChange={(e) => setPayeerAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12"></div>
          {/* Mobile Money */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 className="eWalletText">E-Wallets</h6>
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Preferred Mobile Money</label>
                <label className="form-label formLabel inputError errorLabelConfg">{errorMessages.mobileMoney}</label>
              </div>
              <PhoneInput international defaultCountry="RU" value={mobileMoney} onChange={setMobileMoney} className="formInput" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 emptyCol">
            <div className="mb-3 bsicCol">
            </div>
          </div>
          {/* UBA Card */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <h6 className="eWalletText">Visa Cards</h6>
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">My UBA Card</label>
                <label className="form-label formLabel inputError errorLabelConfg">{errorMessages.ubaCard}</label>
              </div>
              <input
                type="password"
                className="form-control formInput"
                placeholder="UBA Card"
                value={ubaCard}
                onChange={(e) => setUbaCard(e.target.value)}
              />
            </div>
          </div>

          {/* BSIC Card */}
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="mb-3 bsicCol">
              <div className="labelDiv">
                <label className="form-label formLabel">My BSIC Card</label>
                <label className="form-label formLabel inputError errorLabelConfg">{errorMessages.bsicCard}</label>
              </div>
              <input
                type="password"
                className="form-control formInput"
                placeholder="BSIC Card"
                value={bsicCard}
                onChange={(e) => setBsicCard(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <button type="submit" className="formSaveButton">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
