// SidebarLayout.js
import React, { useState } from "react";
import Sidebar from "./Components/Layout/InsideWallet/SideBar/Sidebar";
import InsideWalletHeader from "./Components/Layout/InsideWallet/Header/InsideWalletHeader";
import { Outlet } from "react-router-dom";

export default function SidebarLayout() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="appContainer">
      <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="mainContent">
        <InsideWalletHeader toggleSidebar={toggleSidebar} />
        <div className="mangeTwoSection">
        <Outlet />
        </div>
      </div>
    </div>
  );
}
