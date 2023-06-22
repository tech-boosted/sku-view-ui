import React from "react";
import Dashboard from "components/dashboard/Dashboard";
import { DSPPlatforms } from "variables/dashboardPlatforms";

const DSPDashboard = () => {
  var Platforms = DSPPlatforms;
  return <Dashboard dashboard={"Acros DSP"} platforms={Platforms} />;
};

export default DSPDashboard;
