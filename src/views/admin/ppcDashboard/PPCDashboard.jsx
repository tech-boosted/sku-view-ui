import React from "react";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import Compare from "../components/Compare";

const PPCDashboard = () => {
  let Platforms = ["Amazon", "Google", "Ebay", "Walmart"];

  return (
    <div className="mt-5 flex w-full flex-col ">
      <div className="mb-5  flex w-full items-center gap-5  rounded-[20px] px-5">
        <Link
          to={"/admin/PPC-dashboard/overview"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200   "
        >
          Overview
        </Link>
        <Link
          to={"/admin/PPC-dashboard/insights"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Insights
        </Link>
        <Link
          to={"/admin/PPC-dashboard/compare"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Compare
        </Link>
      </div>
      <Routes>
        <Route
          path="/overview"
          element={<ChartsAndTable platfroms={[...Platforms]} />}
        />
        <Route
          path="/insights"
          element={<InsightsTable platforms={[...Platforms]} />}
        />
        <Route
          path="/compare"
          element={<Compare platforms={[...Platforms]} />}
        />
      </Routes>
    </div>
  );
};

export default PPCDashboard;
