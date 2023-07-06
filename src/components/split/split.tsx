import React, { useState } from "react";
import Dropdown from "../dropdown";
import { FiChevronDown } from "react-icons/fi";
import PieChart from "../charts/PieChart";
import { chartData, chartData2 } from "./chartData";
import { chartOptions } from "./chartOptions";
import Card from "../card";
import RangePicker from "../datepicker";

export interface SplitProps {
  name: string;
}

export const SplitBy = ({ name }: SplitProps) => {
  const [metricOne, setMetricOne] = useState("Sales");
  const [metricTwo, setMetricTwo] = useState("Spend");

  const handleMetricSelection = (type: string, value: string) => {
    if (type === "One") {
      setMetricOne(value);
    } else {
      setMetricTwo(value);
    }
  };
  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6 mt-5 py-5"}>
      <header className="relative flex items-start  justify-between">
        <div className="items-start text-xl font-bold text-navy-700 dark:text-white">
          Split by {name}
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
      <div className="mb-10">
        <Dropdown
          button={
            <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
              Select SKU <FiChevronDown className="ml-2 text-xl" />
            </button>
          }
          children={<div></div>}
        />
      </div>
      <div className="mb-10 flex w-[100%]">
        <div className="h-[400px] w-[100%]">
          <Dropdown
            button={
              <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                {metricOne} <FiChevronDown className="ml-2 text-xl" />
              </button>
            }
            classNames="top-[48px] w-[180px] "
            children={
              <div className="z-50 w-[100%] rounded-lg bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("One", "Impressions")}
                >
                  Impressions
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("One", "Spend")}
                >
                  Spend
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("One", "Clicks")}
                >
                  Clicks
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("One", "Orders")}
                >
                  Orders
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("One", "Sales")}
                >
                  Sales
                </p>
              </div>
            }
          />
          <PieChart series={chartData} options={chartOptions} />
        </div>
        <div className="h-[400px] w-[100%]">
          <Dropdown
            button={
              <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                {metricTwo} <FiChevronDown className="ml-2 text-xl" />
              </button>
            }
            classNames="top-[48px] w-[180px] "
            children={
              <div className="z-50 w-[100%] rounded-lg bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("Two", "Impressions")}
                >
                  Impressions
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("Two", "Spend")}
                >
                  Spend
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("Two", "Clicks")}
                >
                  Clicks
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("Two", "Orders")}
                >
                  Orders
                </p>
                <p
                  className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 hover:font-medium"
                  onClick={() => handleMetricSelection("Two", "Sales")}
                >
                  Sales
                </p>
              </div>
            }
          />
          <PieChart series={chartData2} options={chartOptions} />
        </div>
      </div>
    </Card>
  );
};

export default SplitBy;
