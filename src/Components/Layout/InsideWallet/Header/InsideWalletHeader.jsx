import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function InsideWalletHeader({ toggleSidebar }) {
  const location = useLocation();

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

  const openSidebar = () => {
    toggleSidebar();
  };

  // Dynamic text based on the route
  let headerText = '';
  if (isInsideWallet) {
    headerText = '';
  } else if (isPayments) {
    headerText = 'Payments';
  } else if (isTransaction) {
    headerText = 'Transactions';
  }else if (isNotification) {
    headerText = 'Notifications';
  }else if (isAccount) {
    headerText = 'Account';
  }else if (isSetting) {
    headerText = 'Settings';
  }else if (isSwap) {
    headerText = 'Swap';
  }

  return (
    <div className="insideWalletHeaderMainSec">
      <span className="material-symbols-outlined openSidebarIcon" onClick={openSidebar}>
        menu_open
      </span>
      <h1>{headerText}</h1>
      <div className='headerSearchDiv01'>
        <div className='searchInputDiv01'>
          <input type="text" name="" className='headerSearchInput' placeholder='Search for anything....'/>
          <i className='bx bx-search'></i>
        </div>
        <i className='bx bx-bell notifIcon'></i>
      </div>
    </div>
  );
}
