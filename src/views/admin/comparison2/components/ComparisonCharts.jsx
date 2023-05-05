import Card from "components/card";
import LineChart from "components/charts/LineChart";
import React from "react";
import { MdBarChart, MdZoomIn } from "react-icons/md";
import { lineChartDataTotalSpent } from "variables/charts";
import { lineChartOptionsTotalSpent } from "variables/charts";

const ComparisonCharts = (props) => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-4 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-xl font-bold text-navy-700 dark:text-white">
          {props.title}
        </h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <LineChart
            options={props.options}
            series={props.series}
          />
        </div>
      </div>
    </Card>
  );
};

export default ComparisonCharts;
