import Dropdown from "components/dropdown";
import React, { useEffect, useState } from "react";
import ComparisonCharts from "./components/ComparisonCharts";
import { dateData, dummyChartData } from "./variables";
import { lineChartOptionsTotalSpent } from "variables/charts";
import { FiChevronDown } from "react-icons/fi";
import InputField from "components/fields/InputField";
import Datepicker from "components/datepicker";
import DatePicker from "react-flatpickr";
import RangePicker from "components/datepicker";
import { getMiddleware } from "Middleware";
import { MdOutlineRefresh } from "react-icons/md";

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
  const [chartData, setChartData] = useState([]);
  const [disable, setDisable] = useState(true);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const callbackForChartData = (res) => {
      setChartData(res.data.data.dummyChartData);
      setDates(res.data.data.dummyDateData);
    };
    getMiddleware("/data", callbackForChartData, true);
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      const value = chartData[0].skuName;
      handleSKUSelection({
        target: {
          value: value,
        },
      });
    }
  }, [chartData]);

 
  const chartOptions = {
    legend: {
      show: true,
      position: "top",
      labels: {
        colors: "#A3AED0",
      },
    },

    
    chart: {
      type: "line",

      toolbar: {
        show: true,
        style: {
          fontSize: "12px",
        },
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
      borderColor: "#A3AED0",
      strokeDashArray: 0,
      position: "back",
    },
    xaxis: {
      tickAmount: 4,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 10,
        offsetY: 0,
        autoskip: true,
        maxTicksLimit: 4,
      },
      labels: {
        show: true,
        rotate:0,
        format: "dd/MM",
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "datetime",
      range: undefined,
      categories: [],
    },

    yaxis: {
      // tickAmount:4,
      show: true,
      logBase: 10,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
    },
  };
  const chartOptions2 = {
    legend: {
      show: true,
      position: "top",
      labels: {
        colors: "#A3AED0",
      },
    },

    
    chart: {
      type: "line",

      toolbar: {
        show: true,
        style: {
          fontSize: "12px",
        },
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
      borderColor: "#A3AED0",
      strokeDashArray: 0,
      position: "back",
    },
    xaxis: {
      tickAmount: 4,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 10,
        offsetY: 0,
        autoskip: true,
        maxTicksLimit: 4,
      },
      labels: {
        show: true,
        rotate:0,
        format: "dd/MM",
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "datetime",
      range: undefined,
      categories: [],
    },

    yaxis: {
      // tickAmount:4,
      show: true,
      logBase: 10,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
    },
  };
  const chartOptions3 = {
    legend: {
      show: true,
      position: "top",
      labels: {
        colors: "#A3AED0",
      },
    },

    
    chart: {
      type: "line",

      toolbar: {
        show: true,
        style: {
          fontSize: "12px",
        },
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
      borderColor: "#A3AED0",
      strokeDashArray: 0,
      position: "back",
    },
    xaxis: {
      tickAmount: 4,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 10,
        offsetY: 0,
        autoskip: true,
        maxTicksLimit: 4,
      },
      labels: {
        show: true,
        rotate:0,
        format: "dd/MM",
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "datetime",
      range: undefined,
      categories: [],
    },

    yaxis: {
      // tickAmount:4,
      show: true,
      logBase: 10,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
    },
  };
  const chartOptions4 = {
    legend: {
      show: true,
      position: "top",
      labels: {
        colors: "#A3AED0",
      },
    },

    
    chart: {
      type: "line",

      toolbar: {
        show: true,
        style: {
          fontSize: "12px",
        },
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
      borderColor: "#A3AED0",
      strokeDashArray: 0,
      position: "back",
    },
    xaxis: {
      tickAmount: 4,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 10,
        offsetY: 0,
        autoskip: true,
        maxTicksLimit: 4,
      },
      labels: {
        show: true,
        rotate:0,
        format: "dd/MM",
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "datetime",
      range: undefined,
      categories: [],
    },

    yaxis: {
      // tickAmount:4,
      show: true,
      logBase: 10,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
    },
  };
  const chartOptions5 = {
    legend: {
      show: true,
      position: "top",
      labels: {
        colors: "#A3AED0",
      },
    },

    
    chart: {
      type: "line",

      toolbar: {
        show: true,
        style: {
          fontSize: "12px",
        },
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
      borderColor: "#A3AED0",
      strokeDashArray: 0,
      position: "back",
    },
    xaxis: {
      tickAmount: 4,

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "#78909C",
        height: 6,
        offsetX: 10,
        offsetY: 0,
        autoskip: true,
        maxTicksLimit: 4,
      },
      labels: {
        show: true,
        rotate:0,
        format: "dd/MM",
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "datetime",
      range: undefined,
      categories: [],
    },

    yaxis: {
      // tickAmount:4,
      show: true,
      logBase: 10,
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      forceNiceScale: false,
      floating: false,
      decimalsInFloat: undefined,
    },
  };

  // states
  const [SKUDropdownValue, setSKUDropdownValue] = useState("Select SKU");
  const [startDate, setStartDate] = useState("2023-03-02");
  const [endDate, setEndDate] = useState("2023-04-03");
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

  // 🔥🔥 function invoked by the sku dropdown
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
      let newOptions2 = { ...chartOptions2 };
      newOptions2.xaxis.categories = [...dates];
      if (i == 1) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        spendState.series = series;
        spendState.immutableSeries = series;
        spendState.options = newOptions2;
        setSpendState({ ...spendState });
      }
      let newOptions3 = { ...chartOptions3 };
      newOptions3.xaxis.categories = [...dates];
      if (i == 2) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        clicksState.series = series;
        clicksState.immutableSeries = series;
        clicksState.options = newOptions3;
        setClicksState({ ...clicksState });
      }
      let newOptions4 = { ...chartOptions4 };
      newOptions4.xaxis.categories = [...dates];
      if (i == 3) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        ordersState.series = series;
        ordersState.immutableSeries = series;
        ordersState.options = newOptions4;
        setOrdersState({ ...ordersState });
      }
      let newOptions5 = { ...chartOptions5 };
      newOptions5.xaxis.categories = [...dates];
      if (i == 4) {
        let series = [];
        newData.map((item, index) => {
          series.push(item.series);
        });
        salesState.series = series;
        salesState.immutableSeries = series;
        salesState.options = newOptions5;
        setSalesState({ ...salesState });
      }
    }

    handleEverything(platformArr, startDate, endDate);
    setDisable(false);
  };

  let getDates = (d1, d2) => {
    setEndDate(d2);
    setStartDate(d1);
    handleEverything(platformArr, d1, d2);
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
      handleEverything(newArr, startDate, endDate);
    } else {
      tempArr.push(value);
      setPlatformArr(tempArr);
      handleEverything(tempArr, startDate, endDate);
    }
  };

  const handleEverything = (arr, d1, d2) => {
    if (arr.length != 0) {
      var impressionsSeries = impressionsState.immutableSeries.filter(
        (item, index) => {
          return arr.includes(item.name);
        }
      );
      var spendSeries = spendState.immutableSeries.filter((item, index) => {
        return arr.includes(item.name);
      });
      var clicksSeries = clicksState.immutableSeries.filter((item, index) => {
        return arr.includes(item.name);
      });
      var ordersSeries = ordersState.immutableSeries.filter((item, index) => {
        return arr.includes(item.name);
      });
      var salesSeries = salesState.immutableSeries.filter((item, index) => {
        return arr.includes(item.name);
      });
    } else {
      impressionsSeries = impressionsState.immutableSeries;
      spendSeries = spendState.immutableSeries;
      clicksSeries = clicksState.immutableSeries;
      salesSeries = salesState.immutableSeries;
      ordersSeries = ordersState.immutableSeries;
    }

    const startDateIndex = dates.indexOf(d1);
    const endDateIndex = dates.indexOf(d2);

    let tempDates = [...dates];
    let filteredDateData = tempDates.slice(startDateIndex, endDateIndex + 1);

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

    let newOptions2 = { ...chartOptions2 };
    newOptions2.xaxis.categories = filteredDateData;
    let newOptions3 = { ...chartOptions3 };
    newOptions3.xaxis.categories = filteredDateData;
    let newOptions4 = { ...chartOptions4 };
    newOptions4.xaxis.categories = filteredDateData;
    let newOptions5 = { ...chartOptions5 };
    newOptions5.xaxis.categories = filteredDateData;

    impressionsState.series = newSeriesImpressions;
    impressionsState.options = newOptions;
    setImpressionsState({ ...impressionsState });

    spendState.series = newSeriesSpend;
    spendState.options = newOptions2;
    setSpendState({ ...spendState });

    clicksState.series = newSeriesClicks;
    clicksState.options = newOptions3;
    setClicksState({ ...clicksState });

    ordersState.series = newSeriesOrders;
    ordersState.options = { ...newOptions4 };
    setOrdersState({ ...ordersState });

    salesState.series = newSeriesSales;
    salesState.options = newOptions5;
    setSalesState({ ...salesState });
  };

  return (
    <div>
      <div className="mt-3 flex  justify-between  ">
        <div className="flex w-[440px] justify-between ">
          <Dropdown
            disabled={false}
            toastHeading={"Please select the platform first."}
            button={
              <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                {SKUDropdownValue} <FiChevronDown className="ml-2 text-xl" />
              </button>
            }
            children={
              <div className="flex h-fit w-44 flex-col justify-start rounded-xl bg-white bg-cover bg-no-repeat p-5 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
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
            disabled={disable}
            toastHeading={"Please select the SKU first."}
            button={
              <button className="flex h-[56px] min-w-[190px] items-center  justify-between justify-between rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                Select Platform{" "}
                <FiChevronDown read-only className="ml-2 text-xl" />
              </button>
            }
            children={
              <div className="flex h-fit w-44 flex-col justify-start rounded-xl bg-white bg-cover bg-no-repeat p-5 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                <div className="text-black hover:text-black  text-left  text-base font-medium  hover:font-bold">
                  <input
                    type="checkbox"
                    name="l"
                    id="google"
                    value={"google"}
                    className="mr-2"
                    onChange={(e) => handleCheckboxDropdown(e)}
                  />
                  <label htmlFor="google">Google</label>
                </div>
                <div className="text-black hover:text-black mt-3 text-left  text-base font-medium  hover:font-bold">
                  <input
                    type="checkbox"
                    name=""
                    id="amazon"
                    value={"amazon"}
                    className="mr-2"
                    onChange={(e) => handleCheckboxDropdown(e)}
                  />
                  <label htmlFor="amazon">Amazon</label>
                </div>
                <div className="text-black hover:text-black mt-3 text-left  text-base font-medium  hover:font-bold">
                  <input
                    type="checkbox"
                    name=""
                    id="facebook"
                    value={"facebook"}
                    className="mr-2"
                    onChange={(e) => handleCheckboxDropdown(e)}
                  />
                  <label htmlFor="facebook">Facebook</label>
                </div>
              </div>
            }
            classNames={"py-2 top-12 left-2  w-max"}
            animation="origin-top-left md:origin-top-left transition-all duration-300 ease-in-out"
          />
        </div>

        <div className=" flex h-[50px] w-fit gap-4">
          <button className="!linear z-[1] flex h-[56px] w-[56px] items-center justify-center rounded-lg bg-white p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
            <MdOutlineRefresh className="h-6 w-6" />
          </button>
          <RangePicker
            callback={getDates}
            customClass={"right-[10px]"}
            disabled={disable}
            toastHeading={"Please select the SKU first"}
          />
        </div>
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
