import React from "react";
import Dropdown from "../dropdown";
import { FiChevronDown } from "react-icons/fi";
import PieChart from "../charts/PieChart";
import { chartData } from "./chartData";
import { chartOptions } from "./chartOptions";
import Card from "../card";
import RangePicker from "../datepicker";

export interface SplitProps {
  name: string;
}

export const SplitBy = ({ name }: SplitProps) => {
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
      <div>
        <Dropdown
          button={
            <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
              Select SKU <FiChevronDown className="ml-2 text-xl" />
            </button>
          }
          children={<div></div>}
        />
      </div>
      <div className="flex w-[100%]">
        <div className="h-[400px] w-[100%]">
          <Dropdown
            button={
              <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                Select Metric <FiChevronDown className="ml-2 text-xl" />
              </button>
            }
            children={<div></div>}
          />
          <PieChart series={chartData} options={chartOptions} />
        </div>
        <div className="h-[400px] w-[100%]">
          <Dropdown
            button={
              <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                Select Metric <FiChevronDown className="ml-2 text-xl" />
              </button>
            }
            children={<div></div>}
          />
          <PieChart series={chartData} options={chartOptions} />
        </div>
      </div>
    </Card>
  );
};

export default SplitBy;
