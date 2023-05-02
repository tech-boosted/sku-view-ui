import React from "react";
import Flatpickr from "react-flatpickr";

function DatePicker({ callback, customClass }) {
  const options = {
    mode: "range",
    static: true,
    monthSelectorType: "static",
    dateFormat: "M j, Y",
    defaultDate: [new Date(), new Date().setDate(7)],
    prevArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
    },
    onChange: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
      let dateArr = dateStr.split("to");
      let d1 = new Date(dateArr[0]).toLocaleString().split(",")[0];
      let d2 = new Date(dateArr[1]).toLocaleString().split(",")[0];

      // callback(d1,d2);
    },
  };

  return (
    <div className={` ${customClass} relative`}>
      <Flatpickr
        className={` hover:text-slate-600 focus:border-slate-300 w-74 cursor-pointer rounded-md bg-red-200  px-4  py-2 font-medium`}
        options={options}
        value={"Custom"}
      />
      hwllo
      <div className="pointer-events-none absolute inset-0 right-auto flex items-center">
        <svg
          className="fill-current text-slate-500 ml-3 h-4 w-4"
          viewBox="0 0 16 16"
        >
          <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
        </svg>
      </div>
    </div>
  );
}

export default DatePicker;
