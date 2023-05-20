import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children, destination }) => {
  const subscriptionArr = ["Acros Ads", "Acros PPC", "plans"];
  const userInfo = useSelector((state) => state.accountData.userInfo);

  const isLoggedIn = localStorage.getItem("token");
  if (!isLoggedIn || isLoggedIn === undefined) {
    <Navigate to="/signIn" replace />;
  }
  return children ? children : <Outlet />;
};

export default Protected;
