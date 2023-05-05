import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { getMiddleware } from "Middleware";
import { useDispatch } from "react-redux";

const App = () => {

  useEffect(() => {
    const callback = (res) => {
      if (res) {
        console.log(res);
      }
    };

    getMiddleware("/data", callback, true);
  }, []);

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
