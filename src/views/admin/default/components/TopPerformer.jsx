import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "components/dropdown";
import { BsThreeDots } from "react-icons/bs";

const TopPerformer = () => {
  const [performerSkuData, setPerformerSkuData] = useState([]);
  
  let data = useSelector((state) => state.insightsData.data);

  useEffect(() => {
    if(data.length > 1){
      setPerformerSkuData(data);
    }
  }, [data]);


  let skuProperty = useSelector((state) => state.insightsData.skuColumns);

  let propertyArr = [...skuProperty];
  propertyArr.splice(1, 0, "Platform");

  const [open, setOpen] = useState(false);
  const [dropdownValue,setDropdownValue] = useState("Impression");
  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableDataRows, setTableDataRows] = useState([]);
  const [performerTableData, setPerformerTableData] = useState([]);
  const [index, setIndex] = useState(2);

  let impressions = [];
  let clicks = [];
  let spend = [];
  let sales = [];
  let orders = [];

  useEffect(() => {
    let temp = [
      {
        headers: propertyArr,
      },
      {
        dataRows: performerSkuData.map((item, index) => {
          let maxPlatformImpressions = item.platform.reduce((maxObj, obj) => {
            if (obj.data[0] > maxObj.data[0]) {
              return obj;
            } else {
              return maxObj;
            }
          });

          console.log(maxPlatformImpressions);
          let impressionsObj = {
            property: "impressions",
            skuName: item.name,
            ...maxPlatformImpressions,
          };
          impressions.push(impressionsObj);

          let maxPlatformClicks = item.platform.reduce((maxObj, obj) => {
            if (obj.data[1] > maxObj.data[1]) {
              return obj;
            } else {
              return maxObj;
            }
          });

          let clicksObj = {
            property: "Clicks",
            skuName: item.name,
            ...maxPlatformClicks,
          };
          clicks.push(clicksObj);

          let maxPlatformSpend = item.platform.reduce((maxObj, obj) => {
            if (obj.data[2] > maxObj.data[2]) {
              return obj;
            } else {
              return maxObj;
            }
          });

          let spendObj = {
            property: "Spend",
            skuName: item.name,
            ...maxPlatformSpend,
          };
          spend.push(spendObj);

          let maxPlatformSales = item.platform.reduce((maxObj, obj) => {
            if (obj.data[3] > maxObj.data[3]) {
              return obj;
            } else {
              return maxObj;
            }
          });

          let salesObj = {
            property: "Sales",
            skuName: item.name,
            ...maxPlatformSales,
          };
          sales.push(salesObj);

          let maxPlatformOrders = item.platform.reduce((maxObj, obj) => {
            if (obj.data[4] > maxObj.data[4]) {
              return obj;
            } else {
              return maxObj;
            }
          });

          let OrdersObj = {
            property: "Orders",
            skuName: item.name,
            ...maxPlatformOrders,
          };
          orders.push(OrdersObj);

          console.log(item);
          return {
            rowData: [
              item.name,
              item.platform[0].name,
              item.platform[0].data[index],
              // ...item.total,
            ],
          };
        }),
      },
    ];

    setPerformerTableData(temp);

    let newHeader = temp[0].headers.slice(0, 2);

    newHeader.push(temp[0].headers[index]);

    var newDataRows = [];

    impressions = impressions.slice(0, 5);
    sales = sales.slice(0, 5);
    orders = orders.slice(0, 5);
    spend = spend.slice(0, 5);
    clicks = clicks.slice(0, 5);

    if (index == 2) {
      console.log(impressions);
      impressions.map((item, index) => {
        let obj = { rowData: [item.skuName, item.name, item.data[0]] };
        newDataRows.push(obj);
      });
      console.log(newDataRows);
    }
    if (index == 3) {
      clicks.map((item, index) => {
        let obj = { rowData: [item.skuName, item.name, item.data[1]] };
        newDataRows.push(obj);
      });
    }
    if (index == 4) {
      spend.map((item, index) => {
        let obj = { rowData: [item.skuName, item.name, item.data[2]] };
        newDataRows.push(obj);
      });
    }
    if (index == 5) {
      sales.map((item, index) => {
        let obj = { rowData: [item.skuName, item.name, item.data[3]] };
        newDataRows.push(obj);
      });
    }
    if (index == 6) {
      orders.map((item, index) => {
        let obj = { rowData: [item.skuName, item.name, item.data[4]] };
        newDataRows.push(obj);
      });
    }

    // 🔥 filtering for sorting order
    newDataRows.sort((a, b) => b.rowData[2] - a.rowData[2]);

    // 🔥 for showing only top and bottom 5 performers only
    newDataRows = newDataRows.slice(0, 5);

    // 🔥 state which were passed to generic table...
    setTableHeaders(newHeader);
    setTableDataRows(newDataRows);
  }, [performerSkuData,setPerformerSkuData,index, setIndex]);

  const handlePropertySelection = (value) => {
    let indexOfProperty = performerTableData[0].headers.indexOf(value);
    setDropdownValue(value);
    setIndex(indexOfProperty);
  };

  return (
    <Card extra={"w-full h-full sm:overflow-auto px-6"}>
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Top Performers
        </div>

        <Dropdown
          disabled={false}
          button={
            <button
              onClick={() => setOpen(!open)}
              open={open}
              className={`linear flex items-center justify-center 
              rounded-lg bg-lightPrimary p-2 text-xl font-bold text-brand-500 transition duration-200
          hover:cursor-pointer hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10`}
            >
             {dropdownValue}
            </button>
          }
          animation={"origin-top-right transition-all duration-300 ease-in-out"}
          classNames={` top-[48px] right-0 w-max`}
          children={
            <div className="z-50 w-max rounded-lg bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 text-gray-600 hover:font-medium">
                <button onClick={() => handlePropertySelection("Impressions")}>
                  Impressions
                </button>
              </p>
              <p className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 text-gray-600 hover:font-medium">
                <button onClick={() => handlePropertySelection("Spend")}>
                  Spend
                </button>
              </p>
              <p className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 text-gray-600 hover:font-medium">
                <button onClick={() => handlePropertySelection("Clicks")}>
                  Clicks
                </button>
              </p>
              <p className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 text-gray-600 hover:font-medium">
                <button onClick={() => handlePropertySelection("Orders")}>
                  Orders
                </button>
              </p>
              <p className=" hover:text-black flex cursor-pointer items-center gap-2 py-2 px-3 text-gray-600 hover:font-medium">
                <button onClick={() => handlePropertySelection("Sales")}>
                  Sales
                </button>
              </p>
            </div>
          }
        />
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {tableHeaders.map((item, index) => (
                <th
                  className="w-[33%] border-b border-gray-200 pb-[10px] text-start dark:!border-navy-700"
                  key={index}
                >
                  <div className="text-xs font-bold uppercase tracking-wide text-gray-600 lg:text-xs">
                    {item}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableDataRows.map((row, index) => (
              <tr key={index}>
                {row.rowData.map((colData, index) => (
                  <td
                    className="w-[33%] pt-[14px] pb-[16px] sm:text-[14px]"
                    key={index}
                  >
                    <p className="text-sm font-bold text-navy-700 dark:text-white">
                      {colData}
                    </p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
    </Card>
  );
};
export default TopPerformer;
