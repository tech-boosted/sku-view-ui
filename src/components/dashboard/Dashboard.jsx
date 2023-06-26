import Tab from "components/Tabs/Tab";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import SusbcribedRoute from "components/routing/SusbcribedRoute";
import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes";
import Compare from "views/admin/components/Compare";

const Dashboard = (props) => {
  const route = routes.filter((item) => {
    return item.name === props.dashboard;
  });

  return (
    <div className="mt-5 flex w-full flex-col gap-5">
      <Tab route={route} />

      <Routes>
        {/* <Route element={<SusbcribedRoute path={"/"} key={"1232f"}/>}> */}
         
          <Route
            path={route[0].subRoutes[1].path}
            element={<InsightsTable platforms={[...props.platforms]} />}
          />
          <Route
            path={route[0].subRoutes[2].path}
            element={<Compare platforms={[...props.platforms]} />}
          />
        {/* </Route> */}
        <Route
            path={route[0].subRoutes[0].path}
            element={<ChartsAndTable platforms={[...props.platforms]} />}
          />
      </Routes>
    </div>
  );
};

export default Dashboard;
