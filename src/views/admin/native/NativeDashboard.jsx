import React from "react";
import Dashboard from "components/dashboard/Dashboard";
import { NativePlatforms } from "variables/dashboardPlatforms";

const NativeDashboard = () => {
  var Platforms = NativePlatforms;
  return (
    <Dashboard dashboard ={"Acros Native"} platforms={Platforms} />
  );
};

export default NativeDashboard;
