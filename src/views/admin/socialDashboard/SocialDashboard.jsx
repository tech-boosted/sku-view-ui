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

const SocialDashboard = () => {
  var Platforms = ["Facebook","Instagram","Tiktok"];
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
              <div className="flex gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="facebook"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="data:image/jpeg;base64,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frBDSmMfufk92k/L3ruAAirgEAARAAEQABEAARDm6V0arlvlkrIrY+VcjOkDXLE2VpY8XBWTHuY7lNzqFzwzi2pJprhTCqJbiMNCxdss+R8a6zn26Ka+a01yPYygnwqRh6HSHnsVkytBHSyFcWNR9qo6P4DNfovqyZlYSfevyEX1OTqnYVmahuteBVHy6jp/gku9fkMfgku9fkPRRv6p2FY+sDWuRKo0zqO1LBT7x+Q0zwE+8fkHqsnVOwrc2obrXDsqPLZWd+zR1ng35GeazRd3gp+ax6vIPZOwqUypZrG0KPWVnlsgSGeiL/BWeazzT0LiPAWeazNsUnVOwqbHUs6w2hR2yB5bYEjs0Hif2e3zJHnermLlwYezrSj62iVFE+/7TsKmMq4gLl7doUasgaewuTUYxcpN72KinJtvgSS4WTnB6hYibTunXTHjS7efkWz6yYaE1dw2E21Qzsayd1mUrHzJ8EVzLIt4GuAuVpqMdp4W9A8t2oZveeF1wtR9T1hksRiEne12kNjVKe3z/UTcAkk3XH1VVLUyGSU3O4ah2IADxR0AARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEQABEAARAAEX/9k="
                  alt="insta"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="https://w7.pngwing.com/pngs/959/454/png-transparent-tiktok-logo-thumbnail.png"
                  alt="tiktok"
                  className="h-[40px] rounded-[50px]"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="tiktok"
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

export default SocialDashboard;
