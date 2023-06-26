import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "routes.js";

const DashboardLayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="flex h-full w-full">
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
        <Routes>
          {getRoutes(routes)}

          <Route
            path="/"
            element={<Navigate to="/dashboard/PPC-dashboard/" replace />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardLayout;
