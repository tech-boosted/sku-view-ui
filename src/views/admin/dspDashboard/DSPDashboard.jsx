import React from "react";
import ChartsAndTable from "components/chartsAndSKUTable";
import InsightsTable from "components/insights/InsightsTable";
import { Link, Route, Routes } from "react-router-dom";
import Compare from "../components/Compare";

const DSPDashboard = () => {
  var Platforms = ["Amazon", "Google", "Criteo", "Walmart"];
  return (
    <div className="mt-5 flex w-full flex-col gap-5">
      <div className="mb-5  flex w-full items-center gap-5  rounded-[20px] px-5">
        <Link
          to="/admin/dsp-dashboard/overview-dsp"
          state={{ from: "/admin/dsp-dashboard/overview" }}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200   "
        >
          Overview
        </Link>
        <Link
          to={"/admin/dsp-dashboard/insights-dsp"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Insights
        </Link>
        <Link
          to={"/admin/dsp-dashboard/compare-dsp"}
          className="rounded-[20px] bg-purple-100 px-5 py-2 text-base font-medium text-brand-600 transition duration-200  "
        >
          Compare
        </Link>
      </div>
      <Routes>
        <Route
          path="/overview-dsp"
          element={<ChartsAndTable platfroms={[...Platforms]} />}
        />
        <Route
          path="/insights-dsp"
          element={<InsightsTable platforms={[...Platforms]} />}
        />
        <Route
          path="/compare-dsp"
          element={<Compare platforms={[...Platforms]} />}
        />
      </Routes>
    </div>
  );
};

export default DSPDashboard;
