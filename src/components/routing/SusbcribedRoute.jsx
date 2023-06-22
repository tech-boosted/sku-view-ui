import SubscriptionModal from "components/subscription/SubscriptionModal";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

const SusbcribedRoute = ({ children, path, key }) => {
  const userInfo = useSelector((state) => state.accountData.userInfo);
  return (
    <>
      {userInfo.subscription ? (
        { children }
        
      ) : (
        <Routes>
          <Route path={window.location.pathname} element={<SubscriptionModal />} key={"unique"} />
        </Routes>
      )}
    </>
  );
};

export default SusbcribedRoute;
