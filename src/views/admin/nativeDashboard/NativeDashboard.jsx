import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Comparison1 from "../comparison1";
import Comparison2 from "../comparison2";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import Card from "components/card";

const NativeDashboard = () => {
  var Platforms = ["Amazon", "Google","AddRoll","Criteo"];
  return (
    <div className="mt-5 flex w-full flex-col gap-5">
      <div className=" lg:!mb-0">
        <Tabs variant="soft-rounded" colorScheme="purple" className="w-f">
          <TabList className="flex w-full justify-between ">
            <div className="flex w-full justify-between">
              <div className="flex">
              <Tab>Overview</Tab>
                <Tab>Insights</Tab>
                <Tab>Compare</Tab>
              </div>
              {/* <div className="flex gap-4">
                <img
                  src="https://www.exchange4media.com/news-photo/106897-inmobilogo11.png"
                  alt="inmobi"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://play-lh.googleusercontent.com/Hk0WHvRGxSS_PPQUSuR06P74hZsr-j8xe1_UMAy3s8sNXQJRvkd8R4vGytSe9erZBLv6"
                  alt="taboola"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://wp.static-cdn-shsp.com/wp-content/uploads/2019/02/adroll-logo1.png"
                  alt="add roll"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="outbrain"
                  className="h-[40px] rounded-[50px]"
                />
              </div> */}
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
                <Card extra={"mt-3 px-4 rounded-3xl"}>
                  <header className="relative mx-4 flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                      Channel - SKUs
                    </div>
                  </header>
                  <Comparison1 platforms={Platforms} />
                </Card>
                <Card extra={"mt-5 px-4 rounded-3xl"}>
                  <header className="relative mx-4 flex items-center justify-between pt-4">
                    <div className="text-xl font-bold text-navy-700 dark:text-white">
                      SKU - Channels
                    </div>
                  </header>
                  <Comparison2 platforms={Platforms} />
                </Card>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default NativeDashboard;
