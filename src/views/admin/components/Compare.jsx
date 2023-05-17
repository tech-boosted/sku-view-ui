import Card from "components/card";
import React from "react";
import Comparison1 from "../comparison1";
import Comparison2 from "../comparison2";

const Compare = (props) => {
  let Platforms = props.platforms;
  return (
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
  );
};

export default Compare;
