import React from "react";
import Dashboard from "components/dashboard";
import { SocialPlatforms } from "variables/dashboardPlatforms";

const SocialDashboard = () => {
  var Platforms = SocialPlatforms;
  return <Dashboard heading={"Acros Social"} platforms={Platforms} />;

};

export default SocialDashboard;
