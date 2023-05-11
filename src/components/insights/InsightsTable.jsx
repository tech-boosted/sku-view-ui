import Card from "components/card";
import RangePicker from "components/datepicker";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTable } from "react-table";

const InsightsTable = (props) => {
  let insightsDataFromStore = useSelector(
    (state) => state.appData.insightsData
  );
  let platformsFromProps = props.platforms;

  const [tableData, setTableData] = useState(insightsDataFromStore);
  useEffect(() => {
    if (insightsDataFromStore != undefined) {
      let temp = insightsDataFromStore.filter((item) => {
        return platformsFromProps.includes(item.platform);
      });
      console.log(temp);
      setTableData(temp);
    }
  }, []);

  console.log(tableData);
  // code for react tables

  const data = useMemo(() => [...tableData], [tableData]);

  const columns = useMemo(
    () =>
      tableData[0]
        ? Object.keys(tableData[0])
            .filter((key) => key !== "data" && key !== "property")
            .map((key) => {
              return {
                Header: key,
                accessor: key,
              };
            })
        : [],
    [tableData]
  );

  const tableInstance = useTable({ columns: columns, data: data }); // columns and data
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <div className="mt-5">
        <RangePicker />
      </div>
      <Card extra={"w-full mt-[20px] h-full rounded-3xl  sm:overflow-auto "}>
        <header className="relative mx-6  flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Business Insights
          </div>
        </header>
        <div className="mx-6 mt-8 overflow-x-scroll xl:overflow-x-hidden">
          <table {...getTableProps()} className="w-full">
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) => (
                    <th
                      className="border-b border-gray-200  pb-[10px] text-start dark:!border-navy-700"
                      {...column.getHeaderProps()}
                    >
                      <div className="text-xs font-bold uppercase tracking-wide text-gray-600 lg:text-xs">
                        {column.render("Header")}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className=" pt-[14px] pb-[16px] sm:text-[14px]"
                          {...cell.getCellProps()}
                        >
                          <div className="text-sm font-bold text-navy-700 dark:text-white"></div>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default InsightsTable;
