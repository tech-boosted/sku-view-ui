import React from "react";
import Dashboard from "components/dashboard/Dashboard";
import { PPCPlatforms } from "variables/dashboardPlatforms";

const PPCDashboard = () => {
  let Platforms = PPCPlatforms;

  return <Dashboard dashboard={"Acros PPC"} platforms={Platforms} />;
};

export default PPCDashboard;
