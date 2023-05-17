import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Card from "components/card";
import Comparison1 from "../comparison1";
import Comparison2 from "../comparison2";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";

const DSPDashboard = () => {
  var Platforms = ["Amazon", "Google","Criteo"];
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
                  src="data:image/png;base64,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"
                  alt="google"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"
                  alt="amazon"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://media.licdn.com/dms/image/C4D0BAQFiWqZbbEmQZw/company-logo_200_200/0/1622720669686?e=2147483647&v=beta&t=-lq18RgFQkZiuhif5h6bM3TB0yIMqbzDLe8n8jN6eQI"
                  alt="criteo"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://wp.static-cdn-shsp.com/wp-content/uploads/2019/02/adroll-logo1.png"
                  alt="add roll"
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

export default DSPDashboard;
