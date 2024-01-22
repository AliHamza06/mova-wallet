import React, { useState } from "react";
import CountrySelect from "../../CountrySelect";
import LanguageSelect from "../../LanguageSelect";
import { Link } from "react-router-dom";
import Logo from "/src/assets/images/wallet _Logotype .svg";

export default function Header() {
  return (
    <div className="headerMainSection">
      <nav className="navbar navbar-expand-lg navbarExpand01">
        <div className="container-fluid px-sm-2 px-0">
          <a className="navbar-brand navbarBrand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler navbarToggler01"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbarUl01">
              {/* <li className="nav-item">
                <CountrySelect />
              </li> */}
             
              <li className="nav-item">
                <Link className="nav-link navLink01" to={{ pathname: "/login" }}>Sign In</Link>
              </li>
              <Link to="/inside-wallet">
                <button className="sendNowBtnTop">Send now</button>
              </Link>
              <li className="nav-item">
                <LanguageSelect />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
