import React from "react";
import BottomPerformer from "views/admin/default/components/BottomPerformer";
import TopPerformer from "views/admin/default/components/TopPerformer";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";

const Overview = () => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TopPerformer />
        <BottomPerformer />
      </div>
      {/* <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <WeeklyRevenue />
        </div>
      </div> */}
    </div>
  );
};

export default Overview;
