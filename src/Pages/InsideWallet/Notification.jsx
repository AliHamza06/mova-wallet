import React from 'react';
import withdraw from "/src/assets/images/withdraw.svg";
import deposit from "/src/assets/images/deposit.svg";

const notificationData = [
  { type: 'withdraw', text: 'Withdraw USDT', amount: '$659.10' },
  { type: 'withdraw', text: 'Withdraw USDT', amount: '$659.10' },
  { type: 'deposit', text: 'Deposit USDT', amount: '$659.10' },
  { type: 'deposit', text: 'Deposit USDT', amount: '$659.10' },
];

export default function Notification() {
  const todayWithdrawNotifications = notificationData.filter(notification => notification.type === 'withdraw');
  const yesterdayDepositNotifications = notificationData.filter(notification => notification.type === 'deposit');

  return (
    <div>
      <h6 className='notifictionHeading pt-2'>Today</h6>
      {todayWithdrawNotifications.map((notification, index) => (
        <div key={index} className='notificationCard'>
          <div className='notificationTxtDiv'>
            <img src={withdraw} alt="" />
            <div>
              <h6>{notification.text}</h6>
              <p>{notification.amount}</p>
            </div>
          </div>
          <a href="#">
            <button className='completedButton'>Completed</button>
          </a>
        </div>
      ))}
      <h6 className='notifictionHeading'>Yesterday</h6>
      {yesterdayDepositNotifications.map((notification, index) => (
        <div key={index} className='notificationCard'>
          <div className='notificationTxtDiv'>
            <img src={deposit} alt="" />
            <div>
              <h6>{notification.text}</h6>
              <p>{notification.amount}</p>
            </div>
          </div>
          <a href="#">
            <button className='completedButton'>Completed</button>
          </a>
        </div>
      ))}
    </div>
  );
}
