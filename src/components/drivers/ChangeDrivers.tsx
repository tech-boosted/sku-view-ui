import React, { useState } from "react";
import RangePicker from "../datepicker";
import Card from "../card";
import Dropdown from "../dropdown";
import { FiChevronDown } from "react-icons/fi";
import BarChart from "../charts/BarChart";
import { chartOptions } from "./chartOptions";

export interface ChangeDriversProps {
  title: string;
  keyname: string;
  data?: [];
}

export const ChangeDrivers = ({ title, keyname, data }: ChangeDriversProps) => {
  const [metric, setMetric] = useState("Sales");
  const handleMetricSelection = (selectedMetric: string) => {
    console.log(selectedMetric);
    setMetric(selectedMetric);
  };

  console.log(keyname);

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6 mt-5 py-5 "}>
      <header className="relative flex items-start  justify-between">
        <div className="items-start text-xl font-bold text-navy-700 dark:text-white">
          Change Drivers - {title}
        </div>
        <div>
          <RangePicker
            callback={() => {}}
            customClass={"right-[10px] dark:bg-white/10 "}
            disabled={false}
            toastHeading={""}
          />{" "}
        </div>
      </header>
      <div>
        <Dropdown
          button={
            <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
              {metric} <FiChevronDown className="ml-2 text-xl" />
            </button>
          }
          classNames={` top-[48px] w-[180px] `}
          children={
            <div className="z-50 w-[100%] rounded-lg bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p
                className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                onClick={() => handleMetricSelection("Impressions")}
              >
                Impressions
              </p>
              <p
                className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                onClick={() => handleMetricSelection("Spend")}
              >
                Spend
              </p>
              <p
                className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                onClick={() => handleMetricSelection("Clicks")}
              >
                Clicks
              </p>
              <p
                className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                onClick={() => handleMetricSelection("Orders")}
              >
                Orders
              </p>
              <p
                className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                onClick={() => handleMetricSelection("Sales")}
              >
                Sales
              </p>
            </div>
          }
        />
      </div>
      <div className="h-[80vh]">
        <BarChart chartData={data} chartOptions={chartOptions} />
      </div>
    </Card>
  );
};
