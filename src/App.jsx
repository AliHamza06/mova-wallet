// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Accounts/Login";
import Register from "./Pages/Accounts/Register";
import RegisterVerify from "./Pages/Accounts/RegisterVerify";
import ForgotPassword from "./Pages/Accounts/ForgotPassword";
import CheckEmail from "./Pages/Accounts/CheckEmail";
import ResetPassword from "./Pages/Accounts/ResetPassword";
import SidebarLayout from "./SidebarLayout";
import OverviewPage from "./Pages/InsideWallet/OverviewPage";
import Payments from "./Pages/InsideWallet/Payments";
import Transactions from "./Pages/InsideWallet/Transactions";
import Notification from "./Pages/InsideWallet/Notification";
import Account from "./Pages/InsideWallet/Account";
import Settings from "./Pages/InsideWallet/Settings";
import Swap from "./Pages/InsideWallet/Swap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Register />} />
          <Route path="register-verify" element={<RegisterVerify />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="check-email" element={<CheckEmail />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route path="/inside-wallet/*" element={<SidebarLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="overview" element={<OverviewPage />} />
          <Route path="payments" element={<Payments />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="swap" element={<Swap/>} />
          <Route path="notifications" element={<Notification />} />
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
