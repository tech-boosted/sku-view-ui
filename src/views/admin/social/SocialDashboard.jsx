import React from "react";
import Dashboard from "components/dashboard/Dashboard";
import { SocialPlatforms } from "variables/dashboardPlatforms";

const SocialDashboard = () => {
  var Platforms = SocialPlatforms;
  return <Dashboard dashboard={"Acros Social"} platforms={Platforms} />;

};

export default SocialDashboard;
