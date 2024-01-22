import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import userLogo from "/src/assets/images/userPng.png";
import icon01 from "/src/assets/images/trans.svg";
import icon02 from "/src/assets/images/Expencces1.svg";

export default function Sidebar({ isSidebarVisible, toggleSidebar }) {
  const location = useLocation();
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isInsideWallet, setIsInsideWallet] = useState(false);
  const [isPayments, setIsPayments] = useState(false);
  const [isTransaction, setisTransaction] = useState(false);
  const [isSwap, setisSwap] = useState(false);
  const [isNotification, setisNotification] = useState(false);
  const [isAccount, setisAccount] = useState(false);
  const [isSetting, setisSetting] = useState(false);

  useEffect(() => {
    setIsInsideWallet(location.pathname === ('/inside-wallet'));
    setIsPayments(location.pathname === '/inside-wallet/payments');
    setisTransaction(location.pathname === '/inside-wallet/transactions');
    setisSwap(location.pathname === '/inside-wallet/swap')
    setisNotification(location.pathname === '/inside-wallet/notifications')
    setisAccount(location.pathname === '/inside-wallet/account');
    setisSetting(location.pathname === '/inside-wallet/settings');
  }, [location.pathname]);

  const handleSidebarToggle = () => {
    toggleSidebar(); // Call the provided toggleSidebar function
  };
  return (
    <div className={`sidebarMainSection01 ${isSidebarVisible ? '' : 'sidebarHidden'}`}>
      <div className="sidebarUserLogoDiv">
        <i className={`bx bx-x bx-tada bx-flip-horizontal hideSideBarIcon ${isSidebarVisible ? '' : 'active'}`} onClick={toggleSidebar}></i>
        <div className="profile" onClick={toggleMenu}>
          <div className="userDescDiv">
            <div className="img-box">
              <img src={userLogo} alt="" />
            </div>
            <div className="user">
              <h3>Tanzir Rahman</h3>
              <p>View profile</p>
            </div>
          </div>
          <i className="bi bi-three-dots-vertical threeDotsIcon"></i>
          <div className={`menu ${menuActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/inside-wallet/account">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebarUlDiv">
        <NavLink to="/inside-wallet" className={`nav-link ${isInsideWallet ? 'navLinkActive' : ''}`}>
          <li>
            <i className="bx bx-grid-alt sideBarIcon"></i>
            <h6>Overview</h6>
          </li>
        </NavLink>
        <NavLink to="/inside-wallet/payments" className={`nav-link ${isPayments ? 'navLinkActive' : ''}`}>
          <li>
            <i className="bx bx-wallet sideBarIcon"></i>
            <h6>Payments</h6>
          </li>
        </NavLink>
        <NavLink
          to="/inside-wallet/transactions"
          className={`nav-link ${isHovered ? "active" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <li className={`yourCustomClass ${isTransaction ? 'navLinkActive' : ''}`}>
            <img src={(isHovered || isTransaction) ? icon02 : icon01} alt="" className="sideBarIconImg" />
            <h6>Transactions</h6>
          </li>
        </NavLink>
        <NavLink to="#" className={`nav-link ${isSwap ? 'navLinkActive' : ''}`}>
          <li>
            <span className="material-symbols-outlined sideBarIcon">swap_horiz</span>
            <h6>Swap</h6>
          </li>
        </NavLink>
        <NavLink to="/inside-wallet/notifications" className={`nav-link ${isNotification ? 'navLinkActive' : ''}`}>
          <li>
            <i className="bx bx-bell sideBarIcon"></i>
            <h6>Notifications</h6>
          </li>
        </NavLink>
        <NavLink to="/inside-wallet/account" className={`nav-link ${isAccount ? 'navLinkActive' : ''}`}>
          <li>
            <i className="bx bx-user sideBarIcon"></i>
            <h6>Account</h6>
          </li>
        </NavLink>
        <NavLink to="#" className={`nav-link ${isSetting ? 'navLinkActive' : ''}`}>
          <li>
            <i className="bx bx-cog sideBarIcon"></i>
            <h6>Settings</h6>
          </li>
        </NavLink>
        <div className="logoutLiDiv">
          <Link to="/login">
            <li>
              <span className="material-symbols-outlined sideBarIcon">login</span>
              <h6>Logout</h6>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
}
