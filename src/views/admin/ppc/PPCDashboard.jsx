import React from "react";
import Dashboard from "components/dashboard";
import { PPCPlatforms } from "variables/dashboardPlatforms";

const PPCDashboard = () => {
  let Platforms = PPCPlatforms;

  return <Dashboard heading={"Acros PPC"} platforms={Platforms} />;
};

export default PPCDashboard;
