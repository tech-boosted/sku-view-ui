import React from "react";
import Dashboard from "components/dashboard";
import { NativePlatforms } from "variables/dashboardPlatforms";

const NativeDashboard = () => {
  var Platforms = NativePlatforms;
  return <Dashboard heading={"Acros Native"} platforms={Platforms} />;
};

export default NativeDashboard;
