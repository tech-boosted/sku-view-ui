import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Comparison1 from "../comparison1";
import Comparison2 from "../comparison2";
import ChartsAndTable from "components/chartsAndSKUTable";
import avatar from "../../../assets/img/avatars/avatar10.png";
import { FcGoogle } from "react-icons/fc";
import { FaAmazon, FaFacebook } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
import InsightsTable from "components/insights/InsightsTable";
import Card from "components/card";

const PPCDashboard = () => {
  return (
    <div className="mt-5 flex w-full flex-col gap-5">
      <div className=" lg:!mb-0">
        <Tabs variant="soft-rounded" colorScheme="purple" className="w-f">
          <TabList className="flex w-full justify-between ">
            <div className="flex w-full justify-between">
              <div className="flex">
              <Tab>Overview</Tab>
                <Tab>Insights</Tab>
                <Tab>Comparison</Tab>
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
              <InsightsTable platforms={["amazon", "google"]} />
            </TabPanel>
            <TabPanel>
              <div>
                <Card extra={"mt-5 px-4 rounded-3xl"}>
                  <header className="relative mx-4 flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                      Channel - SKUs
                    </div>
                  </header>
                  <Comparison1 platforms={["amazon", "google"]} />
                </Card>
                <Card extra={"mt-5 px-4 rounded-3xl"}>
                  <header className="relative mx-4 flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                      SKU - Channels
                    </div>
                  </header>
                  <Comparison2 platforms={["amazon", "google"]} />
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default PPCDashboard;
