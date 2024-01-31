import React from "react";

import book from "/src/assets/images/book.svg";
import down from "/src/assets/images/doen.svg";
import dollarImg from "/src/assets/images/dollar.svg";
import sendMoney from "/src/assets/images/sendmoney.svg";
import ratesImg from "/src/assets/images/ratesImg.svg";
import place01 from "/src/assets/images/place01.svg";
import place02 from "/src/assets/images/place02.svg";
import place03 from "/src/assets/images/place03.svg";
import place04 from "/src/assets/images/place04.svg";
import pseudo1 from "/src/assets/images/pseudo1.svg";
import pseudo2 from "/src/assets/images/pseudo2.svg";
import works01 from "/src/assets/images/works01.svg";
import works02 from "/src/assets/images/works02.svg";
import works03 from "/src/assets/images/works03.svg";
import works04 from "/src/assets/images/works04.svg";
import OnePlacesCard from "../Components/OnePlacesCard";
import AccordionData from "../Components/AccordionData";
import SwiperComponent from "../Components/SwiperComponent";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <div className="manageMaxWidthAllSection homeSection01">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="seamLessContent01">
              <img src={book} alt="" className="bookPng01" />
              <div className="seamLessContent02">
                <h6>International Payments</h6>
                <h2>Seamless Transactions for both you and your dear ones</h2>
                <p>
                  Quickly and easily send, receive and request money online with
                  us. Get a customized solution to fit your business needs
                </p>
                <div className="seamLessContent02Button">
                  <Link to="/registration">
                    <button className="openFreeAccount01">
                      Open Free Account
                    </button>
                  </Link>
                  <a href="#">
                    <button className="openFreeAccount01 openFreeAccount02">
                      See How it Works
                    </button>
                  </a>
                </div>
              </div>
              <img src={down} alt="" className="downPng01" />
            </div>
          </div>
          <div className="col-lg-5 col-md-12 calculationContentCol01">
            <div className="calculationContent01">
              <img src={dollarImg} alt="" className="dollarPng01" />
              <img src={sendMoney} alt="" className="moneyImg01" />
              <img src={down} alt="" className="downPng01 downPng02" />
            </div>
          </div>
        </div>
      </div>
      <div className="manageMaxWidthAllSection">
        <div className="row">
          <div className="paymentMethodSection01">
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="paymentContentdiv01">
                <h6>
                  50 <span>+</span>
                </h6>
                <p>Supported Currencies</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="paymentContentdiv01">
                <h6>
                  100 <span>+</span>
                </h6>
                <p>Available Countries</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="paymentContentdiv01">
                <h6>
                  70 <span>+</span>
                </h6>
                <p>Payment Methods</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="paymentContentdiv01">
                <h6>
                  7/24 <span>+</span>
                </h6>
                <p>Support Team</p>
              </div>
            </div>
          </div>
        </div>
        {/* Easy Global Transfers at Great Rates Section  */}
        <div className="homeSection02">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img src={ratesImg} alt="" className="ratesImg" />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="greatRatesDiv01">
                <p className="transparentP">A Radically Transparent Approach</p>
                <h1>Easy Global Transfers at Great Rates</h1>
                <p>
                  Quickly and easily send, receive and request money online with
                  us. Get a customized solution to fit your business needs
                </p>
                <div>
                  <a href="#">
                    <button className="ratesWorkBtn">See How it Works</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* All Your Payments in One place Section  */}
        <div className="homeSection03">
          <div className="lowFeesContentDiv01">
            <p className="transparentP">High speeds. Low fees. No hassle.</p>
            <h3>All Your Payments in One place</h3>
            <p>
              Quickly and easily send, receive and request money online with us.
              Get a customized solution to fit your business needs
            </p>
          </div>
        </div>
        <div className="onePlaceRow01">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <OnePlacesCard
                imageSrc={place01}
                title="Payments"
                description="Allows users to securely conduct online financial transactions, whether for purchases, money transfers, or other monetary transactions."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <OnePlacesCard
                imageSrc={place02}
                title="Collections"
                description="Facilitates the management and tracking of grouped payments or funds collected for specific events, collaborative projects, or community contributions."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <OnePlacesCard
                imageSrc={place03}
                title="Money Exchange"
                description="Provides the ability to convert one currency to another, facilitating international transactions and monetary exchanges."
              />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <OnePlacesCard
                imageSrc={place04}
                title="Global Accounts"
                description="Offers users integrated financial accounts that can be used globally, simplifying international financial operations and providing a comprehensive overview 
                  of assets on a global scale."
              />
            </div>
          </div>
        </div>
        {/* How it works? Section  */}
        <div className="homeSection04">
          <div className="itWorksContent01">
            <h5>How it works?</h5>
            <p>Just few step to start , it’s easier than you think</p>
          </div>
          <div className="worksCard01Row">
            <div className="worksCard01">
              <img src={works01} alt="" />
              <h6>Register for free</h6>
            </div>
            <img src={pseudo1} alt="" className="pseudoImg" />
            <div className="worksCard01">
              <img src={works02} alt="" />
              <h6>Verify Phone Number</h6>
            </div>
            <img src={pseudo2} alt="" className="pseudoImg pseudoImg02" />
            <div className="worksCard01 worksCard02">
              <img src={works03} alt="" />
              <h6>Verify your identity</h6>
            </div>
            <img
              src={pseudo1}
              alt=""
              className="pseudoImg worksCard02 pseudoImg04"
            />
            <img
              src={pseudo2}
              alt=""
              className="pseudoImg pseudoImg03 worksCard02"
            />
            <div className="worksCard01 worksCard02">
              <img src={works04} alt="" />
              <h6>Start Trading</h6>
            </div>
          </div>
        </div>

        {/* Start Making Easy Transfers Now Section  */}
        <div className="homeSection05">
          <div className="waitingForContent01">
            <p className="transparentP">What are you waiting for?</p>
            <h4>Start Making Easy Transfers Now</h4>
            <p>
              Quickly and easily send, receive and request money online with us.
              Get a customized solution to fit your business needs
            </p>
            <div className="waitingForContentBtn01">
              <Link to="/registration">
                <button className="openFreeAccount03">Open Free Account</button>
              </Link>
              <a href="#">
                <button className="openFreeAccount03 openFreeAccount04">
                  See How it Works
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="homeSection05 homeSection06">
          <div className="waitingForContent01 waitingForContent02">
            <p className="transparentP">Testiminials</p>
            <h4>What our Customers says</h4>
            <p>
              245m+ happy clients all around the world. Don’t just take our word
              for it
            </p>
          </div>
        </div>
      </div>
      <div className="swiperSection01">
        <SwiperComponent/>
      </div>
      <div className="homeSection08">
        <div className="manageMaxWidthAllSection">
        <div className="waitingForContent01 waitingForContent02">
          <p className="transparentP">Frequently Asked Questions</p>
          <h4>We have answer to your all questions</h4>
          <p>We have a list of frequently asked questions about us</p>
        </div>
        <div className="accordionMainDiv">
        <div className="accordion accordion-flush accordionFlush" id='accordionFlushExample'>
        {AccordionData.map((item, index) => (
          <div className="accordion-item accordionItem01" key={index}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button collapsed accordionButton01 ${index === 0 ? '' : 'collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`flush-collapse${index}`}
              >
                {item.question}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? '' : ''}`}
              data-bs-parent='#accordionFlushExample'
            >
              <div className="accordion-body accordionBody01">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
        </div>
      </div>
    </>
  );
}
