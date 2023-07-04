import React from "react";
import Dashboard from "components/dashboard";
import { DSPPlatforms } from "variables/dashboardPlatforms";

const DSPDashboard = () => {
  var Platforms = DSPPlatforms;
  return <Dashboard heading={"Acros DSP"} platforms={Platforms} />;
};

export default DSPDashboard;
