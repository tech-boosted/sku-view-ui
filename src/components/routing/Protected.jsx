import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = ({ children, destination }) => {
  const navigate = useNavigate();
  const subscriptionArr = ["Acros Ads", "Acros PPC", "plans"];
  const userInfo = useSelector((state) => state.accountData.userInfo);

  const isLoggedIn = localStorage.getItem("token");
  if (!isLoggedIn || isLoggedIn === undefined) {
    navigate("/auth/sign-in")
  }
  return children ? children : <Outlet />;
};

export default Protected;
