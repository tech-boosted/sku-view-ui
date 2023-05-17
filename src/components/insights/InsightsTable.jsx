import Card from "components/card";
import RangePicker from "components/datepicker";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const InsightsTable = (props) => {
  let platformPropsArr = [...props.platforms];

  const [startDate, setStartDate] = useState("2023-05-01");
  const [endDate, setEndDate] = useState("2023-05-08");
  const [impressionsTotal, setImpressionsTotal] = useState("");

  let chartDataFromStore = useSelector((state) => state.appData.chartData);
  let datesDataFromStore = useSelector((state) => state.appData.dateData);

  let impressionsTotalVar = 0;
  let clicksTotalVar = 0;
  let spendTotalVar = 0;
  let salesTotalVar = 0;
  let ordersTotalVar = 0;
  let filteredData = [];

  let ArrSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
    return sum;
  };

  let obj;

  if (chartDataFromStore !== undefined) {
    chartDataFromStore.map((item) => {
      obj = {};
      obj.platform = [];
      obj.impressions = [];
      obj.clicks = [];
      obj.orders = [];
      obj.sales = [];
      obj.spend = [];

      item.platform.map((platform) => {
        const startIndex = datesDataFromStore.indexOf(startDate);
        const endIndex = datesDataFromStore.indexOf(endDate);
        if (platformPropsArr.includes(platform.name)) {
          obj.platform.push(platform.name);
          platform.data.map((properties, i) => {
            obj.sku = item.skuName;
            if (i === 0) {
              let arr = properties.data.slice(startIndex, endIndex);
              let summedVal = ArrSum(arr);
              obj.impressions.push(summedVal);
            }
            if (i === 1) {
              let arr = properties.data.slice(startIndex, endIndex);
              let summedVal = ArrSum(arr);
              obj.spend.push(summedVal);
            }
            if (i === 2) {
              let arr = properties.data.slice(startIndex, endIndex);
              let summedVal = ArrSum(arr);
              obj.clicks.push(summedVal);
            }
            if (i === 3) {
              let arr = properties.data.slice(startIndex, endIndex);
              let summedVal = ArrSum(arr);
              obj.orders.push(summedVal);
            }
            if (i === 4) {
              let arr = properties.data.slice(startIndex, endIndex);
              let summedVal = ArrSum(arr);
              obj.sales.push(summedVal);
            }
          });
        }
      });

      filteredData.push(obj);
    });
  }
  let TableData = [...filteredData];

  if (TableData !== undefined) {
    console.log(TableData);
    TableData.map((item) => {
      console.log(item);
      console.log(item.platform);
    });
  }
  let renderData = () => {
    let result = [];

    TableData.map((item) => {
      for (let i = 0; i < item.platform.length; i++) {
        impressionsTotalVar += item.impressions[i];
        clicksTotalVar += item.clicks[i];
        spendTotalVar += item.spend[i];
        salesTotalVar += item.sales[i];
        ordersTotalVar += item.orders[i];

        if (i == 0) {
          result.push(
            <tr className="">
              <td
                className=" pb-[16px] pt-[14px] text-center dark:!border-navy-700"
                rowSpan={item.platform.length + 2}
              >
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.sku}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-start dark:!border-navy-700">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.platform[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.impressions[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.clicks[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.orders[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.sales[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.spend[i]}
                </p>
              </td>
            </tr>
          );
        } else {
          let extraClass = "";
          if (i === item.platform.length - 1) {
            extraClass = "border-b border-b border-gray-200";
          }

          result.push(
            <tr className={extraClass}>
              <td className=" pb-[16px] pt-[14px] text-start dark:!border-navy-700">
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  {item.platform[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.impressions[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.clicks[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.orders[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.sales[i]}
                </p>
              </td>
              <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
                <p className="text-sm  text-navy-700 dark:text-white">
                  {item.spend[i]}
                </p>
              </td>
            </tr>
          );
        }
      }

      result.push(
        <>
          <tr className={""}>
            <td className=" pb-[16px] pt-[14px] text-start dark:!border-navy-700 ">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {"Total"}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {impressionsTotalVar}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {clicksTotalVar}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {ordersTotalVar}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {salesTotalVar}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {spendTotalVar}
              </p>
            </td>
          </tr>
          <tr className={"border-b border-b border-gray-200 "}>
            <td className=" pb-[16px] pt-[14px] text-start dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {"Average"}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {parseFloat(impressionsTotalVar / item.platform.length).toFixed(
                  2
                )}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {parseFloat(clicksTotalVar / item.platform.length).toFixed(2)}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {parseFloat(ordersTotalVar / item.platform.length).toFixed(2)}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {parseFloat(salesTotalVar / item.platform.length).toFixed(2)}
              </p>
            </td>
            <td className=" pb-[16px] pt-[14px] text-end dark:!border-navy-700">
              <p className="text-sm font-bold text-navy-700 dark:text-white">
                {parseFloat(spendTotalVar / item.platform.length).toFixed(2)}
              </p>
            </td>
          </tr>
        </>
      );

      impressionsTotalVar = 0;
    });

    return result;
  };

  let getDates = (d1, d2) => {
    setStartDate(d1);
    setEndDate(d2);
  };

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6 mt-5 py-5"}>
      <header className="relative flex items-center justify-between items-start">
        <div className="text-xl font-bold text-navy-700 dark:text-white items-start">
          Business Insights
        </div>
        <div>
          <RangePicker callback={getDates} customClass={"right-[10px]"} />
        </div>
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="min-w-full ">
          <thead className="">
            <tr className="border-b border-gray-200 pb-[10px]">
              <th className=" border-b border-gray-200 pb-[10px] w-[28%] text-center dark:!border-navy-700">
                <div className="text-xs font-bold uppercase   text-gray-600 lg:text-xs">
                  SKU
                </div>
              </th>
              <th className=" border-b border-gray-200 w-[12%] pb-[10px] text-start dark:!border-navy-700">
                <div className="text-xs font-bold uppercase  text-gray-600 lg:text-xs">
                  Platform
                </div>
              </th>
              <th className=" border-b border-gray-200 w-[12%] pb-[10px] text-end dark:!border-navy-700">
                <div className="text-xs font-bold uppercase  text-gray-600 lg:text-xs">
                  Impressions
                </div>
              </th>
              <th className=" border-b border-gray-200 w-[12%] pb-[10px] text-end dark:!border-navy-700">
                <div className="text-xs font-bold uppercase  text-gray-600 lg:text-xs">
                  Clicks
                </div>
              </th>
              <th className=" border-b border-gray-200 w-[12%] pb-[10px] text-end dark:!border-navy-700">
                <div className="text-xs font-bold uppercase  text-gray-600 lg:text-xs">
                  Orders
                </div>
              </th>
              <th className=" border-b border-gray-200 w-[12%] pb-[10px] text-end dark:!border-navy-700">
                <div className="text-xs font-bold uppercase  text-gray-600 lg:text-xs">
                  Sales
                </div>
              </th>
              <th className=" border-b border-gray-200 w-[12%] pb-[10px] text-end dark:!border-navy-700">
                <div className="text-xs font-bold uppercase tracking-wide text-gray-600 lg:text-xs">
                  Spend
                </div>
              </th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </table>
      </div>
    </Card>
  );
};

export default InsightsTable;
