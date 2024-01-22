import React from "react";
import CustomSelect from "../../Components/SwapComp/CustomSelect";
import swapImage from "/src/assets/images/swapImage.svg";
export default function Swap() {
  return (
    <div className="swapMainSection">
      <div className="swapContainer">
        <div className="selectorSection">
          <div className="bitcoinSelectSection">
            <div className="center">
              <CustomSelect />
            </div>
            <div className="bitcoinBalanceDiv">
              <h6>
                53.5 <sub>- $2,1925</sub>
              </h6>
              <p>
                Balance : <span>0</span>
              </p>
            </div>
          </div>
          <img src={swapImage} alt="" className="swapImage" />
          <div className="bitcoinSelectSection">
            <div className="center">
              <CustomSelect />
            </div>
            <div className="bitcoinBalanceDiv">
              <h6>
                53.5 <sub>- $2,1925</sub>
              </h6>
              <p>
                Balance : <span>0</span>
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
          <p className="">1 ETH = 0.00411 ( $2455 )</p>
        </div>
        <button className="swapButon">Swap</button>
      </div>
    </div>
  );
}
