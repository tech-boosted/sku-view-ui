import React, { useEffect, useRef } from "react";
import Tab from "../Tabs/Tab";
import Overview from "../overview";
import InsightsTable from "../insights/InsightsTable";
import SusbcribedRoute from "../routing/SusbcribedRoute";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "../../routes";
import Compare from "../../views/admin/components/Compare";
import { ChangeDrivers } from "components/drivers";

const Dashboard = ({ heading, platforms }) => {
  const route = routes.filter((item) => {
    return item.name === heading;
  });

  let location = useLocation();
  var activeRoute = location.pathname;

  const overviewRef = useRef(null);
  const skuDynamicsRef = useRef(null);

  useEffect(() => {
    if (activeRoute.includes("overview")) {
      //@ts-ignore
      overviewRef?.current.scrollIntoView();
    }
    if (activeRoute.includes("sku")) {
      //@ts-ignore
      skuDynamicsRef?.current.scrollIntoView();
    }
  }, [activeRoute]);

  return (
    <div className="mt-5 flex w-full flex-col gap-5">
      <Tab route={route} />

      {/* <Routes> */}
      {/* <Route element={<SusbcribedRoute path={"/"} key={"1232f"}/>}> */}

      {/* <Route
          path={route[0].subRoutes[1].path}
          element={<InsightsTable platforms={[...props.platforms]} />}
        />
        <Route
          path={route[0].subRoutes[2].path}
          element={<Compare platforms={[...props.platforms]} />}
        />
        <Route
          path={route[0].subRoutes[0].path}
          element={<ChartsAndTable platforms={[...props.platforms]} />}
          /> */}
      {/* </Route> */}
      {/* </Routes> */}

      <div ref={overviewRef}>
        <Overview />
      </div>
      <div ref={skuDynamicsRef}>
        <ChangeDrivers />
        <InsightsTable platforms={[...platforms]} />
      </div>
      <Compare platforms={[...platforms]} />
    </div>
  );
};

export default Dashboard;
