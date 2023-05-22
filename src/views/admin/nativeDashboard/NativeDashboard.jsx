import React from "react";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import { Link, Route, Routes } from "react-router-dom";
import Compare from "../components/Compare";

const NativeDashboard = () => {
  var Platforms = ["Amazon", "Google", "AddRoll", "Criteo"];
  return (
    <div className="mt-5 flex w-full flex-col gap-5">
      <div className="mb-5  flex w-full items-center gap-5  rounded-[20px] px-5">
        <Link
          to="/admin/native-dashboard/overview-native"
          state={{ from: "/admin/native-dashboard/overview" }}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200   "
        >
          Overview
        </Link>
        <Link
          to={"/admin/native-dashboard/insights-native"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Insights
        </Link>
        <Link
          to={"/admin/native-dashboard/compare-native"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Compare
        </Link>
      </div>
      <Routes>
        <Route
          path="/overview-native"
          element={<ChartsAndTable platfroms={[...Platforms]} />}
        />
        <Route
          path="/insights-native"
          element={<InsightsTable platforms={[...Platforms]} />}
        />
        <Route
          path="/compare-native"
          element={<Compare platforms={[...Platforms]} />}
        />
      </Routes>
    </div>
  );
};

export default NativeDashboard;
