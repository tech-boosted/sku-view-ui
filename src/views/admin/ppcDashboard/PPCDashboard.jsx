import React from "react";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import Compare from "../components/Compare";

const PPCDashboard = () => {
  let Platforms = ["Amazon", "Google", "Ebay", "Walmart"];

  return (
    <div className="mt-5 flex w-full flex-col ">
      <div className="mb-5  flex w-full items-center gap-5  rounded-[20px] px-5">
        <Link
          to={"/admin/PPC-dashboard/overview"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200   "
        >
          Overview
        </Link>
        <Link
          to={"/admin/PPC-dashboard/insights"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Insights
        </Link>
        <Link
          to={"/admin/PPC-dashboard/compare"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Compare
        </Link>
      </div>
      <Routes>
        <Route
          path="/overview"
          element={<ChartsAndTable platfroms={[...Platforms]} />}
        />
        <Route
          path="/insights"
          element={<InsightsTable platforms={[...Platforms]} />}
        />
        <Route
          path="/compare"
          element={<Compare platforms={[...Platforms]} />}
        />
        {/* <Route
          path="/"
          element={<ChartsAndTable platfroms={[...Platforms]} />}
        /> */}
      </Routes>
    </div>
  );
};

export default PPCDashboard;

{
  /* <div className=" lg:!mb-0">
        <Tabs variant="soft-rounded" colorScheme="purple" className="w-f">
          <TabList className="flex w-full justify-between ">
            <div className="flex w-full justify-between">
              <div className="flex">
              <Tab>Overview</Tab>
                <Tab>Insights</Tab>
                <Tab>Compare</Tab>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt="google"
                  className="h-[40px]  rounded-[50px]"
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
                  alt="amazon"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888848.png"
                  alt="ebay"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://www.freepnglogos.com/uploads/walmart-logo-24.jpg"
                  alt="walmart"
                  className="h-[40px] rounded-[50px]"
                />
              </div>
            </div>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ChartsAndTable />
            </TabPanel>
            <TabPanel>
              <InsightsTable platforms={Platforms} />
            </TabPanel>
            <TabPanel>
              <div>
                <Card extra={"mt-5 px-4 rounded-3xl"}>
                  <header className="relative mx-4 flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                      SKU - Channels
                    </div>
                  </header>
                  <Comparison1 platforms={Platforms} />

                </Card>
                <Card extra={"mt-5 px-4 rounded-3xl"}>
                  <header className="relative mx-4 flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                      Channel - SKUs
                    </div>
                  </header>
                  <Comparison2 platforms={Platforms} />

                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div> */
}
