import Dropdown from "components/dropdown";
import React, { useEffect, useState } from "react";
import ComparisonCharts from "../comparison2/components/ComparisonCharts";
import { FiChevronDown } from "react-icons/fi";
import RangePicker from "components/datepicker";
import { MdOutlineRefresh } from "react-icons/md";
import {  useSelector } from "react-redux";

const Comparison1 = (props) => {
  // data
  const colors = [
    "#AA00FF",
    "#49219C",
    "#00AAFF",
    "#FAFA33",
    "#082063",
    "#AAFF01",
  ];

  const [chartData, setChartData] = useState([]);
  const [SKUList, setSKUList] = useState([]);
  const [dates, setDates] = useState([]);
  const [disable, setDisable] = useState(true);

  let platformArr = props.platforms;

  const saveDates = () => {
    const today = new Date();
    const onefourdaysAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const startDate = onefourdaysAgo.toISOString().split("T")[0];
    const endDate = sevenDaysAgo.toISOString().split("T")[0];

    setStartDate(startDate);
    setEndDate(endDate);
  };
  const chartDataFromStore = useSelector((state) => state.appData.chartData);
  const dateDataFromStore = useSelector((state) => state.appData.dateData);
  useEffect(() => {
    saveDates();
    if (chartDataFromStore !== undefined) {
      let allSkus = [];
      for (let i = 0; i < chartDataFromStore.length; i++) {
        allSkus.push(chartDataFromStore[i].skuName);
      }

      let rawData = chartDataFromStore;
      let data = [];

      rawData.forEach((item) => {
        let skuName = item.skuName;

        item.platform.forEach((platform) => {
          for (let i = 0; i < platformArr.length; i++) {
            if (platform.name === platformArr[i]) {
              let isPresent = data.some(
                (obj) => obj.platformName === platform.name
              );
              let obj = {
                platformName: platform.name,
                sku: [{ name: skuName, data: platform.data }],
              };
              if (isPresent) {
                data.forEach((element) => {
                  if (element.platformName === platform.name) {
                    let temparr = element.sku;
                    temparr.push(obj.sku[0]);
                    element.sku = temparr;
                  }
                });
              } else {
                data.push(obj);
              }
            }
          }
        });
      });

      setSKUList([...allSkus]);
      setChartData(data);
      setDates(dateDataFromStore);
    } else {
      alert("Wrong");
    }
  }, []);

  useEffect(() => {
    if (chartData.length > 0) {
      const value = chartData[0].platformName;
      handlePlatformSelection({
        target: {
          value: platformArr[0],
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
        rotate: 0,
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
        rotate: 0,
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
        rotate: 0,
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
        rotate: 0,
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
        rotate: 0,
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
  const [platformDropdownValue, setPlatformDropdownValue] =
    useState("Select Platform");
  const [startDate, setStartDate] = useState("2023-05-02");
  const [endDate, setEndDate] = useState("2023-04-18");
  const [SKUArr, setSKUArr] = useState([]);
  // chart states
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
  const handlePlatformSelection = (e) => {
    setPlatformDropdownValue(e.target.value);

    // filtering the data from the dummyChartData for the selected SKU so now we got the data for selected SKU
    let temp = chartData.filter(function (item) {
      return item.platformName === e.target.value;
    });
    let newData;

    for (let i = 0; i < 5; i++) {
      // creating a new object which will have all the necessary filtered data
      newData = temp[0].sku.map((skuItem, index) => ({
        series: {
          name: skuItem.name,
          data: skuItem.data[i].data,
          color: colors[index],
        },
        immutableSeries: {
          name: skuItem.name,
          data: skuItem.data[i].data,
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
      newOptions.xaxis.categories = [...dates];
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
      newOptions.xaxis.categories = [...dates];
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
      newOptions.xaxis.categories = [...dates];
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
      newOptions.xaxis.categories = [...dates];
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

    handleEverything(SKUArr, startDate, endDate);
    setDisable(false);
  };

  let getDates = (d1, d2) => {
    setStartDate(d1);
    setEndDate(d2);
    handleEverything(SKUArr, d1, d2);
  };

  // function invoked by the checkbox dropdown...

  const handleCheckboxDropdown = (e) => {
    const value = e.target.value;
    let tempArr = [...SKUArr];
    const index = tempArr.indexOf(value);

    if (index !== -1) {
      let newArr = tempArr.filter(function (item, index) {
        return item !== value;
      });

      setSKUArr(newArr);
      handleEverything(newArr, startDate, endDate);
    } else {
      tempArr.push(value);
      setSKUArr(tempArr);
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
      newItem.data = data;
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
            toastHeading={"Please select the SKU first"}
            button={
              <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                {platformDropdownValue}{" "}
                <FiChevronDown className="ml-2 text-xl" />
              </button>
            }
            children={
              <div className="flex h-fit w-44 flex-col justify-start rounded-xl bg-white bg-cover bg-no-repeat p-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                {platformArr.map((item, index) => (
                  <button
                    className="text-black hover:text-black cursor-pointer pt-2 text-left text-base font-medium  hover:font-bold "
                    value={item}
                    onClick={(e) => handlePlatformSelection(e)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            }
            classNames={"py-2 top-12 left-2  w-max"}
            animation="origin-top-left md:origin-top-left transition-all duration-300 ease-in-out"
          />
          <Dropdown
            disabled={disable}
            toastHeading={"Please select the platform first."}
            button={
              <button className="flex h-[56px] min-w-[190px] items-center justify-between rounded-xl bg-white px-5 py-3 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30">
                Select SKU <FiChevronDown className="ml-2 text-xl" />
              </button>
            }
            children={
              <div className="flex h-fit w-44 flex-col justify-start rounded-xl bg-white bg-cover bg-no-repeat p-5 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
                {SKUList.map((sku) => (
                  <div className="text-black hover:text-black flex cursor-pointer pt-2  text-left  text-base font-medium  hover:font-bold">
                    <input
                      type="checkbox"
                      name="l"
                      id={sku}
                      value={sku}
                      className="mr-2 cursor-pointer"
                      onChange={(e) => handleCheckboxDropdown(e)}
                    />
                    <label className="cursor-pointer" htmlFor={sku}>
                      {sku}
                    </label>
                  </div>
                ))}
                {/* <div className="text-black hover:text-black flex cursor-pointer pt-2  text-left  text-base font-medium  hover:font-bold">
                  <input
                    type="checkbox"
                    name="l"
                    id="Black T-shirt"
                    value={"Black T-shirt"}
                    className="mr-2 cursor-pointer"
                    onChange={(e) => handleCheckboxDropdown(e)}
                  />
                  <label className="cursor-pointer" htmlFor="Black T-shirt">
                    Black T-shirt
                  </label>
                </div>
                <div className="text-black hover:text-black flex cursor-pointer pt-2 text-left  text-base font-medium  hover:font-bold">
                  <input
                    type="checkbox"
                    name=""
                    id="Red T-shirt"
                    value={"Red T-shirt"}
                    className="mr-2 cursor-pointer"
                    onChange={(e) => handleCheckboxDropdown(e)}
                  />
                  <label className="cursor-pointer" htmlFor="Red T-shirt">
                    Red T-shirt
                  </label>
                </div>
                <div className="text-black hover:text-black flex cursor-pointer pt-2 text-left  text-base font-medium  hover:font-bold">
                  <input
                    type="checkbox"
                    name=""
                    id="Pink T-shirt"
                    value={"Pink T-shirt"}
                    className="mr-2 cursor-pointer"
                    onChange={(e) => handleCheckboxDropdown(e)}
                  />
                  <label className="cursor-pointer" htmlFor="Pink T-shirt">
                    Pink T-shirt
                  </label>
                </div> */}
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
            customClass={"right-[10px] dark:bg-white/10 "}
            disabled={disable}
            toastHeading={"Please select the platform first"}
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <ComparisonCharts
          title={salesState.title}
          options={salesState.options}
          series={salesState.series}
        />
        <ComparisonCharts
          title={spendState.title}
          options={spendState.options}
          series={spendState.series}
        />
        <ComparisonCharts
          title={impressionsState.title}
          options={impressionsState.options}
          series={impressionsState.series}
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
      </div>
    </div>
  );
};

export default Comparison1;
