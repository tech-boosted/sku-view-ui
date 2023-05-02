import Dropdown from "components/dropdown";
import React, { useEffect, useState } from "react";
import ComparisonCharts from "./components/ComparisonCharts";
import { dateData, dummyChartData } from "./variables";
import { lineChartOptionsTotalSpent } from "variables/charts";
import { FiChevronDown } from "react-icons/fi";
import InputField from "components/fields/InputField";
import Datepicker from "components/datepicker";
import DatePicker from "react-flatpickr";
import { filter } from "@chakra-ui/system";

const Comparison2 = () => {
  // data
  const colors = [
    "#4318FF",
    "#6AD2FF",
    "#F8FA5F",
    "#5FFA93",
    "#FA5FD4",
    "FFFFFF",
  ];

  const chartData = dummyChartData;
  const dates = dateData;
  const chartOptions = lineChartOptionsTotalSpent;
  // chartOptions.xaxis.categories = dates;

  // states
  const [SKUDropdownValue, setSKUDropdownValue] = useState("Select SKU");
  const [startDate, setStartDate] = useState("2023-3-3");
  const [endDate, setEndDate] = useState("2023-3-12");

  const [platformArr, setPlatformArr] = useState([]);
  const [impressionsState, setImpressionsState] = useState({
    title: "Impressions",
    series: [],
    immutableSeries: [],
    options: {},
  });
  const [salesState, setSalesState] = useState({
    title: "Sales",
    series: [],
    immutableSeries: [],
    options: {},
  });
  const [spendState, setSpendState] = useState({
    title: "Spend",
    series: [],
    immutableSeries: [],
    options: {},
  });
  const [clicksState, setClicksState] = useState({
    title: "Clicks",
    series: [],
    immutableSeries: [],
    options: {},
  });
  const [ordersState, setOrdersState] = useState({
    title: "Orders",
    series: [],
    immutableSeries: [],
    options: {},
  });

  let getDates = (d1, d2) => {
    setEndDate(d1);
    setStartDate(d2);
    filterDate(d1, d2);
  };

  // function invoked by the sku dropdown
  const handleSKUSelection = (e) => {
    setSKUDropdownValue(e.target.value);

    // filtering the data from the dummyChartData for the selected SKU so now we got the data for selected SKU
    let temp = chartData.filter(function (item) {
      return item.skuName === e.target.value;
    });

    let newData;

    for (let i = 0; i < 5; i++) {
      // creating a new object which will have all the necessary filtered data
      newData = temp[0].platform.map((platformItem, index) => ({
        series: {
          name: platformItem.name,
          data: platformItem.data[i].data,
          color: colors[index],
        },
        immutableSeries: {
          name: platformItem.name,
          data: platformItem.data[i].data,
          color: colors[index],
        },
        options: chartOptions,
      }));
      // console.log(newData);
      let newOptions = { ...chartOptions };
      newOptions.xaxis.categories = [...dates];

      if (i == 0) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });

        impressionsState.series = series;
        impressionsState.immutableSeries = series;
        impressionsState.options = newOptions;

        setImpressionsState({ ...impressionsState });
      }
      if (i == 1) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        spendState.series = series;
        spendState.immutableSeries = series;
        spendState.options = newOptions;
        setSpendState({ ...spendState });
      }
      if (i == 2) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        clicksState.series = series;
        clicksState.immutableSeries = series;
        clicksState.options = newOptions;
        setClicksState({ ...clicksState });
      }
      if (i == 3) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        ordersState.series = series;
        ordersState.immutableSeries = series;
        ordersState.options = newOptions;
        setOrdersState({ ...ordersState });
      }
      if (i == 4) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        salesState.series = series;
        salesState.immutableSeries = series;
        salesState.options = newOptions;
        setSalesState({ ...salesState });
      }
    }

    handlePlatformSelection(platformArr);
  };

  // function invoked by the checkbox dropdown...
  const handleCheckboxDropdown = (e) => {
    const value = e.target.value;
    let tempArr = [...platformArr];
    const index = tempArr.indexOf(value);

    if (index !== -1) {
      let newArr = tempArr.filter(function (item, index) {
        return item !== value;
      });

      setPlatformArr(newArr);
      handlePlatformSelection(newArr);
      // platformAndDateFiltration(tempArr);
    } else {
      tempArr.push(value);
      setPlatformArr(tempArr);
      handlePlatformSelection(tempArr);
      // platformAndDateFiltration(tempArr);
    }
  };

  const handlePlatformSelection = (arr) => {
    let impressionsSeries = impressionsState.immutableSeries.filter(
      (item, index) => {
        return arr.includes(item.name);
      }
    );
    let spendSeries = spendState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });
    let clicksSeries = clicksState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });
    let ordersSeries = ordersState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });
    let salesSeries = salesState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });

    // setting the state for the charts...
    impressionsState.series = impressionsSeries;
    setImpressionsState({ ...impressionsState });

    spendState.series = spendSeries;
    setSpendState({ ...spendState });

    clicksState.series = clicksSeries;
    setClicksState({ ...clicksState });

    ordersState.series = ordersSeries;
    setOrdersState({ ...ordersState });

    salesState.series = salesSeries;
    setSalesState({ ...salesState });
  };

  const filterDate = (startDate, endDate) => {
    const startDateIndex = dates.indexOf(startDate);
    const endDateIndex = dates.indexOf(endDate);
    let arr = [...platformArr];

    let tempDates = [...dates];
    let filteredDateData = tempDates.slice(startDateIndex, endDateIndex + 1);
    console.log(filteredDateData);
    let impressionsSeries = [];
    let spendSeries = [];
    let salesSeries = [];
    let clicksSeries = [];
    let ordersSeries = [];

    impressionsSeries = impressionsState.immutableSeries.filter(
      (item, index) => {
        return arr.includes(item.name);
      }
    );
    spendSeries = spendState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });
    salesSeries = salesState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });
    clicksSeries = clicksState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });
    ordersSeries = ordersState.immutableSeries.filter((item, index) => {
      return arr.includes(item.name);
    });

    let newSeriesImpressions = [];
    let newSeriesSpend = [];
    let newSeriesOrders = [];
    let newSeriesSales = [];
    let newSeriesClicks = [];

    impressionsSeries.map((item, index) => {
      let data = item.data.slice(startDateIndex, endDateIndex + 1);
      let newItem = { ...item };
      newItem.data = data;
      newSeriesImpressions.push(newItem);
    });

    spendSeries.map((item, index) => {
      let data = item.data.slice(startDateIndex, endDateIndex + 1);
      let newItem = { ...item };
      newItem.data = [...data];
      newSeriesSpend.push(newItem);
    });
    clicksSeries.map((item, index) => {
      let data = item.data.slice(startDateIndex, endDateIndex + 1);
      let newItem = { ...item };
      newItem.data = [...data];
      newSeriesClicks.push(newItem);
    });
    ordersSeries.map((item, index) => {
      let data = item.data.slice(startDateIndex, endDateIndex + 1);
      let newItem = { ...item };
      newItem.data = [...data];
      newSeriesOrders.push(newItem);
    });
    salesSeries.map((item, index) => {
      let data = item.data.slice(startDateIndex, endDateIndex + 1);
      let newItem = { ...item };
      newItem.data = [...data];
      newSeriesSales.push(newItem);
    });

    let newOptions = { ...chartOptions };
    newOptions.xaxis.categories = filteredDateData;

    console.log(newOptions);

    impressionsState.series = newSeriesImpressions;
    impressionsState.options = newOptions;
    console.log(impressionsState);
    setImpressionsState({ ...impressionsState });

    spendState.series = newSeriesSpend;
    impressionsState.options = { ...newOptions };
    setSpendState({ ...spendState });

    salesState.series = newSeriesSales;
    salesState.options = { ...newOptions };
    setSalesState({ ...salesState });

    ordersState.series = newSeriesOrders;
    ordersState.options = { ...newOptions };
    setOrdersState({ ...ordersState });

    clicksState.series = newSeriesClicks;
    clicksState.options = { ...newOptions };
    setClicksState({ ...clicksState });
  };

  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 ">
        <Dropdown
          button={
            <button className="flex items-center rounded-xl bg-gray-200 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
              {SKUDropdownValue} <FiChevronDown className="ml-2 text-xl" />
            </button>
          }
          children={
            <div className="flex h-fit w-44 flex-col justify-start rounded-[20px] bg-gray-200 bg-cover bg-no-repeat p-5 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <button
                className=" text-black hover:text-black text-left  text-base font-medium  hover:font-bold "
                value={"Red T-shirt"}
                onClick={(e) => handleSKUSelection(e)}
              >
                Red T-shirt
              </button>
              <button
                className="text-black hover:text-black mt-3 text-left  text-base font-medium  hover:font-bold "
                value={"Black T-shirt"}
                onClick={(e) => handleSKUSelection(e)}
              >
                Black T-shirt
              </button>
              <button
                className="text-black hover:text-black mt-3 text-left  text-base font-medium  hover:font-bold "
                onClick={(e) => handleSKUSelection(e)}
                value={"Pink T-shirt"}
              >
                Pink T-shirt
              </button>
            </div>
          }
          classNames={"py-2 top-12 left-2  w-max"}
          animation="origin-top-left md:origin-top-left transition-all duration-300 ease-in-out"
        />
        <Dropdown
          button={
            <button className="flex items-center rounded-xl bg-gray-200 px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
              Select Platform <FiChevronDown className="ml-2 text-xl" />
            </button>
          }
          children={
            <div className="flex h-fit w-44 flex-col justify-start rounded-[20px] bg-gray-200 bg-cover bg-no-repeat p-5 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="text-black hover:text-black  text-left  text-base font-medium  hover:font-bold">
                <input
                  type="checkbox"
                  name="l"
                  id=""
                  value={"google"}
                  className="mr-2"
                  onChange={(e) => handleCheckboxDropdown(e)}
                />
                <label>Google</label>
              </div>
              <div className="text-black hover:text-black mt-3 text-left  text-base font-medium  hover:font-bold">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={"amazon"}
                  className="mr-2"
                  onChange={(e) => handleCheckboxDropdown(e)}
                />
                <label htmlFor="">Amazon</label>
              </div>
              <div className="text-black hover:text-black mt-3 text-left  text-base font-medium  hover:font-bold">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  value={"facebook"}
                  className="mr-2"
                  onChange={(e) => handleCheckboxDropdown(e)}
                />
                <label htmlFor="">Facebook</label>
              </div>
            </div>
          }
          classNames={"py-2 top-12 left-2  w-max"}
          animation="origin-top-left md:origin-top-left transition-all duration-300 ease-in-out"
        />
        {/* <div className="flex w-[500px] items-center">
          <input
            disabled={false}
            type={"Date"}
            // onChange={(e)=>{handleChange(e)}}
            placeholder={"Select Date"}
            name={"startDate"}
            className={` mt-2 flex h-12 w-[200px] items-center justify-center rounded-xl border bg-white/0 px-5 py-3  text-sm
          
        outline-none`}
          />
          <div className="mx-4">To</div>
          <input
            disabled={false}
            type={"Date"}
            // onChange={(e)=>{handleChange(e)}}
            placeholder={"Select Date"}
            name={"startDate"}
            className={`} mt-2 flex h-12 w-[200px] items-center justify-center rounded-xl border bg-white/0 p-3 text-sm
          
        outline-none`}
          />
        </div>

      <DatePicker customClass="" callback={getDates}/> */}

        <button
          onClick={() => {
            getDates("2023-3-2", "2023-3-9");
          }}
        >
          Click Me
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <ComparisonCharts
          title={impressionsState.title}
          options={impressionsState.options}
          series={impressionsState.series}
        />
        <ComparisonCharts
          title={spendState.title}
          options={spendState.options}
          series={spendState.series}
        />
        <ComparisonCharts
          title={clicksState.title}
          options={clicksState.options}
          series={clicksState.series}
        />
        <ComparisonCharts
          title={ordersState.title}
          options={ordersState.options}
          series={ordersState.series}
        />
        <ComparisonCharts
          title={salesState.title}
          options={salesState.options}
          series={salesState.series}
        />
      </div>
    </div>
  );
};

export default Comparison2;
