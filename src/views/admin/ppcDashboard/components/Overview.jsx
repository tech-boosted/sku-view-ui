import ChartsAndTable from "components/chartsAndSKUTable";
import React from "react";

const Overview = () => {
  let Platforms = ["Amazon", "Google", "Ebay", "Walmart"];
  return (
    <div>
      <ChartsAndTable platfroms={[...Platforms]} />
    </div>
  );
};

export default Overview;
