import React from "react";
import RangePicker from "components/datepicker";
import Card from "components/card";
import Dropdown from "components/dropdown";

export const ChangeDrivers = () => {
  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6 mt-5 py-5"}>
      <header className="relative flex items-start  justify-between">
        <div className="items-start text-xl font-bold text-navy-700 dark:text-white">
          Change Drivers
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
        {/* <Dropdown /> */}
      </div>
    </Card>
  );
};
