import React, { useState, useEffect } from 'react';
import CustomSelect from "../../Components/SwapComp/CustomSelect";
import swapImage from "/src/assets/images/swapImage.svg";
import axios from 'axios';

export default function Swap() {
  const [initialState, setInitialState] = useState({
    base: "USD",
    amount: "",
    convertTo: "INR",
    result: "",
    date: "",
  });

  useEffect(() => {
    if (isNaN(initialState.amount) || initialState.amount === "") {
      return;
    } else {
      const placeholderConversion = (amount, conversionRate) => {
        return (amount * conversionRate).toFixed(3);
      };

      // Replace this with your own logic or use a different API for currency conversion
      const fakeConversionRate = 75.0;

      const result = placeholderConversion(initialState.amount, fakeConversionRate);

      setInitialState(prevState => ({
        ...prevState,
        result: result,
        date: "Fake Date", // Replace with your own logic or leave it as a placeholder
      }));
    }
  }, [initialState.amount, initialState.base, initialState.convertTo]);

  const onChangeInput = (e) => {
    setInitialState({
      ...initialState,
      amount: e.target.value,
      result: null,
      date: null,
    });
  };

  const handleSelect = (selectedCurrency, field) => {
    setInitialState(prevState => ({
      ...prevState,
      [field]: selectedCurrency,
      result: null,
    }));
  };

  const handleSwap = (e) => {
    e.preventDefault();
    setInitialState(prevState => ({
      ...prevState,
      convertTo: prevState.base,
      base: prevState.convertTo,
      result: null,
    }));
  };


  return (
    <div className="swapMainSection">
      <div className="swapContainer">
        <div className="selectorSection">
          <div className="bitcoinSelectSection">
            <div className="center">
              <CustomSelect
                selectedOption={initialState.base}
                onSelect={(selectedCurrency) => handleSelect(selectedCurrency, 'base')}
                name="base"
              />

            </div>
            <div className="bitcoinBalanceDiv">
              <input
                type="number"
                className='currencyInput'
                placeholder="0"
                value={initialState.amount}
                onChange={onChangeInput}
              />
              <p>
                Balance: <span>0</span>
              </p>
            </div>
          </div>
          <img src={swapImage} alt="" className="swapImage" onClick={handleSwap} />
          <div className="bitcoinSelectSection">
            <div className="center">
              <CustomSelect
                selectedOption={initialState.convertTo}
                onSelect={(selectedCurrency) => handleSelect(selectedCurrency, 'convertTo')}
              />
            </div>
            <div className="bitcoinBalanceDiv">
              <input
                disabled={true}
                className='currencyInput'
                placeholder="Converted amount"
                value={initialState.amount === "" ? "0" : initialState.result === null ? "Calculating..." : initialState.result}
              />
              <p>
                Balance: <span>0</span>
              </p>
            </div>
          </div>
        </div>
        <div className="totalPriceSection">
          <div className="bitcoinBalanceDiv totalPrice">
            <p>Expected Output</p>
            <p>2798.02 ETH</p>
          </div>
          <div className="bitcoinBalanceDiv totalPrice">
            <p>Price Impact</p>
            <p>0.36%</p>
          </div>
        </div>
        <div className="bitcoinBalanceDiv covertTxt">
          <p className="">
            {initialState.amount} {initialState.base} to {initialState.result === null ? "Calculating..." : initialState.result} {initialState.convertTo}
          </p>
        </div>

        <button className="swapButon">
          Swap
        </button>
      </div>
    </div>
  );
}
