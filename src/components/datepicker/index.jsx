import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // t
import { addDays } from "date-fns";
import format from "date-fns/format";
import { useToast } from "@chakra-ui/react";

function RangePicker({ callback, customClass, disabled, toastHeading }) {
  const toast = useToast();

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [open, setOpen] = useState(false);

  const handleChange = (item) => {
    setRange([item.selection]);

    if (
      format(item.selection.startDate, "yyyy-MM-dd") !=
      format(item.selection.endDate, "yyyy-MM-dd")
    ) {
      callback(
        format(item.selection.startDate, "yyyy-MM-dd"),
        format(item.selection.endDate, "yyyy-MM-dd")
      );
      setOpen(false);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      setOpen((open) => !open);
    } else {
      toast({
        title: `${toastHeading}`,
        status: "warning",
        duration: 5000,
        position: "top-right",
        variant: "subtle",
        isClosable: true,
      });
    }
  };

  return (
    <div className="z-50">
      <button
        className=" relative flex h-[56px] items-center rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30"
        data-ripple-light
        onClick={() => handleClick()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          id="calendar"
          className="mr-2 h-[26px] dark:text-black "
          fill="currentColor"
        >
          <path d="M5 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zM11 4.5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5z"></path>
          <path d="M13 14.5H3c-.827 0-1.5-.673-1.5-1.5V4c0-.827.673-1.5 1.5-1.5h10c.827 0 1.5.673 1.5 1.5v9c0 .827-.673 1.5-1.5 1.5zM3 3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H3z"></path>
          <path d="M14 6.5H2a.5.5 0 0 1 0-1h12a.5.5 0 0 1 0 1zM5.5 7.5h1v1h-1zM7.5 7.5h1v1h-1zM9.5 7.5h1v1h-1zM11.5 7.5h1v1h-1zM3.5 9.5h1v1h-1zM5.5 9.5h1v1h-1zM7.5 9.5h1v1h-1zM9.5 9.5h1v1h-1zM11.5 9.5h1v1h-1zM3.5 11.5h1v1h-1zM5.5 11.5h1v1h-1zM7.5 11.5h1v1h-1z"></path>
        </svg>
        {format(range[0].startDate, "MMM dd, yyyy")} {" - "}
        {format(range[0].endDate, "MMM dd, yyyy")}
      </button>

      <div className="z-50">
        {open && (
          <DateRangePicker
            onChange={(item) => handleChange(item)}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className={`calendarElement absolute ${customClass} z-50 rounded  dark:text-black `}
          />
        )}
      </div>
    </div>
  );
}

export default RangePicker;
