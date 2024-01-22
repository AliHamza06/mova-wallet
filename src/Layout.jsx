// Layout.js
import React from "react";
import Header from "./Components/Layout/Header/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();

  // List of routes where the header should not be displayed
  const noHeaderRoutes = ["/login", "/registration", "/register-verify", "/forgot-password", "/check-email", "/reset-password"];

  // Check if the current route is in the list of routes without the header
  const shouldDisplayHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <div>
      {shouldDisplayHeader && <Header />}
      <Outlet />
    </div>
  );
}
