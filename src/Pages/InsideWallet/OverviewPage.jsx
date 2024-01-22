import React from "react";
import coin01 from "/src/assets/images/coin01.svg";
import coin02 from "/src/assets/images/coin02.svg";
import coin03 from "/src/assets/images/coin03.svg";
import coin04 from "/src/assets/images/coin04.svg";
import chart01 from "/src/assets/images/chart01.svg";
import chart02 from "/src/assets/images/chart02.svg";
import currency01 from "/src/assets/images/currency01.png";
import currency02 from "/src/assets/images/coin02.svg";
import createCurrency from "/src/assets/images/createCurrency.svg";
import DetailTable from "../../Components/Tables/DetailTable";
import SelectComponent from "../../Components/TableTopSelector/SelectComponent";
import TransactionsTable from "../../Components/Tables/TransactionsTable";
export default function OverviewPage() {
  return (
    <>
      <div className="titleTxtMainSection">
        <div className="titleTxtDiv">
          <h1 className="headerTxt01">Welcome Back, Ali 👋</h1>
          <p className="supTitleP01">
            Here’s what’s happening with your store today.
          </p>
        </div>
        <div className="buttonsGroup01">
          <a href="#">
            <button className="btnPayment01">
              <i className="bi bi-arrow-up"></i> Send
            </button>
          </a>
          <a href="#">
            <button className="btnPayment01">
              <i className="bi bi-arrow-down"></i> Recieve
            </button>
          </a>
          <a href="#">
            <button className="btnPayment01">
              <i className="bi bi-arrow-down-up"></i> Swap
            </button>
          </a>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 mt-5">
          <div className="coinCardMain">
            <img src={coin01} alt="" className="coinImg" />
            <h2>$168,331.09</h2>
            <div className="personTxtDiv">
              <img src={chart01} alt="" />
              <p className="person01">45%</p>
              <p>This week</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 mt-5">
          <div className="coinCardMain">
            <img src={coin02} alt="" className="coinImg" />
            <h2>$24,098</h2>
            <div className="personTxtDiv">
              <img src={chart01} alt="" />
              <p className="person01">45%</p>
              <p>This week</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 mt-5">
          <div className="coinCardMain">
            <img src={coin03} alt="" className="coinImg" />
            <h2>$667,224</h2>
            <div className="personTxtDiv">
              <img src={chart02} alt="" />
              <p className="person01 person02">45%</p>
              <p>This week</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 col-6 mt-5">
          <div className="coinCardMain">
            <img src={coin04} alt="" className="coinImg" />
            <h2>$667,224</h2>
            <div className="personTxtDiv">
              <img src={chart01} alt="" />
              <p className="person01">45%</p>
              <p>This week</p>
            </div>
          </div>
        </div>
      </div>
      {/* Currency Overview Section  */}
      <div className="currencySection">
        <h1 className="headerTxt01">Currency Overview</h1>
        <div className="row">
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4">
            <div className="currencyCard01">
              <p>GBP Balance</p>
              <div className="currencyImgDiv">
                <img src={currency01} alt="" />
              </div>
              <h6>456.00</h6>
              <p>British Pounds</p>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4">
            <div className="currencyCard01">
              <p>EUR Balance</p>
              <div className="currencyImgDiv">
                <img src={currency02} alt="" />
              </div>
              <h6>456.00</h6>
              <p>Euros</p>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4">
            <div className="currencyCard01">
              <p>EUR Balance</p>
              <div className="currencyImgDiv">
                <img src={createCurrency} alt="" className="createImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Details Section  */}
      <div className="portfolioSection">
        <h1 className="headerTxt01">Portfolio Details</h1>
        <div className="portFolioTableDiv01">
          <DetailTable />
        </div>
      </div>
      {/* Transaction Details Section  */}
      <div className="transactionSection">
        <div className="transactionTxtMainDiv">
          <h1 className="headerTxt01">Transactions</h1>
          <div>
            <SelectComponent />
          </div>
        </div>
        <div className="portFolioTableDiv01">
          <TransactionsTable/>
        </div>
      </div>
    </>
  );
}
