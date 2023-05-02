import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { getMiddleware } from "Middleware";
import { useDispatch } from "react-redux";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const callback = (res) => {
  //     if (res) {
  //       console.log(res);
  //       if (res.data) {
  //         dispatch({
  //           type: "loadUser",
  //           payload: {
  //             userData: res.data,
  //           },
  //         });
  //       }
  //     }
  //   };

  //   getMiddleware("/user/userInfo", callback, true);
  // }, []);

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
